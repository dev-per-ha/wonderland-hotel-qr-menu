
export default function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 md:justify-center">
      {categories.map((category) => (
        <button
          key={category.en}
          onClick={() => setActiveCategory(category.en)}
          className={`shrink-0 px-5 py-3 rounded-full text-sm transition-all duration-300 ${
            activeCategory === category.en
              ? "bg-[#173B32] text-white shadow-md"
              : "bg-white border border-[#173B32]/10 text-[#4C5750] hover:border-[#C5A46D]"
          }`}
        >
          {category.en}
          <span className="mx-1 text-[#C5A46D]">/</span>
          <span className="font-amharic">{category.am}</span>
        </button>
      ))}
    </div>
  )
}
