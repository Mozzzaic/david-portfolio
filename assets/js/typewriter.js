// ==========================================================================
// TYPEWRITER EFFECT
// ==========================================================================

class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.words = options.words || ['Developer'];
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.waitTime = options.waitTime || 2500;
    this.loop = options.loop !== false;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    this.init();
  }

  init() {
    this.textSpan = document.createElement('span');
    this.textSpan.className = 'typewriter-text';

    this.cursorElement = document.createElement('span');
    this.cursorElement.className = 'typewriter-cursor';
    this.cursorElement.textContent = '|';

    this.element.textContent = '';
    this.element.appendChild(this.textSpan);
    this.element.appendChild(this.cursorElement);

    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.textSpan.textContent = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.textSpan.textContent = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      delay = this.waitTime;
      this.isDeleting = true;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    setTimeout(() => this.type(), delay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-typewriter]').forEach(el => {
    const words = el.dataset.typewriter.split('|').map(w => w.trim());
    new Typewriter(el, { words });
  });
});
