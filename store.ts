export type CategoryId =
  | 'all'
  | 'watches'
  | 'leather-wallets';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export interface ProductVariant {
  id: string;
  label: string;
  swatchHex?: string;
  imageIndex?: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  collection: string;
  subtitle: string;
  pricePkr: number;
  compareAtPkr?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  imageFit?: 'cover' | 'contain';
  bestseller: boolean;
  editorialTag?: string;
  inStock: boolean;
  description: string;
  craftsmanshipNote: string;
  variants: ProductVariant[];
  specs: ProductSpec[];
}

export interface CategoryInfo {
  id: Exclude<CategoryId, 'all'>;
  name: string;
  shortDesc: string;
  image: string;
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  subtitle: string;
  image: string;
  pricePkr: number;
  variantLabel: string;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  featuredProductId: string;
  body: string[];
  craftTakeaway: string;
}

export interface OrderRecord {
  orderNumber: string;
  placedAt: string;
  status: 'Confirmed' | 'Quality Checked' | 'In Transit' | 'Delivered';
  stepIndex: number;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  city: string;
  shippingAddress: string;
  paymentMethod: string;
  subtotalPkr: number;
  discountPkr: number;
  shippingPkr: number;
  totalPkr: number;
  estimatedDelivery: string;
  items: CartItem[];
}
