class Starfield {
  constructor() {
    this.canvas = document.getElementById('starfield-canvas');
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.animationId = null;
    this.isRunning = false;
    this.mouseX = 0;
    this.mouseY = 0;

    // Drift movement
    this.driftDirection = { x: 0, y: 0, z: 0 };
    this.targetDrift = { x: 0, y: 0, z: 0 };
    this.driftChangeInterval = 40000; // 40 secondes (x2)
    this.lastDriftChange = 0;
  }

  createCircleTexture(opacity = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(0.1, `rgba(255, 255, 255, ${opacity * 0.8})`);
    gradient.addColorStop(0.4, `rgba(200, 200, 255, ${opacity * 0.3})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }

  createVioletTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 1)');
    gradient.addColorStop(0.2, 'rgba(168, 85, 247, 0.6)');
    gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }

  init() {
    if (this.renderer) return;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 0;

    // Frustum pour culling des étoiles hors caméra
    this.frustum = new THREE.Frustum();
    this.cameraViewProjectionMatrix = new THREE.Matrix4();

    // Créer un champ d'étoiles ÉNORME pour pouvoir se déplacer dedans
    this.createStarField();

    // Mouse parallax (subtil)
    this.handleMouseMove = (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 0.02;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 0.02;
    };
    window.addEventListener('mousemove', this.handleMouseMove);

    // Resize
    this.handleResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', this.handleResize);

    // Premier drift
    this.setNewDriftDirection();
  }

  createStarField() {
    // Étoiles moyennes
    this.createStarLayer(700, 0.088, 50, 0.5);

    // Étoiles proches
    this.createStarLayer(1000, 0.132, 30, 0.7);

    // Étoiles semi-proches (entre proche et très proche)
    this.createStarLayer(300, 0.165, 22, 0.75);

    // Étoiles très proches (les plus grosses mais toujours petites)
    this.createStarLayer(200, 0.198, 15, 0.8);

    // Étoiles violettes accent
    this.createAccentStars(100);
  }

  createStarLayer(count, size, spread, opacity) {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribution dans un cube énorme
      positions[i * 3] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 2;
      sizes[i] = size;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: size,
      map: this.createCircleTexture(opacity),
      transparent: true,
      opacity: opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(geometry, material);
    stars.userData = {
      baseOpacity: opacity,
      baseSize: size,
      spread: spread,
      originalPositions: positions.slice()
    };
    this.scene.add(stars);
  }

  createAccentStars(count) {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const baseSize = 0.275;

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      sizes[i] = baseSize;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: baseSize,
      map: this.createVioletTexture(),
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(geometry, material);
    stars.userData = { baseOpacity: 0.7, baseSize: baseSize, isAccent: true, spread: 80 };
    this.scene.add(stars);
  }

  setNewDriftDirection() {
    // Directions possibles : combinaisons de x, y, z
    const directions = [
      { x: 1, y: 0, z: 0.5 },    // Droite + légèrement en avant
      { x: -1, y: 0, z: 0.5 },   // Gauche + légèrement en avant
      { x: 0, y: 1, z: 0.3 },    // Haut
      { x: 0, y: -1, z: 0.3 },   // Bas
      { x: 0.7, y: 0.7, z: 0.5 },  // Diagonale haut-droite
      { x: -0.7, y: 0.7, z: 0.5 }, // Diagonale haut-gauche
      { x: 0.7, y: -0.7, z: 0.5 }, // Diagonale bas-droite
      { x: -0.7, y: -0.7, z: 0.5 }, // Diagonale bas-gauche
      { x: 0, y: 0, z: 1 },      // Tout droit en avant
    ];

    // Choisir une direction différente de l'actuelle
    let newDir;
    do {
      newDir = directions[Math.floor(Math.random() * directions.length)];
    } while (newDir.x === this.targetDrift.x && newDir.y === this.targetDrift.y);

    this.targetDrift = {
      x: newDir.x * 0.008,  // Vitesse de drift réduite
      y: newDir.y * 0.008,
      z: newDir.z * 0.005
    };
  }

  wrapStars() {
    const camPos = this.camera.position;

    // Mettre à jour le frustum pour le culling
    this.camera.updateMatrixWorld();
    this.cameraViewProjectionMatrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse
    );
    this.frustum.setFromProjectionMatrix(this.cameraViewProjectionMatrix);

    // Direction vers laquelle la caméra regarde (en Z négatif par défaut)
    const camDir = new THREE.Vector3(0, 0, -1);
    camDir.applyQuaternion(this.camera.quaternion);

    this.scene.children.forEach(stars => {
      if (!stars.userData || !stars.geometry) return;

      const positions = stars.geometry.attributes.position.array;
      const sizes = stars.geometry.attributes.size?.array;
      const spread = stars.userData.spread || 50;
      const baseSize = stars.userData.baseSize || 0.1;
      const wrapDist = spread * 3;

      for (let i = 0; i < positions.length; i += 3) {
        const dx = positions[i] - camPos.x;
        const dy = positions[i + 1] - camPos.y;
        const dz = positions[i + 2] - camPos.z;

        // Vecteur vers l'étoile
        const toStar = new THREE.Vector3(dx, dy, dz);
        const dist = toStar.length();
        toStar.normalize();

        // Dot product pour savoir si l'étoile est devant ou derrière
        const dot = toStar.dot(camDir);

        // Masquer les étoiles derrière la caméra (dot < 0 = derrière)
        if (sizes) {
          if (dot < -0.2 || dist > spread * 2) {
            // Étoile derrière ou trop loin - masquer
            sizes[i / 3] = 0;
          } else {
            // Étoile visible - afficher
            sizes[i / 3] = baseSize;
          }
        }

        // Wrap seulement très loin de la caméra (hors vue)
        if (dx < -wrapDist) positions[i] += wrapDist * 2;
        else if (dx > wrapDist) positions[i] -= wrapDist * 2;

        if (dy < -wrapDist) positions[i + 1] += wrapDist * 2;
        else if (dy > wrapDist) positions[i + 1] -= wrapDist * 2;

        if (dz < -wrapDist) positions[i + 2] += wrapDist * 2;
        else if (dz > wrapDist) positions[i + 2] -= wrapDist * 2;
      }

      stars.geometry.attributes.position.needsUpdate = true;
      if (sizes) {
        stars.geometry.attributes.size.needsUpdate = true;
      }
    });
  }

  start() {
    if (this.isRunning) return;

    this.init();
    this.isRunning = true;
    this.canvas.style.opacity = '1';
    this.lastDriftChange = Date.now();

    const animate = () => {
      if (!this.isRunning) return;

      const now = Date.now();
      const time = now * 0.001;

      // Changer de direction toutes les 20 secondes
      if (now - this.lastDriftChange > this.driftChangeInterval) {
        this.setNewDriftDirection();
        this.lastDriftChange = now;
      }

      // Interpolation TRÈS lente vers la nouvelle direction (virage en ~15 sec)
      this.driftDirection.x += (this.targetDrift.x - this.driftDirection.x) * 0.0008;
      this.driftDirection.y += (this.targetDrift.y - this.driftDirection.y) * 0.0008;
      this.driftDirection.z += (this.targetDrift.z - this.driftDirection.z) * 0.0008;

      // Déplacer la caméra (on voyage dans l'espace!)
      this.camera.position.x += this.driftDirection.x;
      this.camera.position.y += this.driftDirection.y;
      this.camera.position.z += this.driftDirection.z;

      // Parallaxe souris désactivé
      // this.camera.rotation.y = this.mouseX;
      // this.camera.rotation.x = this.mouseY;

      // Wrap-around des étoiles pour un voyage infini
      this.wrapStars();

      // Scintillement subtil
      this.scene.children.forEach((stars, i) => {
        if (stars.userData && stars.material) {
          const twinkle = Math.sin(time * (1.5 + i * 0.3)) * 0.1;
          stars.material.opacity = Math.max(0.3, stars.userData.baseOpacity + twinkle);
        }
      });

      this.renderer.render(this.scene, this.camera);
      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }

  stop() {
    this.isRunning = false;
    this.canvas.style.opacity = '0';

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  setOpacity(opacity) {
    if (this.canvas) {
      this.canvas.style.opacity = String(opacity);
    }
  }

  destroy() {
    this.stop();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);

    if (this.renderer) {
      this.renderer.dispose();
      while(this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
      }
      this.renderer = null;
      this.scene = null;
      this.camera = null;
    }
  }
}

window.starfield = new Starfield();
