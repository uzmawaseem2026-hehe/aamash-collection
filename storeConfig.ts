/**
 * CENTRAL STORE CONFIGURATION (PAKISTAN COD)
 * Edit these values anytime to update your store details, WhatsApp number,
 * location, or flat nationwide delivery charges.
 */

export const STORE_CONFIG = {
  brandName: 'Aamash Collection',
  tagline: 'Watches & Leather Wallets — 100% Cash on Delivery Nationwide',

  // WhatsApp number in international format without "+" or spaces
  whatsappNumber: '923076830150',
  phoneDisplay: '+92 307 6830150',
  email: 'aamashcollection@gmail.com',

  // Store location in Pakistan
  addressLine: 'Kasur, Punjab, Pakistan',
  cityRegion: 'Kasur, Punjab · 100% Cash on Delivery Nationwide',
  hours: 'Mon–Sun · 10:00 AM – 10:00 PM PKT',

  // Flat nationwide COD delivery charge (in PKR)
  flatDeliveryFeePkr: 250,

  // Social media links — replace these placeholder URLs with your exact
  // Aamash Collection profile/page links once created
  socialLinks: {
    instagram: 'https://www.instagram.com/', // e.g. 'https://www.instagram.com/aamashcollection.pk/'
    tiktok: 'https://www.tiktok.com/', // e.g. 'https://www.tiktok.com/@aamashcollection.pk'
    facebook: 'https://www.facebook.com/', // e.g. 'https://www.facebook.com/aamashcollection.pk'
  },

  // Major delivery cities in Pakistan
  majorCities: [
    'Kasur',
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Quetta',
    'Sialkot',
    'Gujranwala',
    'Hyderabad',
    'Bahawalpur',
    'Other City',
  ],
} as const;

export function buildWhatsAppUrl(message: string): string {
  const digitsOnly = STORE_CONFIG.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
