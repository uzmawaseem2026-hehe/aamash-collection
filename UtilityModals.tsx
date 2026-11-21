import { useEffect, useState } from 'react';
import {
  Check,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  PackageSearch,
  Phone,
  Search,
  User,
  X,
} from 'lucide-react';
import { FLAT_DELIVERY_FEE_PKR, formatPrice } from '../data/catalog';
import { STORE_CONFIG, buildWhatsAppUrl } from '../data/storeConfig';
import type { OrderRecord } from '../types/store';

export type UtilityModalType =
  | null
  | 'tracking'
  | 'account'
  | 'support'
  | 'shipping'
  | 'sizing'
  | 'heritage'
  | 'sustainability'
  | 'privacy'
  | 'terms';

interface UtilityModalsProps {
  activeModal: UtilityModalType;
  orders: OrderRecord[];
  onClose: () => void;
}

const TIMELINE_STEPS = [
  'Order Confirmed',
  'Quality Checked',
  'Out for Courier',
  'Delivered',
];

const INFO_CONTENT: Record<
  'shipping' | 'sizing' | 'heritage' | 'sustainability' | 'privacy' | 'terms',
  {
    eyebrow: string;
    title: string;
    sections: Array<{ heading: string; text: string }>;
  }
> = {
  shipping: {
    eyebrow: 'Customer Care · Pakistan COD',
    title: 'Nationwide COD Delivery & Exchanges',
    sections: [
      {
        heading: `Flat ${formatPrice(FLAT_DELIVERY_FEE_PKR)} Nationwide Delivery`,
        text: `Every order ships from Kasur across Pakistan for a simple flat ${formatPrice(FLAT_DELIVERY_FEE_PKR)} courier fee—no hidden charges. Major cities (Kasur, Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan) deliver in 2–3 working days; other cities across Pakistan in 3–5 working days.`,
      },
      {
        heading: '100% Cash on Delivery (COD) Nationwide',
        text: 'We operate 100% Cash on Delivery across Pakistan with zero advance payment required. Simply pay cash to the courier rider at your doorstep. Unused watches and leather wallets may be exchanged within 7 days of delivery.',
      },
    ],
  },
  sizing: {
    eyebrow: 'Fit & Proportions',
    title: 'Watch & Wallet Size Guide',
    sections: [
      {
        heading: 'Watch Case & Strap Fit',
        text: 'Classic rectangular dress watches sit low and tailored beneath formal cuffs; 32mm–36mm women’s and couple dials offer a balanced profile; 38mm–42mm men’s dials deliver confident everyday wrist presence with adjustable leather or steel straps.',
      },
      {
        heading: 'Leather Wallet Proportions',
        text: 'Slim cardholders (~102 × 74 mm) slide effortlessly into front pockets, while bifold and long leather wallets (~112 × 90 mm+) are proportioned to hold Pakistani Rs. 1,000 and Rs. 5,000 currency notes neatly. Need fit advice? Message us on WhatsApp.',
      },
    ],
  },
  heritage: {
    eyebrow: 'About Our Store',
    title: `The ${STORE_CONFIG.brandName} Promise`,
    sections: [
      {
        heading: 'Curated Watches & Leather Wallets',
        text: 'We focus exclusively on timeless men’s, women’s, and couple watches alongside classic leather wallets—personally quality-checked before packing.',
      },
      {
        heading: 'Direct Cash on Delivery Across Pakistan',
        text: 'Dispatched directly from Kasur, Punjab, Pakistan without retail showroom markups, delivering honest everyday quality, gift-ready presentation, and personal WhatsApp support at fair PKR prices.',
      },
    ],
  },
  sustainability: {
    eyebrow: 'Materials & Longevity',
    title: 'Crafted to Last Season After Season',
    sections: [
      {
        heading: 'Full-Grain Hides & Inspected Timepieces',
        text: 'We avoid peeling synthetic coatings on our core leather wallets, choosing durable full-grain cowhide that develops a richer patina with daily carry alongside carefully checked quartz and mechanical watches.',
      },
      {
        heading: 'Gift-Ready Protective Packaging',
        text: 'Every watch and leather wallet ships securely boxed so it arrives protected in transit and ready for gifting across Pakistan.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Client Data & Privacy',
        text: 'Your shopping bag, wishlist, and order receipts are saved locally in your browser. Phone numbers and delivery addresses are used strictly to confirm and ship your Cash on Delivery parcel within Pakistan.',
      },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Sale & Warranty',
    sections: [
      {
        heading: 'Inspection & 7-Day Replacement',
        text: 'Every timepiece and leather wallet is checked before dispatch from Kasur. Unused pieces returned in original packaging qualify for a 7-day replacement guarantee.',
      },
    ],
  },
};

export function UtilityModals({
  activeModal,
  orders,
  onClose,
}: UtilityModalsProps) {
  const [lookupInput, setLookupInput] = useState(
    orders[0]?.orderNumber || 'AC-PK-4819'
  );
  const [matchedOrder, setMatchedOrder] = useState<OrderRecord | null>(
    orders[0] || null
  );
  const [notFound, setNotFound] = useState(false);

  // Support form state
  const [supportName, setSupportName] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [supportTopic, setSupportTopic] = useState('Watch & Wallet Product Inquiry');
  const [supportMsg, setSupportMsg] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  useEffect(() => {
    if (!activeModal) return;
    if (activeModal === 'tracking' && orders.length > 0) {
      setLookupInput(orders[0].orderNumber);
      setMatchedOrder(orders[0]);
      setNotFound(false);
    }
    if (activeModal === 'support') {
      setSupportSent(false);
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeModal, orders, onClose]);

  if (!activeModal) return null;

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = lookupInput.trim().toUpperCase();
    const found = orders.find(
      (o) => o.orderNumber.toUpperCase() === normalized
    );
    if (found) {
      setMatchedOrder(found);
      setNotFound(false);
    } else {
      setMatchedOrder(null);
      setNotFound(true);
    }
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportName.trim() || !supportPhone.trim() || !supportMsg.trim()) return;
    setSupportSent(true);
  };

  const isInfoTopic =
    activeModal === 'shipping' ||
    activeModal === 'sizing' ||
    activeModal === 'heritage' ||
    activeModal === 'sustainability' ||
    activeModal === 'privacy' ||
    activeModal === 'terms';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-[#18181B]/55 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-xl max-h-[88vh] bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#EAE5DC] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[#18181B]">
            {activeModal === 'tracking' && (
              <>
                <PackageSearch className="w-4 h-4 text-[#9A5B13]" />
                <span>Track Your {STORE_CONFIG.brandName} Order</span>
              </>
            )}
            {activeModal === 'account' && (
              <>
                <User className="w-4 h-4 text-[#9A5B13]" />
                <span>Your Account &amp; Orders</span>
              </>
            )}
            {activeModal === 'support' && (
              <>
                <Mail className="w-4 h-4 text-[#9A5B13]" />
                <span>Store Support &amp; WhatsApp Desk</span>
              </>
            )}
            {isInfoTopic && <span>{INFO_CONTENT[activeModal].title}</span>}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B] hover:bg-[#F3EFE8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-5">
          {/* ORDER TRACKING */}
          {activeModal === 'tracking' && (
            <>
              <form onSubmit={handleTrackSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#8C857B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={lookupInput}
                    onChange={(e) => setLookupInput(e.target.value)}
                    placeholder="Enter order number (e.g. AC-PK-4819)"
                    className="w-full rounded-full bg-white border border-[#E3DDD3] pl-10 pr-4 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#9A5B13] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white text-[13px] font-semibold transition-colors whitespace-nowrap"
                >
                  Track
                </button>
              </form>

              {orders.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#6B655E]">
                  <span>Your orders:</span>
                  {orders.map((o) => (
                    <button
                      key={o.orderNumber}
                      type="button"
                      onClick={() => {
                        setLookupInput(o.orderNumber);
                        setMatchedOrder(o);
                        setNotFound(false);
                      }}
                      className={`px-2.5 py-1 rounded-md border text-[12px] font-medium tabular-nums transition-colors ${
                        matchedOrder?.orderNumber === o.orderNumber
                          ? 'bg-[#18181B] border-[#18181B] text-white'
                          : 'bg-white border-[#E3DDD3] text-[#18181B] hover:border-[#9A5B13]'
                      }`}
                    >
                      {o.orderNumber}
                    </button>
                  ))}
                </div>
              )}

              {notFound && (
                <div className="rounded-xl bg-white border border-[#EAE5DC] p-5 text-center">
                  <p className="text-[14px] font-semibold text-[#18181B]">
                    Order not found
                  </p>
                  <p className="text-[13px] text-[#6B655E] mt-1">
                    Double-check your order ID or try sample order{' '}
                    <span className="font-semibold text-[#18181B]">
                      AC-PK-4819
                    </span>
                    .
                  </p>
                </div>
              )}

              {matchedOrder && (
                <div className="rounded-xl bg-white border border-[#EAE5DC] p-5 space-y-5">
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0ECE4]">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#9A5B13] font-semibold">
                        Order {matchedOrder.orderNumber}
                      </p>
                      <p className="text-[16px] font-bold text-[#18181B] mt-0.5">
                        {matchedOrder.status}
                      </p>
                      <p className="text-[12.5px] text-[#6B655E] mt-0.5">
                        {matchedOrder.city} · {matchedOrder.paymentMethod}
                      </p>
                    </div>
                    <p className="text-[15px] font-bold text-[#18181B] tabular-nums">
                      {formatPrice(matchedOrder.totalPkr)}
                    </p>
                  </div>

                  {/* Stepper Timeline */}
                  <ol className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIMELINE_STEPS.map((label, idx) => {
                      const done = idx <= matchedOrder.stepIndex;
                      return (
                        <li key={label} className="space-y-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              done ? 'bg-[#9A5B13]' : 'bg-[#EAE5DC]'
                            }`}
                          />
                          <p
                            className={`text-[11.5px] leading-tight ${
                              done
                                ? 'font-semibold text-[#18181B]'
                                : 'text-[#8C857B]'
                            }`}
                          >
                            {label}
                          </p>
                        </li>
                      );
                    })}
                  </ol>

                  <div className="pt-3 border-t border-[#F0ECE4] space-y-2 text-[12.5px]">
                    <p className="font-semibold text-[#18181B]">
                      Items ({matchedOrder.items.reduce((s, i) => s + i.quantity, 0)})
                    </p>
                    {matchedOrder.items.map((item) => (
                      <div
                        key={item.key}
                        className="flex justify-between text-[#57534E]"
                      >
                        <span>
                          {item.quantity}× {item.name} ({item.variantLabel})
                        </span>
                        <span className="tabular-nums font-medium text-[#18181B]">
                          {formatPrice(item.pricePkr * item.quantity)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between text-[#78716C] pt-1.5 border-t border-[#F3EFE8]">
                      <span>Flat Nationwide Delivery</span>
                      <span className="tabular-nums font-medium text-[#18181B]">
                        {formatPrice(matchedOrder.shippingPkr)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ACCOUNT / ORDER HISTORY */}
          {activeModal === 'account' && (
            <div className="space-y-5">
              <div className="rounded-xl bg-white border border-[#EAE5DC] p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A5B13]">
                    Customer Profile
                  </p>
                  <p className="text-[17px] font-bold text-[#18181B] mt-0.5">
                    Saved Browser Session
                  </p>
                  <p className="text-[13px] text-[#6B655E] mt-0.5">
                    Your orders, cart, and wishlist stay saved automatically.
                  </p>
                </div>
                <span className="text-[12px] font-semibold text-[#9A5B13] tabular-nums">
                  {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#78716C]">
                  Recent Order History
                </h3>
                {orders.map((order) => (
                  <div
                    key={order.orderNumber}
                    className="rounded-xl bg-white border border-[#EAE5DC] p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-[14px] font-semibold text-[#18181B] tabular-nums">
                        {order.orderNumber}
                      </p>
                      <p className="text-[12.5px] text-[#6B655E]">
                        {order.placedAt} · {order.city} · {order.paymentMethod}
                      </p>
                    </div>
                    <p className="text-[14px] font-bold text-[#18181B] tabular-nums">
                      {formatPrice(order.totalPkr)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CLIENT SUPPORT / WHATSAPP DESK */}
          {activeModal === 'support' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                <div className="rounded-xl bg-white border border-[#EAE5DC] p-4">
                  <div className="flex items-center gap-2 text-[#1F4E37] font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp &amp; Phone</span>
                  </div>
                  <p className="mt-1.5 text-[#18181B] font-medium tabular-nums">
                    {STORE_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-[12px] text-[#78716C]">
                    {STORE_CONFIG.hours}
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-[#EAE5DC] p-4">
                  <div className="flex items-center gap-2 text-[#9A5B13] font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>Dispatch Studio</span>
                  </div>
                  <p className="mt-1.5 text-[#18181B] font-medium">
                    {STORE_CONFIG.addressLine}
                  </p>
                  <p className="text-[12px] text-[#78716C]">
                    {STORE_CONFIG.cityRegion}
                  </p>
                </div>
                <div className="sm:col-span-2 rounded-xl bg-white border border-[#EAE5DC] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-[#9A5B13] font-semibold">
                      <Mail className="w-4 h-4" />
                      <span>Gmail &amp; Email Support</span>
                    </div>
                    <a
                      href={`mailto:${STORE_CONFIG.email}`}
                      className="mt-1 inline-block text-[#18181B] font-medium hover:text-[#9A5B13] transition-colors break-all"
                    >
                      {STORE_CONFIG.email}
                    </a>
                  </div>
                  <span className="text-[12px] text-[#78716C]">
                    Order queries &amp; customer care
                  </span>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Assalam-o-Alaikum! I need assistance from ${STORE_CONFIG.brandName} support.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-full bg-[#1E6B47] hover:bg-[#175538] text-white text-[13.5px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {supportSent ? (
                <div className="rounded-xl bg-white border border-[#9A5B13]/35 p-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#9A5B13] text-white inline-flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#18181B]">
                    Message Received
                  </h3>
                  <p className="text-[13.5px] text-[#57534E]">
                    Thank you, {supportName}. Our store team will contact you at{' '}
                    {supportPhone} shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSupportSubmit}
                  className="rounded-xl bg-white border border-[#EAE5DC] p-5 space-y-3.5"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#78716C]">
                    Or Leave a Message
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={supportName}
                      onChange={(e) => setSupportName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] focus:border-[#9A5B13] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={supportPhone}
                      onChange={(e) => setSupportPhone(e.target.value)}
                      placeholder="WhatsApp / Mobile (03XX-XXXXXXX)"
                      className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] focus:border-[#9A5B13] focus:outline-none"
                    />
                  </div>

                  <select
                    value={supportTopic}
                    onChange={(e) => setSupportTopic(e.target.value)}
                    className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] bg-white focus:border-[#9A5B13] focus:outline-none"
                  >
                    <option>Watch &amp; Wallet Product Inquiry</option>
                    <option>100% Cash on Delivery (COD) &amp; Shipping</option>
                    <option>Order Status &amp; Tracking</option>
                    <option>Replacement or Support Claim</option>
                  </select>

                  <textarea
                    rows={3}
                    required
                    value={supportMsg}
                    onChange={(e) => setSupportMsg(e.target.value)}
                    placeholder="How can our store team help you today?"
                    className="w-full rounded-lg border border-[#E3DDD3] px-3.5 py-2.5 text-[13.5px] focus:border-[#9A5B13] focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full h-11 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white text-[13.5px] font-semibold transition-colors"
                  >
                    Send Support Inquiry
                  </button>
                </form>
              )}
            </div>
          )}

          {/* INFORMATIONAL TOPICS */}
          {isInfoTopic && (
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A5B13]">
                {INFO_CONTENT[activeModal].eyebrow}
              </p>
              <div className="space-y-4">
                {INFO_CONTENT[activeModal].sections.map((sec) => (
                  <div
                    key={sec.heading}
                    className="rounded-xl bg-white border border-[#EAE5DC] p-5"
                  >
                    <h3 className="text-[15px] font-semibold text-[#18181B]">
                      {sec.heading}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-[#57534E] leading-relaxed">
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
