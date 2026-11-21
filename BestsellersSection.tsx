import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Heart,
  MessageSquare,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
} from 'lucide-react';
import { CATEGORIES, FLAT_DELIVERY_FEE_PKR, formatPrice } from '../data/catalog';
import { STORE_CONFIG, buildWhatsAppUrl } from '../data/storeConfig';
import type { CategoryId, Product, SortOption } from '../types/store';
import { StudioImage } from './StudioImage';

interface BestsellersSectionProps {
  products: Product[];
  activeCategory: CategoryId;
  showAllCatalog: boolean;
  searchQuery: string;
  sortBy: SortOption;
  wishlistIds: string[];
  onCategoryChange: (cat: CategoryId) => void;
  onToggleShowAll: () => void;
  onSortChange: (sort: SortOption) => void;
  onClearSearch: () => void;
  onToggleWishlist: (productId: string) => void;
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export function BestsellersSection({
  products,
  activeCategory,
  showAllCatalog,
  searchQuery,
  sortBy,
  wishlistIds,
  onCategoryChange,
  onToggleShowAll,
  onSortChange,
  onClearSearch,
  onToggleWishlist,
  onQuickAdd,
  onSelectProduct,
}: BestsellersSectionProps) {
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const handleQuickAddClick = (product: Product) => {
    onQuickAdd(product);
    setRecentlyAddedId(product.id);
    window.setTimeout(() => {
      setRecentlyAddedId((prev) => (prev === product.id ? null : prev));
    }, 1400);
  };

  const activeCategoryName =
    activeCategory === 'all'
      ? showAllCatalog
        ? 'Complete Store Collection'
        : 'Our Bestsellers'
      : CATEGORIES.find((c) => c.id === activeCategory)?.name || 'Our Bestsellers';

  const headingText = searchQuery.trim()
    ? `Results for “${searchQuery.trim()}”`
    : activeCategoryName;

  const eyebrowText = searchQuery.trim()
    ? 'CATALOG SEARCH'
    : activeCategory === 'all' && !showAllCatalog
      ? 'FEATURED PRODUCTS'
      : 'STORE COLLECTION';

  const filterTabs: Array<{ id: CategoryId; label: string }> = [
    { id: 'all', label: 'All Pieces' },
    ...CATEGORIES.map((c) => ({ id: c.id as CategoryId, label: c.name })),
  ];

  return (
    <section
      id="catalog"
      aria-labelledby="bestsellers-heading"
      className="py-16 sm:py-20 bg-[#F6F3EE] border-t border-[#EAE5DC]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A5B13]">
              {eyebrowText}
            </p>
            <h2
              id="bestsellers-heading"
              className="mt-2 text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] text-[#18181B] leading-tight"
            >
              {headingText}
            </h2>
          </div>

          <button
            type="button"
            onClick={onToggleShowAll}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#18181B] hover:text-[#9A5B13] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <span>
              {activeCategory === 'all' && showAllCatalog
                ? 'Show Bestsellers Only'
                : 'View All Pieces'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Filter Tabs + Sort Control */}
        <div className="mt-8 pb-5 border-b border-[#E5DFD5] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter collection by category"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#18181B] text-[#FAF8F5]'
                      : 'text-[#57534E] hover:text-[#18181B] hover:bg-[#ECE7DF]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0">
            {searchQuery.trim() && (
              <button
                type="button"
                onClick={onClearSearch}
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-[#9A5B13] hover:text-[#18181B] transition-colors whitespace-nowrap"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear “{searchQuery.trim()}”</span>
              </button>
            )}

            <span className="text-[12.5px] text-[#6B655E] tabular-nums whitespace-nowrap">
              {products.length} {products.length === 1 ? 'piece' : 'pieces'}
            </span>

            <div className="inline-flex items-center gap-2 bg-white border border-[#E3DDD3] rounded-lg px-3 py-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
              <label htmlFor="catalog-sort" className="sr-only">
                Sort products
              </label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="text-[12.5px] font-medium text-[#18181B] bg-transparent focus:outline-none cursor-pointer pr-1"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="mt-10 bg-white border border-[#E6E0D6] rounded-2xl p-10 sm:p-12 text-center">
            {!searchQuery.trim() && activeCategory !== 'all' ? (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A5B13]">
                  New Stock Arriving Soon
                </p>
                <p className="mt-2 text-[18px] font-semibold text-[#18181B]">
                  Fresh {activeCategoryName} are being curated for {STORE_CONFIG.brandName}.
                </p>
                <p className="text-[14px] text-[#6B655E] mt-1.5 max-w-md mx-auto">
                  Message us on WhatsApp for live stock photos and Cash on Delivery
                  booking, or browse our available watches &amp; leather wallets.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      `Assalam-o-Alaikum! Please share available ${activeCategoryName} stock and prices at ${STORE_CONFIG.brandName}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1E6B47] hover:bg-[#175538] text-white px-6 py-2.5 text-[13.5px] font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire on WhatsApp ({STORE_CONFIG.phoneDisplay})</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onCategoryChange('all')}
                    className="inline-flex items-center gap-2 rounded-full border border-[#18181B]/25 hover:border-[#18181B] text-[#18181B] px-6 py-2.5 text-[13.5px] font-semibold transition-colors"
                  >
                    View Available Collection
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-[16px] font-semibold text-[#18181B]">
                  No pieces matched your current selection.
                </p>
                <p className="text-[14px] text-[#6B655E] mt-1.5">
                  Try clearing your search filter or exploring all watches and
                  leather wallets.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClearSearch();
                    onCategoryChange('all');
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white px-6 py-2.5 text-[13.5px] font-semibold transition-colors"
                >
                  Reset All Filters
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {products.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isAdded = recentlyAddedId === product.id;

              return (
                <article
                  key={product.id}
                  className="group bg-white rounded-xl border border-[#E7E2DA] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-18px_rgba(24,24,27,0.14)]"
                >
                  {/* Studio Product Image Surface */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      product.imageFit === 'contain'
                        ? 'bg-white p-2'
                        : 'bg-[#F7F5F0]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      aria-label={`Inspect ${product.name}`}
                      className="block w-full h-full focus-visible:outline-2"
                    >
                      <StudioImage
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-center transition-transform duration-500 ease-out group-hover:scale-[1.035] ${
                          product.imageFit === 'contain'
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />
                    </button>

                    {/* Subtle Unboxed Quiet Text Tag (Zero-Pill Rule) */}
                    {product.editorialTag && (
                      <span className="pointer-events-none absolute top-3.5 left-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7D4B12] bg-[#FAF8F5]/85 backdrop-blur-[2px] px-2 py-0.5 rounded-sm">
                        {product.editorialTag}
                      </span>
                    )}

                    {/* Multi-photo gallery indicator when product has multiple angles */}
                    {product.images && product.images.length > 1 && (
                      <span className="pointer-events-none absolute bottom-3 left-3.5 text-[11px] font-medium text-white bg-[#18181B]/72 backdrop-blur-[2px] px-2.5 py-0.5 rounded-sm tabular-nums">
                        {product.images.length} photos
                      </span>
                    )}

                    {/* Top-Right Wishlist Heart Toggle */}
                    <button
                      type="button"
                      onClick={() => onToggleWishlist(product.id)}
                      aria-label={
                        isWishlisted
                          ? `Remove ${product.name} from wishlist`
                          : `Save ${product.name} to wishlist`
                      }
                      aria-pressed={isWishlisted}
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isWishlisted
                          ? 'bg-[#18181B] text-[#E6B272] shadow-sm'
                          : 'bg-white/90 text-[#57534E] hover:bg-white hover:text-[#9A5B13] border border-[#E7E2DA]/80'
                      }`}
                    >
                      <Heart
                        className={`w-[18px] h-[18px] ${
                          isWishlisted ? 'fill-current' : 'stroke-[1.7]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean unboxed category + collection line */}
                      <div className="flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.12em] text-[#78716C]">
                        <span>{product.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.collection}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="mt-1.5 block text-left w-full"
                      >
                        <h3 className="text-[17px] font-semibold text-[#18181B] group-hover:text-[#9A5B13] transition-colors leading-snug">
                          {product.name}
                        </h3>
                      </button>

                      <p className="mt-1 text-[13px] text-[#6B655E] leading-relaxed line-clamp-1">
                        {product.subtitle}
                      </p>

                      {/* Rating Row */}
                      <div className="mt-3 flex items-center gap-1.5">
                        <div
                          className="flex items-center gap-0.5 text-[#B45309]"
                          aria-label={`Rated ${product.rating} out of 5`}
                        >
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`w-3.5 h-3.5 ${
                                idx < Math.round(product.rating)
                                  ? 'fill-current'
                                  : 'text-[#D6D0C6]'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[12.5px] font-medium text-[#18181B] tabular-nums">
                          {product.rating.toFixed(1)}
                        </span>
                        <span className="text-[12px] text-[#78716C] tabular-nums">
                          ({product.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Baseline-Aligned Price & Quick Actions */}
                    <div className="mt-5 pt-4 border-t border-[#F0ECE4] space-y-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-2">
                          <p className="text-[17.5px] font-bold text-[#18181B] tabular-nums">
                            {formatPrice(product.pricePkr)}
                          </p>
                          {product.compareAtPkr && (
                            <p className="text-[12.5px] text-[#8C857B] line-through tabular-nums">
                              {formatPrice(product.compareAtPkr)}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectProduct(product)}
                          className="text-[12px] font-medium text-[#78716C] hover:text-[#9A5B13] transition-colors whitespace-nowrap"
                        >
                          Details →
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleQuickAddClick(product)}
                          className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-2.5 text-[12.5px] font-semibold transition-colors whitespace-nowrap ${
                            isAdded
                              ? 'bg-[#9A5B13] text-white'
                              : 'bg-[#18181B] hover:bg-[#9A5B13] text-[#FAF8F5]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <a
                          href={buildWhatsAppUrl(
                            `Assalam-o-Alaikum! I would like to order via Cash on Delivery (COD) from ${STORE_CONFIG.brandName}:\n• ${product.name} (${product.sku})\n• Price: ${formatPrice(product.pricePkr)} + ${formatPrice(FLAT_DELIVERY_FEE_PKR)} flat delivery\nPlease confirm my order.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Order ${product.name} on WhatsApp`}
                          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#D8D1C6] hover:border-[#1E6B47] text-[#1F4E37] hover:bg-[#F1F7F4] px-3 py-2.5 text-[12px] font-semibold transition-colors whitespace-nowrap"
                        >
                          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                          <span>Order on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
