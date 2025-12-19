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
    this.started = false;

    this.prepare();
  }

  prepare() {
    this.textSpan = document.createElement('span');
    this.textSpan.className = 'typewriter-text';
    // Afficher "Business." dès le début (avant même que l'animation démarre)
    this.textSpan.textContent = this.words[0];

    this.cursorElement = document.createElement('span');
    this.cursorElement.className = 'typewriter-cursor';
    this.cursorElement.textContent = '|';
    // Cacher le curseur jusqu'au démarrage
    this.cursorElement.style.opacity = '0';

    this.element.textContent = '';
    this.element.appendChild(this.textSpan);
    this.element.appendChild(this.cursorElement);
  }

  start() {
    if (!this.started) {
      this.started = true;
      // Afficher le curseur
      this.cursorElement.style.opacity = '1';
      // Le premier mot est déjà affiché dans prepare()
      this.charIndex = this.words[0].length;
      this.isDeleting = true;
      // Attendre avant de commencer à effacer
      setTimeout(() => this.type(), this.waitTime);
    }
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

// Stocker les instances pour pouvoir les démarrer plus tard
window.typewriterInstances = [];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-typewriter]').forEach(el => {
    const words = el.dataset.typewriter.split('|').map(w => w.trim());
    const instance = new Typewriter(el, { words });
    window.typewriterInstances.push(instance);
  });
});

// Fonction globale pour démarrer tous les typewriters
window.startTypewriters = function() {
  window.typewriterInstances.forEach(tw => tw.start());
};
