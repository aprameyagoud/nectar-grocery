import type { Category } from '../types'

const createCategoryImage = (query: string) => `https://loremflickr.com/300/300/${encodeURIComponent(query)}`

const categories: Category[] = [
  {
    id: 'fresh-fruits-vegetables',
    name: 'Fresh Fruits & Vegetable',
    image: createCategoryImage('fresh fruits vegetables basket'),
    bgColor: '#F2FBF2',
    borderColor: '#B8E8B8',
  },
  {
    id: 'cooking-oil-ghee',
    name: 'Cooking Oil & Ghee',
    image: createCategoryImage('olive oil bottle'),
    bgColor: '#FFF8EE',
    borderColor: '#FFE0A3',
  },
  {
    id: 'meat-fish',
    name: 'Meat & Fish',
    image: createCategoryImage('raw meat fish tray'),
    bgColor: '#FFF0F0',
    borderColor: '#FFB8B8',
  },
  {
    id: 'bakery-snacks',
    name: 'Bakery & Snacks',
    image: createCategoryImage('bread pastries basket'),
    bgColor: '#F5F0FF',
    borderColor: '#D4B8FF',
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    image: createCategoryImage('milk eggs cheese'),
    bgColor: '#FFFDE8',
    borderColor: '#FFE88A',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: createCategoryImage('assorted beverages bottles cans'),
    bgColor: '#EEF7FF',
    borderColor: '#B8D8FF',
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchCategories = async (): Promise<Category[]> => {
  await delay(600)
  return categories
}