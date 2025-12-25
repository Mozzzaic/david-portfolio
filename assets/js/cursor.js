class CustomCursor {
  constructor() {
    this.cursor = null;
    this.blob = null;

    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.blobX = 0;
    this.blobY = 0;

    // Spring physics
    this.cursorVelX = 0;
    this.cursorVelY = 0;
    this.spring = 0.0035;
    this.friction = 0.93;

    // Blob velocity for pill effect
    this.blobVelX = 0;
    this.blobVelY = 0;
    this.prevBlobX = 0;
    this.prevBlobY = 0;

    this.blobSize = 0;
    this.targetBlobSize = 0;
    this.stretch = 1;
    this.rotation = 0;

    window.customCursorPos = { x: 0, y: 0 };

    this.init();
  }

  init() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);

    this.blob = document.createElement('div');
    this.blob.className = 'jelly-blob';
    document.body.appendChild(this.blob);

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    const hoverSelector = [
      'a', 'button', '[role="button"]',
      '.btn', '.btn-primary', '.btn-secondary', '.btn--primary', '.btn--secondary',
      '.nav-link', '.nav-drawer__link',
      '.project-card', '.project-image', '.highlight-card', '.social-link',
      '.card', '.hero-card', '.case', '.step', '.testimonial', '.who-item',
      '.about-card', '.showcase-item', '.contact-card', '.case-link', '.about-link',
      '.badge', '.case-tag', '.card-tag',
      'details', 'summary'
    ].join(', ');

    const heroNameSelector = '.hero__name';
    const excludeSelector = '.sidebar__icon, .contact__social a, .hero__badges .badge';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(excludeSelector)) return;

      if (e.target.closest(heroNameSelector)) {
        this.targetBlobSize = 80;
        return;
      }

      if (e.target.closest(hoverSelector)) {
        this.targetBlobSize = 80;
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelector) || e.target.closest(heroNameSelector)) {
        this.targetBlobSize = 0;
      }
    });

    // Hide on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.cursor.style.display = 'none';
      this.blob.style.display = 'none';
      return;
    }

    this.animate();
  }

  animate() {
    // Main cursor spring physics
    const dx = this.mouseX - this.cursorX;
    const dy = this.mouseY - this.cursorY;

    this.cursorVelX += dx * this.spring;
    this.cursorVelY += dy * this.spring;
    this.cursorVelX *= this.friction;
    this.cursorVelY *= this.friction;
    this.cursorX += this.cursorVelX;
    this.cursorY += this.cursorVelY;

    // Blob spring physics (slower)
    const blobDx = this.mouseX - this.blobX;
    const blobDy = this.mouseY - this.blobY;

    this.blobVelX += blobDx * 0.003;
    this.blobVelY += blobDy * 0.003;
    this.blobVelX *= 0.90;
    this.blobVelY *= 0.90;
    this.blobX += this.blobVelX;
    this.blobY += this.blobVelY;

    // Velocity for pill effect
    const velocityX = this.blobX - this.prevBlobX;
    const velocityY = this.blobY - this.prevBlobY;
    this.prevBlobX = this.blobX;
    this.prevBlobY = this.blobY;

    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

    // Pill stretch effect
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

    this.blobSize += (this.targetBlobSize - this.blobSize) * 0.1;

    // Offset cursor towards mouse direction
    const distance = Math.sqrt(dx * dx + dy * dy);
    const offsetAmount = Math.min(distance * 0.5, 80);

    let offsetX = 0;
    let offsetY = 0;
    if (distance > 5) {
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
    this.blob.style.opacity = this.blobSize < 5 ? '0' : '1';

    window.customCursorPos.x = this.cursorX;
    window.customCursorPos.y = this.cursorY;

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
});
