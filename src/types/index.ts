export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  imageFallback?: string
  category: ProductCategory
  unit: string
  rating: number
  reviewCount: number
  inStock: boolean
  brand?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  zone?: string
  area?: string
}

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
  status: OrderStatus
  paymentMethod: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  image: string
  imageFallback?: string
  bgColor: string
  borderColor: string
}

export enum ProductCategory {
  FRUITS_VEG = 'Fresh Fruits & Vegetable',
  COOKING_OIL = 'Cooking Oil & Ghee',
  MEAT_FISH = 'Meat & Fish',
  BAKERY_SNACKS = 'Bakery & Snacks',
  DAIRY_EGGS = 'Dairy & Eggs',
  BEVERAGES = 'Beverages',
  NOODLES_PASTA = 'Noodles & Pasta',
  CHIPS = 'Chips & Crisps',
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}