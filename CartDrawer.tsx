import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Gift,
  Lock,
  MessageSquare,
  Minus,
  Plus,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
  Wallet,
  X,
} from 'lucide-react';
import { FLAT_DELIVERY_FEE_PKR, formatPrice } from '../data/catalog';
import { STORE_CONFIG, buildWhatsAppUrl } from '../data/storeConfig';
import type { CartItem, OrderRecord } from '../types/store';
import { StudioImage } from './StudioImage';

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: OrderRecord) => void;
  onExploreShop: () => void;
}

export function CartDrawer({
  open,
  items,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
  onExploreShop,
}: CartDrawerProps) {
  const [step, setStep] = useState<'bag' | 'checkout' | 'confirmed'>('bag');
  const [promoInput, setPromoInput] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);

  // Checkout form fields (Pakistan COD)
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState<string>(STORE_CONFIG.majorCities[0]);
  const [address, setAddress] = useState('');
  const [latestOrder, setLatestOrder] = useState<OrderRecord | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && items.length === 0 && step === 'checkout') {
      setStep('bag');
    }
  }, [open, items.length, step]);

  if (!open) return null;

  const subtotalPkr = items.reduce(
    (sum, item) => sum + item.pricePkr * item.quantity,
    0
  );
  const discountPkr = promoApplied ? Math.round(subtotalPkr * 0.1) : 0;
  const discountedSubtotal = Math.max(0, subtotalPkr - discountPkr);
  const shippingPkr = items.length === 0 ? 0 : FLAT_DELIVERY_FEE_PKR;
  const totalPkr = discountedSubtotal + shippingPkr;

  const bagWhatsAppText = [
    `Assalam-o-Alaikum! I would like to place a Cash on Delivery (COD) order from ${STORE_CONFIG.brandName}:`,
    ...items.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} — ${item.variantLabel} × ${item.quantity} = ${formatPrice(item.pricePkr * item.quantity)}`
    ),
    promoApplied
      ? `Promo Discount (AAMASH10): -${formatPrice(discountPkr)}`
      : null,
    `Flat Nationwide Delivery: ${formatPrice(shippingPkr)}`,
    `Total COD Payable: ${formatPrice(totalPkr)}`,
    `Payment Method: 100% Cash on Delivery (COD)`,
    giftWrap ? `Include complimentary gift box: Yes` : null,
    fullName.trim() ? `Name: ${fullName.trim()}` : null,
    phone.trim() ? `Phone: ${phone.trim()}` : null,
    address.trim() ? `Address: ${address.trim()}, ${city}` : `City: ${city}`,
  ]
    .filter(Boolean)
    .join('\n');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'AAMASH10' || code === 'ATELIER10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Try code AAMASH10 for 10% off your order.');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) return;

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const createdOrder: OrderRecord = {
      orderNumber: `AC-PK-${randomDigits}`,
      placedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Confirmed',
      stepIndex: 0,
      customerName: fullName.trim(),
      customerPhone: phone.trim(),
      customerEmail: email.trim() || undefined,
      city,
      shippingAddress: `${address.trim()}, ${city}`,
      paymentMethod: '100% Cash on Delivery (COD)',
      subtotalPkr,
      discountPkr,
      shippingPkr,
      totalPkr,
      estimatedDelivery: '2–4 Working Days (Nationwide COD)',
      items: [...items],
    };

    onOrderPlaced(createdOrder);
    onClearCart();
    setLatestOrder(createdOrder);
    setStep('confirmed');
  };

  const handleCloseDrawer = () => {
    if (step === 'confirmed') {
      setStep('bag');
    }
    onClose();
  };

  const confirmedWhatsAppText = latestOrder
    ? [
        `Assalam-o-Alaikum! Confirming my COD order #${latestOrder.orderNumber} on ${STORE_CONFIG.brandName}:`,
        ...latestOrder.items.map(
          (i) => `• ${i.quantity}× ${i.name} (${i.variantLabel})`
        ),
        `• Flat Delivery: ${formatPrice(latestOrder.shippingPkr)}`,
        `• Total COD Payable: ${formatPrice(latestOrder.totalPkr)}`,
        `• Payment: ${latestOrder.paymentMethod}`,
        `• Name: ${latestOrder.customerName} (${latestOrder.customerPhone})`,
        `• Delivery: ${latestOrder.shippingAddress}`,
      ].join('\n')
    : '';

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      <div
        className="fixed inset-0 bg-[#18181B]/45 backdrop-blur-[2px]"
        onClick={handleCloseDrawer}
        aria-hidden="true"
      />

      <aside className="relative z-10 w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-[#E5DFD5] flex flex-col">
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-white border-b border-[#EAE5DC] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            {step === 'checkout' && (
              <button
                type="button"
                onClick={() => setStep('bag')}
                aria-label="Back to shopping bag"
                className="w-8 h-8 -ml-1.5 rounded-full inline-flex items-center justify-center text-[#57534E] hover:bg-[#F3EFE8]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <h2 className="text-[16px] font-semibold text-[#18181B]">
              {step === 'bag'
                ? `Shopping Bag (${items.reduce((s, i) => s + i.quantity, 0)})`
                : step === 'checkout'
                  ? 'Cash on Delivery Checkout'
                  : 'Order Confirmed'}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCloseDrawer}
            aria-label="Close shopping bag"
            className="w-9 h-9 -mr-1.5 rounded-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B] hover:bg-[#F3EFE8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: BAG VIEW */}
        {step === 'bag' && (
          <>
            {items.length > 0 && (
              <div className="px-6 py-3 bg-[#F3EFE8] border-b border-[#E6E0D6] shrink-0">
                <div className="flex items-center gap-2 text-[12.5px] text-[#3F3A34]">
                  <Truck className="w-4 h-4 text-[#9A5B13] shrink-0" />
                  <span>
                    <strong className="font-semibold text-[#18181B]">
                      100% Cash on Delivery (COD) Nationwide
                    </strong>{' '}
                    · Flat{' '}
                    <span className="tabular-nums font-semibold text-[#18181B]">
                      {formatPrice(FLAT_DELIVERY_FEE_PKR)}
                    </span>{' '}
                    courier fee
                  </span>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[#F1ECE3] flex items-center justify-center text-[#9A5B13]">
                    <ShoppingBag className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-[#18181B]">
                    Your shopping bag is empty
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#6B655E] max-w-xs">
                    Explore men&apos;s, women&apos;s, and couple watches
                    alongside leather wallets with 100% Cash on Delivery
                    nationwide across Pakistan.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onExploreShop();
                    }}
                    className="mt-6 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white px-6 py-3 text-[13.5px] font-semibold transition-colors"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      className="bg-white rounded-xl border border-[#EAE5DC] p-3.5 flex gap-3.5"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F5F2EC] shrink-0">
                        <StudioImage
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-[14px] font-semibold text-[#18181B] truncate">
                              {item.name}
                            </h3>
                            <p className="text-[12px] text-[#6B655E] mt-0.5">
                              {item.variantLabel}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.key)}
                            aria-label={`Remove ${item.name}`}
                            className="p-1 text-[#8C857B] hover:text-[#B91C1C] transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div className="inline-flex items-center border border-[#E5DFD5] rounded-full bg-[#FAF8F5] h-8">
                            <button
                              type="button"
                              onClick={() => onUpdateQty(item.key, -1)}
                              aria-label="Decrease quantity"
                              className="w-7 h-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-[12.5px] font-semibold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQty(item.key, 1)}
                              aria-label="Increase quantity"
                              className="w-7 h-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <p className="text-[14px] font-semibold text-[#18181B] tabular-nums">
                            {formatPrice(item.pricePkr * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Complimentary Gift Box Toggle */}
                  <label className="flex items-center justify-between gap-3 bg-white rounded-xl border border-[#EAE5DC] px-4 py-3 cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <Gift className="w-4 h-4 text-[#9A5B13] shrink-0" />
                      <div>
                        <p className="text-[13px] font-medium text-[#18181B]">
                          Complimentary Gift Packaging
                        </p>
                        <p className="text-[11.5px] text-[#78716C]">
                          Signature box &amp; blank gift note card
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="w-4 h-4 accent-[#9A5B13]"
                    />
                  </label>

                  {/* Promo Code Input */}
                  <div className="pt-1">
                    {promoApplied ? (
                      <div className="flex items-center justify-between rounded-xl bg-[#F4EFE6] border border-[#9A5B13]/30 px-4 py-2.5 text-[12.5px]">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[#8A5011]">
                          <Tag className="w-3.5 h-3.5" />
                          AAMASH10 applied (10% off)
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setPromoApplied(false);
                            setPromoInput('');
                          }}
                          className="text-[#6B655E] hover:text-[#18181B] font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => {
                            setPromoInput(e.target.value);
                            if (promoError) setPromoError('');
                          }}
                          placeholder="Promo code (e.g. AAMASH10)"
                          className="flex-1 rounded-lg bg-white border border-[#E3DDD3] px-3.5 py-2 text-[13px] text-[#18181B] placeholder:text-[#8C857B] focus:border-[#9A5B13] focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg border border-[#18181B] text-[12.5px] font-semibold text-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors whitespace-nowrap"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                    {promoError && (
                      <p className="mt-1.5 text-[12px] text-[#9A5B13]">
                        {promoError}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Totals + COD Checkout & WhatsApp Buttons */}
            {items.length > 0 && (
              <div className="px-6 py-5 bg-white border-t border-[#EAE5DC] space-y-3 shrink-0">
                <div className="space-y-1.5 text-[13.5px]">
                  <div className="flex justify-between text-[#57534E]">
                    <span>Subtotal</span>
                    <span className="tabular-nums font-medium text-[#18181B]">
                      {formatPrice(subtotalPkr)}
                    </span>
                  </div>
                  {discountPkr > 0 && (
                    <div className="flex justify-between text-[#9A5B13]">
                      <span>Discount (10%)</span>
                      <span className="tabular-nums font-medium">
                        −{formatPrice(discountPkr)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#57534E]">
                    <span>Flat Nationwide Delivery</span>
                    <span className="tabular-nums font-medium text-[#18181B]">
                      {formatPrice(shippingPkr)}
                    </span>
                  </div>
                  <div className="pt-2.5 border-t border-[#F0ECE4] flex justify-between text-[15.5px] font-bold text-[#18181B]">
                    <span>Total COD Payable</span>
                    <span className="tabular-nums">{formatPrice(totalPkr)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('checkout')}
                  className="w-full h-11 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white font-semibold text-[13.5px] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  <span>Proceed to Cash on Delivery Checkout</span>
                </button>

                <a
                  href={buildWhatsAppUrl(bagWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 rounded-full border border-[#1E6B47]/40 bg-[#F3F8F5] hover:bg-[#1E6B47] text-[#1F4E37] hover:text-white font-semibold text-[13px] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
              </div>
            )}
          </>
        )}

        {/* STEP 2: PAKISTAN 100% CASH ON DELIVERY (COD) CHECKOUT FORM */}
        {step === 'checkout' && (
          <form
            onSubmit={handleCheckoutSubmit}
            className="flex-1 flex flex-col overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div className="rounded-xl bg-white border border-[#EAE5DC] p-4 space-y-3">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9A5B13]">
                  Delivery Details (Pakistan)
                </h3>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name *"
                  className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile (03XX-XXXXXXX) *"
                    className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                  />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="City"
                    className="w-full rounded-lg border border-[#E3DDD3] bg-white px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                  >
                    {STORE_CONFIG.majorCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House / Flat #, Street, Sector / Block, Area *"
                  className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address (optional for receipt)"
                  className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                />
              </div>

              {/* Payment Method: 100% Cash on Delivery (COD) Nationwide */}
              <div className="rounded-xl bg-white border border-[#EAE5DC] p-4 space-y-3">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9A5B13]">
                  Payment Method
                </h3>

                <div className="flex items-start gap-3 p-3.5 rounded-lg border border-[#18181B] bg-[#FAF8F5]">
                  <span className="w-8 h-8 rounded-full bg-[#18181B] text-[#FAF8F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Wallet className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13.5px] font-semibold text-[#18181B]">
                      100% Cash on Delivery (COD) Nationwide
                    </p>
                    <p className="text-[12px] text-[#57534E] mt-1 leading-relaxed">
                      Zero advance payment required. Pay{' '}
                      <strong className="tabular-nums text-[#18181B]">
                        {formatPrice(totalPkr)}
                      </strong>{' '}
                      in cash directly to the courier rider when your parcel
                      arrives in {city}.
                    </p>
                  </div>
                </div>

                {/* Clear Cost Breakdown with Flat Rs. 250 Delivery */}
                <div className="pt-2 border-t border-[#F0ECE4] space-y-1.5 text-[12.5px]">
                  <div className="flex justify-between text-[#57534E]">
                    <span>Items Subtotal</span>
                    <span className="tabular-nums text-[#18181B]">
                      {formatPrice(subtotalPkr)}
                    </span>
                  </div>
                  {discountPkr > 0 && (
                    <div className="flex justify-between text-[#9A5B13]">
                      <span>Promo Discount (10%)</span>
                      <span className="tabular-nums">
                        −{formatPrice(discountPkr)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#57534E]">
                    <span>Flat Nationwide Delivery (Pakistan)</span>
                    <span className="tabular-nums font-medium text-[#18181B]">
                      {formatPrice(shippingPkr)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 bg-white border-t border-[#EAE5DC] space-y-2.5 shrink-0">
              <div className="flex justify-between text-[15px] font-bold text-[#18181B]">
                <span>Total COD Payable</span>
                <span className="tabular-nums">{formatPrice(totalPkr)}</span>
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white font-semibold text-[13.5px] transition-colors"
              >
                Confirm COD Order — {formatPrice(totalPkr)}
              </button>
              <a
                href={buildWhatsAppUrl(bagWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 rounded-full border border-[#1E6B47]/40 text-[#1F4E37] hover:bg-[#F3F8F5] font-semibold text-[12.5px] inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Or Send Order Directly on WhatsApp</span>
              </a>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER CONFIRMATION */}
        {step === 'confirmed' && latestOrder && (
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#9A5B13] text-white flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A5B13]">
                {STORE_CONFIG.brandName} · Order #{latestOrder.orderNumber}
              </p>
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18181B] leading-snug">
                Thank You for Your Order
              </h3>
              <p className="mt-2 text-[13.5px] text-[#57534E] leading-relaxed">
                Shukriya, {latestOrder.customerName}. Your {STORE_CONFIG.brandName}{' '}
                Cash on Delivery order is confirmed and ready for dispatch from
                Kasur to {latestOrder.city}.
              </p>

              <div className="mt-6 bg-white rounded-xl border border-[#EAE5DC] p-4 space-y-3 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Store</span>
                  <span className="font-semibold text-[#18181B]">
                    {STORE_CONFIG.brandName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Order Number</span>
                  <span className="font-semibold text-[#18181B] tabular-nums">
                    {latestOrder.orderNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Payment Method</span>
                  <span className="font-medium text-[#18181B]">
                    {latestOrder.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Flat Delivery Fee</span>
                  <span className="font-medium text-[#18181B] tabular-nums">
                    {formatPrice(latestOrder.shippingPkr)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Delivery</span>
                  <span className="font-medium text-[#18181B] text-right max-w-[205px]">
                    {latestOrder.shippingAddress}
                  </span>
                </div>
                <div className="pt-2.5 border-t border-[#F0ECE4] flex justify-between font-bold text-[#18181B]">
                  <span>Total COD Payable</span>
                  <span className="tabular-nums">
                    {formatPrice(latestOrder.totalPkr)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href={buildWhatsAppUrl(confirmedWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-full bg-[#1E6B47] hover:bg-[#175538] text-white font-semibold text-[13.5px] inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order Receipt on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCloseDrawer}
                className="w-full h-11 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white font-semibold text-[13.5px] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
