
import { useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import CategoryFilter from "./components/CategoryFilter"
import MenuCard from "./components/MenuCard"
import Footer from "./components/Footer"

import { categories, menuItems } from "./data/menuData"

function App() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter menu items by selected category
  const filteredItems = menuItems.filter((item) => {
    return (
      activeCategory === "All" ||
      item.category === activeCategory
    )
  })

  // Get the selected category's English and Amharic names
  const selectedCategory = categories.find(
    (category) => category.en === activeCategory
  )

  return (
    <div className="min-h-screen bg-[#F8F5EF]">

      <Header />

      <Hero />

      <main
        id="menu"
        className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20"
      >

        {/* Menu Heading */}
        <div className="text-center mb-12 fade-up">

          <p className="text-[#A08352] uppercase tracking-[4px] text-xs font-bold">
            A Culinary Experience
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-[#173B32] mt-4">
            Our Menu
          </h2>

          <p className="font-amharic text-xl text-[#9A8158] mt-3">
            የምግብ ዝርዝራችን
          </p>

          <div className="w-16 h-[2px] bg-[#C5A46D] mx-auto mt-6" />

        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Selected Category Heading and Item Count */}
        <div className="flex items-center justify-between mt-12 mb-6">

          <h3 className="font-display text-2xl text-[#173B32]">
            {selectedCategory?.en} / {selectedCategory?.am}
          </h3>

          <span className="text-xs text-stone-500">
            {filteredItems.length} items
          </span>

        </div>

        {/* Menu Items */}
        {filteredItems.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        ) : (

          <p className="text-center py-16 text-stone-500">
            No items found / ምንም አልተገኘም
          </p>

        )}

      </main>

      <Footer />

    </div>
  )
}

export default App
