// import { Heart, ShoppingCart, User } from "lucide-react";
// import { useState } from "react";

// // ✅ Categories with subcategories

// const categories = [
//   {
//     name: "Clothing & Fashion",
//     subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Clothing", "Shoes", "Bags", "Jewelry & Accessories"],
//   },
//   {
//     name: "Grocery",
//     subcategories: ["Fruits & Vegetables", "Dairy & Eggs", "Snacks", "Beverages", "Staples", "Bakery"],
//   },
//   {
//     name: "Electronics",
//     subcategories: ["Mobile Phones", "Laptops", "Cameras", "Headphones", "Smart Watches", "Speakers"],
//   },
//   {
//     name: "Stationary",
//     subcategories: ["Notebooks", "Pens & Pencils", "Markers & Highlighters", "Art Supplies", "Folders & Files"],
//   },
//   {
//     name: "Accessories",
//     subcategories: ["Bags & Backpacks", "Wallets", "Belts", "Sunglasses", "Watches", "Jewelry"],
//   },
//   {
//     name: "Skincare & Haircare",
//     subcategories: ["Face Wash", "Moisturizers", "Sunscreen", "Shampoo & Conditioner", "Hair Oils", "Face Masks"],
//   },
//   {
//     name: "Beauty",
//     subcategories: ["Lipstick", "Foundation", "Eyeliner & Mascara", "Blush & Bronzer", "Makeup Brushes", "Nail Care"],
//   },
//   {
//     name: "Home & Kitchen",
//     subcategories: ["Cookware", "Dining & Serveware", "Storage & Organization", "Bedding & Bath", "Cleaning Supplies", "Home Decor"],
//   },
//   {
//     name: "Sports",
//     subcategories: ["Fitness Equipment", "Yoga & Pilates", "Outdoor Sports", "Sportswear", "Footwear", "Accessories"],
//   },
// ];

// const Navbar = () => {
//   const [activeCategory, setActiveCategory] = useState<number|null>(null);

//   return (
//     <div className="w-full bg-blue-900 shadow-lg">
//       {/* Top Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-4">
//           <img src="/logo1.png" alt="Logo" className="h-12 w-auto" />
//         </div>

//         {/* Center: Search Bar */}
//         <div className="flex-1 mx-6">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="w-2/3 px-5 py-2 ml-24 rounded-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-700 text-white bg-white placeholder-gray-300"
//           />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center space-x-6 text-white">
//           <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
//             <User size={18} />
//             <span>Sign In</span>
//           </div>

//           <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
//             <Heart size={18} />
//             <span>Wishlist</span>
//           </div>

//           {/* <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
//             <RefreshCcw size={18} />
//             <span>Compare</span>
//           </div> */}

//           <div className="relative flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
//             <ShoppingCart size={20} />
//             <span>Cart</span>
//             <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full shadow">
//               0
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* Second Row: Categories Menu */}
//       <div className="bg-white px-12 py-3 relative">
//         <div className="flex space-x-10 justify-center">
//           {categories.map((category, idx) => (
//             <div
//               key={idx}
//               className="relative"
//               onMouseEnter={() => setActiveCategory(idx)}
//               onMouseLeave={() => setActiveCategory(null)}
//             >
//               <button className="text-black font-medium hover:text-blue-600 transition py-2 px-3">
//                 {category.name}
//               </button>

//               {/* Dropdown */}
//               {activeCategory === idx &&
//                 category.subcategories &&
//                 category.subcategories.length > 0 && (
//                   <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 min-w-[200px]">
//                     <ul className="py-2">
//                       {category.subcategories.map((sub, subIdx) => (
//                         <li
//                           key={subIdx}
//                           className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition"
//                         >
//                           {sub}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Heart, ShoppingCart, User, BookOpen } from "lucide-react";
import { useState } from "react";

// ✅ Categories with subcategories
const categories = [
  {
    name: "Clothing & Fashion",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Clothing",
      "Shoes",
      "Bags",
      "Jewelry & Accessories",
    ],
  },
  {
    name: "Grocery",
    subcategories: [
      "Fruits & Vegetables",
      "Dairy & Eggs",
      "Snacks",
      "Beverages",
      "Staples",
      "Bakery",
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      "Mobile Phones",
      "Laptops",
      "Cameras",
      "Headphones",
      "Smart Watches",
      "Speakers",
    ],
  },
  {
    name: "Stationary",
    subcategories: [
      "Notebooks",
      "Pens & Pencils",
      "Markers & Highlighters",
      "Art Supplies",
      "Folders & Files",
    ],
  },
  {
    name: "Accessories",
    subcategories: [
      "Bags & Backpacks",
      "Wallets",
      "Belts",
      "Sunglasses",
      "Watches",
      "Jewelry",
    ],
  },
  {
    name: "Skincare & Haircare",
    subcategories: [
      "Face Wash",
      "Moisturizers",
      "Sunscreen",
      "Shampoo & Conditioner",
      "Hair Oils",
      "Face Masks",
    ],
  },
  {
    name: "Beauty",
    subcategories: [
      "Lipstick",
      "Foundation",
      "Eyeliner & Mascara",
      "Blush & Bronzer",
      "Makeup Brushes",
      "Nail Care",
    ],
  },
  {
    name: "Home & Kitchen",
    subcategories: [
      "Cookware",
      "Dining & Serveware",
      "Storage & Organization",
      "Bedding & Bath",
      "Cleaning Supplies",
      "Home Decor",
    ],
  },
  {
    name: "Sports",
    subcategories: [
      "Fitness Equipment",
      "Yoga & Pilates",
      "Outdoor Sports",
      "Sportswear",
      "Footwear",
      "Accessories",
    ],
  },
];

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="w-full bg-blue-900 shadow-lg">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo1.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-4 lg:mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full lg:w-2/3 px-4 py-2 rounded-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-700 text-black placeholder-gray-400 bg-white"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6 text-white">


          <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
            <BookOpen size={18} />
            <span>Blog</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
            <User size={18} />
            <span>Sign In</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
            <Heart size={18} />
            <span>Wishlist</span>
          </div>

          <div className="relative flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition">
            <ShoppingCart size={20} />
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              0
            </span>
          </div>
        </div>
      </nav>

      {/* Second Row: Categories Menu - visible only on lg+ */}
      <div className="hidden lg:block bg-white px-4 lg:px-12 py-3 relative">
        <div className="flex justify-center space-x-10">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button className="text-black font-medium hover:text-blue-600 transition py-2 px-3 whitespace-nowrap">
                {category.name}
              </button>

              {/* Dropdown */}
              {activeCategory === idx && category.subcategories?.length > 0 && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 min-w-[200px]">
                  <ul className="py-2">
                    {category.subcategories.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
