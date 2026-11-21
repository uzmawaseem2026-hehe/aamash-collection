import { useEffect, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Heart,
  MessageSquare,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  X,
} from 'lucide-react';
import { FLAT_DELIVERY_FEE_PKR, formatPrice } from '../data/catalog';
import { STORE_CONFIG, buildWhatsAppUrl } from '../data/storeConfig';
import type { Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface ProductDetailModalProps {
  product: Product | null;
  initialMode?: 'details' | 'concierge';
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (
    product: Product,
    variantLabel: string,
    quantity: number
  ) => void;
}

export function ProductDetailModal({
  product,
  initialMode = 'details',
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}: ProductDetailModalProps) {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mode, setMode] = useState<'details' | 'concierge'>(initialMode);
  const [copied, setCopied] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState<string>(STORE_CONFIG.majorCities[0]);
  const [customerNote, setCustomerNote] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]?.label || 'Standard');
      setQuantity(1);
      setActiveImageIndex(0);
      setMode(initialMode);
      setCopied(false);
    }
  }, [product, initialMode]);

  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const formattedUnit = formatPrice(product.pricePkr);
  const lineSubtotalPkr = product.pricePkr * quantity;
  const formattedLineTotal = formatPrice(lineSubtotalPkr);
  const formattedCodTotal = formatPrice(lineSubtotalPkr + FLAT_DELIVERY_FEE_PKR);

  const whatsAppMessage = [
    `Assalam-o-Alaikum! I would like to place a Cash on Delivery (COD) order on ${STORE_CONFIG.brandName}:`,
    `• Product: ${product.name} (${product.sku})`,
    `• Finish/Color: ${selectedVariant}`,
    `• Quantity: ${quantity}`,
    `• Subtotal: ${formattedLineTotal}`,
    `• Flat Nationwide Delivery: ${formatPrice(FLAT_DELIVERY_FEE_PKR)}`,
    `• Total COD Payable: ${formattedCodTotal}`,
    `• Payment: 100% Cash on Delivery (COD)`,
    customerName.trim() ? `• Name: ${customerName.trim()}` : null,
    customerCity ? `• Delivery City: ${customerCity}` : null,
    customerNote.trim() ? `• Note: ${customerNote.trim()}` : null,
    `Please confirm my order.`,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsAppHref = buildWhatsAppUrl(whatsAppMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsAppMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-title"
    >
      <div
        className="fixed inset-0 bg-[#18181B]/55 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Modal Close Header */}
        <div className="px-5 sm:px-7 py-4 bg-white border-b border-[#EAE5DC] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-[12px] text-[#78716C] truncate">
            <span className="font-semibold uppercase tracking-[0.14em] text-[#9A5B13]">
              {product.collection}
            </span>
            <span aria-hidden="true">/</span>
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{product.sku}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B] hover:bg-[#F3EFE8] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Contiguous Two-Column Module */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Interactive Gallery Column */}
            {(() => {
              const galleryImages =
                product.images && product.images.length > 0
                  ? product.images
                  : [product.image];
              const safeIndex = Math.min(activeImageIndex, galleryImages.length - 1);
              const currentSrc = galleryImages[safeIndex];
              const hasMultiple = galleryImages.length > 1;

              return (
                <div className="md:col-span-6 bg-[#F4F1EB] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE5DC]">
                  <div>
                    <div
                      className={`relative aspect-square sm:aspect-[4/3] w-full rounded-xl overflow-hidden bg-white border border-[#E7E2DA] ${
                        product.imageFit === 'contain' ? 'p-3' : ''
                      }`}
                    >
                      <StudioImage
                        src={currentSrc}
                        alt={`${product.name} — view ${safeIndex + 1}`}
                        className={`w-full h-full object-center ${
                          product.imageFit === 'contain'
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />

                      {hasMultiple && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIndex(
                                (safeIndex - 1 + galleryImages.length) %
                                  galleryImages.length
                              )
                            }
                            aria-label="Previous product image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#18181B] shadow-sm inline-flex items-center justify-center transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIndex(
                                (safeIndex + 1) % galleryImages.length
                              )
                            }
                            aria-label="Next product image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#18181B] shadow-sm inline-flex items-center justify-center transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <span className="absolute bottom-3 right-3 text-[11px] font-medium text-white bg-[#18181B]/75 backdrop-blur-[2px] px-2.5 py-0.5 rounded-sm tabular-nums">
                            {safeIndex + 1} / {galleryImages.length}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Clickable Thumbnail Strip */}
                    {hasMultiple && (
                      <div
                        className="mt-3 flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1"
                        role="list"
                        aria-label="Product gallery thumbnails"
                      >
                        {galleryImages.map((imgSrc, idx) => {
                          const isCurrent = idx === safeIndex;
                          return (
                            <button
                              key={`${product.id}-thumb-${idx}`}
                              type="button"
                              onClick={() => setActiveImageIndex(idx)}
                              aria-label={`Show image ${idx + 1} of ${product.name}`}
                              aria-current={isCurrent ? 'true' : undefined}
                              className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all bg-white ${
                                isCurrent
                                  ? 'border-[#9A5B13] ring-1 ring-[#9A5B13]/30'
                                  : 'border-[#E5DFD5] opacity-75 hover:opacity-100 hover:border-[#BDB4A7]'
                              }`}
                            >
                              <StudioImage
                                src={imgSrc}
                                alt={`${product.name} thumbnail ${idx + 1}`}
                                className={`w-full h-full object-center ${
                                  product.imageFit === 'contain'
                                    ? 'object-contain p-0.5'
                                    : 'object-cover'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 space-y-4">
                    <p className="text-[13.5px] leading-relaxed text-[#4A4640]">
                      {product.description}
                    </p>

                    <div className="pt-4 border-t border-[#E4DDD2]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A5B13]">
                        Atelier Note
                      </p>
                      <p className="mt-1 font-editorial italic text-[18px] text-[#3F3A34] leading-snug">
                        “{product.craftsmanshipNote}”
                      </p>
                    </div>

                    {/* Technical Specs Table */}
                    <dl className="pt-4 border-t border-[#E4DDD2] grid grid-cols-2 gap-x-4 gap-y-3">
                      {product.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-[11px] uppercase tracking-[0.12em] text-[#78716C]">
                            {spec.label}
                          </dt>
                          <dd className="text-[13px] font-medium text-[#18181B] mt-0.5">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              );
            })()}

            {/* Right Purchase Module */}
            <div className="md:col-span-6 bg-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Header & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2
                      id="pdp-title"
                      className="text-[24px] font-bold tracking-[-0.02em] text-[#18181B] leading-tight"
                    >
                      {product.name}
                    </h2>
                    <p className="mt-1 text-[13.5px] text-[#6B655E]">
                      {product.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label={
                      isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'
                    }
                    className={`w-10 h-10 rounded-full border inline-flex items-center justify-center shrink-0 transition-colors ${
                      isWishlisted
                        ? 'bg-[#18181B] border-[#18181B] text-[#E6B272]'
                        : 'border-[#E3DDD3] text-[#57534E] hover:border-[#9A5B13] hover:text-[#9A5B13]'
                    }`}
                  >
                    <Heart
                      className={`w-[18px] h-[18px] ${
                        isWishlisted ? 'fill-current' : 'stroke-[1.7]'
                      }`}
                    />
                  </button>
                </div>

                <div className="mt-3.5 flex items-center justify-between gap-4 pb-5 border-b border-[#EFEAE2]">
                  <div className="flex items-baseline gap-2.5">
                    <p className="text-[24px] font-bold text-[#18181B] tabular-nums">
                      {formattedUnit}
                    </p>
                    {product.compareAtPkr && (
                      <p className="text-[14px] text-[#8C857B] line-through tabular-nums">
                        {formatPrice(product.compareAtPkr)}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 text-[#B45309]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.round(product.rating)
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
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Mode Switcher: Standard Bag vs Order on WhatsApp */}
                <div className="mt-5 flex items-center gap-1 p-1 rounded-lg bg-[#F5F2EC]">
                  <button
                    type="button"
                    onClick={() => setMode('details')}
                    className={`flex-1 py-2 text-[12.5px] font-semibold rounded-md transition-colors ${
                      mode === 'details'
                        ? 'bg-white text-[#18181B] shadow-sm'
                        : 'text-[#6B655E] hover:text-[#18181B]'
                    }`}
                  >
                    Add to Bag / COD
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('concierge')}
                    className={`flex-1 py-2 text-[12.5px] font-semibold rounded-md transition-colors inline-flex items-center justify-center gap-1.5 ${
                      mode === 'concierge'
                        ? 'bg-white text-[#1F4E37] shadow-sm'
                        : 'text-[#6B655E] hover:text-[#18181B]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>

                {/* Variant Selector */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="font-semibold text-[#18181B]">
                      Finish / Color
                    </span>
                    <span className="text-[#6B655E]">{selectedVariant}</span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {product.variants.map((variant) => {
                      const active = selectedVariant === variant.label;
                      return (
                        <button
                          key={variant.id}
                          type="button"
                          onClick={() => {
                            setSelectedVariant(variant.label);
                            if (typeof variant.imageIndex === 'number') {
                              setActiveImageIndex(variant.imageIndex);
                            }
                          }}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-[12.5px] font-medium transition-colors ${
                            active
                              ? 'border-[#18181B] bg-[#FAF8F5] text-[#18181B]'
                              : 'border-[#E5DFD5] text-[#57534E] hover:border-[#BDB4A7]'
                          }`}
                        >
                          {variant.swatchHex && (
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0"
                              style={{ backgroundColor: variant.swatchHex }}
                            />
                          )}
                          <span>{variant.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {mode === 'details' ? (
                  <>
                    {/* Quantity + Add to Bag */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="inline-flex items-center border border-[#DFD9CE] rounded-full bg-[#FAF8F5] h-12">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          aria-label="Decrease quantity"
                          className="w-10 h-full inline-flex items-center justify-center text-[#4A4640] hover:text-[#18181B]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-[14px] font-semibold tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                          aria-label="Increase quantity"
                          className="w-10 h-full inline-flex items-center justify-center text-[#4A4640] hover:text-[#18181B]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart(product, selectedVariant, quantity);
                          onClose();
                        }}
                        className="flex-1 h-12 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-[#FAF8F5] font-semibold text-[13.5px] inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap px-5"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag — {formattedLineTotal}</span>
                      </button>
                    </div>

                    {/* Direct Order on WhatsApp CTA */}
                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full h-11 rounded-full border border-[#1E6B47]/40 bg-[#F3F8F5] hover:bg-[#1E6B47] text-[#1F4E37] hover:text-white font-semibold text-[13.5px] inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order on WhatsApp ({STORE_CONFIG.phoneDisplay})</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                    </a>

                    {/* COD Shipping & Quality Guarantees */}
                    <div className="mt-5 pt-5 border-t border-[#EFEAE2] space-y-2.5 text-[12.5px] text-[#57534E]">
                      <div className="flex items-center gap-2.5">
                        <Truck className="w-4 h-4 text-[#9A5B13] shrink-0" />
                        <span>
                          Flat {formatPrice(FLAT_DELIVERY_FEE_PKR)} nationwide
                          delivery across Pakistan (2–4 working days).
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#9A5B13] shrink-0" />
                        <span>
                          100% Cash on Delivery (COD) Nationwide · Pay cash at
                          your doorstep · 7-day easy replacement.
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Direct WhatsApp Order Builder */
                  <div className="mt-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your Name (optional)"
                        className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                      />
                      <select
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        aria-label="Delivery city in Pakistan"
                        className="w-full rounded-lg border border-[#E3DDD3] bg-white px-3.5 py-2.5 text-[13px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                      >
                        {STORE_CONFIG.majorCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <input
                      type="text"
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="Optional delivery address or gift note"
                      className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                    />

                    <div className="rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1F4E37]">
                          WhatsApp Order Preview
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#18181B] hover:text-[#9A5B13]"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#9A5B13]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Text</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-[12.5px] text-[#4A4640] leading-relaxed whitespace-pre-line">
                        {whatsAppMessage}
                      </p>
                    </div>

                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-12 rounded-full bg-[#1E6B47] hover:bg-[#175538] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Order on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[11.5px] text-center text-[#78716C] tabular-nums">
                      Sends directly to WhatsApp {STORE_CONFIG.phoneDisplay} (wa.me/{STORE_CONFIG.whatsappNumber})
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
