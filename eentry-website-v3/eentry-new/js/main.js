/* ==========================================
   eEntry Inc. - Main JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scroll effect ---------- */
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // Close on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 72;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Scroll animations ----------
     CSS classes: .fi (fade-in up), .fil (fade-in left), .fir (fade-in right)
     Trigger class: .v (visible)
  ----------------------------------------- */
  const animateEls = document.querySelectorAll('.fi, .fil, .fir');

  // Function to reveal elements that are already in the viewport
  const revealInView = () => {
    animateEls.forEach(el => {
      if (el.classList.contains('v')) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.05 && r.bottom > 0) {
        el.classList.add('v');
      }
    });
  };

  // IntersectionObserver for scroll-triggered reveal
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    animateEls.forEach(el => obs.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    animateEls.forEach(el => el.classList.add('v'));
  }

  // Reveal elements already in viewport on page load
  window.addEventListener('load', revealInView);
  revealInView(); // Also run immediately in case load already fired

  // Safety fallback: reveal all elements after 2s in case observer doesn't fire
  setTimeout(() => {
    animateEls.forEach(el => el.classList.add('v'));
  }, 2000);

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

  /* ---------- Year for footer copyright ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
