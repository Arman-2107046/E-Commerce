"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Unisex",
  "Tops & T-Shirts",
  "Jeans & Pants",
  "Jackets & Coats",
  "Shirts & Blouses",
  "Dresses",
  "Shorts & Skirts",
  "Hoodies & Sweatshirts",
  "Activewear & Sportswear",
  "Hats & Caps",
  "Accessories",
  "Footwear",
];

const products = [
  { id: 1, name: "Classic T-Shirt", price: 1200, oldPrice: 1500, img: "https://via.placeholder.com/200x250" },
  { id: 2, name: "Denim Jeans", price: 2200, oldPrice: 2500, img: "https://via.placeholder.com/200x250" },
  { id: 3, name: "Leather Jacket", price: 4500, img: "https://via.placeholder.com/200x250" },
  { id: 4, name: "Hoodie", price: 2000, oldPrice: 2300, img: "https://via.placeholder.com/200x250" },
  { id: 5, name: "Polo Shirt", price: 1600, oldPrice: 1800, img: "https://via.placeholder.com/200x250" },
  { id: 6, name: "Cargo Pants", price: 2500, img: "https://via.placeholder.com/200x250" },
  { id: 7, name: "Sports Sneakers", price: 3200, oldPrice: 3500, img: "https://via.placeholder.com/200x250" },
  { id: 8, name: "Formal Shirt", price: 1800, img: "https://via.placeholder.com/200x250" },
  { id: 9, name: "Chinos", price: 2100, oldPrice: 2400, img: "https://via.placeholder.com/200x250" },
  { id: 10, name: "Trench Coat", price: 5000, img: "https://via.placeholder.com/200x250" },
  { id: 11, name: "Joggers", price: 1900, img: "https://via.placeholder.com/200x250" },
  { id: 12, name: "Oversized Tee", price: 1300, oldPrice: 1600, img: "https://via.placeholder.com/200x250" },
  { id: 13, name: "Baseball Cap", price: 800, img: "https://via.placeholder.com/200x250" },
  { id: 14, name: "Wool Sweater", price: 2700, oldPrice: 3000, img: "https://via.placeholder.com/200x250" },
  { id: 15, name: "Blazer", price: 5500, img: "https://via.placeholder.com/200x250" },
  { id: 16, name: "Track Jacket", price: 2600, oldPrice: 2900, img: "https://via.placeholder.com/200x250" },
];

export default function ClothingBody() {
  const [sort, setSort] = useState("position");

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-7xl mx-auto">
      {/* Sidebar — visible on lg and up */}
      <aside className="hidden lg:block w-full lg:w-1/5 bg-white rounded-xl shadow-sm p-4 h-fit sticky top-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="flex flex-col space-y-2 max-h-[70vh] overflow-y-auto pr-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-green-600 w-4 h-4" />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-4/5">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <h2 className="text-xl font-semibold">All Products</h2>
          <select
            className="border px-3 py-2 rounded-md text-sm w-full sm:w-auto"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="position">Sort by Position</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => {
            const discount = p.oldPrice
              ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
              : null;

            return (
              <div
                key={p.id}
                className="relative bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col group cursor-pointer"
              >
                {/* Discount badge */}
                {discount && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    -{discount}%
                  </span>
                )}

                {/* Wishlist icon */}
                <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-gray-100">
                  <Heart size={16} className="text-gray-600" />
                </button>

                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-lg mb-3 w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <h3 className="text-sm font-medium mb-2 line-clamp-2 text-gray-800">
                  {p.name}
                </h3>

                <div className="mt-auto">
                  <div className="text-lg font-semibold text-gray-900">
                    Tk {p.price.toLocaleString()}
                  </div>
                  {p.oldPrice && (
                    <div className="text-sm text-gray-400 line-through">
                      Tk {p.oldPrice.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
