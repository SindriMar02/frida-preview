# Design System: FRÍÐA — Heimildin (The Source)

Design read: heritage-goldsmith catalogue (250 products in 8 story-collections) for
design-conscious buyers and visitors to Skólavörðustígur, in an ARCHIVE / museum-label
language, leaning toward a chaptered-narrative structure on porcelain with her own
gold as the only accent.
Dials: VARIANCE 7 · MOTION 6 · DENSITY 4.

## 1. Concept — hers, and verifiable line by line

Fríða does not design ornament. **Every collection is traced from a real, datable
Icelandic object**, and her own product copy says so:

| Collection | The source | Date |
|---|---|---|
| Celts & Kings (128) | Nordic Tongue Brooch + Celtic Three-Armed Brooch, found in pagan graves | ~1,000 years old |
| The Comb (32) | a comb artifact; early Icelandic women at their own moment of self-care | (same find horizon) |
| Creatures from the Past (88) | two wood carvings in Árnes church, Trékyllisvík, Strandir | 17th century |
| The Traveler (27) | an old side saddle; plant tendrils shaped into overlapping circles | 17th century |
| Acanthus (16) | traditional Icelandic wood carving, **her own family's piece** | traditional |
| Knitting (91) | the pattern stitches make when knitted together | living craft |
| Seashells (61) + Bubble Seaweed (17) | shells and seaweed of the shore she was raised by | living nature |
| Molecule (13) | the molecular structure of silver, remembered from a chemistry class | present |

One sentence to the owner: **„Hver lína á sér heimild."** (Every line has a source.)

**THE SIGNATURE, and it is earned, not decorative: the catalogue is a thousand-year
timeline.** Her collections genuinely span from ~1000 AD pagan graves to a chemistry
classroom, so the page's spine is a **dateline** the reader scrolls along, with each
chapter pinned at its own point in time. This is an instrument that reads real data
(craft ledger #2), and no other build in the workspace has it.

## 2. Anti-convergence against the Orr build (same week, same sector)

| | Orr | Fríða |
|---|---|---|
| ground | cool grey sheet + navy plate | porcelain white, one oxidised-black chapter well |
| accent | gold #A8965C | her own gold, sampled separately (#A49358 measured) |
| type | Bodoni Didone wordmark + Apfel grotesk | her lowercase logo + a different grotesk, NEVER Bodoni |
| engine | ERNA vanilla damped, horizontal journey | chaptered vertical narrative, scrubbed dateline |
| signature | pointer tilt on a loose stone | the dateline instrument + source/piece pairing |
| spine | three states of one metal | eight sources across a millennium |

Keyframes and classes are prefixed `fr-` (no style bleed).

## 3. Tokens — sampled from HER photography, not chosen

Measured across nine of her collection photographs:
```
--paper   #FBFBF9   (her studio ground, measured 87,696px)
--paper-2 #F2F1ED
--ink     #141414   (oxidised silver, measured 65,443px)
--ink-2   #3A3A38
--mute    #6E6E6A
--gull    #A49358   ← the only accent, her 14k gold, measured 2,736px
--gull-dk #7E7047   (same hue, AA at 12px on paper)
```
One dark well (`--ink`) for the deepest chapter only; everything else is paper.

## 4. Type (verify Icelandic against the binaries before use)

- **Wordmark:** her real logo, `WebLogo.jpg` 262x90, a soft lowercase "fríða" with the
  accent on the í. Convert black-on-white JPG to ink-on-alpha (`alpha = 255 - luminance`),
  crop to bbox, pin by HEIGHT in the nav (per the Hildur Yeoman logo note).
- **Display:** Cabinet Grotesk (not used on Orr).
- **Body:** General Sans or Switzer, whichever clears Icelandic and does not repeat Orr.
- **Register:** Azeret Mono for dates, accession lines, prices, karat (Orr uses Commit Mono).

## 5. Structure

`intro → dateline hero → 6 chapters (pinned on the dateline) → verkstæðið → catalogue → heimsókn`

Each chapter is one beat, and the beat is a **museum accession entry**:
`HEIMILD` (the source, in her words) · the date, in mono, sitting on the dateline ·
the piece that carries the pattern, full width · her own price band linking to the shop.

Only 6 of the 8 collections get chapters (the strongest sources); the remaining two
appear in the catalogue index. Never invent a source she has not published.

## 6. Assets — good news, verified

- 500 images, **401 at ≥2000px**, several 4000x4000; homepage studio shots up to 5472x3648
  (a pile of ~30 silver rings, a curve of gold rings, a bracelet with rings).
- Packshots are subject-small on white, so **crop to the piece** before any full-bleed use
  (the Orr Laus lesson).
- 63 non-square frames are the closest thing to lifestyle photography; contact-sheet them
  individually and name what each shows before captioning (ledger #43/#96d).

## 7. Honesty model

Every date, find-site and story verbatim from her own product copy. Prices are hers
(3.500 to 570.000 kr, median 37.500). No fabricated artifact photography: if a source
object cannot be shown from her own assets, it is named in type, never illustrated.
The custom-order lead time she publishes (2 days to 3 weeks) belongs on the page.
Preview ships noindex + canonical at the preview.

## 8. Current-site pitch ammo (measured 2026-08-11)

Shopify, 244 crawlable words, **zero JSON-LD**, no meta description, **no h1**, title is
just "FríðaSkart". A thousand years of provenance is completely invisible to search.
