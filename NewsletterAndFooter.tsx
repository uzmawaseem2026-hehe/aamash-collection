import { Mail, MapPin, Phone } from 'lucide-react';
import { CATEGORIES } from '../data/catalog';
import { STORE_CONFIG, buildWhatsAppUrl } from '../data/storeConfig';
import type { CategoryId } from '../types/store';
import { BrandLogo } from './BrandLogo';

interface NewsletterAndFooterProps {
  onSelectCategory: (category: CategoryId) => void;
  onOpenTracking: () => void;
  onOpenSupport: () => void;
  onOpenJournal: () => void;
  onOpenInfoModal: (
    topic: 'shipping' | 'sizing' | 'heritage' | 'sustainability' | 'privacy' | 'terms'
  ) => void;
}

export function NewsletterAndFooter({
  onSelectCategory,
  onOpenTracking,
  onOpenSupport,
  onOpenJournal,
  onOpenInfoModal,
}: NewsletterAndFooterProps) {
  return (
    <div id="footer-contact">
      {/* Multi-Column Dark Luxury Footer */}
      <footer className="bg-[#0B111E] border-t border-[#D4AF37]/25 text-[#CBD5E1]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-14">
          {/* Centered Prominent V2 Dark Brand Logo */}
          <div className="pb-10 mb-10 border-b border-white/10 flex flex-col items-center text-center">
            <BrandLogo variant="dark-footer" />
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#94A3B8] max-w-xl">
              Curated men&apos;s, women&apos;s, and couple watches alongside
              classic leather wallets—dispatched from Kasur with 100% Cash on
              Delivery (COD) nationwide across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Connect Column */}
            <div className="lg:col-span-4 lg:pr-6">
              <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                Follow Us
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#94A3B8] max-w-sm">
                Stay updated on new watch releases, restocks, and seasonal
                leather drops across our official pages.
              </p>

              {/* Social Media Links
                  Update your exact Aamash Collection Instagram, TikTok, and Facebook URLs
                  in src/data/storeConfig.ts (STORE_CONFIG.socialLinks) */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={STORE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 text-[12px] font-medium text-[#E2E8F0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={STORE_CONFIG.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 text-[12px] font-medium text-[#E2E8F0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
                  </svg>
                  <span>TikTok</span>
                </a>

                <a
                  href={STORE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 text-[12px] font-medium text-[#E2E8F0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14A22.7 22.7 0 0 0 14.31 3c-2.45 0-4.13 1.5-4.13 4.24V9.6H7.4v3.2h2.78V21h3.32Z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div className="lg:col-span-2">
              <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                Shop
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => onSelectCategory(cat.id)}
                      className="hover:text-[#D4AF37] transition-colors text-left"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care Links */}
            <div className="lg:col-span-2">
              <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                Customer Care
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                <li>
                  <button
                    type="button"
                    onClick={onOpenTracking}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Order Tracking
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('shipping')}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Shipping &amp; Returns
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('sizing')}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Watch &amp; Wallet Size Guide
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenJournal}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Leather &amp; Care Guide
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenSupport}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Contact Concierge
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('heritage')}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Our Heritage
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenJournal}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Time &amp; Style Journal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal('sustainability')}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Materials &amp; Longevity
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenSupport}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Private Appointments
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details (Editable in src/data/storeConfig.ts) */}
            <div className="lg:col-span-2">
              <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white">
                Store Contact
              </h3>
              <ul className="mt-4 space-y-3 text-[13px] text-[#CBD5E1]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{STORE_CONFIG.addressLine}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a
                    href={buildWhatsAppUrl(
                      'Assalam-o-Alaikum! I would like assistance with an order.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tabular-nums hover:text-[#D4AF37] transition-colors"
                  >
                    {STORE_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${STORE_CONFIG.email}`}
                    className="min-w-0 break-all hover:text-[#D4AF37] transition-colors"
                  >
                    {STORE_CONFIG.email}
                  </a>
                </li>
                <li className="text-[12px] text-[#94A3B8] pt-1">
                  {STORE_CONFIG.hours}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12.5px] text-[#94A3B8]">
            <p>© 2026 {STORE_CONFIG.brandName}. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <button
                type="button"
                onClick={() => onOpenInfoModal('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('terms')}
                className="hover:text-white transition-colors"
              >
                Terms of Sale
              </button>
              <span aria-hidden="true" className="text-white/20">
                |
              </span>
              <div className="inline-flex items-center gap-1.5">
                <span className="text-[#94A3B8]">Region:</span>
                <span className="font-medium text-white">
                  Pakistan (PKR Rs.)
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
