import React, { useMemo } from "react";
import { AnimatePresence } from "motion/react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import data from "../data.json";

const { PRODUCTS } = data;

export default function Shop({
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredProducts = useMemo(() => {
    const term = (searchTerm || "").trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const catMatch =
        filterCategory === "All" || p.category === filterCategory;
      const genMatch =
        filterGender === "All" ||
        p.gender === filterGender ||
        p.gender === "Unisex";
      const colorMatch = filterColor === "All" || p.color === filterColor;
      const sizeMatch = filterSize === "All" || p.size === filterSize;
      const brandMatch = filterBrand === "All" || p.brand === filterBrand;
      const priceMatch =
        filterPrice === "All" ||
        (filterPrice === "Under $100" && p.price < 100) ||
        (filterPrice === "$100 - $250" && p.price >= 100 && p.price <= 250) ||
        (filterPrice === "Over $250" && p.price > 250);
      const searchMatch =
        term === "" ||
        p.name.toLowerCase().includes(term) ||
        (p.brand && p.brand.toLowerCase().includes(term));
      return (
        catMatch &&
        genMatch &&
        colorMatch &&
        sizeMatch &&
        brandMatch &&
        priceMatch &&
        searchMatch
      );
    });
  }, [
    filterCategory,
    filterGender,
    filterColor,
    filterSize,
    filterBrand,
    filterPrice,
    searchTerm,
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterCategory={filterCategory}
          filterGender={filterGender}
          filterColor={filterColor}
          filterSize={filterSize}
          filterBrand={filterBrand}
          filterPrice={filterPrice}
          onCategoryChange={onCategoryChange}
          onGenderChange={onGenderChange}
          onColorChange={onColorChange}
          onSizeChange={onSizeChange}
          onBrandChange={onBrandChange}
          onPriceChange={onPriceChange}
        />

        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-zinc-900">
              {filterCategory === "All"
                ? "ALL PRODUCTS"
                : filterCategory.toUpperCase()}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium">
              {filteredProducts.length} items found
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
