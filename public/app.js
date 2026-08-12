/* ==========================================================================
   FRÍÐA — the dateline engine. No framework, no scroll library.
   ONE rAF loop: read every rect first, then write every custom property
   (batching reads before writes is what keeps a scroll loop off the layout
   thrash path, craft ledger #51).
   ========================================================================== */
(() => {
  'use strict';

  const doc = document;
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);

  /* ---------------------------------------------------- 0. the reveal
     The whole site runs on one optical rule: the wordmark inverts against
     whatever is behind it. So the page opens as ONE ink plate, the mark reads
     light on it, and the plate then shrinks to the hero card's exact rect. The
     mark is never animated here: the ground leaves and it inverts itself.
     Time is the floor AND the ceiling, so it always completes. */
  const load = $('#load');
  const heroFig = $('.fr-hero-fig');

  const finish = () => {
    if (!load || load.dataset.done) return;
    load.dataset.done = '1';
    doc.body.classList.remove('fr-loading');
    doc.body.classList.add('fr-load-done');
    load.classList.add('is-out');
    setTimeout(() => load.remove(), 600);
  };

  if (!load) {
    doc.body.classList.remove('fr-loading');
    doc.body.classList.add('fr-load-done');
  } else if (reduced.matches) {
    load.remove();
    doc.body.classList.remove('fr-loading');
    doc.body.classList.add('fr-load-done');
  } else {
    const morph = () => {
      if (load.dataset.done) return;
      // the card is a clip WINDOW inside a sticky stage, so its rect has to be
      // measured rather than repeated as percentages of the viewport
      const r = heroFig ? heroFig.getBoundingClientRect() : null;
      if (r && r.width > 0) {
        const cs = getComputedStyle(heroFig).clipPath;   // inset(t r b l) of the fig
        const m = cs.match(/-?[\d.]+/g);
        const pct = m && cs.includes('%') ? m.map(Number) : [0, 0, 0, 0];
        const t = r.top + r.height * (pct[0] || 0) / 100;
        const rt = innerWidth - (r.right - r.width * (pct[1] || 0) / 100);
        const bt = innerHeight - (r.bottom - r.height * (pct[2] || 0) / 100);
        const lf = r.left + r.width * (pct[3] ?? pct[1] ?? 0) / 100;
        load.classList.add('is-morphing');
        load.style.clipPath = `inset(${t.toFixed(1)}px ${rt.toFixed(1)}px ${bt.toFixed(1)}px ${lf.toFixed(1)}px)`;
      } else {
        load.classList.add('is-morphing');
        load.style.clipPath = 'inset(50% 50% 50% 50%)';
      }
      doc.body.classList.remove('fr-loading');   // the page fades up behind it
      setTimeout(finish, 1250);
    };
    const hold = doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve();
    Promise.race([hold, new Promise((r) => setTimeout(r, 1200))]).then(() => setTimeout(morph, 420));
    setTimeout(finish, 4200);                     // failsafe, always lifts
  }

  /* ---------------------------------------------------- 1. word reveals */
  const revs = $$('.fr-rev');
  if (revs.length) {
    if (reduced.matches) {
      revs.forEach((r) => r.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
        { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
      );
      revs.forEach((r) => io.observe(r));
    }
  }

  /* ---------------------------------------------------- 2. mobile menu */
  const burger = $('#burger');
  const menu = $('#menu');
  if (burger && menu) {
    let open = false;
    const set = (v) => {
      open = v;
      burger.setAttribute('aria-expanded', String(v));
      if (v) {
        menu.hidden = false;
        requestAnimationFrame(() => menu.classList.add('is-open'));
        doc.body.style.overflow = 'hidden';
      } else {
        menu.classList.remove('is-open');
        doc.body.style.overflow = '';
        setTimeout(() => { if (!open) menu.hidden = true; }, 420);
      }
    };
    burger.addEventListener('click', () => set(!open));
    menu.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      set(false);
      if (a.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const t = $(a.getAttribute('href'));
        requestAnimationFrame(() => t?.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth' }));
      }
    });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) { set(false); burger.focus(); } });
  }

  if (reduced.matches) return;

  /* ---------------------------------------------------- 3. the scroll loop
     Channels:
       .fr-rv     -> --rv   media resolves out of blur as it crosses the fold
       .fr-hdr    -> is-stuck
       nav a      -> is-on  scrollspy
     Every value is derived from position, so scrolling back UNDOES it. That
     reversibility is the only proof a reveal is scrubbed and not a one-shot. */
  const hero = $('.fr-hero');
  const stage = $('.fr-hero-stage');
  const wm = $('#wm');
  const heroMark = $('.fr-hero-mark img');
  const hdrMark = $('.fr-hdr-home img');
  const media = $$('.fr-rv');
  const hdr = $('#hdr');
  const navA = $$('.fr-hdr-nav a');
  const secs = navA.map((a) => $(a.getAttribute('href'))).filter(Boolean);

  /* Flight geometry, measured with the transform cleared so the lerp can never
     feed on its own output. Both ends are the SAME bitmap, so the scale is the
     ratio of rendered heights and is exact. */
  let flight = null;
  const measure = () => {
    if (!wm || !heroMark || !hdrMark) return;
    const from = heroMark.getBoundingClientRect();
    const to = hdrMark.getBoundingClientRect();
    /* Only the DESTINATION is cached: the start slot rides the PINNED stage,
       so its viewport position is read live every frame. Caching a page-space
       start is wrong twice over: during the pin it does not scroll, and after
       release it does. */
    flight = {
      toX: to.left, toY: to.top,
      scale: to.height / from.height,   // same bitmap both ends, so exact
    };
  };

  let raf = 0;
  const frame = () => {
    raf = 0;
    const vh = innerHeight;
    const y = scrollY;

    /* ---- READ PASS (no writes in here) ---- */
    const mediaRects = media.map((el) => el.getBoundingClientRect());
    const secRects = secs.map((el) => el.getBoundingClientRect());

    /* the hero plate expands and the wordmark flies, on one value */
    let hp = 0;
    if (hero) {
      const top = hero.getBoundingClientRect().top + y;
      const travel = hero.offsetHeight - vh;
      hp = clamp((y - top) / Math.max(travel, 1));
      hero.style.setProperty('--hp', hp.toFixed(4));
    }

    /* ---- WRITE PASS ---- */
    if (flight && wm) {
      // ease the last stretch so it settles into the header rather than
      // arriving at constant speed
      const e = hp < 1 ? 1 - Math.pow(1 - hp, 2.2) : 1;
      const mr = heroMark.getBoundingClientRect();   // live: rides the pin
      const x = mr.left + (flight.toX - mr.left) * e;
      const wy = mr.top + (flight.toY - mr.top) * e;
      const sc = 1 + (flight.scale - 1) * e;
      wm.style.setProperty('--wmx', x.toFixed(2) + 'px');
      wm.style.setProperty('--wmy', wy.toFixed(2) + 'px');
      wm.style.setProperty('--wms', sc.toFixed(4));
      doc.documentElement.style.setProperty('--fr-hdr-logo', hp > 0.995 ? '1' : '0');
      wm.style.opacity = hp > 0.995 ? '0' : '1';

    }
    media.forEach((el, i) => {
      // above-the-fold media resolves at mount: it has no scroll travel to be
      // revealed by, and a blurred white-ground photo reads as an empty box
      if (el.hasAttribute('data-eager')) { el.style.setProperty('--rv', '1'); return; }
      const r = mediaRects[i];
      // 0 when the frame's top is a full viewport down, 1 once it has risen
      // to 62% of the viewport: it resolves as it arrives, not after
      const rv = clamp((vh - r.top) / (vh * 0.58));
      el.style.setProperty('--rv', rv.toFixed(4));
    });

    if (hdr) hdr.classList.toggle('is-stuck', y > 8);

    if (secRects.length) {
      let on = -1;
      secRects.forEach((r, i) => { if (r.top <= vh * 0.35) on = i; });
      navA.forEach((a, i) => a.classList.toggle('is-on', i === on));
    }
  };
  const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };

  addEventListener('scroll', wake, { passive: true });
  addEventListener('resize', () => { measure(); wake(); });
  // a hidden pane pauses rAF; re-sync when it comes back (craft ledger #93)
  addEventListener('visibilitychange', wake);
  measure(); frame();
  addEventListener('load', () => { measure(); frame(); }, { once: true });
  // webfonts and the logo bitmap both move the slots
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(() => { measure(); frame(); });
})();
