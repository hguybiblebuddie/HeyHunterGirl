/* HeyHunterGirl — site.js */

(function () {
  'use strict';

  /* ── Scroll-aware header ─────────────────────────────── */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav toggle ───────────────────────────────── */
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    /* Close on nav link click */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Intersection-observer fade-in ──────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }',
    '.reveal.visible { opacity: 1; transform: none; }'
  ].join('');
  document.head.appendChild(style);

  var revealTargets = '.pillar-card, .topic-card, .testimonial-card, .stat-card, .podcast-cover, .apply-text, .builder-text';

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(revealTargets).forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4 * 0.08) + 's';
      observer.observe(el);
    });
  }

  /* ── Active nav link highlight ───────────────────────── */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href && href !== '' && path === href) {
      a.style.color = 'var(--gold)';
    }
  });

})();
