"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Product {
  id: number;
  name: string;
  price: string;
  image_url: string;
  category: {
    id: number;
    name: string;
  };
}

const Sports = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryNameToShow = "Sports";

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data: Product[]) => {
        const filtered = data.filter((p) => p.category.name === categoryNameToShow);
        setProducts(filtered);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm sm:text-base">{categoryNameToShow}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Banner */}
      <section className="flex justify-center mt-4 sm:mt-6 px-4 sm:px-6">
        <img
          src="/Banners/sports.jpg"
          alt={categoryNameToShow}
          className="w-full max-w-7xl h-40 sm:h-56 md:h-72 lg:h-80 object-cover rounded-md shadow-sm"
        />
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="text-center text-base sm:text-lg py-12">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500 text-sm sm:text-base py-12">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-base sm:text-lg py-12">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex flex-col"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 line-clamp-2 mb-1 sm:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                    ${product.price}
                  </p>
                  <button className="mt-auto w-full bg-blue-600 text-white py-1.5 sm:py-2 px-2 text-xs sm:text-sm md:text-base rounded hover:bg-blue-700 active:bg-blue-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <FooterComponent />
    </div>
  );
};

export default Sports;
