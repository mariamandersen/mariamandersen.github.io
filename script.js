// JS is running
document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnNo = document.getElementById('btn-no');
  const noContent = document.getElementById('content-no');
  const enContent = document.getElementById('content-en');
  const langEls = document.querySelectorAll('[data-lang]');

  /* ------------------------------
     DOT-RAIL
  --------------------------------*/
  let railCleanups = [];
  function activateRail() {
    railCleanups.forEach(fn => fn());
    railCleanups = [];

    const rails = document.querySelectorAll('.rail:not([hidden])');
    rails.forEach(rail => {
      const links = Array.from(rail.querySelectorAll('a'));
      const ids = links.map(a => a.getAttribute('href')).map(h => h && h.slice(1));
      const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
      if (!sections.length) return;

      const onClick = (e) => {
        const a = e.currentTarget;
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        links.forEach(l => {
          const on = (l === a);
          l.classList.toggle('active', on);
          l.setAttribute('aria-current', on ? 'true' : 'false');
        });
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      links.forEach(a => a.addEventListener('click', onClick));

      const setActiveByCenter = () => {
        let best = 0, bestDist = Infinity;
        const mid = window.innerHeight / 2;
        sections.forEach((sec, i) => {
          const r = sec.getBoundingClientRect();
          const secMid = r.top + r.height / 2;
          const d = Math.abs(secMid - mid);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        links.forEach((l, i) => {
          const on = i === best;
          l.classList.toggle('active', on);
          l.setAttribute('aria-current', on ? 'true' : 'false');
        });
      };

      const io = new IntersectionObserver(setActiveByCenter, {
        root: null, threshold: 0, rootMargin: '-45% 0px -55% 0px'
      });
      sections.forEach(s => io.observe(s));
      setActiveByCenter();

      const onScroll = () => setActiveByCenter();
      const onResize = () => setActiveByCenter();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);

      railCleanups.push(() => {
        io.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        links.forEach(a => {
          a.removeEventListener('click', onClick);
          a.classList.remove('active');
          a.setAttribute('aria-current', 'false');
        });
      });
    });
  }

  /* ------------------------------
     Fade-in via IO (ingen “fade OUT”)
  --------------------------------*/
  let fadeObserver = null;

  function setupFadeIn() {
    const allFade = document.querySelectorAll('.fade-in');
    allFade.forEach(el => {
      if (el.closest('[hidden]')) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < (window.innerHeight - 40)) {
        el.classList.add('appear');
      }
    });

    if (fadeObserver) { fadeObserver.disconnect(); fadeObserver = null; }

    const supportsIO = 'IntersectionObserver' in window;
    if (!supportsIO) {
      allFade.forEach(el => el.classList.add('appear'));
      document.documentElement.classList.remove('has-io');
      return;
    }

    document.documentElement.classList.add('has-io');

    fadeObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    allFade.forEach(el => {
      if (!el.closest('[hidden]') && !el.classList.contains('appear')) {
        fadeObserver.observe(el);
      }
    });
  }

  /* ------------------------------
     Språk
  --------------------------------*/
  function setPressed(isEn) {
    if (btnEn) btnEn.setAttribute('aria-pressed', String(isEn));
    if (btnNo) btnNo.setAttribute('aria-pressed', String(!isEn));
  }

  function setLanguage(lang) {
    const isEn = lang === 'en';
    if (noContent) noContent.hidden = isEn;
    if (enContent) enContent.hidden = !isEn;
    langEls.forEach(el => { el.hidden = el.dataset.lang !== lang; });
    document.documentElement.setAttribute('lang', isEn ? 'en' : 'no');
    setPressed(isEn);
    try { localStorage.setItem('preferredLanguage', isEn ? 'en' : 'no'); } catch {}

    activateRail();
    setupFadeIn();
    flagStepsWithMedia(); // sikre .has-media også etter språkbytte
  }

  const savedLang = (() => { try { return localStorage.getItem('preferredLanguage'); } catch { return null; } })();
  setLanguage(savedLang === 'en' ? 'en' : 'no');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnNo) btnNo.addEventListener('click', () => setLanguage('no'));

  /* ------------------------------
     Mobilmeny
  --------------------------------*/
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  };
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      mobileMenu.hidden = open;
    });
    mobileMenu.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) closeMenu();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    const mq = window.matchMedia('(min-width: 900px)');
    if (mq && mq.addEventListener) {
      mq.addEventListener('change', (ev) => { if (ev.matches) closeMenu(); });
    } else if (mq && mq.addListener) {
      mq.addListener((ev) => { if (ev.matches) closeMenu(); });
    }
  }

  /* ------------------------------
     KARUSELL (ett-bilde-modus)
  --------------------------------*/
  function initCarousel(carousel) {
    const viewport = carousel.querySelector('.carousel-viewport');
    const slides   = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn  = carousel.querySelector('.car-prev');
    const nextBtn  = carousel.querySelector('.car-next');
    const dotsWrap = carousel.querySelector('.dots');
    const dots     = dotsWrap ? Array.from(dotsWrap.querySelectorAll('button')) : [];
    if (!viewport || !slides.length) return;

    const singleMode = carousel.classList.contains('phone-carousel');
    if (!viewport.hasAttribute('tabindex')) viewport.setAttribute('tabindex', '0');

    let index = 0;
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    function applyVisibility() {
      slides.forEach((s, i) => { s.hidden = (i !== index); });
    }
    function update() {
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
      dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
      applyVisibility();

      if (!singleMode) {
        const x = slides[index].offsetLeft;
        viewport.scrollTo({ left: x, behavior: 'smooth' });
      }
    }
    function goTo(i) { index = clamp(i, 0, slides.length - 1); update(); }

    applyVisibility();
    carousel.classList.add('ready');
    update();

    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); goTo(index + 1); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); goTo(index - 1); });
    dots.forEach((d, i) => d.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); goTo(i); }));

    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(index - 1); }
    });

    if (!singleMode) {
      viewport.addEventListener('scroll', () => {
        const sl = viewport.scrollLeft;
        let bestI = 0, bestDist = Infinity;
        slides.forEach((s, i) => {
          const d = Math.abs(s.offsetLeft - sl);
          if (d < bestDist) { bestDist = d; bestI = i; }
        });
        if (bestI !== index) { index = bestI; update(); }
      }, { passive: true });
      window.addEventListener('resize', () => update());
    }
  }
  document.querySelectorAll('.carousel').forEach(initCarousel);

  /* ------------------------------
     Flag steps that have media (fallback for browsers w/o :has)
  --------------------------------*/
  function flagStepsWithMedia(){
    document.querySelectorAll('#proj-rocket-no .process-step').forEach(step => {
      step.classList.toggle('has-media', !!step.querySelector('.step-media'));
    });
  }
  flagStepsWithMedia();

  /* Merk alle prosess-steg som har media (bilde/karusell) */
  function tagProcessSteps() {
    document
      .querySelectorAll('#proj-rocket-no .process .process-step')
      .forEach(step => {
        const has = !!step.querySelector('.step-media');
        step.classList.toggle('has-media', has);
        step.classList.toggle('no-media', !has);
      });
  }
  tagProcessSteps();


  /* ------------------------------
     Copyright-år
  --------------------------------*/
  const cy = document.getElementById('copyright-year');
  if (cy) cy.textContent = String(new Date().getFullYear());
});
