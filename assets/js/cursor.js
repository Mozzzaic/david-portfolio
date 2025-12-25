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
    const hoverSelector = [
      // Base interactive elements
      'a', 'button', '[role="button"]',
      // Buttons
      '.btn', '.btn-primary', '.btn-secondary', '.btn--primary', '.btn--secondary',
      // Navigation
      '.nav-link', '.nav-drawer__link',
      // Cards & interactive elements (index.html)
      '.project-card', '.project-image', '.highlight-card', '.social-link',
      // Cards & interactive elements (web.html)
      '.card', '.hero-card', '.case', '.step', '.testimonial', '.who-item',
      '.about-card', '.showcase-item', '.contact-card', '.case-link', '.about-link',
      // Badges & tags
      '.badge', '.case-tag', '.card-tag',
      // FAQ
      'details', 'summary'
    ].join(', ');
    // Hero name a un blob plus petit pour ne pas déborder
    const heroNameSelector = '.hero__name';
    // Exclure les icônes sociales (sidebar + footer) et les badges du hero
    const excludeSelector = '.sidebar__icon, .contact__social a, .hero__badges .badge';

    document.addEventListener('mouseover', (e) => {
      const excluded = e.target.closest(excludeSelector);
      if (excluded) return;

      // Hero name: même blob que les autres
      const heroName = e.target.closest(heroNameSelector);
      if (heroName) {
        this.targetBlobSize = 80;
        return;
      }

      // Autres éléments: blob normal (80px)
      const target = e.target.closest(hoverSelector);
      if (target) {
        this.targetBlobSize = 80;
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(hoverSelector);
      const heroName = e.target.closest(heroNameSelector);
      if (target || heroName) {
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
    // Offset la boule devant le curseur basé sur la direction vers la souris
    const distance = Math.sqrt(dx * dx + dy * dy);
    const offsetAmount = Math.min(distance * 0.5, 80); // 50% de la distance, max 80px

    let offsetX = 0;
    let offsetY = 0;
    if (distance > 5) {
      // Normaliser la direction et appliquer l'offset
      offsetX = (dx / distance) * offsetAmount;
      offsetY = (dy / distance) * offsetAmount;
    }

    this.cursor.style.transform = `translateX(${this.cursorX + offsetX}px) translateY(${this.cursorY + offsetY}px)`;

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
