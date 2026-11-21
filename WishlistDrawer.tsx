import { useEffect } from 'react';
import { Heart, ShoppingBag, Trash2, X } from 'lucide-react';
import { formatPrice } from '../data/catalog';
import type { Product } from '../types/store';
import { StudioImage } from './StudioImage';

interface WishlistDrawerProps {
  open: boolean;
  products: Product[];
  onClose: () => void;
  onRemove: (productId: string) => void;
  onMoveToBag: (product: Product) => void;
  onInspectProduct: (product: Product) => void;
}

export function WishlistDrawer({
  open,
  products,
  onClose,
  onRemove,
  onMoveToBag,
  onInspectProduct,
}: WishlistDrawerProps) {
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Saved Wishlist"
    >
      <div
        className="fixed inset-0 bg-[#18181B]/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="relative z-10 w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-[#E5DFD5] flex flex-col">
        <div className="px-6 py-4 bg-white border-b border-[#EAE5DC] flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-[#18181B]">
            Saved Pieces ({products.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="w-9 h-9 -mr-1.5 rounded-full inline-flex items-center justify-center text-[#57534E] hover:text-[#18181B] hover:bg-[#F3EFE8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {products.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#F1ECE3] flex items-center justify-center text-[#9A5B13]">
                <Heart className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-[#18181B]">
                No saved pieces yet
              </h3>
              <p className="mt-1.5 text-[13.5px] text-[#6B655E] max-w-xs">
                Tap the heart icon on any watch or leather wallet to save it
                for later comparison.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-[#EAE5DC] p-3.5 flex gap-3.5"
                >
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onInspectProduct(product);
                    }}
                    className="w-20 h-20 rounded-lg overflow-hidden bg-[#F5F2EC] shrink-0"
                  >
                    <StudioImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </button>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onInspectProduct(product);
                          }}
                          className="text-left text-[14px] font-semibold text-[#18181B] hover:text-[#9A5B13] truncate block w-full"
                        >
                          {product.name}
                        </button>
                        <p className="text-[12px] text-[#6B655E] mt-0.5 tabular-nums">
                          {formatPrice(product.pricePkr)} ·{' '}
                          {product.categoryLabel}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        aria-label={`Remove ${product.name} from wishlist`}
                        className="p-1 text-[#8C857B] hover:text-[#B91C1C]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => onMoveToBag(product)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#18181B] hover:bg-[#9A5B13] text-white px-3.5 py-1.5 text-[12px] font-semibold transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
