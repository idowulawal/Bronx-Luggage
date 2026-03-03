import React, { useState } from "react";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import productsData from "../data.json";

export default function FilterSidebar({
  searchTerm,
  onSearchChange,
  filterCategory,
  filterGender,
  filterColor,
  filterSize,
  filterBrand,
  filterPrice,
  onCategoryChange,
  onGenderChange,
  onColorChange,
  onSizeChange,
  onBrandChange,
  onPriceChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { PRODUCTS } = productsData;
  const uniqueColors = ["All", ...new Set(PRODUCTS.map((p) => p.color))];
  const uniqueSizes = ["All", ...new Set(PRODUCTS.map((p) => p.size))];
  const uniqueBrands = ["All", ...new Set(PRODUCTS.map((p) => p.brand))];

  return (
    <aside className="w-full md:w-64 space-y-8">
      {/* mobile toggle button */}
      <button
        className="w-full flex items-center justify-between md:hidden px-4 py-2 bg-zinc-100 rounded-lg"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="font-bold text-zinc-700">Filters</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {/* wrapper for all controls, shown based on open state on mobile */}
      <div className={isOpen ? "block md:block" : "hidden md:block"}>      
        {/* search input */}
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          />
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </h3>
          <div className="space-y-6">
          <div>
            <p className="font-bold text-zinc-900 mb-3">Category</p>
            <div className="space-y-2">
              {["All", "Luggage", "Bags", "Backpacks"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filterCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 mb-3">Gender</p>
            <div className="space-y-2">
              {["All", "Men", "Women"].map((gen) => (
                <button
                  key={gen}
                  onClick={() => onGenderChange(gen)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filterGender === gen
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {gen}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 mb-3">Brand</p>
            <div className="space-y-2">
              {uniqueBrands.map((b) => (
                <button
                  key={b}
                  onClick={() => onBrandChange(b)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filterBrand === b
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 mb-3">Color</p>
            <div className="space-y-2">
              {uniqueColors.map((c) => (
                <button
                  key={c}
                  onClick={() => onColorChange(c)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filterColor === c
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 mb-3">Size</p>
            <div className="space-y-2">
              {uniqueSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => onSizeChange(s)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filterSize === s
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 mb-3">Price Range</p>
            <div className="space-y-2">
              {["All", "Under $100", "$100 - $250", "Over $250"].map(
                (price) => (
                  <button
                    key={price}
                    onClick={() => onPriceChange(price)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      filterPrice === price
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {price}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        </div>
        </div>
    </aside>
  );
}
