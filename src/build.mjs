import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { COPY } from './content.mjs';
import { render } from './template.mjs';

/* Preview builds carry a real business's brand on a URL that is not theirs:
   noindex + canonical at the preview so this can never compete with fridaskart.is. */
const PREVIEW_ORIGIN = process.env.PREVIEW_ORIGIN || '';
const isPreview = Boolean(PREVIEW_ORIGIN);

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'en'), { recursive: true });
await cp(join(root, 'public'), dist, { recursive: true });

/* favicon: her own lowercase í dot, the one mark in the logo that is hers */
await writeFile(join(dist, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="12" fill="#FBFBF9"/>
<rect x="27" y="26" width="10" height="24" rx="2" fill="#141414"/>
<circle cx="32" cy="17" r="5" fill="#A49358"/>
</svg>`);

const opts = { previewOrigin: PREVIEW_ORIGIN, noindex: isPreview };
await writeFile(join(dist, 'index.html'), render(COPY.is, { assetBase: '', ...opts }));
await writeFile(join(dist, 'en', 'index.html'), render(COPY.en, { assetBase: '../', ...opts }));
if (isPreview) await writeFile(join(dist, '.nojekyll'), '');

const O = PREVIEW_ORIGIN || 'https://fridaskart.is';
await writeFile(join(dist, 'robots.txt'), isPreview
  ? `User-agent: *\nDisallow: /\n`
  : `User-agent: *\nAllow: /\nSitemap: ${O}/sitemap.xml\n`);
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${O}/</loc>
    <xhtml:link rel="alternate" hreflang="is" href="${O}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${O}/en/"/>
  </url>
  <url><loc>${O}/en/</loc>
    <xhtml:link rel="alternate" hreflang="is" href="${O}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${O}/en/"/>
  </url>
</urlset>
`);
console.log(`built dist/index.html + dist/en/index.html${isPreview ? ' [preview noindex]' : ''}`);
