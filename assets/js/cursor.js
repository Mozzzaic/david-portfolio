class CustomCursor {
  constructor() {
    this.cursor = null;
    this.blob = null;

    // Positions
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.blobX = 0;
    this.blobY = 0;

    // === SPRING PHYSICS pour la grosse boule ===
    // Vélocité de la boule
    this.cursorVelX = 0;
    this.cursorVelY = 0;
    // Spring: plus bas = plus de délai pour rattraper
    this.spring = 0.0035;
    // Friction: contrôle l'inertie (plus haut = plus d'élan)
    this.friction = 0.93;

    // Velocity tracking pour l'effet pill du blob
    this.blobVelX = 0;
    this.blobVelY = 0;
    this.prevBlobX = 0;
    this.prevBlobY = 0;

    // Blob size
    this.blobSize = 0;
    this.targetBlobSize = 0;

    // Stretch/rotation pour l'effet pill
    this.stretch = 1;
    this.rotation = 0;

    // Expose position globally for particles
    window.customCursorPos = { x: 0, y: 0 };

    this.init();
  }

  init() {
    // Grosse boule glow
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);

    // Jelly blob inverseur (apparaît au hover)
    this.blob = document.createElement('div');
    this.blob.className = 'jelly-blob';
    document.body.appendChild(this.blob);

    // Mouse move
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Hover sur éléments interactifs - seulement le blob invert
    const hoverSelector = 'a, button, .project-card, .btn-primary, .btn-secondary, [role="button"], .nav-link, .social-link, .project-image, .hero__name, .highlight-card';

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(hoverSelector);
      if (target) {
        this.targetBlobSize = 80;
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(hoverSelector);
      if (target) {
        this.targetBlobSize = 0;
      }
    });

    // Cacher sur mobile/touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.cursor.style.display = 'none';
      this.blob.style.display = 'none';
      return;
    }

    // Garder le curseur original visible

    this.animate();
  }

  animate() {
    // === GROSSE BOULE - Spring Physics (effet élastique) ===
    // Distance vers la cible
    const dx = this.mouseX - this.cursorX;
    const dy = this.mouseY - this.cursorY;

    // Appliquer la force du ressort (accélération)
    this.cursorVelX += dx * this.spring;
    this.cursorVelY += dy * this.spring;

    // Appliquer la friction (décélération)
    this.cursorVelX *= this.friction;
    this.cursorVelY *= this.friction;

    // Mettre à jour la position
    this.cursorX += this.cursorVelX;
    this.cursorY += this.cursorVelY;

    // === BLOB - Spring Physics aussi ===
    const blobDx = this.mouseX - this.blobX;
    const blobDy = this.mouseY - this.blobY;

    // Spring plus faible pour le blob (encore plus de délai)
    this.blobVelX += blobDx * 0.003;
    this.blobVelY += blobDy * 0.003;
    this.blobVelX *= 0.90;
    this.blobVelY *= 0.90;

    this.blobX += this.blobVelX;
    this.blobY += this.blobVelY;

    // === CALCUL VELOCITY pour l'effet PILL ===
    const velocityX = this.blobX - this.prevBlobX;
    const velocityY = this.blobY - this.prevBlobY;
    this.prevBlobX = this.blobX;
    this.prevBlobY = this.blobY;

    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

    // === EFFET PILL/MORPH ===
    const targetStretch = 1 + Math.min(speed * 0.025, 0.5);
    this.stretch += (targetStretch - this.stretch) * 0.15;

    if (speed > 0.5) {
      const targetRotation = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
      let rotationDiff = targetRotation - this.rotation;
      if (rotationDiff > 180) rotationDiff -= 360;
      if (rotationDiff < -180) rotationDiff += 360;
      this.rotation += rotationDiff * 0.12;
    }

    if (speed < 0.5) {
      this.stretch += (1 - this.stretch) * 0.08;
    }

    // === TAILLE du blob (smooth) ===
    this.blobSize += (this.targetBlobSize - this.blobSize) * 0.1;

    // === APPLY TRANSFORMS ===
    this.cursor.style.transform = `translateX(${this.cursorX}px) translateY(${this.cursorY}px)`;

    const scaleX = this.stretch;
    const scaleY = 1 / Math.sqrt(this.stretch);

    this.blob.style.transform = `
      translate(-50%, -50%)
      translate(${this.blobX}px, ${this.blobY}px)
      rotate(${this.rotation}deg)
      scale(${scaleX}, ${scaleY})
    `;
    this.blob.style.width = `${this.blobSize}px`;
    this.blob.style.height = `${this.blobSize}px`;

    // Cacher complètement le blob quand taille < 5px
    this.blob.style.opacity = this.blobSize < 5 ? '0' : '1';

    // Update global position for particles attraction
    window.customCursorPos.x = this.cursorX;
    window.customCursorPos.y = this.cursorY;

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
});
