import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Heart,
  Menu,
  PackageSearch,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react';
import type { CategoryId, Product } from '../types/store';
import {
  FLAT_DELIVERY_FEE_PKR,
  WATCH_CATEGORIES,
  formatPrice,
} from '../data/catalog';
import { BrandHeaderLockup } from './BrandLogo';
import { StudioImage } from './StudioImage';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: CategoryId;
  onNavigateCategory: (category: CategoryId) => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProduct: (product: Product) => void;
  products: Product[];
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenTracking: () => void;
  onOpenSupport: () => void;
}

const NAV_ITEMS: Array<{
  label: string;
  type: 'home' | 'category' | 'section';
  target: string;
  categoryId?: CategoryId;
}> = [
  { label: 'Home', type: 'home', target: 'top' },
  { label: 'Shop', type: 'category', target: 'catalog', categoryId: 'all' },
  { label: 'Watches', type: 'category', target: 'catalog', categoryId: 'watches' },
  { label: 'Wallets', type: 'category', target: 'catalog', categoryId: 'leather-wallets' },
  { label: 'Journal', type: 'section', target: 'journal' },
  { label: 'Contact', type: 'section', target: 'footer-contact' },
];

export function Header({
  searchQuery,
  onSearchChange,
  activeCategory,
  onNavigateCategory,
  onNavigateSection,
  onSelectProduct,
  products,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenTracking,
  onOpenSupport,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const quickMatches = trimmedQuery
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(trimmedQuery) ||
            p.categoryLabel.toLowerCase().includes(trimmedQuery) ||
            p.subtitle.toLowerCase().includes(trimmedQuery) ||
            p.collection.toLowerCase().includes(trimmedQuery)
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (item: (typeof NAV_ITEMS)[number]) => {
    setMobileMenuOpen(false);
    if (item.type === 'home') {
      onSearchChange('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (item.type === 'category' && item.categoryId) {
      onNavigateCategory(item.categoryId);
      return;
    }
    onNavigateSection(item.target);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFocused(false);
    setMobileSearchOpen(false);
    onNavigateSection('catalog');
  };

  return (
    <>
      {/* Slim Top Utility Announcement Bar (scrolls away naturally to preserve mobile sticky cap) */}
      <div className="bg-[#18181B] text-[#E9E4DC] text-[12px] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <p className="truncate text-[#E9E4DC]/90 tracking-[0.02em]">
            100% Cash on Delivery (COD) Nationwide
            <span className="hidden sm:inline text-[#A19A90]">
              {' '}
              — Flat {formatPrice(FLAT_DELIVERY_FEE_PKR)} delivery across Pakistan
            </span>
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenTracking}
              className="hidden md:inline-flex items-center gap-1.5 text-[#E9E4DC]/85 hover:text-white transition-colors whitespace-nowrap"
            >
              <PackageSearch className="w-3.5 h-3.5 text-[#D49A52]" />
              Order Tracking
            </button>
            <button
              type="button"
              onClick={onOpenSupport}
              className="hidden sm:inline-flex items-center text-[#E9E4DC]/85 hover:text-white transition-colors whitespace-nowrap"
            >
              Support
            </button>
            <div className="flex items-center gap-1.5 text-[#E9E4DC]/90 border-l border-white/15 pl-3 whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 text-[#D49A52] shrink-0" />
              <span className="text-[12px] font-medium text-[#FAF8F5]">
                Pakistan (PKR Rs.)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E2DC]">
        <div className="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-5">
          {/* Left: Mobile drawer button + Circular A-C Monogram & Brand Wordmark */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 -ml-1.5 sm:-ml-2 rounded-full text-[#18181B] hover:bg-[#EFEBE4] transition-colors shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onSearchChange('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Aamash Collection Home"
              className="inline-flex items-center focus-visible:outline-2"
            >
              <BrandHeaderLockup theme="light" />
            </a>
          </div>

          {/* Center: Clean Editorial Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-medium text-[#4A4640]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.type === 'category' &&
                item.categoryId &&
                item.categoryId !== 'all' &&
                (activeCategory === item.categoryId ||
                  (item.categoryId === 'watches' &&
                    WATCH_CATEGORIES.has(activeCategory)));
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#18181B] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#9A5B13] after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-[#18181B] after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Pill Search + Utility Icons */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 lg:gap-2 shrink-0">
            {/* Desktop Pill Search */}
            <div ref={searchContainerRef} className="relative hidden md:block">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    setSearchFocused(true);
                  }}
                  placeholder="Search watches, wallets..."
                  aria-label="Search catalog"
                  className="w-36 lg:w-40 xl:w-56 pl-9 pr-8 py-2 text-[13px] bg-white border border-[#E3DED5] rounded-full text-[#18181B] placeholder:text-[#8C857B] focus:border-[#9A5B13] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#78716C] hover:text-[#18181B]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>

              {/* Live Instant Search Dropdown */}
              {searchFocused && trimmedQuery.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-[#E5E2DC] rounded-xl shadow-[0_20px_48px_-16px_rgba(24,24,27,0.16)] overflow-hidden z-50">
                  {quickMatches.length > 0 ? (
                    <div>
                      <div className="px-3.5 py-2 border-b border-[#F1EDE6] flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[#78716C]">
                        <span>Matching Pieces</span>
                        <span className="tabular-nums">{quickMatches.length}</span>
                      </div>
                      <ul className="divide-y divide-[#F3EFE9]">
                        {quickMatches.map((product) => (
                          <li key={product.id}>
                            <button
                              type="button"
                              onClick={() => {
                                setSearchFocused(false);
                                onSelectProduct(product);
                              }}
                              className="w-full flex items-center gap-3 px-3.5 py-2.5 text-left hover:bg-[#FAF8F5] transition-colors"
                            >
                              <div className="w-12 h-10 rounded-md overflow-hidden bg-[#F6F3EE] shrink-0">
                                <StudioImage
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-[13px] font-semibold text-[#18181B] truncate">
                                  {product.name}
                                </p>
                                <p className="text-[11.5px] text-[#6B655E] truncate">
                                  {product.categoryLabel}
                                </p>
                              </div>
                              <span className="text-[13px] font-semibold tabular-nums text-[#18181B] shrink-0">
                                {formatPrice(product.pricePkr)}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchFocused(false);
                          onNavigateSection('catalog');
                        }}
                        className="w-full py-2.5 text-center text-[12px] font-semibold text-[#9A5B13] bg-[#FAF8F5] hover:bg-[#F3EFE8] transition-colors border-t border-[#EEEAE2]"
                      >
                        View all results in shop →
                      </button>
                    </div>
                  ) : (
                    <div className="p-5 text-center">
                      <p className="text-[13px] text-[#5C5852]">
                        No pieces found for “{searchQuery}”.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          onSearchChange('');
                          setSearchFocused(false);
                        }}
                        className="mt-2 text-[12px] font-semibold text-[#9A5B13] hover:underline"
                      >
                        Reset search
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen((prev) => !prev)}
              aria-label="Toggle search"
              className="md:hidden inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#18181B] hover:bg-[#EFEBE4] transition-colors"
            >
              <Search className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px]" />
            </button>

            {/* Account Icon */}
            <button
              type="button"
              onClick={onOpenAccount}
              aria-label="Client account and orders"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#18181B] hover:bg-[#EFEBE4] transition-colors"
            >
              <User className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.7]" />
            </button>

            {/* Wishlist Icon with Live Badge */}
            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label={`Open wishlist (${wishlistCount} saved)`}
              className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#18181B] hover:bg-[#EFEBE4] transition-colors"
            >
              <Heart className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.7]" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 min-w-[16px] sm:min-w-[17px] h-[16px] sm:h-[17px] px-1 rounded-full bg-[#9A5B13] text-white text-[9.5px] sm:text-[10px] font-semibold leading-none inline-flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon with Live Badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Open shopping bag (${cartCount} items)`}
              className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[#18181B] hover:bg-[#EFEBE4] transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.7]" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 min-w-[16px] sm:min-w-[17px] h-[16px] sm:h-[17px] px-1 rounded-full bg-[#18181B] text-white text-[9.5px] sm:text-[10px] font-semibold leading-none inline-flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 border-t border-[#ECE7DF] bg-[#FAF8F5]">
            <form onSubmit={handleSearchSubmit} className="relative pt-2.5">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-[22px]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search watches, leather wallets..."
                autoFocus
                className="w-full pl-9 pr-10 py-2.5 text-[14px] bg-white border border-[#E3DED5] rounded-full text-[#18181B] placeholder:text-[#8C857B] focus:border-[#9A5B13] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-[22px] text-[#78716C]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
        )}
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-[#18181B]/45 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between gap-3 px-5 py-4 bg-[#0F172A] border-b border-[#D4AF37]/25">
                <BrandHeaderLockup theme="dark" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 -mr-1.5 inline-flex items-center justify-center rounded-full text-[#FAF8F5] hover:bg-white/10 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="px-6 mt-4 flex flex-col divide-y divide-[#ECE7DF]">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="py-3.5 text-left text-[15px] font-medium text-[#18181B] hover:text-[#9A5B13] transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#A8A29E] text-xs">→</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 pt-6 mt-6 border-t border-[#E5E2DC] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracking();
                }}
                className="w-full flex items-center gap-2.5 text-[13.5px] font-medium text-[#4A4640] hover:text-[#18181B] py-1.5"
              >
                <PackageSearch className="w-4 h-4 text-[#9A5B13]" />
                Track Your Order
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupport();
                }}
                className="w-full flex items-center gap-2.5 text-[13.5px] font-medium text-[#4A4640] hover:text-[#18181B] py-1.5"
              >
                <User className="w-4 h-4 text-[#9A5B13]" />
                Client Concierge &amp; Support
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
