import type {
  CategoryInfo,
  JournalArticle,
  OrderRecord,
  Product,
} from '../types/store';
import { STORE_CONFIG } from './storeConfig';

export const CARTIER_TANK_IMAGES = [
  '/assets/aistudio/MZ3093200044CR-media-1_19e17dfe.webp',
  '/assets/aistudio/MZ3093200044CR-media-2_a5e5e483.webp',
];

export const WOMENS_BLACK_WATCH_IMAGES = [
  '/assets/aistudio/MZ1119204202BYBR-media-1_35e423f8.webp',
  '/assets/aistudio/MZ1119204202BYBR-media-2_f112f92d.webp',
  '/assets/aistudio/MZ1119204202BYBR-media-3_5b482ba1.webp',
];

export const MENS_DOUBLE_FOLD_WALLET_IMAGES = [
  '/assets/aistudio/MZ32400000165MASGML-media-1_d9ccd5f6.webp',
  '/assets/aistudio/MZ32400000165MASGML-media-2_bee1ffdf.webp',
  '/assets/aistudio/MZ32400000165MASGML-media-4_a498ccb4.webp',
  '/assets/aistudio/MZ32400000165MASGML-media-6_f27361f1.webp',
];

export const GOLDEN_DIAMOND_WATCH_IMAGES = [
  '/assets/aistudio/MZ3578200013JE-media-1_ed1399dc.webp',
  '/assets/aistudio/MZ3578200013JE-media-2_49c382d3.webp',
  '/assets/aistudio/MZ3578200013JE-media-3_538edb8f.webp',
];

export const CRYSTAL_TIME_WATCH_IMAGES = [
  '/assets/aistudio/MZ2706200070FXVE-media-1_052bbbb6.webp',
  '/assets/aistudio/MZ2706200070FXVE-media-2_f50026d4.webp',
];

export const BROWN_SILICONE_WATCH_IMAGES = [
  '/assets/aistudio/MZ101320009ZBSP-media-1_8aa5b1d1.jpg',
  '/assets/aistudio/MZ101320009ZBSP-media-2_7a8aa4ea.jpg',
  '/assets/aistudio/MZ101320009ZBSP-media-3_d6cb60ad.jpg',
];

export const WOMENS_LEATHER_WALLET_IMAGES = [
  '/assets/aistudio/MZ1990200728SNPICL-media-1_5c91c9d2.webp',
  '/assets/aistudio/MZ1990200728SNPICL-media-3_61c4e776.webp',
  '/assets/aistudio/MZ1990200728SNPICL-media-9_736d9ad9.webp',
  '/assets/aistudio/MZ1990200728SNPICL-media-5_586a7eba.webp',
];

export const COUPLE_DIAMOND_WATCH_IMAGES = [
  '/assets/aistudio/MZ1156200116TEWEHB-media-1_d78ceb92.webp',
  '/assets/aistudio/MZ1156200116TEWEHB-media-3_51ea6697.webp',
  '/assets/aistudio/MZ1156200116TEWEHB-media-2_970ec78d.webp',
  '/assets/aistudio/MZ1156200116TEWEHB-media-4_35f5f6c1.webp',
  '/assets/aistudio/MZ1156200116TEWEHB-media-5_a6d134c1.webp',
  '/assets/aistudio/MZ1156200116TEWEHB-media-6_3117fef9.webp',
];

export const ARABIC_AURA_WATCH_IMAGES = [
  '/assets/aistudio/MZ1841200005TETGTE-media-1_f4756daa.webp',
  '/assets/aistudio/MZ1841200005TETGTE-media-2_b3163c2c.webp',
  '/assets/aistudio/MZ1841200005TETGTE-media-7_d1990d0f.webp',
];

export const MENS_PU_LEATHER_WALLET_IMAGE =
  '/assets/aistudio/MZ2706200082FXVE-media-1_6d80cffe.webp';

export const LUXURY_MENS_LONG_WALLET_IMAGES = [
  '/assets/aistudio/MZ32400000191MASGML-media-1_52149e71.webp',
  '/assets/aistudio/MZ32400000191MASGML-media-2_46fb4f3d.webp',
  '/assets/aistudio/MZ32400000191MASGML-media-3_ad698bd7.webp',
  '/assets/aistudio/MZ32400000191MASGML-media-7_39ff106e.webp',
  '/assets/aistudio/MZ32400000191MASGML-media-4_b96494dc.webp',
  '/assets/aistudio/MZ32400000191MASGML-media-5_28dfa5fa.webp',
];

export const COUPLE_STEEL_36MM_WATCH_IMAGES = [
  '/assets/aistudio/MZ3552200043ZBCS-media-1_b5497489.webp',
  '/assets/aistudio/MZ3552200043ZBCS-media-4_07a89b4c.webp',
  '/assets/aistudio/MZ3552200043ZBCS-media-3_beb03ce3.webp',
  '/assets/aistudio/MZ3552200043ZBCS-media-2_988d69e8.webp',
];

export const COUPLE_ROSE_GOLD_36MM_WATCH_IMAGES = [
  '/assets/aistudio/MZ2227200044HSTS-media-1_782e3caf.png',
  '/assets/aistudio/MZ2227200044HSTS-media-2_6fe9aa3c.webp',
  '/assets/aistudio/MZ2227200044HSTS-media-3_9aea9d0f.webp',
  '/assets/aistudio/MZ2227200044HSTS-media-7_dd08d82a.webp',
];

export const DIAMOND_STONE_MENS_WATCH_IMAGES = [
  '/assets/aistudio/MZ32400000158MASGML-media-1_df3d4ddf.webp',
  '/assets/aistudio/MZ32400000158MASGML-media-2_10bdf09a.webp',
  '/assets/aistudio/MZ32400000158MASGML-media-3_e14715e7.webp',
];

export const HORSE_IMPORTED_WALLET_IMAGE =
  '/assets/aistudio/MZ1990201282SNPICL-media-1_98c891e5.webp';

export const SHORT_MENS_CARD_HOLDER_WALLET_IMAGES = [
  '/assets/aistudio/MZ1990201303SNPICL-media-1_c67ccfa0.webp',
  '/assets/aistudio/MZ1990201303SNPICL-media-2_3020d526.webp',
];

export const MENS_SLIM_BIFOLD_WALLET_IMAGES = [
  '/assets/aistudio/MZ67400000305CYCH-media-1_0864b76d.webp',
  '/assets/aistudio/MZ67400000305CYCH-media-2_5f53b50f.webp',
  '/assets/aistudio/MZ67400000305CYCH-media-3_4a7275ce.webp',
  '/assets/aistudio/MZ67400000305CYCH-media-4_ccf23765.webp',
];

export const MENS_SLIM_ZIPPER_WALLET_IMAGES = [
  '/assets/aistudio/MZ2227200010HSTS-media-1_63cc26d1.webp',
  '/assets/aistudio/MZ2227200010HSTS-media-2_d79a14f2.webp',
  '/assets/aistudio/MZ2227200010HSTS-media-3_0f89e8c1.webp',
];

export const WHITE_SQUARE_GOLD_WATCH_IMAGES = [
  '/assets/aistudio/MZ1156200132TEWEHB-media-1_8dc52255.webp',
  '/assets/aistudio/MZ1156200132TEWEHB-media-3_5fa40542.webp',
  '/assets/aistudio/MZ1156200132TEWEHB-media-2_0cc31042.webp',
  '/assets/aistudio/MZ1156200132TEWEHB-media-4_0e3e8dba.webp',
];

export const TISSOT_COUPLE_BLACK_QUARTZ_IMAGE =
  '/assets/aistudio/MZ67400000300CYCH-media-1_c30edb0e.webp';

export const SILVER_SQUARE_STEEL_QUARTZ_IMAGES = [
  '/assets/aistudio/MZ3427200008AK-media-1_3e306a13.webp',
  '/assets/aistudio/MZ3427200008AK-media-2_8d184c53.webp',
];

export const MEN_SQUARE_BLACK_DIAL_STEEL_IMAGES = [
  '/assets/aistudio/MZ1761200001BINB-media-1_8fcbf46c.webp',
  '/assets/aistudio/MZ1761200001BINB-media-6_81657eff.webp',
];

export const MENS_STEEL_CHAIN_8MM_SILVER_IMAGE =
  '/assets/aistudio/MZ3552200061ZBCS-media-1_5ad6dd0a.webp';

export const MENS_BLACK_ULTRA_THIN_STEEL_IMAGE =
  '/assets/aistudio/MZ268200091ZOUESE-media-1_adbfa86f.webp';

export const PREMIUM_MENS_HEX_WALLET_IMAGES = [
  '/assets/aistudio/MZ1156200148TEWEHB-media-1_4b52d55d.webp',
  '/assets/aistudio/MZ1156200148TEWEHB-media-2_c3ce8021.webp',
  '/assets/aistudio/MZ1156200148TEWEHB-media-3_71720167.webp',
  '/assets/aistudio/MZ1156200148TEWEHB-media-4_400debd8.webp',
];

export const SHORT_MENS_KINGDUSHI_WALLET_IMAGES = [
  '/assets/aistudio/MZ1990201306SNPICL-media-5_91770f36.webp',
  '/assets/aistudio/MZ1990201306SNPICL-media-1_813caea7.webp',
  '/assets/aistudio/MZ1990201306SNPICL-media-2_1fa3ab61.webp',
  '/assets/aistudio/MZ1990201306SNPICL-media-3_f1a0b2fb.webp',
  '/assets/aistudio/MZ1990201306SNPICL-media-4_ec042754.webp',
];

export const HERO_IMAGE = CARTIER_TANK_IMAGES[0];
export const BANNER_MENS_IMAGE = '/src/assets/images/banner_mens_editorial_1795088614695.jpg';
export const BANNER_WOMENS_IMAGE = '/src/assets/images/banner_womens_editorial_1795088614781.jpg';

export const FLAT_DELIVERY_FEE_PKR = STORE_CONFIG.flatDeliveryFeePkr;

export function formatPrice(pkrAmount: number): string {
  return `Rs. ${Math.round(pkrAmount).toLocaleString('en-PK')}`;
}

export const WATCH_CATEGORIES = new Set(['watches']);

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'watches',
    name: 'Watches',
    shortDesc: 'Classic dress, steel & couple watches',
    image: CARTIER_TANK_IMAGES[0],
  },
  {
    id: 'leather-wallets',
    name: 'Leather Wallets',
    shortDesc: 'Stylish bifold, zipper & long leather wallets',
    image: MENS_PU_LEATHER_WALLET_IMAGE,
  },
];

export const FEATURED_CATEGORIES: CategoryInfo[] = CATEGORIES;

export const ATELIER_SUBCOLLECTIONS = [
  {
    id: 'all-pieces',
    name: 'ALL PIECES',
    categoryTarget: 'all' as const,
    mark: 'arch',
  },
  {
    id: 'watches',
    name: 'WATCHES',
    categoryTarget: 'watches' as const,
    mark: 'dial',
  },
  {
    id: 'leather-wallets',
    name: 'LEATHER WALLETS',
    categoryTarget: 'leather-wallets' as const,
    mark: 'stitch',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'cartier-tank-watch',
    sku: 'AC-CT-001',
    name: 'Cartier Tank Watch',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Rectangular Roman Dial · Silver Case · Black Leather Strap',
    pricePkr: 1500,
    rating: 4.9,
    reviewCount: 46,
    image: CARTIER_TANK_IMAGES[0],
    images: CARTIER_TANK_IMAGES,
    bestseller: true,
    editorialTag: 'Bestseller',
    inStock: true,
    description:
      "Classic rectangular dial men's dress watch with a sleek, timeless aesthetic suitable for formal and everyday wear.",
    craftsmanshipNote:
      'Features crisp Roman numerals, blued sword hands, polished rectangular silver case, and textured black leather strap.',
    variants: [
      { id: 'black-leather', label: 'Black Embossed Leather', swatchHex: '#18181B' },
    ],
    specs: [
      { label: 'Case Shape', value: 'Classic Rectangular Tank Profile' },
      { label: 'Dial', value: 'White Textured Dial · Roman Numerals' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Strap', value: 'Black Textured Leather with Pin Buckle' },
    ],
  },
  {
    id: 'moonston-black-square-watch',
    sku: 'AC-WW-002',
    name: 'Moonston Black Square Crystal Watch',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Brushed Black Square Dial · Crystal-Studded Lugs · Black Strap',
    pricePkr: 1300,
    rating: 4.9,
    reviewCount: 38,
    image: WOMENS_BLACK_WATCH_IMAGES[0],
    images: WOMENS_BLACK_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Sleek square black-dial women's quartz watch framed by a polished silver bezel, sparkling crystal-studded lugs, and a comfortable matte black strap with twisted silver accent ring—ideal for daily and festive wear.",
    craftsmanshipNote:
      'Checked before dispatch from Kasur with crisp silver baton hour markers and secure pin-buckle closure.',
    variants: [
      { id: 'jet-black-silver', label: 'Jet Black & Silver Crystal', swatchHex: '#18181B' },
    ],
    specs: [
      { label: 'Case Design', value: 'Square Silver Case · Crystal-Studded Lugs' },
      { label: 'Dial', value: 'Brushed Black Dial · Silver Baton Markers' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Strap', value: 'Matte Black Soft Strap · Silver Accent Ring' },
    ],
  },
  {
    id: 'mens-golden-diamond-41mm-watch',
    sku: 'AC-GD-003',
    name: "Men's Premium Watch Golden Diamond Dial 41mm Stainless Steel",
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: '41mm Two-Tone Stainless Steel · Golden Diamond Dial · Date Magnifier',
    pricePkr: 4000,
    rating: 4.9,
    reviewCount: 52,
    image: GOLDEN_DIAMOND_WATCH_IMAGES[0],
    images: GOLDEN_DIAMOND_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Premium Edition',
    inStock: true,
    description:
      "Premium 41mm men's stainless steel watch featuring a gleaming two-tone gold and silver bracelet, golden polished bezel, sunburst champagne-gold dial set with sparkling diamond-style hour markers, and a magnified date window at 3 o'clock.",
    craftsmanshipNote:
      'Supplied in a presentation watch box and individually checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'gold-silver-steel', label: 'Two-Tone Gold & Silver Steel', swatchHex: '#D4A024' },
    ],
    specs: [
      { label: 'Case Size', value: '41mm Stainless Steel · Golden Bezel' },
      { label: 'Dial', value: 'Golden Sunburst · Diamond-Style Hour Markers' },
      { label: 'Date Display', value: "3 O'Clock Date with Magnifier Lens" },
      { label: 'Bracelet', value: 'Two-Tone Gold & Silver Stainless Steel' },
    ],
  },
  {
    id: 'mens-double-fold-wallet',
    sku: 'AC-MW-103',
    name: "Men's Double Fold Stylish Wallet",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Two-Tone Pebbled Leather · Snap Button · ID Window & Card Slots',
    pricePkr: 1100,
    rating: 4.9,
    reviewCount: 94,
    image: MENS_DOUBLE_FOLD_WALLET_IMAGES[0],
    images: MENS_DOUBLE_FOLD_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'Bestseller',
    inStock: true,
    description:
      "Stylish men's double-fold bifold wallet combining pebbled texture leather with a smooth lower accent panel, double contrast stitching, and a sleek silver bar emblem. Opens to a secure snap-button closure, transparent ID window, multiple card slots, and full-length cash pockets for Pakistani currency notes.",
    craftsmanshipNote:
      'Finished with neat double-row stitching and durable snap closure—personally checked before dispatch from Kasur.',
    variants: [
      { id: 'dark-brown', label: 'Dark Brown', swatchHex: '#422B21' },
      { id: 'classic-black', label: 'Classic Black', swatchHex: '#18181B' },
    ],
    specs: [
      { label: 'Style', value: 'Double Fold Bifold · Snap Closure' },
      { label: 'Exterior', value: 'Pebbled & Smooth Two-Tone Leather · Silver Accent' },
      { label: 'Interior', value: 'Clear ID Window · Card Slots · PKR Cash Pocket' },
      { label: 'Colors', value: 'Dark Brown & Classic Black' },
    ],
  },
  {
    id: 'crystal-time-octagon-watch',
    sku: 'AC-CT-004',
    name: 'Crystal Time Octagon Two-Tone Quartz Watch',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Gold Octagonal Screw Bezel · Textured Dial · Two-Tone Steel',
    pricePkr: 1700,
    rating: 4.9,
    reviewCount: 41,
    image: CRYSTAL_TIME_WATCH_IMAGES[0],
    images: CRYSTAL_TIME_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Bold men's quartz wristwatch featuring a brushed gold octagonal bezel with eight signature screws, dark waffle-textured dial with golden baton indices, and a polished two-tone silver and gold stainless steel link bracelet.",
    craftsmanshipNote:
      'Individually checked before Cash on Delivery dispatch from Kasur with secure folding clasp and presentation box.',
    variants: [
      { id: 'gold-silver-dark-dial', label: 'Two-Tone Gold & Silver · Textured Dial', swatchHex: '#C99A2E' },
    ],
    specs: [
      { label: 'Bezel', value: 'Brushed Gold Octagonal Screw-Accent Bezel' },
      { label: 'Dial', value: 'Dark Textured Waffle Dial · Gold Baton Markers' },
      { label: 'Movement', value: 'Crystal Time Precision Quartz Movement' },
      { label: 'Bracelet', value: 'Two-Tone Silver & Gold Stainless Steel' },
    ],
  },
  {
    id: 'mens-brown-silicone-chronograph-watch',
    sku: 'AC-BS-005',
    name: "Men's Brown Silicone Watch with Chronograph & Day Display",
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: '49×43mm Cushion Case · Chronograph & Day Subdials · Vented Brown Silicone Strap',
    pricePkr: 999,
    rating: 4.9,
    reviewCount: 34,
    image: BROWN_SILICONE_WATCH_IMAGES[0],
    images: BROWN_SILICONE_WATCH_IMAGES,
    imageFit: 'contain',
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Bold men's brown silicone wristwatch crafted with a 49mm × 43mm rounded-square case, rich dark brown dial with gold 12 numeral, three gold-framed chronograph, day, and 24-hour subdials, gold-tone crown, and a breathable vented silicone strap made for comfortable everyday wear.",
    craftsmanshipNote:
      'Lightweight vented silicone strap with crisp gold-accent indices and multi-subdial layout—individually checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'chocolate-brown-silicone', label: 'Chocolate Brown Silicone · Gold Accents', swatchHex: '#4E2E23' },
    ],
    specs: [
      { label: 'Case Size', value: '49mm × 43mm Cushion Square Case' },
      { label: 'Dial', value: 'Dark Brown · Chronograph, Day & 24h Subdials' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Strap', value: 'Breathable Vented Brown Silicone Strap' },
    ],
  },
  {
    id: 'womens-leather-long-wallet',
    sku: 'AC-WW-104',
    name: "Women's Leather Wallet (Pack of 1)",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Pebbled Leather Long Wallet · 2 Colors · Card Slots, ID Window & Cash Pockets',
    pricePkr: 1300,
    rating: 4.9,
    reviewCount: 42,
    image: WOMENS_LEATHER_WALLET_IMAGES[0],
    images: WOMENS_LEATHER_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Stylish women's pebbled-grain leather long wallet (Pack of 1), available in two versatile colors—Chestnut Brown and Classic Black. Opens into an organized tri-fold interior featuring dedicated card slots, a transparent ID window, and full-length cash compartments tailored to hold Pakistani currency notes flat.",
    craftsmanshipNote:
      'Finished with neat perimeter stitching, textured pebbled grain, and sleek emblem detailing—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'chestnut-brown', label: 'Chestnut Brown', swatchHex: '#6E3B26', imageIndex: 0 },
      { id: 'classic-black', label: 'Classic Black', swatchHex: '#18181B', imageIndex: 1 },
    ],
    specs: [
      { label: 'Pack', value: 'Pack of 1 Long Leather Wallet' },
      { label: 'Colors', value: 'Chestnut Brown & Classic Black (2 Colors)' },
      { label: 'Interior', value: 'Multi Card Slots · Clear ID Window · Full Cash Pockets' },
      { label: 'Finish', value: 'Pebbled Leather Grain · Reinforced Stitching' },
    ],
  },
  {
    id: 'golden-couple-diamond-watches',
    sku: 'AC-CW-006',
    name: 'Golden Couple Watches with Diamond Stones for Couples',
    category: 'watches',
    categoryLabel: 'Couple Watches',
    collection: 'Signature Watches',
    subtitle: 'His & Hers Twin Set · Full Diamond-Stone Bezel & Bracelet · Gift Box Included',
    pricePkr: 1199,
    rating: 4.9,
    reviewCount: 61,
    image: COUPLE_DIAMOND_WATCH_IMAGES[0],
    images: COUPLE_DIAMOND_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Couple Set',
    inStock: true,
    description:
      "Dazzling matching His & Hers couple watch set adorned with sparkling diamond-style crystal stones across the dial, bezel, and link bracelet. Presented together inside a twin cushion gift box—available in Golden, Peach, Silver, Rose Gold, and Pink finishes for weddings, anniversaries, and festive gifting.",
    craftsmanshipNote:
      'Both timepieces are checked together inside their cushioned presentation gift box before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'golden', label: 'Golden', swatchHex: '#D4AF37', imageIndex: 0 },
      { id: 'peach', label: 'Peach', swatchHex: '#DFA78A', imageIndex: 1 },
      { id: 'silver', label: 'Silver', swatchHex: '#C8CDD3', imageIndex: 2 },
      { id: 'rose-gold', label: 'Rose Gold', swatchHex: '#D6B15C', imageIndex: 3 },
      { id: 'pink', label: 'Pink', swatchHex: '#D9A7A7', imageIndex: 4 },
    ],
    specs: [
      { label: 'Set Includes', value: "2 Matching Watches (Men's & Women's) in Gift Box" },
      { label: 'Detailing', value: 'Full Diamond-Style Stone Dial, Bezel & Bracelet' },
      { label: 'Finishes', value: 'Golden · Peach · Silver · Rose Gold · Pink' },
      { label: 'Movement', value: 'Precision Quartz Movement (His & Hers)' },
    ],
  },
  {
    id: 'black-carbon-fiber-arabic-aura-watch',
    sku: 'AC-AA-007',
    name: 'Black Carbon Fiber Arabic Aura Watch for Men',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Matte Stealth Black · Raised Arabic Numerals · Octagonal Integrated Bracelet',
    pricePkr: 999,
    rating: 4.9,
    reviewCount: 58,
    image: ARABIC_AURA_WATCH_IMAGES[0],
    images: ARABIC_AURA_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Bestseller',
    inStock: true,
    description:
      "Minimalist all-black men's Arabic Aura watch crafted with a matte carbon-fiber finish octagonal case, stealth black dial with raised gloss-black Eastern Arabic numerals, sleek black dauphine hands, and a matching integrated link bracelet for sharp everyday and evening style.",
    craftsmanshipNote:
      'Stealth matte-black finish with raised gloss Arabic numerals and slim integrated links—individually checked in its cushioned box before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'matte-stealth-black', label: 'Matte Stealth Black · Arabic Dial', swatchHex: '#141416' },
    ],
    specs: [
      { label: 'Case Design', value: 'Slim Octagonal Matte Black Carbon-Fiber Finish' },
      { label: 'Dial', value: 'Stealth Matte Black · Raised Gloss Arabic Numerals' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Bracelet', value: 'Matte Black Integrated Link Bracelet' },
    ],
  },
  {
    id: 'mens-pu-leather-stylish-wallet',
    sku: 'AC-MW-105',
    name: "Men's PU Leather Stylish Wallet",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Tan Cognac PU Leather · Black Contrast Band · Presentation Box Included',
    pricePkr: 1000,
    rating: 4.9,
    reviewCount: 49,
    image: MENS_PU_LEATHER_WALLET_IMAGE,
    images: [MENS_PU_LEATHER_WALLET_IMAGE],
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Refined men's tan PU leather stylish bifold wallet accented with a sleek black horizontal lower band, metallic Balenberry signature script, and crisp perimeter stitching. Supplied in a black gold-crested gift box and neatly sized for daily cards, ID, and Pakistani currency notes.",
    craftsmanshipNote:
      'Finished with precision edge stitching and boxed presentation—checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'tan-black-band', label: 'Tan Cognac & Black Accent', swatchHex: '#C57B2C' },
    ],
    specs: [
      { label: 'Material', value: 'Smooth Premium PU Leather · Contrast Stitching' },
      { label: 'Design', value: 'Tan Bifold · Black Accent Stripe · Metallic Logo' },
      { label: 'Interior', value: 'Card Slots · Full-Length PKR Cash Pockets' },
      { label: 'Packaging', value: 'Includes Black Balenberry Gift Box' },
    ],
  },
  {
    id: 'luxury-mens-long-wallet',
    sku: 'AC-MW-106',
    name: "Luxury Men's Long Wallet",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Geometric Embossed Grain · 3 Colors · Card Slots, ID Window & Cash Pockets',
    pricePkr: 1000,
    rating: 4.9,
    reviewCount: 67,
    image: LUXURY_MENS_LONG_WALLET_IMAGES[0],
    images: LUXURY_MENS_LONG_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'Bestseller',
    inStock: true,
    description:
      "Executive men's long wallet featuring a distinctive embossed geometric honeycomb pattern, sleek metallic emblem bar, and spacious tri-fold interior. Available in Black, Light Brown, and Dark Brown with dedicated card slots, transparent photo/ID window, and full-length cash pockets sized to keep Pakistani currency notes flat.",
    craftsmanshipNote:
      'Textured pebbled interior with reinforced stitching across every card slot and full cash compartment—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B', imageIndex: 0 },
      { id: 'light-brown', label: 'Light Brown', swatchHex: '#7A4329', imageIndex: 1 },
      { id: 'dark-brown', label: 'Dark Brown', swatchHex: '#3B251B', imageIndex: 2 },
    ],
    specs: [
      { label: 'Colors', value: 'Black · Light Brown · Dark Brown (3 Colors)' },
      { label: 'Exterior', value: 'Geometric Honeycomb Embossed Grain · Metallic Bar Accent' },
      { label: 'Interior', value: '9+ Card Slots · Clear ID Window · Full-Length PKR Cash Pockets' },
      { label: 'Format', value: 'Slim Tri-Fold Executive Long Wallet' },
    ],
  },
  {
    id: 'couple-analog-steel-36mm-watch-set',
    sku: 'AC-CW-008',
    name: 'Couple Analog Watches Steel 36mm Set Premium Quality',
    category: 'watches',
    categoryLabel: 'Couple Watches',
    collection: 'Signature Watches',
    subtitle: 'Matching His & Hers 36mm Set · Gloss Black Crystal Dial · Polished Steel Bracelet',
    pricePkr: 2100,
    rating: 4.9,
    reviewCount: 54,
    image: COUPLE_STEEL_36MM_WATCH_IMAGES[0],
    images: COUPLE_STEEL_36MM_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Premium Set',
    inStock: true,
    description:
      "Premium quality His & Hers couple analog watch set crafted in polished silver and dark-chrome stainless steel. Each quartz timepiece showcases a glossy jet-black dial accented with twin sparkling crystal hour markers at 12, 3, 6, and 9 o'clock, paired with a sleek steel link bracelet.",
    craftsmanshipNote:
      'Coordinated twin couple watch set presented on a soft display cushion—both timepieces are individually inspected before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'silver-black-steel', label: 'Silver & Gunmetal Steel · Gloss Black Dial', swatchHex: '#2C2E33' },
    ],
    specs: [
      { label: 'Set Includes', value: "2 Matching Analog Watches (Men's & Women's Couple Set)" },
      { label: 'Case Size', value: '36mm Balanced Profile · Stainless Steel Case' },
      { label: 'Dial', value: 'Gloss Black Minimal Dial · Twin Crystal Hour Markers' },
      { label: 'Bracelet', value: 'Polished Silver & Dark-Chrome Steel Link Strap' },
    ],
  },
  {
    id: 'couple-analog-steel-36mm-rose-gold-set',
    sku: 'AC-CW-009',
    name: 'Couple Analog Watches Steel 36mm Set Premium Quality (Rose Gold)',
    category: 'watches',
    categoryLabel: 'Couple Watches',
    collection: 'Signature Watches',
    subtitle: 'Rose Gold Only · Iconic Oval Bezel · Crystal-Accent Dials · Steel Link Bracelet',
    pricePkr: 2300,
    rating: 4.9,
    reviewCount: 47,
    image: COUPLE_ROSE_GOLD_36MM_WATCH_IMAGES[0],
    images: COUPLE_ROSE_GOLD_36MM_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Rose Gold Set',
    inStock: true,
    description:
      "Premium quality His & Hers couple analog watch set finished exclusively in radiant Rose Gold stainless steel. Showcases an iconic polished oval bezel silhouette, crystal-accent champagne dials—with a ribbed center men's dial and sparkling stone-halo women's dial—paired with smooth steel link bracelets and secure folding clasps.",
    craftsmanshipNote:
      'Finished exclusively in Rose Gold with factory-wrapped protective clasps—both watches are checked together before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'rose-gold', label: 'Rose Gold', swatchHex: '#D4A373' },
    ],
    specs: [
      { label: 'Color', value: 'Rose Gold Only' },
      { label: 'Set Includes', value: "2 Matching Analog Watches (Men's & Women's Couple Set)" },
      { label: 'Case Profile', value: '36mm Iconic Polished Oval Bezel · Stainless Steel' },
      { label: 'Bracelet', value: 'Rose Gold Steel Link Bracelet · Secure Folding Clasp' },
    ],
  },
  {
    id: 'diamond-stone-mens-luxury-watch',
    sku: 'AC-DS-010',
    name: "Diamond Stone Men's Luxury Fashion Watch (Working Date & Premium Textured Strap)",
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Full Diamond-Stone Tonneau Case · Working Date · Black Crocodile-Textured Strap',
    pricePkr: 3200,
    rating: 4.9,
    reviewCount: 44,
    image: DIAMOND_STONE_MENS_WATCH_IMAGES[0],
    images: DIAMOND_STONE_MENS_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'Luxury Edition',
    inStock: true,
    description:
      "Statement men's tonneau luxury fashion watch set with sparkling pave diamond-style stones across the golden curved case, bezel, side profile, and shimmering dial. Features oversized black statement numerals, a working 6 o'clock date window, compass-marked inner bezel ring, and a premium black crocodile-textured strap with gold buckle.",
    craftsmanshipNote:
      'Hand-checked before Cash on Delivery dispatch from Kasur to verify stone setting, working date advance, and secure clasp closure.',
    variants: [
      { id: 'gold-black-textured', label: 'Gold Diamond-Stone · Black Textured Strap', swatchHex: '#D4AF37' },
    ],
    specs: [
      { label: 'Case Design', value: 'Curved Tonneau Case · Full Pave Diamond-Style Stones' },
      { label: 'Dial & Date', value: 'Stone-Set Dial · Bold Numerals · Working Date Display' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Strap', value: 'Premium Black Crocodile-Textured Strap · Gold Buckle' },
    ],
  },
  {
    id: 'horse-imported-leather-wallet',
    sku: 'AC-HW-107',
    name: 'Horse Imported Leather Wallets Huge Collection',
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Embossed Quilted Exterior · Zippered Pocket, ID Window & Card Slots',
    pricePkr: 1250,
    rating: 4.9,
    reviewCount: 51,
    image: HORSE_IMPORTED_WALLET_IMAGE,
    images: [HORSE_IMPORTED_WALLET_IMAGE],
    bestseller: true,
    editorialTag: 'Imported Collection',
    inStock: true,
    description:
      'Imported Horse Imperial long leather wallet featuring a geometric diamond-quilted embossed exterior and metallic plaque emblem. Designed with multi-tier card slots, a transparent CNIC/ID window, and a full-length zippered cash and coin pocket inside a slim everyday silhouette.',
    craftsmanshipNote:
      'Crafted with reinforced perimeter stitching, smooth zip closure, and crisp quilted grain—individually checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'saddle-tan-brown', label: 'Saddle Tan Brown', swatchHex: '#8B542F' },
    ],
    specs: [
      { label: 'Edition', value: 'Horse Imperial Imported Long Wallet' },
      { label: 'Exterior', value: 'Diamond-Quilted Embossed Leather · Metal Plaque' },
      { label: 'Interior', value: 'Card Slots · Clear CNIC/ID Window · Full Zip Pocket' },
      { label: 'Cash Fit', value: 'Full-Length Flat PKR Currency Compartments' },
    ],
  },
  {
    id: 'short-mens-card-photo-holder-wallet',
    sku: 'AC-MW-108',
    name: 'Short Men Wallets Card Holder Photo Holder',
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Zip-Around Pebbled Leather · Accordion Card, Photo & Folded Cash Slots',
    pricePkr: 999,
    rating: 4.9,
    reviewCount: 45,
    image: SHORT_MENS_CARD_HOLDER_WALLET_IMAGES[0],
    images: SHORT_MENS_CARD_HOLDER_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'Compact Essential',
    inStock: true,
    description:
      "Compact zip-around short men's wallet, card holder, and photo holder crafted in textured pebbled leather with a smooth metal zipper. Opens accordion-style into multiple organized dividers for bank cards, CNIC, photos, coins, and folded currency notes.",
    craftsmanshipNote:
      'Built with a heavy-duty metal wrap-around zipper and clean pleated accordion slots—checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'classic-black', label: 'Classic Black', swatchHex: '#18181B', imageIndex: 0 },
      { id: 'dark-brown', label: 'Dark Brown', swatchHex: '#422B21', imageIndex: 1 },
    ],
    specs: [
      { label: 'Style', value: 'Short Zip-Around Accordion Card & Photo Wallet' },
      { label: 'Material', value: 'Pebbled Grain Leather · Heavy Metal Zipper' },
      { label: 'Interior', value: 'Multi-Slot Accordion Dividers for Cards, Photos & Notes' },
      { label: 'Colors', value: 'Classic Black & Dark Brown' },
    ],
  },
  {
    id: 'mens-leather-bifold-slim-wallet',
    sku: 'AC-MW-109',
    name: "Men's Leather Bi-Fold Wallet Slim",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Ultra-Slim Bi-Fold Profile · 3 Colors (Black, Brown & Blue) · Metallic Trim',
    pricePkr: 900,
    rating: 4.9,
    reviewCount: 48,
    image: MENS_SLIM_BIFOLD_WALLET_IMAGES[0],
    images: MENS_SLIM_BIFOLD_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'Slim Profile',
    inStock: true,
    description:
      "Refined ultra-slim men's bi-fold leather wallet with a clean silver corner accent bar and embossed Aiks Kangaroo emblem. Available in three classic colors—Black, Brown, and Blue—engineered to slip comfortably into trouser or coat pockets without bulk.",
    craftsmanshipNote:
      'Neat perimeter stitching with brushed silver corner reinforcement—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B', imageIndex: 2 },
      { id: 'brown', label: 'Brown', swatchHex: '#4A2F24', imageIndex: 3 },
      { id: 'blue', label: 'Blue', swatchHex: '#1E293B', imageIndex: 0 },
    ],
    specs: [
      { label: 'Profile', value: "Ultra-Slim Men's Bi-Fold Pocket Wallet" },
      { label: 'Colors', value: 'Black · Brown · Blue (3 Colors)' },
      { label: 'Detailing', value: 'Metallic Corner Trim · Perimeter Stitching' },
      { label: 'Capacity', value: 'Card Slots & Full-Length Cash Compartments' },
    ],
  },
  {
    id: 'mens-slim-zipper-leather-wallet',
    sku: 'AC-MW-110',
    name: "Men's Slim Zipper Leather Wallet",
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Baellerry Clutch Edition · Detachable Wrist Strap · Black & Brown Colors',
    pricePkr: 1199,
    rating: 4.9,
    reviewCount: 53,
    image: MENS_SLIM_ZIPPER_WALLET_IMAGES[0],
    images: MENS_SLIM_ZIPPER_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'Clutch Edition',
    inStock: true,
    description:
      "Sleek Baellerry slim zipper men's long leather clutch wallet finished with crosshatch grain texture, polished chrome corner bar, and a detachable hand strap. Available in Black and Brown with a smooth zippered compartment, card slots, and full-length space for cash and phone.",
    craftsmanshipNote:
      'Checked before Cash on Delivery dispatch from Kasur to ensure smooth zipper action, sturdy wrist-strap clasp, and clean corner trim.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B', imageIndex: 1 },
      { id: 'brown', label: 'Brown', swatchHex: '#4A3128', imageIndex: 2 },
    ],
    specs: [
      { label: 'Edition', value: "Baellerry Slim Zipper Clutch Wallet" },
      { label: 'Colors', value: 'Black & Brown (2 Colors)' },
      { label: 'Hardware', value: 'Side Zipper Pull · Chrome Corner Trim · Detachable Wristlet' },
      { label: 'Storage', value: 'Cash Notes, Cards & Smartphone-Friendly Clutch Profile' },
    ],
  },
  {
    id: 'white-square-gold-accents-mens-watch',
    sku: 'AC-WG-011',
    name: 'White Square Analog Watch with Gold Accents for Men',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: '50mm White Cushion-Square Case · Gold Indices & Crown · Vented Silicone Strap',
    pricePkr: 999,
    rating: 4.9,
    reviewCount: 43,
    image: WHITE_SQUARE_GOLD_WATCH_IMAGES[0],
    images: WHITE_SQUARE_GOLD_WATCH_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Crisp all-white men's square analog watch accented with bold golden hour markers, a 12 o'clock gold numeral, three gold-framed day and 24-hour subdials, and a matching gold crown. Built with a comfortable breathable 25mm vented white silicone strap and substantial 50mm case profile.",
    craftsmanshipNote:
      'Lightweight 13mm slim-cushion white case paired with vented silicone strap slots—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'arctic-white-gold', label: 'White · Gold Accents', swatchHex: '#F3F2EE' },
    ],
    specs: [
      { label: 'Case Size', value: '50mm Cushion-Square Profile · 13mm Thickness' },
      { label: 'Dial', value: 'White Dial · Gold 12 Numeral, Indices & Subdials' },
      { label: 'Movement', value: 'Precision Analog Quartz · Gold-Tone Crown' },
      { label: 'Strap', value: '25mm Breathable Vented White Silicone Strap' },
    ],
  },
  {
    id: 'tissot-couple-watches-leather-black-quartz',
    sku: 'AC-CW-012',
    name: 'Tissot Couple Watches Leather Black Quartz (Set of 2)',
    category: 'watches',
    categoryLabel: 'Couple Watches',
    collection: 'Signature Watches',
    subtitle: 'Set of 2 (His & Hers) · Black Roman Dial · Stitched Black Leather Straps',
    pricePkr: 1700,
    rating: 4.9,
    reviewCount: 46,
    image: TISSOT_COUPLE_BLACK_QUARTZ_IMAGE,
    images: [TISSOT_COUPLE_BLACK_QUARTZ_IMAGE],
    bestseller: true,
    editorialTag: 'Couple Set',
    inStock: true,
    description:
      'Matching His & Hers Tissot 1853 quartz couple watch set of 2 featuring sleek matte-black dials, metallic Roman numerals with minute track, silver dauphine hands, polished gunmetal-silver bezels, and stitched black leather straps—crafted for everyday elegance and gifting.',
    craftsmanshipNote:
      'Both men’s and women’s timepieces are paired and quality-checked together before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black-leather-roman', label: 'Matte Black Leather · Black Roman Dial', swatchHex: '#18181B' },
    ],
    specs: [
      { label: 'Set Includes', value: "2 Matching Watches (Men's & Women's Couple Set)" },
      { label: 'Dial', value: 'Matte Black · Silver Roman Numerals & Minute Track' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Strap', value: 'Stitched Matte Black Leather Strap' },
    ],
  },
  {
    id: 'silver-luxury-square-dial-stainless-steel-watch',
    sku: 'AC-SQ-013',
    name: 'Silver Luxury Square Dial Stainless Steel Quartz Watch',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Brushed Silver Cushion-Square Steel · Sunburst Black Dial · Date Window',
    pricePkr: 1700,
    rating: 4.9,
    reviewCount: 44,
    image: SILVER_SQUARE_STEEL_QUARTZ_IMAGES[0],
    images: SILVER_SQUARE_STEEL_QUARTZ_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Refined luxury men's wristwatch featuring a rounded square stainless steel case, sunburst charcoal-black dial with slim applied baton indices, a 6 o'clock date window, and a satin-brushed integrated stainless steel link bracelet with folding clasp.",
    craftsmanshipNote:
      'Individually checked before Cash on Delivery dispatch from Kasur with smooth folding clasp action and crisp sunburst dial finish.',
    variants: [
      { id: 'silver-charcoal-dial', label: 'Brushed Silver Steel · Sunburst Black Dial', swatchHex: '#C4C8CE' },
    ],
    specs: [
      { label: 'Case Design', value: 'Polished Cushion-Square Stainless Steel Case' },
      { label: 'Dial', value: "Sunburst Charcoal-Black · 6 O'Clock Date Window" },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Bracelet', value: 'Satin-Brushed Stainless Steel Link Bracelet · Clasp' },
    ],
  },
  {
    id: 'men-square-watch-black-dial-steel-chain',
    sku: 'AC-SQ-014',
    name: 'Men Square Watch Black Dial Silver Steel Chain Strap',
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Horizontal Ribbed Black Dial · Steel Chain Strap · Silver & Multicolour',
    pricePkr: 1300,
    rating: 4.9,
    reviewCount: 41,
    image: MEN_SQUARE_BLACK_DIAL_STEEL_IMAGES[0],
    images: MEN_SQUARE_BLACK_DIAL_STEEL_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Classic men's cushion-square stainless steel wristwatch featuring a horizontal ribbed black dial, crisp baton indices, and an integrated steel chain link bracelet. Available in all-Silver steel or two-tone Multicolour (gold bezel with gold-silver center links).",
    craftsmanshipNote:
      'Individually inspected with factory protective wrap before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'silver', label: 'Silver', swatchHex: '#C8CDD3', imageIndex: 0 },
      { id: 'multicolour', label: 'Multicolour (Silver & Gold)', swatchHex: '#D4AF37', imageIndex: 1 },
    ],
    specs: [
      { label: 'Finishes', value: 'Silver & Multicolour (Two-Tone Gold/Silver)' },
      { label: 'Dial', value: 'Horizontal Ribbed Black Dial · Baton Hour Markers' },
      { label: 'Movement', value: 'Precision Quartz Movement' },
      { label: 'Bracelet', value: 'Integrated Stainless Steel Chain Link Strap' },
    ],
  },
  {
    id: 'mens-stainless-steel-chain-8mm-silver-watch',
    sku: 'AC-MW-015',
    name: "Men's Gold Stainless Steel Chain Watch 8mm Dial (Silver)",
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'Silver Only · 8mm Slim Profile · Waffle-Textured Dial · Integrated Steel Chain',
    pricePkr: 1400,
    rating: 4.9,
    reviewCount: 39,
    image: MENS_STEEL_CHAIN_8MM_SILVER_IMAGE,
    images: [MENS_STEEL_CHAIN_8MM_SILVER_IMAGE],
    bestseller: true,
    editorialTag: 'Silver Edition',
    inStock: true,
    description:
      "Sleek men's stainless steel chain-link quartz watch finished exclusively in Silver with a slim 8mm case profile. Features a waffle-textured black dial, polished silver bezel ring, crisp baton markers, and an integrated steel chain bracelet.",
    craftsmanshipNote:
      'Slim 8mm case profile with factory protective wrap and smooth integrated links—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'silver', label: 'Silver Only', swatchHex: '#C4C8CE' },
    ],
    specs: [
      { label: 'Color', value: 'Silver Only' },
      { label: 'Profile', value: '8mm Slim Dial Case Profile' },
      { label: 'Dial', value: 'Waffle-Textured Dial · Silver Baton Markers' },
      { label: 'Bracelet', value: 'Integrated Stainless Steel Chain Strap' },
    ],
  },
  {
    id: 'mens-black-stainless-steel-ultra-thin-quartz-watch',
    sku: 'AC-MW-016',
    name: "Men's Black Stainless Steel Ultra Thin Quartz Watch",
    category: 'watches',
    categoryLabel: 'Watches',
    collection: 'Signature Watches',
    subtitle: 'All-Black Ultra Thin · Ribbed Black Dial · Working Date · Black Steel Bracelet',
    pricePkr: 1750,
    rating: 4.9,
    reviewCount: 45,
    image: MENS_BLACK_ULTRA_THIN_STEEL_IMAGE,
    images: [MENS_BLACK_ULTRA_THIN_STEEL_IMAGE],
    bestseller: true,
    editorialTag: 'Ultra Thin',
    inStock: true,
    description:
      "Sleek all-black Reward ultra-thin men's stainless steel quartz watch crafted in a slim cushion-square silhouette. Features a horizontal ribbed black dial with crisp silver baton hour markers, a 3 o'clock date window, and a matching black stainless steel link bracelet.",
    craftsmanshipNote:
      'Ultra-thin black PVD steel case and link bracelet with factory protective wrap—personally checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B' },
    ],
    specs: [
      { label: 'Color', value: 'Black' },
      { label: 'Profile', value: 'Ultra-Thin Cushion-Square Steel Case' },
      { label: 'Dial & Date', value: "Horizontal Ribbed Black Dial · 3 O'Clock Date Window" },
      { label: 'Bracelet', value: 'Integrated Black Stainless Steel Link Strap' },
    ],
  },
  {
    id: 'premium-leather-wallet-for-men-tritone',
    sku: 'AC-MW-111',
    name: 'Premium Leather Wallet for Men',
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Embossed Pebbled Long Wallet · Black, Dark Brown & Light Brown · Metallic Emblem',
    pricePkr: 999,
    rating: 4.9,
    reviewCount: 47,
    image: PREMIUM_MENS_HEX_WALLET_IMAGES[0],
    images: PREMIUM_MENS_HEX_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Slim executive men's premium pebbled leather long wallet accented with an embossed geometric mosaic motif and subtle metallic emblem bar. Available in Black, Dark Brown, and Light Brown with spacious compartments tailored to carry cards, IDs, and Pakistani currency notes flat.",
    craftsmanshipNote:
      'Finished with neat edge stitching and textured pebbled grain—individually checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B', imageIndex: 1 },
      { id: 'dark-brown', label: 'Dark Brown', swatchHex: '#3B251B', imageIndex: 2 },
      { id: 'light-brown', label: 'Light Brown', swatchHex: '#7A4329', imageIndex: 3 },
    ],
    specs: [
      { label: 'Colors', value: 'Black · Dark Brown · Light Brown (3 Colors)' },
      { label: 'Exterior', value: 'Pebbled Leather Grain · Geometric Embossed Pattern' },
      { label: 'Interior', value: 'Card Slots · Full-Length Flat PKR Cash Pockets' },
      { label: 'Detailing', value: 'Metallic Emblem Accent · Reinforced Perimeter Stitching' },
    ],
  },
  {
    id: 'short-mens-kingdushi-card-photo-holder',
    sku: 'AC-MW-112',
    name: 'Short Men Wallets Card Holder Photo Holder (Kingdushi Edition)',
    category: 'leather-wallets',
    categoryLabel: 'Leather Wallets',
    collection: 'Saddle & Grain',
    subtitle: 'Distressed Zip-Around Accordion Card & Cash Wallet · Black & Brown',
    pricePkr: 1199,
    rating: 4.9,
    reviewCount: 41,
    image: SHORT_MENS_KINGDUSHI_WALLET_IMAGES[0],
    images: SHORT_MENS_KINGDUSHI_WALLET_IMAGES,
    bestseller: true,
    editorialTag: 'New Arrival',
    inStock: true,
    description:
      "Compact zip-around short men's wallet, card holder, and photo holder crafted in vintage distressed textured leather with debossed Kingdushi K crest and contrast perimeter stitching. Opens wide into a multi-slot accordion organizer holding bank cards, IDs, photos, and folded PKR currency notes cleanly inside a 8 cm × 11 cm × 2.5 cm pocket profile.",
    craftsmanshipNote:
      'Equipped with a smooth heavy-duty zipper pull, distressed leather-look grain, and multi-gusset accordion card pockets—checked before Cash on Delivery dispatch from Kasur.',
    variants: [
      { id: 'black', label: 'Black', swatchHex: '#18181B', imageIndex: 4 },
      { id: 'brown', label: 'Brown', swatchHex: '#6E3E22', imageIndex: 1 },
    ],
    specs: [
      { label: 'Colors', value: 'Black · Brown (2 Colors)' },
      { label: 'Dimensions', value: '8 cm (W) × 11 cm (H) × 2.5 cm (D) / 3.15" × 4.33" × 0.99"' },
      { label: 'Interior', value: 'Accordion Multi-Card Organizers · Folded Cash & Photo Slots' },
      { label: 'Closure & Finish', value: 'Full Zip-Around Closure · Vintage Distressed Embossed Grain' },
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'inside-the-calibre',
    title: 'Why the Rectangular Dress Watch Remains a Timeless Classic',
    category: 'Watches',
    date: 'October 18, 2026',
    readTime: '4 min read',
    author: 'Aamash Collection Watch Desk',
    excerpt:
      'From formal dinners to everyday cuffs—how a clean rectangular dial with Roman numerals pairs effortlessly with every outfit.',
    image: '/src/assets/images/journal_horology_craft_1795088615223.jpg',
    featuredProductId: 'cartier-tank-watch',
    body: [
      'A rectangular dress watch carries unmistakable architectural poise. Clean vertical sides, crisp Roman numerals, and blued hands sit low on the wrist, slipping neatly beneath tailored cuffs and formal shalwar kameez alike.',
      'Unlike bulky oversized dials that clash with evening wear, a balanced rectangular Tank silhouette looks just as refined with a linen shirt on a casual afternoon as it does at a wedding reception.',
      'Pair it with a black textured leather strap for crisp formal contrast, and wipe the case gently with a soft cloth after wear to keep the polished silver finish gleaming.',
    ],
    craftTakeaway:
      'Wipe the caseback and leather strap gently with a dry microfiber cloth after warm days to preserve finish and suppleness.',
  },
  {
    id: 'golden-diamond-two-tone-statement',
    title: 'The 41mm Golden Diamond Statement: Sunburst Luxury for Every Occasion',
    category: 'Signature Watches',
    date: 'October 29, 2026',
    readTime: '4 min read',
    author: 'Aamash Collection Watch Desk',
    excerpt:
      'A radiant champagne sunburst dial, diamond-cut hour markers, and two-tone gold & stainless steel links—discover why the 41mm golden dress watch commands every room.',
    image: GOLDEN_DIAMOND_WATCH_IMAGES[0],
    featuredProductId: 'mens-golden-diamond-41mm-watch',
    body: [
      'Nothing elevates a tailored wrist quite like the interplay of brushed stainless steel and mirror-polished gold. Framed inside a confident 41mm silhouette, the golden bezel catches ambient light effortlessly from boardroom meetings to wedding receptions.',
      'Across the champagne sunburst dial, sparkling diamond-style indices replace ordinary numerals with unmistakable ceremony, while the magnified date lens at 3 o’clock adds crisp everyday practicality without breaking the dial’s clean symmetry.',
      'Delivered in its structured presentation box from Kasur across Pakistan with 100% Cash on Delivery, this two-tone timepiece moves seamlessly between formal suiting, festive shalwar kameez, and milestone gifting.',
    ],
    craftTakeaway:
      'Buff the polished golden bezel and two-tone stainless steel links lightly with a soft microfiber cloth after wear to preserve their showroom lustre.',
  },
  {
    id: 'pebbled-chestnut-long-wallet-craft',
    title: 'The Pebbled Brown Leather Long Wallet: Refined Everyday Carry',
    category: 'Leather Wallets',
    date: 'November 10, 2026',
    readTime: '3 min read',
    author: 'Aamash Collection Leather Studio',
    excerpt:
      'Rich chestnut pebbled grain, tight perimeter stitching, and a tall slim profile crafted to keep currency notes flat and cards neatly organized.',
    image: WOMENS_LEATHER_WALLET_IMAGES[0],
    featuredProductId: 'womens-leather-long-wallet',
    body: [
      'A tall pebbled leather wallet brings quiet confidence to everyday carry. Its supple chestnut-brown grain resists daily scuffing while feeling naturally warm in the hand, whether slipped into a tailored jacket pocket or set down on a café table.',
      'Designed with crisp perimeter stitching and a signature metallic emblem accent, the elongated silhouette keeps Pakistani Rs. 1,000 and Rs. 5,000 currency notes completely flat and crease-free alongside essential cards and receipts.',
      'Dispatched carefully packed from Kasur with 100% Cash on Delivery across Pakistan, a well-proportioned brown leather wallet pairs effortlessly with both gold-accent and leather-strap timepieces.',
    ],
    craftTakeaway:
      'Brush pebbled brown leather lightly with a clean soft cloth and avoid overstuffing card slots so the silhouette stays crisp.',
  },
];

export const SAMPLE_ORDERS: OrderRecord[] = [
  {
    orderNumber: 'AC-PK-4819',
    placedAt: 'November 14, 2026',
    status: 'In Transit',
    stepIndex: 2,
    customerName: 'Bilal Ahmed',
    customerPhone: '0307-6830150',
    customerEmail: 'bilal.ahmed@example.pk',
    city: 'Kasur',
    shippingAddress: 'House 24-B, Shahbaz Khan Road, Kasur, Punjab',
    paymentMethod: '100% Cash on Delivery (COD)',
    subtotalPkr: 2600,
    discountPkr: 0,
    shippingPkr: FLAT_DELIVERY_FEE_PKR,
    totalPkr: 2600 + FLAT_DELIVERY_FEE_PKR,
    estimatedDelivery: '2–4 Working Days (Nationwide COD)',
    items: [
      {
        key: 'cartier-tank-watch::Black Embossed Leather',
        productId: 'cartier-tank-watch',
        name: 'Cartier Tank Watch',
        subtitle: 'Rectangular Roman Dial · Silver Case · Black Leather Strap',
        image: CARTIER_TANK_IMAGES[0],
        pricePkr: 1500,
        variantLabel: 'Black Embossed Leather',
        quantity: 1,
      },
      {
        key: 'mens-double-fold-wallet::Dark Brown',
        productId: 'mens-double-fold-wallet',
        name: "Men's Double Fold Stylish Wallet",
        subtitle: 'Two-Tone Pebbled Leather · Snap Button · ID Window & Card Slots',
        image: MENS_DOUBLE_FOLD_WALLET_IMAGES[0],
        pricePkr: 1100,
        variantLabel: 'Dark Brown',
        quantity: 1,
      },
    ],
  },
];
