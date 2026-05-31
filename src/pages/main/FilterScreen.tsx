import { useSmartBack } from '../../hooks/useSmartBack'
import { Button } from '../../components/ui/Button'
import { useFilterStore } from '../../store/filterStore'

import { CheckIcon, CloseIcon } from './mainIcons'

const categoryItems = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food']
const brandItems = ['Individual Collection', 'Coca Cola', 'Ifad', 'Kazi Farmas']

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
                  isSelected ? 'border-[#3FA845] bg-gradient-to-b from-[#5FCC66] to-[#3FA845] text-white shadow-[0_8px_16px_rgba(63,168,69,0.24)]' : 'border-[#B9B9B9] bg-white text-transparent'
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

        <Button type="button" onClick={goBack} className="mt-auto text-lg">
          Apply Filter
        </Button>
      </div>
    </div>
  )
}