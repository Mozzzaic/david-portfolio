// ==========================================================================
// CREATIVE LAB PAGE - Main JavaScript
// Orange theme with Particles (no starfield)
// ==========================================================================

(function() {
  'use strict';

  console.log('Creative-lab-main.js loaded');

  // --------------------------------------------------------------------------
  // PARTICLES INITIALIZATION (Purple on Orange background)
  // --------------------------------------------------------------------------

  function initParticles() {
    console.log('Initializing particles...');

    if (typeof tsParticles === 'undefined') {
      console.warn('tsParticles not loaded');
      return;
    }

    tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: '#581C87' // Deep purple
        },
        opacity: {
          value: 0.3,
          random: {
            enable: true,
            minimumValue: 0.1
          }
        },
        size: {
          value: { min: 1, max: 4 },
          random: true
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'bounce'
          },
          attract: {
            enable: false
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: '#581C87',
          opacity: 0.25,
          width: 1
        }
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.5
            }
          },
          push: {
            quantity: 3
          }
        }
      },
      detectRetina: true
    }).then(function(container) {
      console.log('Particles loaded successfully!', container);
    }).catch(function(error) {
      console.error('Particles error:', error);
    });
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

    if (!menuToggle || !navDrawer) {
      console.error('Menu elements not found!');
      return;
    }

    function openMenu() {
      menuToggle.setAttribute('aria-expanded', 'true');
      navDrawer.classList.add('is-open');
      navOverlay?.classList.add('is-visible');
      document.body.classList.add('nav-open');
    }

    function closeMenu() {
      menuToggle.setAttribute('aria-expanded', 'false');
      navDrawer.classList.remove('is-open');
      navOverlay?.classList.remove('is-visible');
      document.body.classList.remove('nav-open');
    }

    function toggleMenu(e) {
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
    console.log('Creative Lab init starting...');

    try {
      // Particles background
      initParticles();

      // Navigation
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

      console.log('Creative Lab init complete');
    } catch (error) {
      console.error('Error in Creative Lab init:', error);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
