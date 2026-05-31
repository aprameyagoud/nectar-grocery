import type { Product } from '../types'
import { ProductCategory } from '../types'

const categoryFilterMap: Record<string, ProductCategory[]> = {
  Eggs: [ProductCategory.DAIRY_EGGS],
  'Noodles & Pasta': [ProductCategory.NOODLES_PASTA],
  'Chips & Crisps': [ProductCategory.CHIPS],
  'Fast Food': [ProductCategory.BAKERY_SNACKS],
}

const brandFilterMap: Record<string, string[]> = {
  'Individual Collection': ['individual collection'],
  'Coca Cola': ['cocola', 'cococola', 'coca cola', 'coca-cola'],
  Ifad: ['ifad'],
  'Kazi Farmas': ['kazi farmas'],
}

export function filterProducts(
  products: Product[],
  options: {
    query?: string
    category?: ProductCategory
    selectedCategories?: string[]
    selectedBrands?: string[]
    sortBy?: 'price_asc' | 'price_desc' | 'rating' | ''
  } = {},
): Product[] {
  const {
    query = '',
    category,
    selectedCategories = [],
    selectedBrands = [],
    sortBy = '',
  } = options

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = products.filter((product) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [product.name, product.description, product.brand ?? '', product.unit]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery)

    const matchesRouteCategory = !category || product.category === category

    const matchesSelectedCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((selectedCategory) =>
        (categoryFilterMap[selectedCategory] ?? []).includes(product.category),
      )

    const matchesSelectedBrands =
      selectedBrands.length === 0 ||
      selectedBrands.some((selectedBrand) => {
        const aliases = brandFilterMap[selectedBrand] ?? [selectedBrand.toLowerCase()]
        const productText = [product.brand ?? '', product.name].join(' ').toLowerCase()
        return aliases.some((alias) => productText.includes(alias.toLowerCase()))
      })

    return (
      matchesQuery &&
      matchesRouteCategory &&
      matchesSelectedCategories &&
      matchesSelectedBrands
    )
  })

  return [...filtered].sort((left, right) => {
    if (sortBy === 'price_asc') {
      return left.price - right.price
    }

    if (sortBy === 'price_desc') {
      return right.price - left.price
    }

    if (sortBy === 'rating') {
      return right.rating - left.rating
    }

    return 0
  })
}