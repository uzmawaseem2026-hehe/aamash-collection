import { useEffect, useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import {
  JOURNAL_ARTICLES,
  PRODUCTS,
  SAMPLE_ORDERS,
  WATCH_CATEGORIES,
} from './data/catalog';
import type {
  CartItem,
  CategoryId,
  JournalArticle,
  OrderRecord,
  Product,
  SortOption,
} from './types/store';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustAndCollections } from './components/TrustAndCollections';
import { CategorySection } from './components/CategorySection';
import { BestsellersSection } from './components/BestsellersSection';
import { EditorialSplitBanner } from './components/EditorialSplitBanner';
import { FeatureStrip } from './components/FeatureStrip';
import { JournalSection } from './components/JournalSection';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { JournalModal } from './components/JournalModal';
import {
  UtilityModals,
  type UtilityModalType,
} from './components/UtilityModals';

const STORAGE_CART_KEY = 'aamash_collection_pk_cart_v3';
const STORAGE_WISHLIST_KEY = 'aamash_collection_pk_wishlist_v2';
const STORAGE_ORDERS_KEY = 'aamash_collection_pk_orders_v3';

function readStoredJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() =>
    readStoredJson<CartItem[]>(STORAGE_CART_KEY, [])
  );
  const [wishlistIds, setWishlistIds] = useState<string[]>(() =>
    readStoredJson<string[]>(STORAGE_WISHLIST_KEY, ['cartier-tank-watch'])
  );
  const [orders, setOrders] = useState<OrderRecord[]>(() =>
    readStoredJson<OrderRecord[]>(STORAGE_ORDERS_KEY, SAMPLE_ORDERS)
  );

  // Catalog browsing state
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showAllCatalog, setShowAllCatalog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Active modals & drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productModalMode, setProductModalMode] = useState<
    'details' | 'concierge'
  >('details');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(
    null
  );
  const [utilityModal, setUtilityModal] = useState<UtilityModalType>(null);

  // Transient confirmation toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync persistent state
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota issues in restricted preview frames
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_WISHLIST_KEY,
        JSON.stringify(wishlistIds)
      );
    } catch {
      // Ignore storage quota issues
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_ORDERS_KEY, JSON.stringify(orders));
    } catch {
      // Ignore storage quota issues
    }
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateCategory = (category: CategoryId) => {
    setSearchQuery('');
    setActiveCategory(category);
    setShowAllCatalog(category === 'all');
    scrollToSection('catalog');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        if (product) showToast(`Removed ${product.name} from saved pieces`);
        return prev.filter((id) => id !== productId);
      }
      if (product) showToast(`Saved ${product.name} to wishlist`);
      return [...prev, productId];
    });
  };

  const handleAddToCart = (
    product: Product,
    variantLabel: string,
    quantity = 1
  ) => {
    const key = `${product.id}::${variantLabel}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key
            ? { ...item, quantity: Math.min(10, item.quantity + quantity) }
            : item
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          image: product.image,
          pricePkr: product.pricePkr,
          variantLabel,
          quantity,
        },
      ];
    });
    showToast(`Added ${product.name} to your shopping bag`);
  };

  const handleQuickAdd = (product: Product) => {
    const defaultVariant = product.variants[0]?.label || 'Standard';
    handleAddToCart(product, defaultVariant, 1);
  };

  const handleUpdateCartQty = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveCartItem = (key: string) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const handleOrderPlaced = (order: OrderRecord) => {
    setOrders((prev) => [order, ...prev]);
    showToast(`Order #${order.orderNumber} confirmed`);
  };

  // Filtered & sorted catalog products
  const displayedProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let list = [...PRODUCTS];

    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    } else if (activeCategory === 'watches') {
      list = list.filter(
        (p) =>
          WATCH_CATEGORIES.has(p.category) ||
          p.collection === 'Signature Watches'
      );
    } else if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    } else if (!showAllCatalog) {
      list = list.filter((p) => p.bestseller);
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.pricePkr - b.pricePkr);
        break;
      case 'price-desc':
        list.sort((a, b) => b.pricePkr - a.pricePkr);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, showAllCatalog, searchQuery, sortBy]);

  const wishlistProducts = useMemo(
    () => PRODUCTS.filter((p) => wishlistIds.includes(p.id)),
    [wishlistIds]
  );

  const totalCartItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B]">
      {/* Slim Utility Bar + Sticky Editorial Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onNavigateCategory={handleNavigateCategory}
        onNavigateSection={scrollToSection}
        onSelectProduct={(product) => {
          setProductModalMode('details');
          setSelectedProduct(product);
        }}
        products={PRODUCTS}
        cartCount={totalCartItems}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAccount={() => setUtilityModal('account')}
        onOpenTracking={() => setUtilityModal('tracking')}
        onOpenSupport={() => setUtilityModal('support')}
      />

      <main className="flex-1">
        {/* Two-Column Editorial Split Hero */}
        <HeroSection
          featuredProduct={PRODUCTS[0]}
          onShopCollection={() => scrollToSection('catalog')}
          onExploreStory={() => scrollToSection('journal')}
          onInspectFeatured={(product) => {
            setProductModalMode('details');
            setSelectedProduct(product);
          }}
        />

        {/* 4-Column Trust Bar & Monochrome Sub-Collection Showcase */}
        <TrustAndCollections
          onSelectCollectionCategory={handleNavigateCategory}
        />

        {/* Section A — Shop by Category (5-Card Grid) */}
        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleNavigateCategory}
          onViewAllCategories={() => {
            setActiveCategory('all');
            setShowAllCatalog(true);
            scrollToSection('catalog');
          }}
        />

        {/* Section B — Featured Bestsellers & Interactive Catalog Grid */}
        <BestsellersSection
          products={displayedProducts}
          activeCategory={activeCategory}
          showAllCatalog={showAllCatalog}
          searchQuery={searchQuery}
          sortBy={sortBy}
          wishlistIds={wishlistIds}
          onCategoryChange={(cat) => {
            setSearchQuery('');
            setActiveCategory(cat);
            if (cat !== 'all') setShowAllCatalog(true);
          }}
          onToggleShowAll={() => {
            if (activeCategory !== 'all') {
              setActiveCategory('all');
              setShowAllCatalog(true);
            } else {
              setShowAllCatalog((prev) => !prev);
            }
          }}
          onSortChange={setSortBy}
          onClearSearch={() => setSearchQuery('')}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(product) => {
            setProductModalMode('details');
            setSelectedProduct(product);
          }}
        />

        {/* Section C — Dual Dark Moody Editorial Split Banner */}
        <EditorialSplitBanner onShopCategory={handleNavigateCategory} />

        {/* Section D — Secondary 5-Column Feature Strip */}
        <FeatureStrip />

        {/* Section E — Time & Style Editorial Journal */}
        <JournalSection
          onOpenArticle={(article) => setActiveArticle(article)}
        />
      </main>

      {/* Section F — Dark Charcoal Newsletter & Multi-Column Footer */}
      <NewsletterAndFooter
        onSelectCategory={handleNavigateCategory}
        onOpenTracking={() => setUtilityModal('tracking')}
        onOpenSupport={() => setUtilityModal('support')}
        onOpenJournal={() => setActiveArticle(JOURNAL_ARTICLES[0])}
        onOpenInfoModal={(topic) => setUtilityModal(topic)}
      />

      {/* Interactive Product Detail & WhatsApp Order Modal */}
      <ProductDetailModal
        product={selectedProduct}
        initialMode={productModalMode}
        isWishlisted={
          selectedProduct ? wishlistIds.includes(selectedProduct.id) : false
        }
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-Over Shopping Bag & COD Checkout Drawer */}
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCart([])}
        onOrderPlaced={handleOrderPlaced}
        onExploreShop={() => scrollToSection('catalog')}
      />

      {/* Slide-Over Wishlist Drawer */}
      <WishlistDrawer
        open={wishlistOpen}
        products={wishlistProducts}
        onClose={() => setWishlistOpen(false)}
        onRemove={handleToggleWishlist}
        onMoveToBag={(product) => {
          handleQuickAdd(product);
          setWishlistOpen(false);
          setCartOpen(true);
        }}
        onInspectProduct={(product) => {
          setProductModalMode('details');
          setSelectedProduct(product);
        }}
      />

      {/* Long-Form Editorial Journal Modal */}
      <JournalModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onSelectArticle={(article) => setActiveArticle(article)}
        onInspectProduct={(product) => {
          setProductModalMode('details');
          setSelectedProduct(product);
        }}
      />

      {/* Order Tracking, Account, Concierge & Info Modals */}
      <UtilityModals
        activeModal={utilityModal}
        orders={orders}
        onClose={() => setUtilityModal(null)}
      />

      {/* Subtle Transient Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#18181B] text-[#FAF8F5] px-4 py-3 rounded-full shadow-[0_18px_36px_-12px_rgba(24,24,27,0.4)] border border-white/10 flex items-center gap-2.5 text-[13px] font-medium"
        >
          <span className="w-5 h-5 rounded-full bg-[#B45309] text-white inline-flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </span>
          <span className="truncate">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
