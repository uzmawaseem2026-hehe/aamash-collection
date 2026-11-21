import { ArrowRight } from 'lucide-react';
import { FEATURED_CATEGORIES } from '../data/catalog';
import type { CategoryId } from '../types/store';
import { StudioImage } from './StudioImage';

interface CategorySectionProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onViewAllCategories: () => void;
}

export function CategorySection({
  activeCategory,
  onSelectCategory,
  onViewAllCategories,
}: CategorySectionProps) {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="py-16 sm:py-20 bg-[#FAF8F5]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A5B13]">
              Shop by Category
            </p>
            <h2
              id="categories-heading"
              className="mt-2 text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] text-[#18181B] leading-tight"
            >
              Find Your Signature Piece
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllCategories}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#18181B] hover:text-[#9A5B13] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Category Grid (Watches & Leather Wallets) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURED_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`group text-left bg-white rounded-xl border transition-all duration-200 overflow-hidden flex flex-col focus-visible:outline-2 ${
                  isSelected
                    ? 'border-[#9A5B13] shadow-[0_12px_28px_-14px_rgba(154,91,19,0.28)]'
                    : 'border-[#E7E2DA] hover:border-[#CFC7BA] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgba(24,24,27,0.14)]'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC]">
                  <StudioImage
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-[#18181B] group-hover:text-[#9A5B13] transition-colors leading-snug">
                      {category.name}
                    </h3>
                    <p className="text-[12px] text-[#6B655E] mt-1 line-clamp-1">
                      {category.shortDesc}
                    </p>
                  </div>

                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#9A5B13] group-hover:gap-1.5 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
