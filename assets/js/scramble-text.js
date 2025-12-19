class ScrambleText {
  constructor(element) {
    this.element = element;
    this.originalText = element.getAttribute('data-text') || element.textContent.trim();
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>';
    this.isAnimating = false;

    // Décalage pour les lettres précédentes (ex: "Dav" = 3 caractères)
    this.indexOffset = parseInt(element.getAttribute('data-offset') || '0', 10);
    // Total de caractères dans le nom complet (ex: "David Pinheiro" = 13 lettres)
    this.totalCharsInFullName = parseInt(element.getAttribute('data-total') || '0', 10);

    // Dégradé de couleurs : violet → rose → orange → jaune
    this.colors = [
      '#8B5CF6', // violet
      '#A855F7', // violet clair
      '#D946EF', // rose
      '#EC4899', // pink
      '#F97316', // orange
      '#FB923C', // orange clair
      '#FBBF24', // jaune
      '#FDE047', // jaune clair
    ];

    this.init();
  }

  getColorForIndex(index, total) {
    // Utiliser le total global si défini, sinon le total local
    const effectiveTotal = this.totalCharsInFullName || total;
    // Ajouter l'offset pour la position correcte dans le nom complet
    const effectiveIndex = index + this.indexOffset;
    const colorIndex = Math.floor((effectiveIndex / effectiveTotal) * this.colors.length);
    return this.colors[Math.min(colorIndex, this.colors.length - 1)];
  }

  // Scale décroissant de DROITE à GAUCHE (droite = plus gros)
  getScaleForIndex(index, total) {
    // index 0 = gauche (petit), index total-1 = droite (gros)
    const minScale = 2;
    const maxScale = 6;
    const progress = index / (total - 1 || 1);
    return minScale + (progress * (maxScale - minScale));
  }

  init() {
    this.element.innerHTML = '';
    const totalChars = this.originalText.replace(/ /g, '').length;
    let charCount = 0;

    for (let i = 0; i < this.originalText.length; i++) {
      const char = this.originalText[i];
      const span = document.createElement('span');
      span.className = char === ' ' ? 'shuffle-char space' : 'shuffle-char';
      span.textContent = char === ' ' ? '\u00A0' : this.getRandomChar();
      span.style.display = 'inline-block';

      if (char !== ' ') {
        // Couleur en dégradé
        const color = this.getColorForIndex(charCount, totalChars);
        span.style.color = color;
        span.style.webkitTextFillColor = color;

        // Scale décroissant de droite à gauche
        const scale = this.getScaleForIndex(charCount, totalChars);
        span.style.transform = `scale(${scale})`;
        span.style.opacity = '0.7';
        span.dataset.initialScale = scale;
        charCount++;
      }

      this.element.appendChild(span);
    }

    this.charElements = this.element.querySelectorAll('.shuffle-char:not(.space)');

    setTimeout(() => this.scramble(), 500);
  }

  getRandomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  resetAndScramble() {
    this.element.innerHTML = '';
    const totalChars = this.originalText.replace(/ /g, '').length;
    let charCount = 0;

    for (let i = 0; i < this.originalText.length; i++) {
      const char = this.originalText[i];
      const span = document.createElement('span');
      span.className = char === ' ' ? 'shuffle-char space' : 'shuffle-char';
      span.textContent = char === ' ' ? '\u00A0' : this.getRandomChar();
      span.style.display = 'inline-block';

      if (char !== ' ') {
        const color = this.getColorForIndex(charCount, totalChars);
        span.style.color = color;
        span.style.webkitTextFillColor = color;
        const scale = this.getScaleForIndex(charCount, totalChars);
        span.style.transform = `scale(${scale})`;
        span.style.opacity = '0.7';
        span.dataset.initialScale = scale;
        charCount++;
      }

      this.element.appendChild(span);
    }

    this.charElements = this.element.querySelectorAll('.shuffle-char:not(.space)');

    setTimeout(() => this.scramble(), 100);
  }

  scramble() {
    this.isAnimating = true;
    let completedCount = 0;

    const nonSpaceChars = [];
    for (let i = 0; i < this.originalText.length; i++) {
      if (this.originalText[i] !== ' ') {
        nonSpaceChars.push(i);
      }
    }

    const totalNonSpace = nonSpaceChars.length;

    for (let i = 0; i < this.originalText.length; i++) {
      const char = this.originalText[i];
      if (char === ' ') continue;

      const charEl = this.element.querySelectorAll('.shuffle-char')[i];
      const targetChar = char;

      // Index pour animation DROITE à GAUCHE
      const charIndex = nonSpaceChars.indexOf(i);
      // Position depuis la droite (0 = droite, élevé = gauche)
      const positionFromRight = totalNonSpace - 1 - charIndex;

      // Scale initial de cette lettre
      const initialScale = parseFloat(charEl.dataset.initialScale) || 4;

      let iterations = 0;
      const maxIterations = 15 + Math.random() * 10;
      // Test: GAUCHE d'abord pour voir si c'est inversé visuellement
      const delay = charIndex * 100;

      setTimeout(() => {
        const interval = setInterval(() => {
          const progress = iterations / maxIterations;

          // Dezoom depuis le scale initial vers 1
          const scale = initialScale - (progress * (initialScale - 1));
          const opacity = 0.7 + (progress * 0.3);

          charEl.style.transform = `scale(${Math.max(1, scale)})`;
          charEl.style.opacity = Math.min(1, opacity);

          if (iterations >= maxIterations) {
            clearInterval(interval);
            charEl.textContent = targetChar;
            charEl.style.transform = 'scale(1)';
            charEl.style.opacity = '1';
            charEl.classList.add('revealed');

            setTimeout(() => {
              charEl.classList.remove('revealed');
            }, 300);

            completedCount++;
            if (completedCount === totalNonSpace) {
              setTimeout(() => {
                // Garder les spans existants, juste nettoyer les transforms
                // Les couleurs sont déjà correctes sur chaque span
                this.isAnimating = false;
                // Démarrer le typewriter après le scramble
                if (window.startTypewriters) {
                  window.startTypewriters();
                }
              }, 400);
            }
            return;
          }

          charEl.textContent = this.getRandomChar();
          iterations++;
        }, 35);
      }, delay);
    }
  }
}

function initScramble() {
  document.querySelectorAll('[data-scramble]').forEach(el => {
    if (!el.dataset.scrambleInit) {
      el.dataset.scrambleInit = 'true';
      new ScrambleText(el);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScramble);
} else {
  initScramble();
}
