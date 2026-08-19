import { sndrCredit } from '../../_tools/sndr-credit.mjs';

/* one definition of the credit and the disclaimer, shared by every build */
const CREDIT = sndrCredit({ nefnifall: 'Fríða skartgripir', eignarfall: 'Fríðu skartgripa' });

// FRÍÐA skartgripir — all copy, is + en.
// Every source, date, find-site and price below is lifted verbatim from
// fridaskart.is (Shopify products.json + pages, read 2026-08-11).
// Nothing invented. No em-dashes.
//
// Catalogue snapshot 2026-08-11: 393 products in the SHOP collection.
// Collections: Celts & Kings 128 · Knitting 91 · Creatures 88 · Seashells 61 ·
// The Comb 32 · The Traveler 27 · Bubble Seaweed 17 · Acanthus 16 · Molecule 13.
// Materials: Silver 251 · Gold 155 · White gold 36. Prices 3.500 to 570.000 kr.

export const SITE = {
  brand: 'FRÍÐA',
  brandFull: 'Fríða skartgripir',
  legal: 'Fríða skartgripahönnuður gullsmiður',
  address: 'Skólavörðustígur 18, 101 Reykjavík',
  street: 'Skólavörðustígur 18',
  postal: '101',
  city: 'Reykjavík',
  phone: '565 5454',
  phoneTel: '+3545655454',
  founded: '2007',
  goldsmithSince: '1992',
  people: ['Fríða J. Jónsdóttir', 'Auðunn G. Árnason'],
  origin: 'https://fridaskart.is',
};

/* The six chapters. Every "source" and "date" string is hers, from the
   collection description that ships on every product in that collection. */
const chapters = [
  {
    id: 'keltar',
    img: 'ch-celts.webp',
    station: 0,
    handle: 'celts-kings',
    count: '128',
    is: {
      station: 'um árið 1000',
      name: 'Keltar og konungar',
      source: 'Tvær nælur úr heiðnum kumlum',
      body: 'Fríða byggði línuna á tveimur nælum sem fundist hafa á Íslandi: norrænni tungunælu og keltneskri þriggja arma nælu. Þær komu úr heiðnum kumlum og eru um þúsund ára gamlar.',
      quote: 'Fríða based the collection on two brooches, the Nordic Tongue Brooch & the Celtic Three-Armed Brooch, which were found in old pagan graves and are about 1,000 years old.',
      alt: 'Keltar og konungar armband úr gulli með keltneskri nælu, borið á úlnlið',
    },
    en: {
      station: 'about the year 1000',
      name: 'Celts & Kings',
      source: 'Two brooches from pagan graves',
      body: 'Fríða based the line on two brooches found in Iceland: the Nordic Tongue Brooch and the Celtic Three-Armed Brooch. They came out of old pagan graves and are about a thousand years old.',
      quote: 'Fríða based the collection on two brooches, the Nordic Tongue Brooch & the Celtic Three-Armed Brooch, which were found in old pagan graves and are about 1,000 years old.',
      alt: 'Celts & Kings gold bracelet with a Celtic brooch element, worn on a wrist',
    },
  },
  {
    id: 'kamburinn',
    img: 'ch-comb.webp',
    station: 0,
    handle: 'the-comb',
    count: '32',
    is: {
      station: 'sama fundarlag',
      name: 'Kamburinn',
      source: 'Kambur úr fornleifum',
      body: 'Kamburinn kom inn í Keltar og konungar sem framhald. Fríða sá fyrir sér íslenskar konur til forna nota kambinn sinn, taka sér augnablik fyrir sjálfa sig og hverfa inn í eigin dagdrauma.',
      quote: 'The Comb, which was an artifact that inspired Fríða through visions of early Icelandic women using their combs to have a moment of self-care.',
      alt: 'Kamburinn hringur úr gulli með mynstri kambsins, borinn á hendi',
    },
    en: {
      station: 'the same find horizon',
      name: 'The Comb',
      source: 'A comb among the artifacts',
      body: 'The Comb came into Celts & Kings as its next addition. Fríða pictured early Icelandic women using their combs, taking a moment of self-care and getting lost in their own daydreams.',
      quote: 'The Comb, which was an artifact that inspired Fríða through visions of early Icelandic women using their combs to have a moment of self-care.',
      alt: 'The Comb ring in gold carrying the comb pattern, worn on a hand',
    },
  },
  {
    id: 'kynjaverur',
    img: 'ch-creatures.webp',
    station: 1,
    handle: 'creatures-from-the-past',
    count: '88',
    is: {
      station: '17. öld',
      name: 'Kynjaverur',
      source: 'Tvær tréskurðarmyndir í Árneskirkju',
      body: 'Línan er byggð á tveimur tréskurðarmyndum frá 17. öld sem voru í Árneskirkju í Trékyllisvík á Ströndum. Verurnar sem þar voru skornar ganga aftur í silfri og gulli.',
      quote: 'inspired by two 17th century wood carvings that were located in Ársnes-church in Strandir.',
      alt: 'Kynjaverur hálsmen úr silfri, hafmeyja steypt eftir tréskurðarmynd',
    },
    en: {
      station: '17th century',
      name: 'Creatures from the Past',
      source: 'Two wood carvings in Árnes church',
      body: 'The line is built on two 17th century wood carvings that were in Árnes church in Trékyllisvík, in the Strandir region of the Westfjords. The creatures cut into that wood come back in silver and gold.',
      quote: 'inspired by two 17th century wood carvings that were located in Ársnes-church in Strandir.',
      alt: 'Creatures from the Past silver necklace, a mermaid cast after a wood carving',
    },
  },
  {
    id: 'ferdalangurinn',
    img: 'ch-traveler.webp',
    station: 1,
    handle: 'the-traveler',
    count: '27',
    is: {
      station: '17. öld',
      name: 'Ferðalangurinn',
      source: 'Gamall söðull',
      body: 'Mynstrið er tekið af gömlum söðli frá 17. öld. Grannir plöntuteinungar mynda hringi sem skarast og fléttast saman, og sama flétta gengur í gegnum alla línuna.',
      quote: 'The pattern is formed from slender plant tendrils that are shaped into circular forms that overlap and intertwine.',
      alt: 'Ferðalangurinn eyrnalokkar, oxíderað silfur með gullskífum og plöntumynstri',
    },
    en: {
      station: '17th century',
      name: 'The Traveler',
      source: 'An old side saddle',
      body: 'The pattern is taken from an old side saddle from the 17th century. Slender plant tendrils form circles that overlap and intertwine, and the same braid runs through the whole line.',
      quote: 'The pattern is formed from slender plant tendrils that are shaped into circular forms that overlap and intertwine.',
      alt: 'The Traveler earrings, oxidised silver hoops with gold discs carrying the tendril pattern',
    },
  },
  {
    id: 'akantus',
    img: 'ch-acanthus.webp',
    station: 2,
    handle: 'acanthus',
    count: '16',
    is: {
      station: 'íslensk hefð',
      name: 'Akantus',
      source: 'Útskorinn gripur í eigu fjölskyldunnar',
      body: 'Akantusmynstrið kemur úr hefðbundnum íslenskum tréskurði. Fríða notaði útskorinn grip sem er í eigu fjölskyldu hennar sem fyrirmynd að línunni.',
      quote: 'Fríða used a wood carving piece that belongs to her family as the inspiration for this collection.',
      alt: 'Akantus hálsmen úr gulli borið um háls, lítill útskorinn laufhnútur',
    },
    en: {
      station: 'Icelandic tradition',
      name: 'Acanthus',
      source: 'A carving owned by her family',
      body: 'The acanthus pattern comes out of traditional Icelandic wood carving. Fríða used a carved piece belonging to her own family as the model for the line.',
      quote: 'Fríða used a wood carving piece that belongs to her family as the inspiration for this collection.',
      alt: 'Acanthus gold pendant worn at the neck, a small carved leaf knot',
    },
  },
  {
    id: 'prjonid',
    img: 'ch-knitting.webp',
    station: 2,
    handle: 'knitting',
    count: '91',
    is: {
      station: 'lifandi handverk',
      name: 'Prjónið',
      source: 'Lykkjan sjálf',
      body: 'Mynstrið verður til þegar lykkjur eru prjónaðar saman. Prjónaskapur er rótgróinn í íslenskri menningu og Fríða vildi kinka kolli til þessarar þjóðaríþróttar.',
      quote: 'Knitting is extremely rooted in Icelandic culture and Fríða wanted to nod to this national hobby.',
      alt: 'Prjónið hringur úr gulli með lykkjumynstri prjóns, borinn á hendi',
    },
    en: {
      station: 'a living craft',
      name: 'Knitting',
      source: 'The stitch itself',
      body: 'The pattern is the one that forms when stitches are knitted together. Knitting is deeply rooted in Icelandic culture, and Fríða wanted to nod to this national pastime.',
      quote: 'Knitting is extremely rooted in Icelandic culture and Fríða wanted to nod to this national hobby.',
      alt: 'Knitting ring in gold carrying the knitted stitch pattern, worn on a hand',
    },
  },
];

/* The dateline stations. Four, because her own sources fall into four honest
   groups. Nothing here is a date she has not published. */
const stations = [
  { key: 's0', is: 'um 1000', en: 'about 1000', isSub: 'heiðin kuml', enSub: 'pagan graves' },
  { key: 's1', is: '17. öld', en: '17th century', isSub: 'söðull og tréskurður', enSub: 'saddle and carvings' },
  { key: 's2', is: 'hefð', en: 'tradition', isSub: 'akantus og prjón', enSub: 'acanthus and knitting' },
  { key: 's3', is: 'í dag', en: 'today', isSub: 'verkstæðið', enSub: 'the workshop' },
];

/* Collections not given a chapter still belong in the index. Counts are the
   store's own, fetched from collections.json. */
const index = [
  { is: 'Keltar og konungar', en: 'Celts & Kings', n: '128', handle: 'celts-kings' },
  { is: 'Prjónið', en: 'Knitting', n: '91', handle: 'knitting' },
  { is: 'Kynjaverur', en: 'Creatures from the Past', n: '88', handle: 'creatures-from-the-past' },
  { is: 'Skeljar', en: 'Seashells', n: '61', handle: 'conches' },
  { is: 'Kamburinn', en: 'The Comb', n: '32', handle: 'the-comb' },
  { is: 'Ferðalangurinn', en: 'The Traveler', n: '27', handle: 'the-traveler' },
  { is: 'Klóþang', en: 'Bubble Seaweed', n: '17', handle: 'bubble-seaweed' },
  { is: 'Akantus', en: 'Acanthus', n: '16', handle: 'acanthus' },
  { is: 'Sameindin', en: 'Molecule', n: '13', handle: 'molecule' },
];

export const COPY = {
  is: {
    lang: 'is',
    dir: '/',
    other: { code: 'en', href: '/en/', label: 'EN' },
    title: 'Fríða skartgripir | Skólavörðustígur 18, Reykjavík',
    description:
      'Handsmíðaðir skartgripir eftir Fríðu J. Jónsdóttur. Hver lína er rakin til raunverulegs íslensks gripar: nælur úr heiðnum kumlum, tréskurður frá 17. öld, söðull, akantus og prjónalykkjan. Verkstæði og verslun á Skólavörðustíg 18.',
    skip: 'Fara beint í efni',
    load: { top: 'um 1000', bottom: 'í dag', cap: 'þúsund ár af heimildum' },
    nav: [
      { href: '#heimildir', label: 'Heimildirnar' },
      { href: '#verkstaedid', label: 'Verkstæðið' },
      { href: '#linurnar', label: 'Línurnar' },
      { href: '#heimsokn', label: 'Heimsókn' },
    ],
    navCta: 'Vefverslun',
    hero: {
      standfirst: 'Hver lína á sér heimild',
      lead: 'Fríða hannar ekki skraut. Hvert einasta munstur er rakið til raunverulegs íslensks gripar, og elstu heimildirnar eru um þúsund ára gamlar.',
      meta: ['Skólavörðustígur 18, Reykjavík', 'gullsmiður síðan 1992'],
      alt: 'Sjö grafnir innsiglishringar eftir Fríðu á dökkum fleti, silfur og gull',
      scrollLabel: 'Þúsund ár',
      spanAria: 'Tímalína frá því um árið 1000 til dagsins í dag, með 17. öld þar á milli',
      spanA: 'um 1000', spanASub: 'elsta heimildin',
      spanB: 'í dag', spanBSub: 'verkstæðið',
      spanMid: '17. öld',
    },
    chaptersHead: {
      eyebrow: 'Heimildirnar',
      title: 'Sex línur, sex gripir',
      lead: 'Hver kafli hér að neðan byrjar á gripnum sjálfum: hvað hann er, hvaðan hann kom og hversu gamall hann er. Textinn er hennar eigin.',
      sourceLabel: 'Heimild',
      countLabel: 'verk í línunni',
      cta: 'Skoða línuna',
    },
    chapters: chapters.map((c) => ({ id: c.id, img: c.img, stationIx: c.station, count: c.count, handle: c.handle, ...c.is })),
    stations: stations.map((s) => ({ key: s.key, label: s.is, sub: s.isSub })),
    workshop: {
      eyebrow: 'Verkstæðið',
      title: 'Smíðað á staðnum',
      body: 'Fríða J. Jónsdóttir hefur verið gullsmiður síðan 1992 og rekur verslunina á Skólavörðustíg 18 ásamt Auðuni G. Árnasyni. Verkstæðið er á staðnum og verkin eru smíðuð þar.',
      note: 'Hvert verk er sérsmíðað, svo afgreiðslutími er frá tveimur dögum upp í þrjár vikur. Sé stærðin til á lager fer pöntunin af stað næsta virka dag.',
      noteLabel: 'Afgreiðslutími',
      alt: 'Handsmíðaðir gullhringar eftir Fríðu í boga á ljósum fleti',
      alt2: 'Silfurarmband og hringar eftir Fríðu',
    },
    index: {
      eyebrow: 'Línurnar',
      title: 'Allar línurnar',
      lead: 'Níu línur, allar í vefversluninni á fridaskart.is. Talning úr versluninni 11. ágúst 2026.',
      colName: 'Lína',
      colN: 'Verk',
      note: 'Silfur, 14 karata gull og hvítagull. Verð frá 3.500 kr. upp í 570.000 kr. Sérpantanir og stærðir: verslunin á Skólavörðustíg 18.',
    },
    contact: {
      eyebrow: 'Heimsókn',
      title: 'Skólavörðustígur 18',
      lead: 'Verslunin og verkstæðið eru á sama stað, neðarlega á Skólavörðustíg.',
      rows: [
        { k: 'Heimilisfang', v: 'Skólavörðustígur 18, 101 Reykjavík' },
        { k: 'Sími', v: '565 5454', href: 'tel:+3545655454' },
        { k: 'Vefverslun', v: 'fridaskart.is', href: 'https://fridaskart.is' },
        { k: 'Saga', v: 'Fríða útskrifaðist sem gullsmiður 1992. Opnuðu eigin verslun í Hafnarfirði 2007, fluttu á Skólavörðustíg 18 árið 2015.' },
      ],
      cta: { label: 'Vefverslunin', href: 'https://fridaskart.is' },
      cta2: { label: 'Hringja í 565 5454', href: 'tel:+3545655454' },
    },
    footer: {
      lines: ['Fríða skartgripir', 'Skólavörðustígur 18, 101 Reykjavík', 'Sími 565 5454'],
      ...CREDIT.is,
    },
  },

  en: {
    lang: 'en',
    dir: '/en/',
    other: { code: 'is', href: '/', label: 'ÍS' },
    title: 'Fríða jewellery | Skólavörðustígur 18, Reykjavík',
    description:
      'Handmade jewellery by Fríða J. Jónsdóttir. Every line is traced to a real Icelandic object: brooches from pagan graves, 17th century wood carvings, a side saddle, acanthus and the knitted stitch. Workshop and shop at Skólavörðustígur 18.',
    skip: 'Skip to content',
    load: { top: 'about 1000', bottom: 'today', cap: 'a thousand years of sources' },
    nav: [
      { href: '#heimildir', label: 'The sources' },
      { href: '#verkstaedid', label: 'The workshop' },
      { href: '#linurnar', label: 'The lines' },
      { href: '#heimsokn', label: 'Visit' },
    ],
    navCta: 'Shop',
    hero: {
      standfirst: 'Every line has a source',
      lead: 'Fríða does not design ornament. Every pattern is traced to a real Icelandic object, and the oldest sources are about a thousand years old.',
      meta: ['Skólavörðustígur 18, Reykjavík', 'goldsmith since 1992'],
      alt: 'Seven engraved signet rings by Fríða on a dark ground, silver and gold',
      scrollLabel: 'A thousand years',
      spanAria: 'A timeline from about the year 1000 to today, with the 17th century in between',
      spanA: 'about 1000', spanASub: 'the oldest source',
      spanB: 'today', spanBSub: 'the workshop',
      spanMid: '17th century',
    },
    chaptersHead: {
      eyebrow: 'The sources',
      title: 'Six lines, six objects',
      lead: 'Each chapter below opens with the object itself: what it is, where it came from and how old it is. The words are her own.',
      sourceLabel: 'Source',
      countLabel: 'pieces in the line',
      cta: 'See the line',
    },
    chapters: chapters.map((c) => ({ id: c.id, img: c.img, stationIx: c.station, count: c.count, handle: c.handle, ...c.en })),
    stations: stations.map((s) => ({ key: s.key, label: s.en, sub: s.enSub })),
    workshop: {
      eyebrow: 'The workshop',
      title: 'Made on the premises',
      body: 'Fríða J. Jónsdóttir has been a goldsmith since 1992 and runs the shop at Skólavörðustígur 18 together with Auðunn G. Árnason. The workshop is on site, and the pieces are made there.',
      note: 'Each piece is custom made, so processing time runs from two days up to three weeks. If your size is in stock, the order ships the next business day.',
      noteLabel: 'Processing time',
      alt: 'Hand made gold rings by Fríða arranged in a curve on a pale surface',
      alt2: 'A silver bracelet and rings by Fríða',
    },
    index: {
      eyebrow: 'The lines',
      title: 'Every line',
      lead: 'Nine lines, all in the web shop at fridaskart.is. Counted from the shop on 11 August 2026.',
      colName: 'Line',
      colN: 'Pieces',
      note: 'Silver, 14 carat gold and white gold. Prices from 3,500 kr to 570,000 kr. Custom orders and sizes: the shop at Skólavörðustígur 18.',
    },
    contact: {
      eyebrow: 'Visit',
      title: 'Skólavörðustígur 18',
      lead: 'The shop and the workshop are the same address, low on Skólavörðustígur.',
      rows: [
        { k: 'Address', v: 'Skólavörðustígur 18, 101 Reykjavík' },
        { k: 'Telephone', v: '+354 565 5454', href: 'tel:+3545655454' },
        { k: 'Web shop', v: 'fridaskart.is', href: 'https://fridaskart.is' },
        { k: 'History', v: 'Fríða graduated as a goldsmith in 1992. They opened their own shop in Hafnarfjörður in 2007, and moved to Skólavörðustígur 18 in 2015.' },
      ],
      cta: { label: 'The web shop', href: 'https://fridaskart.is' },
      cta2: { label: 'Call +354 565 5454', href: 'tel:+3545655454' },
    },
    footer: {
      lines: ['Fríða jewellery', 'Skólavörðustígur 18, 101 Reykjavík', 'Telephone 565 5454'],
      ...CREDIT.en,
    },
  },
};

export const INDEX = index;
