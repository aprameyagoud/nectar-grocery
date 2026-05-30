import type { Category } from '../types'

const createCategoryImage = (label: string, bgColor: string) => {
  const cleanedLabel = label.replace(/&/g, 'and')

  return `https://placehold.co/300x300/${bgColor.replace('#', '')}/333333?text=${encodeURIComponent(cleanedLabel)}`
}

const categories: Category[] = [
  {
    id: 'fresh-fruits-vegetables',
    name: 'Fresh Fruits & Vegetable',
    image: createCategoryImage('Fresh Fruits & Vegetable', 'F2FBF2'),
    bgColor: '#F2FBF2',
    borderColor: '#B8E8B8',
  },
  {
    id: 'cooking-oil-ghee',
    name: 'Cooking Oil & Ghee',
    image: createCategoryImage('Cooking Oil & Ghee', 'FFF8EE'),
    bgColor: '#FFF8EE',
    borderColor: '#FFE0A3',
  },
  {
    id: 'meat-fish',
    name: 'Meat & Fish',
    image: createCategoryImage('Meat & Fish', 'FFF0F0'),
    bgColor: '#FFF0F0',
    borderColor: '#FFB8B8',
  },
  {
    id: 'bakery-snacks',
    name: 'Bakery & Snacks',
    image: createCategoryImage('Bakery & Snacks', 'F5F0FF'),
    bgColor: '#F5F0FF',
    borderColor: '#D4B8FF',
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    image: createCategoryImage('Dairy & Eggs', 'FFFDE8'),
    bgColor: '#FFFDE8',
    borderColor: '#FFE88A',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: createCategoryImage('Beverages', 'EEF7FF'),
    bgColor: '#EEF7FF',
    borderColor: '#B8D8FF',
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchCategories = async (): Promise<Category[]> => {
  await delay(600)
  return categories
}