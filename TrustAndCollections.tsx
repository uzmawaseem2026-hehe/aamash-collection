import { Headphones, ShieldCheck, Truck, Wallet } from 'lucide-react';
import {
  ATELIER_SUBCOLLECTIONS,
  FLAT_DELIVERY_FEE_PKR,
  formatPrice,
} from '../data/catalog';
import { STORE_CONFIG } from '../data/storeConfig';
import type { CategoryId } from '../types/store';

interface TrustAndCollectionsProps {
  onSelectCollectionCategory: (category: CategoryId) => void;
}

function SubCollectionMark({ type }: { type: string }) {
  switch (type) {
    case 'dial':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 4.2V8L10.6 9.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'stitch':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="2.2" y="3.5" width="11.6" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4.5 6.5H11.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 1.8" />
        </svg>
      );
    case 'arch':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 12.5V8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8V12.5" stroke="currentColor" strokeWidth="1.2" />
          <line x1="2" y1="12.5" x2="14" y2="12.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'compass':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <polygon points="8,2 14,8 8,14 2,8" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" />
        </svg>
      );
    case 'facet':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2L13 6.2L8 14L3 6.2L8 2Z" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="11" height="11" stroke="currentColor" strokeWidth="1.2" />
          <path d="M5.5 10.5L8 5.5L10.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function TrustAndCollections({
  onSelectCollectionCategory,
}: TrustAndCollectionsProps) {
  const trustItems = [
    {
      icon: Wallet,
      title: '100% Cash on Delivery (COD)',
      detail: 'Pay cash at your doorstep nationwide across Pakistan',
    },
    {
      icon: Truck,
      title: `Flat ${formatPrice(FLAT_DELIVERY_FEE_PKR)} Delivery`,
      detail: 'Fast tracked courier across Pakistan in 2–4 working days',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Checked Pieces',
      detail: 'Inspected watches, couple sets & classic leather wallets',
    },
    {
      icon: Headphones,
      title: 'Direct WhatsApp Care',
      detail: `Order & support at ${STORE_CONFIG.phoneDisplay}`,
    },
  ];

  return (
    <div className="w-full">
      {/* 4-Column Trust & Value Bar */}
      <section
        aria-label="Storefront Assurances"
        className="bg-[#F3EFE8] border-y border-[#E5DFD5]"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#9A5B13]">
                    <Icon className="w-[18px] h-[18px] stroke-[1.7]" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[13.5px] font-semibold text-[#18181B] leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-[12.5px] text-[#6B655E] mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monochrome Sub-Collection / Atelier House Strip */}
      <section
        aria-label="Atelier Sub-Collections"
        className="bg-[#FAF8F5] border-b border-[#EAE5DC]"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            {ATELIER_SUBCOLLECTIONS.map((sub) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => onSelectCollectionCategory(sub.categoryTarget)}
                className="inline-flex items-center gap-2 text-[#78716C] hover:text-[#18181B] transition-colors py-1 whitespace-nowrap shrink-0 group"
              >
                <span className="text-[#9C948A] group-hover:text-[#9A5B13] transition-colors">
                  <SubCollectionMark type={sub.mark} />
                </span>
                <span className="text-[11.5px] font-semibold tracking-[0.2em] uppercase">
                  {sub.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
