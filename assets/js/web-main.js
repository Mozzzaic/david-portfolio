// ==========================================================================
// WEB.HTML - Main JavaScript (Simplified)
// ==========================================================================

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // PAGE CURTAIN REVEAL
  // --------------------------------------------------------------------------

  function initPageCurtain() {
    const curtain = document.querySelector('.page-curtain');

    if (!curtain) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      curtain.remove();
      return;
    }

    // Remove curtain after animation completes
    const animationDuration = 1200; // 1s animation + 0.1s delay + buffer

    setTimeout(() => {
      curtain.classList.add('is-complete');

      // Fully remove from DOM after transition
      setTimeout(() => {
        curtain.remove();
      }, 100);
    }, animationDuration);
  }

  // --------------------------------------------------------------------------
  // COUNTER ANIMATION
  // --------------------------------------------------------------------------

  function initCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');

    if (counters.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target, 10);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      const duration = parseInt(counter.dataset.duration, 10) || 1500;

      // Show final value immediately if reduced motion
      if (prefersReducedMotion) {
        counter.textContent = prefix + target + suffix;
        return;
      }

      // Check if counter is in the hero (visible after curtain)
      const isInHero = counter.closest('.hero') !== null;

      if (isInHero) {
        // For hero counters: start after curtain + hero animation
        counter.textContent = prefix + '0' + suffix;
        setTimeout(() => {
          animateCounter(counter, target, prefix, suffix, duration);
        }, 1800); // 1.2s curtain + 0.6s hero card animation
      } else {
        // For other counters: use IntersectionObserver
        counter.textContent = prefix + '0' + suffix;
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                animateCounter(counter, target, prefix, suffix, duration);
              }, 300);
              observer.unobserve(counter);
            }
          });
        }, { threshold: 0.3 });
        observer.observe(counter);
      }
    });
  }

  function animateCounter(element, target, prefix, suffix, duration) {
    const startTime = performance.now();

    element.classList.add('is-counting');

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * easeOut);

      element.textContent = prefix + currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = prefix + target + suffix;
        element.classList.remove('is-counting');
        element.classList.add('is-complete');
        setTimeout(() => element.classList.remove('is-complete'), 400);
      }
    }

    requestAnimationFrame(update);
  }

  // --------------------------------------------------------------------------
  // HAMBURGER MENU
  // --------------------------------------------------------------------------

  function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navDrawer = document.querySelector('.nav-drawer');
    const navOverlay = document.querySelector('.nav-overlay');
    const closeButton = document.querySelector('.nav-drawer__close');

    if (!menuToggle || !navDrawer) return;

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

    function toggleMenu() {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    menuToggle.addEventListener('click', toggleMenu);
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
  }

  // --------------------------------------------------------------------------
  // FAQ ACCORDION (Smooth height animation for <details> elements)
  // --------------------------------------------------------------------------

  function initFAQ() {
    const faqDetails = document.querySelectorAll('.faq-grid details, #faq details');

    faqDetails.forEach((detail) => {
      const summary = detail.querySelector('summary');
      const icon = detail.querySelector('.faq-icon');
      const content = detail.querySelector('p');

      if (!summary) return;

      // Create wrapper for smooth animation
      let contentWrapper = detail.querySelector('.faq-content-wrapper');
      if (!contentWrapper && content) {
        contentWrapper = document.createElement('div');
        contentWrapper.className = 'faq-content-wrapper';
        contentWrapper.style.overflow = 'hidden';
        contentWrapper.style.transition = 'height 0.3s ease, opacity 0.3s ease';

        // Move content into wrapper
        content.parentNode.insertBefore(contentWrapper, content);
        contentWrapper.appendChild(content);
      }

      // Handle toggle event
      summary.addEventListener('click', (e) => {
        e.preventDefault();

        const isOpen = detail.hasAttribute('open');

        // Close other items (one at a time behavior)
        faqDetails.forEach((otherDetail) => {
          if (otherDetail !== detail && otherDetail.hasAttribute('open')) {
            closeDetail(otherDetail);
          }
        });

        if (isOpen) {
          closeDetail(detail);
        } else {
          openDetail(detail);
        }
      });

      // Set aria-expanded
      summary.setAttribute('aria-expanded', detail.hasAttribute('open') ? 'true' : 'false');
    });

    function openDetail(detail) {
      const summary = detail.querySelector('summary');
      const icon = detail.querySelector('.faq-icon');
      const contentWrapper = detail.querySelector('.faq-content-wrapper');

      // Open the details first
      detail.setAttribute('open', '');
      summary.setAttribute('aria-expanded', 'true');

      if (contentWrapper) {
        // Get the full height
        contentWrapper.style.height = 'auto';
        const fullHeight = contentWrapper.scrollHeight;
        contentWrapper.style.height = '0';
        contentWrapper.style.opacity = '0';

        // Trigger reflow
        contentWrapper.offsetHeight;

        // Animate to full height
        contentWrapper.style.height = fullHeight + 'px';
        contentWrapper.style.opacity = '1';

        // After animation, set to auto
        setTimeout(() => {
          contentWrapper.style.height = 'auto';
        }, 300);
      }

      // Rotate icon (+ to ×)
      if (icon) {
        icon.style.transform = 'rotate(45deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
    }

    function closeDetail(detail) {
      const summary = detail.querySelector('summary');
      const icon = detail.querySelector('.faq-icon');
      const contentWrapper = detail.querySelector('.faq-content-wrapper');

      summary.setAttribute('aria-expanded', 'false');

      if (contentWrapper) {
        // Get current height and animate to 0
        const currentHeight = contentWrapper.scrollHeight;
        contentWrapper.style.height = currentHeight + 'px';
        contentWrapper.style.opacity = '1';

        // Trigger reflow
        contentWrapper.offsetHeight;

        contentWrapper.style.height = '0';
        contentWrapper.style.opacity = '0';

        // Remove open attribute after animation
        setTimeout(() => {
          detail.removeAttribute('open');
        }, 300);
      } else {
        detail.removeAttribute('open');
      }

      // Reset icon rotation
      if (icon) {
        icon.style.transform = 'rotate(0deg)';
      }
    }
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

        // Smooth scroll with offset for fixed header
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
  // SIDEBAR VISIBILITY (appears on first scroll, hides at contact)
  // --------------------------------------------------------------------------

  function initSidebarVisibility() {
    const heroSection = document.querySelector('.hero');
    const contactSection = document.querySelector('#contact');
    const sidebars = document.querySelectorAll('.sidebar');

    if (sidebars.length === 0) return;

    // Show sidebars early - when hero is 70% visible (first scroll)
    if (heroSection) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio < 0.7) {
              // Scrolled past 30% of hero - show sidebars
              document.body.classList.add('sidebar-visible');
            } else {
              // At top of page - hide sidebars
              document.body.classList.remove('sidebar-visible');
            }
          });
        },
        {
          threshold: [0, 0.3, 0.5, 0.7, 1]
        }
      );
      heroObserver.observe(heroSection);
    }

    // Hide sidebars when contact section is visible (like home page)
    if (contactSection) {
      const contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.body.classList.add('contact-visible');
            } else {
              document.body.classList.remove('contact-visible');
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      contactObserver.observe(contactSection);
    }
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
  // BUTTON RIPPLE EFFECT
  // --------------------------------------------------------------------------

  function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

    buttons.forEach((button) => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // --------------------------------------------------------------------------
  // TSPARTICLES INITIALIZATION
  // --------------------------------------------------------------------------

  function initParticles() {
    if (typeof tsParticles === 'undefined') {
      console.warn('tsParticles not loaded');
      return;
    }

    console.log('Initializing tsParticles...');

    tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 900
          }
        },
        color: {
          value: '#8B5CF6'
        },
        opacity: {
          value: 0.25
        },
        size: {
          value: { min: 1, max: 3 }
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'bounce'
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: '#8B5CF6',
          opacity: 0.3,
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
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.6
            }
          }
        }
      },
      detectRetina: true
    }).then(function(container) {
      console.log('tsParticles loaded successfully!', container);
    }).catch(function(error) {
      console.error('tsParticles error:', error);
    });
  }

  // --------------------------------------------------------------------------
  // INITIALIZE ALL
  // --------------------------------------------------------------------------

  function init() {
    // Page reveal animation (run first!)
    initPageCurtain();
    initCounters();

    // Navigation
    initMenu();
    initSmoothScroll();
    initActiveNavTracking();
    initLanguageToggle();

    // UI Interactions
    initFAQ();
    initButtonRipple();

    // Scroll-based features
    initSidebarVisibility();

    // Particles background
    if (document.querySelector('#tsparticles')) {
      initParticles();
    }

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: window.innerWidth < 768
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
