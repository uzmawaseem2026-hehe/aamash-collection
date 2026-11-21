import { Award, Clock, Gift, RefreshCw, Wallet } from 'lucide-react';
import { FLAT_DELIVERY_FEE_PKR, formatPrice } from '../data/catalog';
import { STORE_CONFIG } from '../data/storeConfig';

const BENEFITS = [
  {
    icon: Wallet,
    title: '100% Cash on Delivery (COD)',
    subtitle: 'Pay cash at your doorstep nationwide across Pakistan',
  },
  {
    icon: Clock,
    title: `Flat ${formatPrice(FLAT_DELIVERY_FEE_PKR)} Delivery`,
    subtitle: '2–4 day tracked courier from Kasur to every city',
  },
  {
    icon: Gift,
    title: 'Gift-Ready Presentation',
    subtitle: 'Protective watch boxes & wallet packaging included',
  },
  {
    icon: RefreshCw,
    title: '7-Day Easy Replacement',
    subtitle: 'Hassle-free watch & leather wallet exchanges',
  },
  {
    icon: Award,
    title: 'Direct WhatsApp Ordering',
    subtitle: `Quick assistance on ${STORE_CONFIG.phoneDisplay}`,
  },
];

export function FeatureStrip() {
  return (
    <section
      aria-label="Shopping Privileges"
      className="bg-[#F3EFE8] border-b border-[#E5DFD5]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex items-start lg:flex-col lg:items-center lg:text-center gap-3.5 lg:gap-2.5"
              >
                <span className="w-9 h-9 rounded-full bg-white border border-[#E5DFD5] flex items-center justify-center text-[#9A5B13] shrink-0">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </span>
                <div>
                  <h3 className="text-[13px] font-semibold text-[#18181B]">
                    {benefit.title}
                  </h3>
                  <p className="text-[12px] text-[#6B655E] mt-0.5 leading-relaxed">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
