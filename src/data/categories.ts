import type { Category } from '../types'

const createCategoryImage = (query: string) => `https://loremflickr.com/300/300/${encodeURIComponent(query)}`

const categoryImageMap: Record<string, string> = {
  'fresh-fruits-vegetables': 'fresh fruits and vegatables.png',
  'cooking-oil-ghee': 'cooking oil.png',
  'meat-fish': 'meat and fish.png',
  'bakery-snacks': 'bakery and snck.png',
  'dairy-eggs': 'dairy.png',
  beverages: 'beverages.png',
}

const createLocalImage = (key: string) => {
  const filename = categoryImageMap[key]
  return filename ? new URL(`../assets/${filename}`, import.meta.url).href : createCategoryImage(key)
}

const categories: Category[] = [
  {
    id: 'fresh-fruits-vegetables',
    name: 'Fresh Fruits & Vegetable',
    image: createLocalImage('fresh-fruits-vegetables'),
    imageFallback: createCategoryImage('fresh fruits vegetables basket'),
    bgColor: '#F2FBF2',
    borderColor: '#B8E8B8',
  },
  {
    id: 'cooking-oil-ghee',
    name: 'Cooking Oil & Ghee',
    image: createLocalImage('cooking-oil-ghee'),
    imageFallback: createCategoryImage('olive oil bottle'),
    bgColor: '#FFF8EE',
    borderColor: '#FFE0A3',
  },
  {
    id: 'meat-fish',
    name: 'Meat & Fish',
    image: createLocalImage('meat-fish'),
    imageFallback: createCategoryImage('raw meat fish tray'),
    bgColor: '#FFF0F0',
    borderColor: '#FFB8B8',
  },
  {
    id: 'bakery-snacks',
    name: 'Bakery & Snacks',
    image: createLocalImage('bakery-snacks'),
    imageFallback: createCategoryImage('bread pastries basket'),
    bgColor: '#F5F0FF',
    borderColor: '#D4B8FF',
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    image: createLocalImage('dairy-eggs'),
    imageFallback: createCategoryImage('milk eggs cheese'),
    bgColor: '#FFFDE8',
    borderColor: '#FFE88A',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: createLocalImage('beverages'),
    imageFallback: createCategoryImage('assorted beverages bottles cans'),
    bgColor: '#EEF7FF',
    borderColor: '#B8D8FF',
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchCategories = async (): Promise<Category[]> => {
  await delay(600)
  return categories
}

export const localCategories = categories