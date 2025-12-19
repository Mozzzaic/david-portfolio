// ==========================================================================
// PORTFOLIO PAGE - Main JavaScript
// Dark theme with Starfield (no particles)
// ==========================================================================

(function() {
  'use strict';

  console.log('Portfolio-main.js loaded');

  // --------------------------------------------------------------------------
  // STARFIELD INITIALIZATION
  // --------------------------------------------------------------------------

  function initStarfield() {
    console.log('Initializing starfield...');

    // Check if starfield exists and Three.js is loaded
    if (typeof window.starfield === 'undefined') {
      console.warn('Starfield not available');
      return;
    }

    // Start starfield immediately for portfolio page
    window.starfield.start();
    console.log('Starfield started');

    // Make canvas visible
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
      canvas.style.opacity = '1';
    }
  }

  // --------------------------------------------------------------------------
  // HAMBURGER MENU
  // --------------------------------------------------------------------------

  function initMenu() {
    console.log('Initializing menu...');

    const menuToggle = document.querySelector('.menu-toggle');
    const navDrawer = document.querySelector('.nav-drawer');
    const navOverlay = document.querySelector('.nav-overlay');
    const closeButton = document.querySelector('.nav-drawer__close');

    console.log('Menu elements:', { menuToggle, navDrawer, navOverlay, closeButton });

    if (!menuToggle || !navDrawer) {
      console.error('Menu elements not found!');
      return;
    }

    function openMenu() {
      console.log('Opening menu');
      menuToggle.setAttribute('aria-expanded', 'true');
      navDrawer.classList.add('is-open');
      navOverlay?.classList.add('is-visible');
      document.body.classList.add('nav-open');
    }

    function closeMenu() {
      console.log('Closing menu');
      menuToggle.setAttribute('aria-expanded', 'false');
      navDrawer.classList.remove('is-open');
      navOverlay?.classList.remove('is-visible');
      document.body.classList.remove('nav-open');
    }

    function toggleMenu(e) {
      console.log('Toggle menu clicked', e);
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Remove any existing listeners first
    menuToggle.replaceWith(menuToggle.cloneNode(true));
    const newMenuToggle = document.querySelector('.menu-toggle');

    newMenuToggle.addEventListener('click', toggleMenu);
    console.log('Click listener added to menu toggle');

    navOverlay?.addEventListener('click', closeMenu);
    closeButton?.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu when clicking a link
    navDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    console.log('Menu initialized successfully');
  }

  // --------------------------------------------------------------------------
  // SMOOTH SCROLL
  // --------------------------------------------------------------------------

  function initSmoothScroll() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) return;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2) return;

      anchor.addEventListener('click', (event) => {
        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        // Close menu if open
        const navDrawer = document.querySelector('.nav-drawer');
        if (navDrawer?.classList.contains('is-open')) {
          navDrawer.classList.remove('is-open');
          document.querySelector('.nav-overlay')?.classList.remove('is-visible');
          document.body.classList.remove('nav-open');
          document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
        }

        // Smooth scroll with offset
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without scrolling
        history.pushState(null, null, href);
      });
    });
  }

  // --------------------------------------------------------------------------
  // ACTIVE NAV SECTION TRACKING
  // --------------------------------------------------------------------------

  function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-drawer__link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            navLinks.forEach((link) => {
              link.classList.remove('nav-drawer__link--active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('nav-drawer__link--active');
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // --------------------------------------------------------------------------
  // LANGUAGE TOGGLE
  // --------------------------------------------------------------------------

  function initLanguageToggle() {
    const langButtons = document.querySelectorAll('[data-lang-btn]');

    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.langBtn;

        // Update button states
        langButtons.forEach((b) => {
          b.setAttribute('aria-pressed', b.dataset.langBtn === lang ? 'true' : 'false');
        });

        // Save preference
        try {
          localStorage.setItem('lang', lang);
        } catch (e) {
          // ignore
        }

        // Apply translations if available
        if (typeof applyLanguage === 'function') {
          applyLanguage(lang);
        }
      });
    });

    // Initialize with saved or detected language
    const savedLang = localStorage.getItem('lang');
    if (savedLang && langButtons.length > 0) {
      langButtons.forEach((b) => {
        b.setAttribute('aria-pressed', b.dataset.langBtn === savedLang ? 'true' : 'false');
      });
    }
  }

  // --------------------------------------------------------------------------
  // INITIALIZE ALL
  // --------------------------------------------------------------------------

  function init() {
    console.log('Portfolio init starting...');

    try {
      // Start starfield immediately
      initStarfield();

      // Navigation - THIS IS THE KEY ONE
      initMenu();
      initSmoothScroll();
      initActiveNavTracking();
      initLanguageToggle();

      // Initialize AOS
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 80,
          disable: window.innerWidth < 768
        });
      }

      console.log('Portfolio init complete');
    } catch (error) {
      console.error('Error in portfolio init:', error);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
