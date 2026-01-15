// JS is running
document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnNo = document.getElementById('btn-no');
  const noContent = document.getElementById('content-no');
  const enContent = document.getElementById('content-en');
  const langEls = document.querySelectorAll('[data-lang]');

  /* ------------------------------
   DOT-RAIL (per language, rebind on switch)
--------------------------------*/
let railIO = null;

function activateRail(lang) {
  if (railIO) { railIO.disconnect(); railIO = null; }

  const rail = document.querySelector(`nav.rail[data-lang="${lang}"]`);
  if (!rail) return;

  const links = Array.from(rail.querySelectorAll('a[href^="#"]'));

  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, "", `#${id}`);
    });
  });


  const linkById = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));

  // Only observe sections that exist AND are visible (not inside hidden content)
  const sectionEls = links
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(el => el && !el.closest('[hidden]'));

  // Clear previous state
  links.forEach(a => a.removeAttribute('aria-current'));

  railIO = new IntersectionObserver((entries) => {
    const best = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!best) return;

    const id = best.target.id;
    links.forEach(a => a.removeAttribute('aria-current'));
    const active = linkById.get(id);
    if (active) active.setAttribute('aria-current', 'location');
  }, {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: [0.15, 0.3, 0.5, 0.7],
  });

  sectionEls.forEach(el => railIO.observe(el));
  requestAnimationFrame(setActiveInitial);

  function setActiveInitial() {
    const best = sectionEls
      .map(el => {
        const r = el.getBoundingClientRect();
        const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
        const ratio = visible / Math.max(1, r.height);
        return { el, ratio };
      })
      .sort((a, b) => b.ratio - a.ratio)[0];

    if (!best || best.ratio <= 0) return;

    links.forEach(a => a.removeAttribute('aria-current'));
    const active = linkById.get(best.el.id);
    if (active) active.setAttribute('aria-current', 'location');
  }


    // Force an initial update (IO might not fire immediately)
  requestAnimationFrame(() => {
    const entries = sectionEls.map(el => ({
      target: el,
      isIntersecting: true,
      intersectionRatio: Math.max(0, Math.min(1,
        (window.innerHeight - Math.abs(el.getBoundingClientRect().top)) / window.innerHeight
      ))
    }));

    const best = entries.sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!best) return;

    links.forEach(a => a.removeAttribute('aria-current'));
    const active = linkById.get(best.target.id);
    if (active) active.setAttribute('aria-current', 'location');
  });

}

document.addEventListener('click', (e) => {
  const a = e.target.closest('nav.rail a[href^="#"]');
  if (!a) return;

  const id = a.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.pushState(null, "", `#${id}`);
});

  /* ------------------------------
     Fade-in via IO (no fade out)
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
     Language toggle
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
    document.documentElement.setAttribute('lang', isEn ? 'en' : 'nb');
    setPressed(isEn);
    try { localStorage.setItem('preferredLanguage', isEn ? 'en' : 'no'); } catch {}

    activateRail(lang);
    setupFadeIn();
    flagStepsWithMedia(); // ensure .has-media after language switch
    flagIn5510Callouts();
    updatePreviewButtonLabels();
    

  }

  const savedLang = (() => { try { return localStorage.getItem('preferredLanguage'); } catch { return null; } })();
  setLanguage(savedLang === 'en' ? 'en' : 'no');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnNo) btnNo.addEventListener('click', () => setLanguage('no'));

  /* ------------------------------
     Mobile menu
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
     Carousel (single-image mode)
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
      if (singleMode) {
        slides.forEach((s, i) => { s.hidden = (i !== index); });
      } else {
        slides.forEach(s => { s.hidden = false; });
      }
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

  /* ------------------------------
     Flag steps that have media (fallback for browsers w/o :has)
     Applies to BOTH languages.
  --------------------------------*/
  // Flag timeline steps that include media.
  // Previously this used a hard-coded list of project IDs. That required updates
  // whenever new projects were added. Here we select all .process-step elements
  // on the page so the behaviour is automatic for any project/language.
  function flagStepsWithMedia(){
    document.querySelectorAll('.process .process-step').forEach(step => {
      const has = !!step.querySelector('.step-media');
      step.classList.toggle('has-media', has);
      step.classList.toggle('no-media', !has);
    });
  }

  flagStepsWithMedia();

  // Normalize project markup: ensure every project uses a single `.project-inner`
  // wrapper so CSS padding is consistent. Some projects (IN5320, IN5620) already
  // have `.project-inner`; others don't. Wrap direct children in `.project-inner`
  // so the same padding rules apply site-wide.
  function ensureProjectInner(){
    document.querySelectorAll('.project.project--card').forEach(proj => {
      if (Array.from(proj.children).some(ch => ch.classList && ch.classList.contains('project-inner'))) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'project-inner';
      // Move all existing children into the wrapper
      while (proj.firstChild) wrapper.appendChild(proj.firstChild);
      proj.appendChild(wrapper);
    });
  }

  ensureProjectInner();

  function flagIn5510Callouts(){
    const roots = document.querySelectorAll('#proj-in5510-no, #proj-in5510-en');
    const keys = [
      'hva vi gjorde',
      'hva vi lærte',
      'hva vi fant ut',
      'utfordringer',
      'refleksjon'
    ];

    roots.forEach(root => {
      root.querySelectorAll('p').forEach(p => {
        const strong = p.firstElementChild && p.firstElementChild.tagName === 'STRONG'? p.firstElementChild : null;

        if (!strong) return;

        const t = strong.textContent.trim().toLowerCase();
        // Previously we added a .tldr class to these paragraphs which caused
        // the beige background styling in the IN5510 section. Don't add the
        // class automatically — keep markup untouched so CSS-only callouts
        // remain deliberate in the source.
        // if (keys.some(k => t.startsWith(k))) {
        //   p.classList.add('tldr');
        // }
      });
    });
  }


  function updatePreviewButtonLabels(){
    const lang = document.documentElement.getAttribute('lang') || 'no';
    document.querySelectorAll('.read-more').forEach(btn => {
      const label = btn.querySelector('.read-more-label');
      if (!label) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        label.textContent = (lang === 'en') ? (btn.dataset.lessEn || 'Read less') : (btn.dataset.lessNo || 'Les mindre');
      } else {
        label.textContent = (lang === 'en') ? (btn.dataset.moreEn || 'Read more') : (btn.dataset.moreNo || 'Les mer');
      }
    });
  }

  

  /* ------------------------------
     Project previews (preview + read-more)
     - Builds a preview interface for each .project element by keeping the
       visible summary (prefer .tldr or first paragraph) and moving the rest
       of the project's children into a collapsible .project-body. Adds an
       accessible "Read more" button that toggles aria-expanded and hidden.
  --------------------------------*/
function initProjectPreviews(){
  const projects = Array.from(document.querySelectorAll('.project'));

  projects.forEach((proj, idx) => {
    if (proj.dataset.previewInit === '1') return;

    const scope = proj.querySelector('.project-inner') || proj;

    // Remove legacy TL;DR blocks if present — we will build a coherent peek
    // Keep existing TL;DR blocks — they should appear in the preview, not be deleted
    // (Some projects, like IN5510, use .tldr for "Hva vi gjorde / lærte" callouts)


    // Find the nodes we want to surface in the peek: heading, kicker and the
    // first paragraph (used as a short excerpt). Prefer direct children.
    const directChild = (root, predicate) =>
      Array.from(root.children).find(predicate) || null;

    const heading =
      directChild(scope, el => el.tagName === 'H2') ||
      scope.querySelector('h2');

    const kicker =
      directChild(scope, el => el.classList.contains('kicker')) ||
      scope.querySelector('.kicker');

    const firstP =
      directChild(scope, el => el.tagName === 'P') ||
      scope.querySelector('p');

    // Candidate thumbnail (if any) — avoid accidentally grabbing site hero images
    let imgEl = proj.querySelector('.step-media img, .carousel-viewport img') || proj.querySelector('img');
    if (imgEl && imgEl.closest('header')) imgEl = null;

    // Build peek element
    const peek = document.createElement('div');
    peek.className = 'project-peek';

    const txt = document.createElement('div');
    txt.className = 'peek-text';

    // Move heading and kicker into the peek TEXT area when they are direct
    // children of the project scope. If they appear elsewhere, clone them so
    // we don't break semantics. Putting them inside .peek-text ensures the
    // title/info sits to the left when the layout is wide.
    if (heading) {
      if (heading.parentNode === scope) txt.appendChild(heading);
      else txt.appendChild(heading.cloneNode(true));
    }
    if (kicker) {
      if (kicker.parentNode === scope) txt.appendChild(kicker);
      else txt.appendChild(kicker.cloneNode(true));
    }

    // Build the preview body: include heading, kicker and the next few
    // content nodes (paragraphs / small blocks) so the preview reads like
    // a short project summary. We'll stop when we've collected enough text
    // or hit a safe node-count limit.
    peek.appendChild(txt);

    // If there's a thumbnail, add it after the text so it appears on the
    // right in wide layouts (text will be on the left).
    if (imgEl) {
      const media = document.createElement('div');
      media.className = 'peek-media';
      const thumb = document.createElement('img');
      thumb.src = imgEl.getAttribute('src');
      thumb.alt = imgEl.getAttribute('alt') || '';
      media.appendChild(thumb);
      peek.appendChild(media);
    }

    // Insert peek at the top of the scope
    scope.insertBefore(peek, scope.firstChild);

    // Prepare the collapsible body and then move remaining children into it.
    const body = document.createElement('div');
    const bodyId = `project-body-${idx}`;
    body.className = 'project-body';
    body.id = bodyId;

    // Collect children after insertion point. We'll pull the heading/kicker if
    // they weren't direct children earlier, and then collect subsequent nodes
    // into the peek until we reach either max nodes or text length threshold.
    const kids = Array.from(scope.children);
    const anchorIndex = kids.indexOf(peek);

    // Helper: append a node into peek's text area
    function appendToPeek(node){
      // If it's a heading or kicker and already appended above, skip
      if (node === heading || node === kicker) return;
      txt.appendChild(node);
    }

    // Include heading and kicker if they are NOT already direct children moved earlier
    // (we already moved heading/kicker into peek if they were direct children).
    // Now gather following nodes into the peek until we reach thresholds.
    let collectedText = 0;
    let taken = 0;
    const MAX_NODES = 8;
    const MAX_CHARS = 900; // generous preview size to include multiple paragraphs

    for (let i = anchorIndex + 1; i < kids.length; ) {
      
      if (taken >= MAX_NODES || collectedText >= MAX_CHARS) break;
      const node = kids[i];
      // HARD STOP: aldri dra workshop/prosess-området inn i preview-peeken
      if (node.matches?.('.process, .process--timeline')) break;
      if (node.querySelector?.('.process, .process--timeline')) break;
      if (node.querySelector && node.querySelector('.process')) break;

      // Stop preview before callout boxes (tldr)
      if (node.classList && node.classList.contains('tldr')) break;

      // stop collecting if we hit a large structural section like .process (full timeline)
      if (node.classList && (node.classList.contains('process') || node.classList.contains('process--timeline'))) break;

      // Move node into peek text area
      appendToPeek(node);

      // update counters based on node textContent
      const text = (node.textContent || '').trim();
      collectedText += Math.min(400, text.length);
      taken += 1;
      // Note: since we've removed node from scope by moving it, the kids array shrinks
      // but we intentionally don't advance i to keep the next element at the same index.
      kids.splice(i, 1);
    }

    // After collecting the preview nodes, move any remaining children into the collapsible body
    const remaining = Array.from(scope.children).slice(anchorIndex + 1);
    remaining.forEach(n => body.appendChild(n));

    // If nothing to hide, leave the peek as-is and mark initialized
    if (!body.children.length) { proj.dataset.previewInit = '1'; proj.dataset.hasPreview = '1'; return; }

    body.hidden = true;
    scope.appendChild(body);

    // Create the Read more / Les mer button
    const btn = document.createElement('button');
    btn.className = 'read-more';
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', bodyId);
  // default labels for collapsed/expanded state in both languages
  btn.dataset.moreEn = 'Read more';
  btn.dataset.moreNo = 'Les mer';
  btn.dataset.lessEn = 'Read less';
  btn.dataset.lessNo = 'Les mindre';

    const label = document.createElement('span');
    label.className = 'read-more-label';
    btn.appendChild(label);

    scope.appendChild(btn);

    proj.dataset.previewInit = '1';
    proj.dataset.hasPreview = '1';
  });

  updatePreviewButtonLabels();
}

  // Initialize previews on load
  flagIn5510Callouts();
  initProjectPreviews();

  document.querySelectorAll('.carousel').forEach(initCarousel);

  // Delegated handler: ensure clicks / keyboard activation on .read-more work
  // even if buttons were added later or individual listeners were missed.
  function toggleProjectByButton(btn){
    if (!btn) return;
    const proj = btn.closest('.project');
    const bodyId = btn.getAttribute('aria-controls');
    const body = bodyId ? document.getElementById(bodyId) : null;
    if (!proj || !body) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';

    if (!expanded) {
    body.style.transition = 'height 320ms ease';
    body.hidden = false;
    body.style.height = '0px';

    requestAnimationFrame(() => {
      body.style.height = body.scrollHeight + 'px';
    });

    const onEnd = () => {
      body.style.height = '';
      body.removeEventListener('transitionend', onEnd);
    };
    body.addEventListener('transitionend', onEnd);

    btn.setAttribute('aria-expanded', 'true');
  // Update visible label to "less" when expanded
  updatePreviewButtonLabels();
    proj.classList.add('expanded');
    window.dispatchEvent(new Event('resize'));
  } else {
    const h = body.scrollHeight;
    body.style.height = h + 'px';

    requestAnimationFrame(() => {
      body.style.transition = 'height 320ms ease';
      body.style.height = '0px';
    });

    const onEndClose = () => {
      body.hidden = true;
      body.style.height = '';
      body.removeEventListener('transitionend', onEndClose);
    };

    body.addEventListener('transitionend', onEndClose);
  btn.setAttribute('aria-expanded', 'false');
  // Update visible label to "more" when collapsed
  updatePreviewButtonLabels();
    proj.classList.remove('expanded');
    window.dispatchEvent(new Event('resize'));
  }
}


  document.addEventListener('click', (e) => {
    // If a local handler already called preventDefault() we should not run the
    // delegated handler (avoids double-toggle when buttons have their own listeners).
    if (e.defaultPrevented) return;
    const btn = e.target.closest && e.target.closest('.read-more');
    if (!btn) return;
    e.preventDefault();
    toggleProjectByButton(btn);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (e.defaultPrevented) return;
    const btn = e.target.closest && e.target.closest('.read-more');
    if (!btn) return;
    e.preventDefault();
    toggleProjectByButton(btn);
  });

  /* ------------------------------
     Hero compact mode for very small screens
     Adds/removes .hero--compact on the <section class="hero"> element
     so CSS can hide the image when viewport is too short or narrow.
  --------------------------------*/
  function updateHeroCompact(){
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const smallHeight = window.innerHeight < 520;
    const narrow = window.innerWidth < 380;
    if (smallHeight || narrow) hero.classList.add('hero--compact'); else hero.classList.remove('hero--compact');
  }
  updateHeroCompact();
  window.addEventListener('resize', updateHeroCompact);
  window.addEventListener('orientationchange', updateHeroCompact);

  /* ------------------------------
     Copyright year
  --------------------------------*/
  const cy = document.getElementById('copyright-year');
  if (cy) cy.textContent = String(new Date().getFullYear());
});

