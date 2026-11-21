import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE, formatPrice } from '../data/catalog';
import type { Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface HeroSectionProps {
  featuredProduct: Product;
  onShopCollection: () => void;
  onExploreStory: () => void;
  onInspectFeatured: (product: Product) => void;
}

export function HeroSection({
  featuredProduct,
  onShopCollection,
  onExploreStory,
  onInspectFeatured,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF8F5]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 68% 65% at 76% 42%, rgba(180, 83, 9, 0.085), rgba(250, 248, 245, 0) 70%)',
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pr-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A5B13]">
              Autumn — Winter Atelier Edit
            </p>

            <h1
              className="mt-4 font-bold tracking-[-0.025em] text-[#18181B] leading-[1.06] headline-balance"
              style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)' }}
            >
              Crafted for Every Moment Ahead
            </h1>

            <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.68] text-[#57534E] max-w-[50ch]">
              Curated men&apos;s, women&apos;s, and couple watches alongside
              classic leather wallets—delivered across Pakistan with 100% Cash
              on Delivery (COD) nationwide.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onShopCollection}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-[#FAF8F5] px-7 py-3.5 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-200 whitespace-nowrap shrink-0 shadow-[0_8px_20px_-10px_rgba(24,24,27,0.45)]"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreStory}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#18181B]/25 hover:border-[#18181B] hover:bg-white text-[#18181B] px-7 py-3.5 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Explore Story
              </button>
            </div>

            {/* Expressive Italic / Script-Inspired Editorial Callout Note */}
            <div className="mt-8 pt-6 border-t border-[#E6E0D6] flex flex-wrap items-center justify-between gap-4">
              <p className="font-editorial italic text-[22px] sm:text-[24px] leading-snug text-[#8C5619]">
                “Timeless pieces for daily life”
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#6B655E]">
                <span>100% Cash on Delivery (COD) Nationwide</span>
                <span aria-hidden="true">·</span>
                <span>Watches &amp; Leather Wallets</span>
              </div>
            </div>
          </div>

          {/* Right Studio Visual Column with Vertical Stacked Tag */}
          <div className="lg:col-span-6 flex items-stretch gap-3 sm:gap-5">
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#EFEAE1] border border-[#E4DDD2] shadow-[0_24px_60px_-28px_rgba(31,29,27,0.28)] min-h-[320px] sm:min-h-[420px] lg:min-h-[490px] group">
              <StudioImage
                src={HERO_IMAGE}
                alt="Aamash Collection Cartier Tank Watch with rectangular Roman numeral dial and black leather strap"
                loading="eager"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* Subtle bottom studio caption bar linking to hero spotlight timepiece */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#18181B]/78 via-[#18181B]/35 to-transparent p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#E6CFAF]">
                    Spotlight Piece
                  </p>
                  <p className="text-[15px] sm:text-[16px] font-semibold text-white mt-0.5">
                    {featuredProduct.name}
                  </p>
                  <p className="text-[12.5px] text-white/80 tabular-nums mt-0.5">
                    {formatPrice(featuredProduct.pricePkr)} · {featuredProduct.collection}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onInspectFeatured(featuredProduct)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/95 hover:bg-white text-[#18181B] px-4 py-2 text-[12.5px] font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Clean Vertical Stacked Edge Label */}
            <div
              className="hidden sm:flex flex-col items-center justify-center shrink-0 select-none py-2"
              aria-hidden="true"
            >
              <span className="w-px h-10 bg-[#D6CEC2] mb-4" />
              <span className="writing-vertical text-[11px] font-medium tracking-[0.3em] uppercase text-[#78716C]">
                STYLE • CRAFT • DAILY • EDIT
              </span>
              <span className="w-px h-10 bg-[#D6CEC2] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
