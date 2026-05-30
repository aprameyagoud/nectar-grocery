import { useSmartBack } from '../../hooks/useSmartBack'
import { useFilterStore } from '../../store/filterStore'

import { CheckIcon, CloseIcon } from './mainIcons'

const categoryItems = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food']
const brandItems = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas']

function FilterSection({
  title,
  items,
  selectedItems,
  onToggle,
}: {
  title: string
  items: string[]
  selectedItems: string[]
  onToggle: (value: string) => void
}) {
  return (
    <section className="rounded-[28px] bg-[#F6F6F6] p-6">
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary">{title}</h2>
      <div className="mt-8 space-y-6">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item)

          return (
            <button
              key={item}
              type="button"
              onClick={() => onToggle(item)}
              className={`flex w-full items-center gap-4 text-left text-lg transition-colors ${
                isSelected ? 'text-primary' : 'text-textPrimary'
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-[14px] border text-xl ${
                  isSelected ? 'border-primary bg-primary text-white' : 'border-[#B9B9B9] bg-white text-transparent'
                }`}
              >
                <CheckIcon className="h-6 w-6" />
              </span>
              <span>{item}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default function FilterScreen() {
  const goBack = useSmartBack('/home')
  const selectedCategories = useFilterStore((state) => state.selectedCategories)
  const selectedBrands = useFilterStore((state) => state.selectedBrands)
  const toggleCategory = useFilterStore((state) => state.toggleCategory)
  const toggleBrand = useFilterStore((state) => state.toggleBrand)
  return (
    <div className="min-h-screen bg-white px-4 pb-6 pt-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-md flex-col">
        <div className="flex items-center justify-between">
          <button type="button" onClick={goBack} className="inline-flex h-12 w-12 items-center justify-center text-textPrimary">
            <CloseIcon className="h-8 w-8" />
          </button>
          <h1 className="text-2xl font-semibold tracking-[-0.03em]">Filters</h1>
          <span className="h-12 w-12" />
        </div>

        <div className="mt-8 space-y-6 pb-6">
          <FilterSection
            title="Categories"
            items={categoryItems}
            selectedItems={selectedCategories}
            onToggle={toggleCategory}
          />

          <FilterSection
            title="Brand"
            items={brandItems}
            selectedItems={selectedBrands}
            onToggle={toggleBrand}
          />
        </div>

        <button
          type="button"
          onClick={goBack}
          className="mt-auto w-full rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] transition-colors hover:bg-primary-dark"
        >
          Apply Filter
        </button>
      </div>
    </div>
  )
}