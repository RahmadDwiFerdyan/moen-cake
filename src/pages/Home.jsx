import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import FilterDropdown from "../components/FilterDropdown";


export default function Home() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sort, setSort] = useState("default");

  // Ambil kategori unik dari data
  const categories = [

    ...new Set(products.products.flatMap((p) => p.categories)),
  ];

  // FILTER + SORT
  const filteredProducts = products.products
    .filter((item) =>
      selectedCategory === "Semua"
        ? true
        : item.categories.includes(selectedCategory)
    )
    .sort((a, b) => {
      if (sort === "low") return a.variants[0].price - b.variants[0].price;
      if (sort === "high") return b.variants[0].price - a.variants[0].price;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold">
          Produk Kami
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Pilihan terbaik untuk setiap momen
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <FilterDropdown
          value={selectedCategory}
          options={["Semua", ...categories]}
          onChange={setSelectedCategory}
        />

        <FilterDropdown
          value={
            sort === "low"
              ? "Harga Terendah"
              : sort === "high"
                ? "Harga Tertinggi"
                : "Urutkan"
          }
          options={["Default", "Harga Terendah", "Harga Tertinggi"]}
          onChange={(val) => {
            if (val === "Harga Terendah") setSort("low");
            else if (val === "Harga Tertinggi") setSort("high");
            else setSort("default");
          }}
        />
      </div>


      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onClick={() => navigate(`/product/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
