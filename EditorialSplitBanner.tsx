import { ArrowRight } from 'lucide-react';
import { BANNER_MENS_IMAGE, BANNER_WOMENS_IMAGE } from '../data/catalog';
import type { CategoryId } from '../types/store';
import { StudioImage } from './StudioImage';
import { BrandMonogramSeal } from './BrandLogo';

interface EditorialSplitBannerProps {
  onShopCategory: (category: CategoryId) => void;
}

export function EditorialSplitBanner({
  onShopCategory,
}: EditorialSplitBannerProps) {
  const panels: Array<{
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    category: CategoryId;
    image: string;
    alt: string;
  }> = [
    {
      id: 'watches-edit',
      eyebrow: 'Refined Wristwear',
      title: "Built for What's Next",
      description:
        "Classic men's, women's, and matching couple timepieces delivered nationwide across Pakistan with 100% Cash on Delivery.",
      ctaLabel: 'Shop Watches',
      category: 'watches',
      image: BANNER_MENS_IMAGE,
      alt: 'Tailored wool cuff revealing classic watch and warm full-grain leather folio',
    },
    {
      id: 'leather-edit',
      eyebrow: 'Full-Grain Craftsmanship',
      title: 'Elegance in Every Detail',
      description:
        'Classic leather bifolds, slim cardholders, zipper clutches, and long wallets crafted for dependable everyday carry.',
      ctaLabel: 'Shop Leather Wallets',
      category: 'leather-wallets',
      image: BANNER_WOMENS_IMAGE,
      alt: 'Refined timepiece paired with tailored wool coat and espresso full-grain leather wallet',
    },
  ];

  return (
    <section
      aria-label="Seasonal Editorial Collections"
      className="w-full bg-[#18181B]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden group border-b lg:border-b-0 lg:odd:border-r border-white/10"
          >
            <StudioImage
              src={panel.image}
              alt={panel.alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            {/* Measured High-Contrast Gradient Scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#12100E]/90 via-[#12100E]/42 to-[#12100E]/15"
              aria-hidden="true"
            />

            <div className="relative h-full flex flex-col justify-end p-8 sm:p-12 lg:p-14 max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E3B57C]">
                {panel.eyebrow}
              </p>
              <h2 className="mt-2.5 text-[28px] sm:text-[36px] font-bold tracking-[-0.02em] text-white leading-[1.1] headline-balance">
                {panel.title}
              </h2>
              <p className="mt-3 text-[15px] text-[#E6E1D9] leading-relaxed tracking-[0.01em]">
                {panel.description}
              </p>

              <div className="mt-7 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onShopCategory(panel.category)}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#18181B] hover:bg-[#D49A52] hover:text-white px-6 py-3 text-[13.5px] font-semibold transition-colors duration-200 whitespace-nowrap"
                >
                  <span>{panel.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {panel.id === 'leather-edit' && (
                  <BrandMonogramSeal size="md" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
