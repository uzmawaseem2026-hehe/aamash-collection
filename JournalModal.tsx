import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { JOURNAL_ARTICLES, PRODUCTS, formatPrice } from '../data/catalog';
import type { JournalArticle, Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onSelectArticle: (article: JournalArticle) => void;
  onInspectProduct: (product: Product) => void;
}

export function JournalModal({
  article,
  onClose,
  onSelectArticle,
  onInspectProduct,
}: JournalModalProps) {
  useEffect(() => {
    if (!article) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [article, onClose]);

  if (!article) return null;

  const featuredProduct = PRODUCTS.find(
    (p) => p.id === article.featuredProductId
  );
  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#18181B]/55 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <article className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] shadow-2xl overflow-hidden flex flex-col">
        <div className="px-6 py-4 bg-white border-b border-[#EAE5DC] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-[12px] text-[#78716C]">
            <span className="font-semibold uppercase tracking-[0.16em] text-[#9A5B13]">
              Time &amp; Style Journal
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close journal article"
            className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B] hover:bg-[#F3EFE8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h2
              id="journal-modal-title"
              className="text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] text-[#18181B] leading-tight headline-balance"
            >
              {article.title}
            </h2>
            <p className="mt-2 text-[13px] text-[#78716C]">
              By {article.author} · {article.date}
            </p>
          </div>

          <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#EFEAE1] border border-[#E7E2DA]">
            <StudioImage
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-[15.5px] leading-[1.75] text-[#3F3A34]">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Care / Craft Takeaway Note */}
          <div className="rounded-xl bg-[#F3EFE8] border border-[#E5DFD5] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A5B13]">
              Workshop Care Note
            </p>
            <p className="mt-1.5 font-editorial italic text-[20px] text-[#2B2622] leading-snug">
              “{article.craftTakeaway}”
            </p>
          </div>

          {/* Linked Featured Piece */}
          {featuredProduct && (
            <div className="rounded-xl bg-white border border-[#E7E2DA] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-14 rounded-lg overflow-hidden bg-[#F5F2EC] shrink-0">
                  <StudioImage
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#78716C]">
                    Featured in This Story
                  </p>
                  <p className="text-[15px] font-semibold text-[#18181B]">
                    {featuredProduct.name}
                  </p>
                  <p className="text-[13px] font-medium text-[#9A5B13] tabular-nums">
                    {formatPrice(featuredProduct.pricePkr)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInspectProduct(featuredProduct);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white px-5 py-2.5 text-[13px] font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Inspect Piece</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* More Stories */}
          <div className="pt-4 border-t border-[#E6E0D6]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#78716C] mb-3">
              More from the Journal
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherArticles.map((other) => (
                <button
                  key={other.id}
                  type="button"
                  onClick={() => onSelectArticle(other)}
                  className="text-left p-3.5 rounded-xl bg-white border border-[#E7E2DA] hover:border-[#9A5B13] transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#9A5B13] font-semibold">
                    {other.category}
                  </p>
                  <p className="mt-1 text-[13.5px] font-semibold text-[#18181B] leading-snug">
                    {other.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
