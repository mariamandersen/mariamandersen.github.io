// JS is running
document.documentElement.classList.remove('no-js');

// Enable IO-based animations if supported
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('has-io');
}

document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("btn-en");
  const btnNo = document.getElementById("btn-no");
  const noContent = document.getElementById("content-no");
  const enContent = document.getElementById("content-en");
  const langEls = document.querySelectorAll("[data-lang]");

  // --- Language handling ---
  function setPressed(isEn) {
    if (btnEn) btnEn.setAttribute("aria-pressed", String(isEn));
    if (btnNo) btnNo.setAttribute("aria-pressed", String(!isEn));
  }

  function setLanguage(lang) {
    const isEn = lang === "en";
    if (noContent) noContent.hidden = isEn;
    if (enContent) enContent.hidden = !isEn;
    langEls.forEach(el => { el.hidden = el.dataset.lang !== lang; });
    document.documentElement.setAttribute("lang", isEn ? "en" : "no");
    setPressed(isEn);
    try { localStorage.setItem("preferredLanguage", isEn ? "en" : "no"); } catch {}
    
  }

  const savedLang = (() => { try { return localStorage.getItem("preferredLanguage"); } catch { return null; } })();
  setLanguage(savedLang === "en" ? "en" : "no");

  btnEn?.addEventListener("click", () => setLanguage("en"));
  btnNo?.addEventListener("click", () => setLanguage("no"));

  // --- Fade-in / IO ---
  const fadeEls = document.querySelectorAll(".fade-in");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    fadeEls.forEach(el => el.classList.add("appear"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    fadeEls.forEach(el => observer.observe(el));
  }

  // --- Reset button (optional) ---
  const resetBtn = document.getElementById("resetLang");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      try { localStorage.removeItem("preferredLanguage"); } catch {}
      setLanguage("no");
      alert("Språkvalg er nullstilt. Standard er nå NO.");
    });
    document.addEventListener("keydown", e => { if (e.altKey) resetBtn.style.display = "inline-block"; });
    document.addEventListener("keyup", e => { if (!e.altKey) resetBtn.style.display = "none"; });
  }

  // --- Compact header on scroll ---
  const siteHeader = document.querySelector('header');
  let compact = false;
  const onScroll = () => {
    const shouldCompact = window.scrollY > 10;
    if (shouldCompact !== compact) {
      compact = shouldCompact;
      siteHeader.classList.toggle('is-compact', compact);
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Dot rail: highlight active section & smooth scroll ---
let railCleanups = [];

function activateRail() {
  // disconnect previous observers/listeners
  railCleanups.forEach(fn => fn());
  railCleanups = [];

  const rails = document.querySelectorAll('.rail:not([hidden])');
  rails.forEach(rail => {
    const links = Array.from(rail.querySelectorAll('a'));
    const ids   = links.map(a => a.getAttribute('href')).map(h => h && h.slice(1));
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    // click → smooth scroll (center)
    const onClick = (e) => {
      const a = e.currentTarget;
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    links.forEach(a => a.addEventListener('click', onClick));

    // compute nearest-to-center section
    const setActiveByCenter = () => {
      let best = 0, bestDist = Infinity;
      const mid = window.innerHeight / 2;
      sections.forEach((sec, i) => {
        const r = sec.getBoundingClientRect();
        const secMid = r.top + r.height / 2;
        const d = Math.abs(secMid - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      links.forEach((l, i) => l.classList.toggle('active', i === best));
    };

    // IO to help, tuned to “center line”
    const io = new IntersectionObserver((entries) => {
      // when any section intersects the center band, recompute by center
      setActiveByCenter();
    }, { root: null, threshold: 0, rootMargin: "-45% 0px -55% 0px" });

    sections.forEach(s => io.observe(s));
    setActiveByCenter();

    // keep in sync on scroll/resize
    const onScroll = () => setActiveByCenter();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onResize = () => setActiveByCenter();
    window.addEventListener('resize', onResize);

    // cleanup for this rail
    railCleanups.push(() => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      links.forEach(a => a.removeEventListener('click', onClick));
      links.forEach(l => l.classList.remove('active'));
    });
  });
}

// run now and whenever language changes
activateRail();


  // --- Accessible carousels ---
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const viewport = carousel.querySelector('.carousel-viewport');
    const slides   = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn  = carousel.querySelector('.car-prev');
    const nextBtn  = carousel.querySelector('.car-next');
    const dots     = Array.from(carousel.querySelectorAll('.dots button'));
    if (!viewport || !slides.length) return;

    let index = 0;
    const clamp = (n,min,max)=>Math.max(min,Math.min(max,n));

    const update = () => {
      dots.forEach((d,i)=> d.setAttribute('aria-current', i===index ? 'true' : 'false'));
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    };

    const goTo = (i, smooth=true) => {
      index = clamp(i, 0, slides.length - 1);
      const x = index * viewport.clientWidth;
      viewport.scrollTo({ left: x, behavior: smooth ? 'smooth' : 'auto' });
      update();
    };

    prevBtn?.addEventListener('click', () => goTo(index - 1));
    nextBtn?.addEventListener('click', () => goTo(index + 1));

    dots.forEach((d,i)=> d.addEventListener('click', ()=> goTo(i)));

    viewport.addEventListener('scroll', () => {
      const i = Math.round(viewport.scrollLeft / viewport.clientWidth);
      if (i !== index) { index = i; update(); }
    }, { passive: true });

    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(index - 1); }
    });

    window.addEventListener('resize', () => goTo(index, false));

    carousel.classList.add('ready');
    update();
  });

  // --- Mobile menu toggle ---
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    const mq = window.matchMedia('(min-width: 900px)');
    mq.addEventListener?.('change', (ev) => { if (ev.matches) closeMenu(); });
  }
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();