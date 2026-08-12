import { SITE, INDEX } from './content.mjs';
import SIZES from './img-sizes.json' with { type: 'json' };

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Per-word reveal. Real whitespace text nodes between words so textContent and
   the accessible name stay clean (craft ledger #36c). */
function words(text, tag = 'h2', cls = '') {
  const parts = String(text).split(' ');
  const html = parts
    .map((w, i) => `<span class="fr-w" style="--i:${i}"><span class="fr-w-i">${esc(w)}</span></span>`)
    .join(' ');
  return `<${tag} class="fr-rev ${cls}" aria-label="${esc(text)}"><span aria-hidden="true">${html}</span></${tag}>`;
}

export function render(c, { assetBase, previewOrigin = '', noindex = false }) {
  const A = assetBase;
  const ORIGIN = previewOrigin || SITE.origin;

  const im = (name, alt, cls = '', extra = '') => {
    const [w, h] = SIZES[name] || [];
    const dim = w ? ` width="${w}" height="${h}"` : '';
    return `<img class="${cls}" src="${A}img/${name}" alt="${esc(alt)}" loading="lazy" decoding="async"${dim}${extra}>`;
  };

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: SITE.brandFull,
    alternateName: 'Fríða',
    url: ORIGIN,
    description: c.description,
    founder: { '@type': 'Person', name: SITE.people[0] },
    foundingDate: SITE.founded,
    telephone: SITE.phoneTel,
    priceRange: '$$',
    currenciesAccepted: 'ISK',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      postalCode: SITE.postal,
      addressLocality: SITE.city,
      addressCountry: 'IS',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 64.1432, longitude: -21.9284 },
    /* Each collection is a real, dated body of work: exactly what a knowledge
       panel should be able to read, and exactly what the live site hides. */
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: c.index.title,
      itemListElement: INDEX.map((l, i) => ({
        '@type': 'OfferCatalog',
        position: i + 1,
        name: c.lang === 'is' ? l.is : l.en,
        numberOfItems: Number(l.n),
        url: `https://fridaskart.is/collections/${l.handle}`,
      })),
    },
  };

  /* ---- the chapters: each one a museum accession entry ---- */
  const chapters = c.chapters
    .map(
      (ch, i) => `
    <article class="fr-ch" id="${esc(ch.id)}" data-station="${ch.stationIx}" style="--n:${i}">
      <div class="fr-ch-media fr-rv">${im(ch.img, ch.alt, 'fr-ch-img')}</div>
      <div class="fr-ch-txt">
        <p class="reg fr-ch-station"><span class="fr-ch-no">${String(i + 1).padStart(2, '0')}</span>${esc(ch.station)}</p>
        ${words(ch.name, 'h3', 'fr-ch-name')}
        <p class="reg fr-ch-srclabel">${esc(c.chaptersHead.sourceLabel)}</p>
        <p class="fr-ch-src">${esc(ch.source)}</p>
        <p class="fr-ch-body">${esc(ch.body)}</p>
        <blockquote class="fr-ch-q"><p>${esc(ch.quote)}</p><cite class="reg">fridaskart.is</cite></blockquote>
        <p class="fr-ch-foot">
          <a class="fr-ib" href="https://fridaskart.is/collections/${esc(ch.handle)}" target="_blank" rel="noopener"><span>${esc(c.chaptersHead.cta)}</span></a>
          <span class="reg fr-ch-count">${esc(ch.count)} ${esc(c.chaptersHead.countLabel)}</span>
        </p>
      </div>
    </article>`
    )
    .join('');

  const indexRows = INDEX.map(
    (l) => `
    <li class="fr-ix-r">
      <a class="fr-ix-b" href="https://fridaskart.is/collections/${esc(l.handle)}" target="_blank" rel="noopener">
        <span class="fr-ix-name">${esc(c.lang === 'is' ? l.is : l.en)}</span>
        <span class="reg fr-ix-n">${esc(l.n)}</span>
      </a>
    </li>`
  ).join('');

  const contactRows = c.contact.rows
    .map(
      (r) =>
        `<div class="fr-ct-r"><dt class="reg">${esc(r.k)}</dt><dd>${r.href ? `<a href="${esc(r.href)}"${r.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(r.v)}</a>` : esc(r.v)}</dd></div>`
    )
    .join('');

  const navLinks = c.nav.map((n) => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`).join('');
  const navLinksM = c.nav
    .map((n, i) => `<li style="--i:${i}"><a href="${esc(n.href)}">${esc(n.label)}</a></li>`)
    .join('');

  const logo = `<img class="fr-logo" src="${A}img/frida-logo.svg" alt="${esc(SITE.brandFull)}" width="259" height="62">`;

  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.description)}">
<meta name="theme-color" content="#FBFBF9">
<link rel="canonical" href="${ORIGIN}${c.dir}">
${noindex ? '<meta name="robots" content="noindex, nofollow">\n' : ''}
<link rel="alternate" hreflang="is" href="${ORIGIN}/">
<link rel="alternate" hreflang="en" href="${ORIGIN}/en/">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.description)}">
<meta property="og:locale" content="${c.lang === 'is' ? 'is_IS' : 'en_GB'}">
<meta property="og:image" content="${ORIGIN}${c.dir}img/hero-rings.webp">
<link rel="icon" href="${A}favicon.svg" type="image/svg+xml">
<link rel="preload" href="${A}fonts/CabinetGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${A}fonts/Switzer-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" as="image" href="${A}img/hero-rings.webp" fetchpriority="high">
<link rel="stylesheet" href="${A}styles.css">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body class="fr-loading">

<!-- THE REVEAL. The site runs on one optical rule: her wordmark inverts against
     whatever is behind it. So the page opens as a single dark plate with the
     mark reading light on it, and the plate then SHRINKS INTO THE HERO CARD.
     The mark never moves; the ground leaves, and the letters invert themselves.
     The reveal is the landing arriving, not a curtain in front of it. -->
<div class="fr-load" id="load" aria-hidden="true"></div>

<a class="fr-skip" href="#main">${esc(c.skip)}</a>

<header class="fr-hdr" id="hdr">
  <div class="fr-hdr-in">
    <a class="fr-hdr-home" href="${c.lang === 'is' ? './' : '../'}">${logo}</a>
    <nav class="fr-hdr-nav" aria-label="${c.lang === 'is' ? 'Aðalvalmynd' : 'Main'}">
      <ul>${navLinks}</ul>
    </nav>
    <div class="fr-hdr-end">
      <a class="fr-hdr-lang reg" href="${esc(c.other.href)}" hreflang="${esc(c.other.code)}" lang="${esc(c.other.code)}">${esc(c.other.label)}</a>
      <a class="fr-hdr-cta reg" href="https://fridaskart.is" target="_blank" rel="noopener">${esc(c.navCta)}</a>
      <button class="fr-burger" id="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="${c.lang === 'is' ? 'Opna valmynd' : 'Open menu'}">
        <span></span><span></span>
      </button>
    </div>
  </div>
</header>

<div class="fr-menu" id="menu" hidden>
  <nav aria-label="${c.lang === 'is' ? 'Valmynd' : 'Menu'}">
    <ul class="fr-menu-list">${navLinksM}</ul>
  </nav>
  <div class="fr-menu-foot reg">
    <a href="tel:${SITE.phoneTel}">${SITE.phone}</a>
    <a href="${esc(c.other.href)}" hreflang="${esc(c.other.code)}" lang="${esc(c.other.code)}">${esc(c.other.label)}</a>
  </div>
</div>

<main id="main">

<!-- ------------------------------------------------------------ hero
     Brúin's wordmark-over-picture crossing + AGMES/Alrún's type-inside-the-media,
     driven by one progress value: the plate EXPANDS to full bleed while the
     centred wordmark flies to its slot in the header. -->
<div class="fr-wm" id="wm" aria-hidden="true"><span class="fr-wm-x"></span></div>

<section class="fr-hero" id="hero">
  <div class="fr-hero-stage">
    <figure class="fr-hero-fig">
      <img class="fr-hero-img" src="${A}img/hero-rings.webp" alt="${esc(c.hero.alt)}" width="${SIZES['hero-rings.webp'][0]}" height="${SIZES['hero-rings.webp'][1]}" fetchpriority="high" decoding="async">
    </figure>
    <h1 class="fr-hero-h1">
      <span class="fr-hero-mark"><img src="${A}img/frida-logo.svg" alt="${esc(SITE.brandFull)}" width="259" height="62"></span>
      <span class="fr-hero-sf">${esc(c.hero.standfirst)}</span>
    </h1>
  </div>
</section>

<section class="fr-intro">
  <div class="fr-wrap fr-intro-in">
    <p class="fr-intro-lead">${esc(c.hero.lead)}</p>
    <p class="reg fr-intro-meta">${c.hero.meta.map((m) => `<span>${esc(m)}</span>`).join('')}</p>
  </div>

</section>

<!-- ------------------------------------------------ the dateline + chapters -->
<section class="fr-src" id="heimildir">
  <div class="fr-wrap fr-src-head">
    <p class="reg fr-eyebrow">${esc(c.chaptersHead.eyebrow)}</p>
    ${words(c.chaptersHead.title, 'h2', 'fr-h2')}
    <p class="fr-lead">${esc(c.chaptersHead.lead)}</p>
  </div>

  <div class="fr-dl">
    <!-- THE SIGNATURE: a thousand years, scrubbed. Her sources really do span
         it, so the rail reads real data rather than decorating the page. -->
    <div class="fr-ch-l">${chapters}</div>
  </div>
</section>

<!-- ------------------------------------------------------------ workshop -->
<section class="fr-ws" id="verkstaedid">
  <div class="fr-wrap">
    <p class="reg fr-eyebrow">${esc(c.workshop.eyebrow)}</p>
    ${words(c.workshop.title, 'h2', 'fr-h2')}
    <div class="fr-ws-grid">
      <div class="fr-ws-txt">
        <p class="fr-lead">${esc(c.workshop.body)}</p>
        <p class="fr-ws-note"><span class="reg">${esc(c.workshop.noteLabel)}</span> ${esc(c.workshop.note)}</p>
      </div>
      <figure class="fr-ws-fig fr-rv">${im('studio-gold.webp', c.workshop.alt, 'fr-ws-img')}</figure>
    </div>
    <figure class="fr-ws-wide fr-rv">${im('studio-bracelet.webp', c.workshop.alt2, 'fr-ws-img')}</figure>
  </div>
</section>

<!-- ------------------------------------------------------------ line index -->
<section class="fr-ix" id="linurnar">
  <div class="fr-wrap">
    <p class="reg fr-eyebrow">${esc(c.index.eyebrow)}</p>
    ${words(c.index.title, 'h2', 'fr-h2')}
    <p class="fr-lead">${esc(c.index.lead)}</p>
    <ul class="fr-ix-l">
      <li class="fr-ix-h reg"><span>${esc(c.index.colName)}</span><span>${esc(c.index.colN)}</span></li>
      ${indexRows}
    </ul>
    <p class="reg fr-ix-note">${esc(c.index.note)}</p>
  </div>
</section>

<!-- ------------------------------------------------------------ contact -->
<section class="fr-ct" id="heimsokn">
  <div class="fr-wrap">
    <p class="reg fr-eyebrow">${esc(c.contact.eyebrow)}</p>
    ${words(c.contact.title, 'h2', 'fr-h2')}
    <p class="fr-lead">${esc(c.contact.lead)}</p>
    <dl class="fr-ct-l">${contactRows}</dl>
    <p class="fr-ct-btns">
      <a class="fr-ib fr-ib--solid" href="${esc(c.contact.cta.href)}" target="_blank" rel="noopener"><span>${esc(c.contact.cta.label)}</span></a>
      <a class="fr-ib" href="${esc(c.contact.cta2.href)}"><span>${esc(c.contact.cta2.label)}</span></a>
    </p>
  </div>
</section>
</main>

<footer class="fr-ft">
  <div class="fr-wrap fr-ft-in">
    <div class="fr-ft-mark">${logo}</div>
    <div class="fr-ft-txt">${c.footer.lines.map((l) => `<p>${esc(l)}</p>`).join('')}</div>
    <div class="fr-ft-end reg">
      <p>${esc(c.footer.credit)}</p>
      <p class="fr-ft-note">${esc(c.footer.note)}</p>
    </div>
  </div>
</footer>

<script src="${A}app.js" defer></script>
</body>
</html>
`;
}
