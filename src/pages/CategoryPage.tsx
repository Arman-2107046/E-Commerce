// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image_url: string;
//   category: {
//     id: number;
//     name: string;
//   };
// }

// const CategoryPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch("http://127.0.0.1:8000/api/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data: Product[]) => {
//         setProducts(data);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <div className="p-6 text-center">Loading...</div>;
//   if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;
//   if (products.length === 0) return <div className="p-6 text-center">No products found.</div>;

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto">
//           Explore a wide range of products from fashion, electronics, groceries, and more.
//         </p>
//         <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
//           Shop Now
//         </button>
//       </section>

//       {/* Products Section */}
//       <div className="p-6 max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
//             >
//               <img
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
//                 <p className="text-gray-500 text-sm mb-2">{product.category.name}</p>
//                 <p className="text-blue-600 font-bold text-lg">${product.price}</p>
//                 <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;



import { useEffect, useState } from "react";

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

interface Category {
  id: number;
  name: string;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all products
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Fetch categories for filters
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.id === selectedCategory)
    : products;

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;
  if (products.length === 0) return <div className="p-6 text-center">No products found.</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore a wide range of products from fashion, electronics, groceries, and more.
        </p>
        <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
          Shop Now
        </button>
      </section>

      {/* Category Filters */}
      <div className="p-6 max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full font-medium ${
            selectedCategory === null ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          } transition`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-medium ${
              selectedCategory === cat.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            } transition`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="p-6 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.category.name}</p>
                  <p className="text-blue-600 font-bold text-lg">${product.price}</p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
