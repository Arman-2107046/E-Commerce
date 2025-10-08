// import React from "react";
// import { Star, ShoppingCart, Heart } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   oldPrice?: number;
//   rating?: number;
//   inStock?: boolean;
//   discount?: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Flocked Labubu x Coca-Cola Statue Set | 10-Piece...",
//     image: "/HomeImages/tomato.png",
//     price: 700,
//     oldPrice: 1400,
//     rating: 4,
//     inStock: true,
//     discount: 50,
//   },
//   {
//     id: 2,
//     title: "Sharp 25 Liter Hot & Grill Microwave Oven (R75MT)...",
//     image: "/HomeImages/bread.jpg",
//     price: 17390,
//     oldPrice: 23600,
//     rating: 3,
//     inStock: true,
//     discount: 26,
//   },
//   {
//     id: 3,
//     title: "PRAN Full Cream Milk Powder 500 gm",
//     image: "/HomeImages/beef.jpg",
//     price: 350,
//     oldPrice: 440,
//     rating: 5,
//     inStock: false,
//     discount: 20,
//   },
//   {
//     id: 4,
//     title: "Saudi Extreme 4T SAE 20W50 API SN JASO MA 1L TIN...",
//     image: "/HomeImages/chicken.jpg",
//     price: 630,
//     oldPrice: 700,
//     rating: 2,
//     inStock: true,
//     discount: 10,
//   },
//   {
//     id: 5,
//     title: "EVA Ladies Thongs-Super 5G-Red",
//     image: "/HomeImages/eggs.jpg",
//     price: 102,
//     oldPrice: 120,
//     rating: 3,
//     inStock: true,
//     discount: 15,
//   },
//   {
//     id: 6,
//     title: "Magic Clean Bucket Parrot Green",
//     image: "/HomeImages/buiscuit.jpg",
//     price: 1700,
//     oldPrice: 2000,
//     rating: 2,
//     inStock: false,
//     discount: 15,
//   },
//   {
//     id: 7,
//     title: "Duranta Steel 1-Spd Junior Ryan 16” Yellow Bicycle",
//     image: "/HomeImages/nutella.jpg",
//     price: 8800,
//     rating: 5,
//     inStock: true,
//   },
//   {
//     id: 8,
//     title: "Super Power Spring push toys car",
//     image: "/HomeImages/ricep.jpg",
//     price: 427,
//     oldPrice: 790,
//     rating: 4,
//     inStock: true,
//     discount: 45,
//   },
// ];

// const BestSeller: React.FC = () => {
//   return (
//     <section className="w-full bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-gray-900 mb-10 ">
//           Best <span className="text-blue-900">Seller</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <Card
//               key={p.id}
//               className="relative overflow-hidden hover:shadow-lg transition-all duration-300"
//             >
//               {/* Discount badge */}
//               {p.discount && (
//                 <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
//                   -{p.discount}%
//                 </span>
//               )}

//               {/* Wishlist icon */}
//               <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-gray-100">
//                 <Heart size={16} className="text-gray-600" />
//               </button>

//               <CardHeader className="flex justify-center items-center h-40 overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300"
//                 />
//               </CardHeader>

//               <CardContent>
//                 <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
//                   {p.title}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 space-x-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       className={`${
//                         i < (p.rating || 0)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-gray-900">
//                     Tk {p.price.toLocaleString()}
//                   </span>
//                   {p.oldPrice && (
//                     <span className="text-gray-400 line-through ml-2 text-sm">
//                       Tk {p.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Stock info */}
//                 <p
//                   className={`mt-2 text-xs font-medium ${
//                     p.inStock ? "text-green-600" : "text-red-500"
//                   }`}
//                 >
//                   {p.inStock ? "In Stock" : "Out of Stock"}
//                 </p>
//               </CardContent>

//               <CardFooter className="flex justify-between gap-2 mt-auto">
//                 <Button
//                   variant="outline"
//                   className="w-1/2 flex items-center justify-center gap-1"
//                 >
//                   <ShoppingCart size={16} /> Add
//                 </Button>
//                 <Button
//                   className="w-1/2 bg-blue-900 hover:bg-blue-800 text-white"
//                 >
//                   Buy Now
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSeller;
import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  inStock?: boolean;
  discount?: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Flocked Labubu x Coca-Cola Statue Set | 10-Piece...",
    image: "/HomeImages/tomato.png",
    price: 700,
    oldPrice: 1400,
    rating: 4,
    inStock: true,
    discount: 50,
  },
  {
    id: 2,
    title: "Sharp 25 Liter Hot & Grill Microwave Oven (R75MT)...",
    image: "/HomeImages/bread.jpg",
    price: 17390,
    oldPrice: 23600,
    rating: 3,
    inStock: true,
    discount: 26,
  },
  {
    id: 3,
    title: "PRAN Full Cream Milk Powder 500 gm",
    image: "/HomeImages/beef.jpg",
    price: 350,
    oldPrice: 440,
    rating: 5,
    inStock: false,
    discount: 20,
  },
  {
    id: 4,
    title: "Saudi Extreme 4T SAE 20W50 API SN JASO MA 1L TIN...",
    image: "/HomeImages/chicken.jpg",
    price: 630,
    oldPrice: 700,
    rating: 2,
    inStock: true,
    discount: 10,
  },
  {
    id: 5,
    title: "EVA Ladies Thongs-Super 5G-Red",
    image: "/HomeImages/eggs.jpg",
    price: 102,
    oldPrice: 120,
    rating: 3,
    inStock: true,
    discount: 15,
  },
  {
    id: 6,
    title: "Magic Clean Bucket Parrot Green",
    image: "/HomeImages/buiscuit.jpg",
    price: 1700,
    oldPrice: 2000,
    rating: 2,
    inStock: false,
    discount: 15,
  },
  {
    id: 7,
    title: "Duranta Steel 1-Spd Junior Ryan 16” Yellow Bicycle",
    image: "/HomeImages/nutella.jpg",
    price: 8800,
    rating: 5,
    inStock: true,
  },
  {
    id: 8,
    title: "Super Power Spring push toys car",
    image: "/HomeImages/ricep.jpg",
    price: 427,
    oldPrice: 790,
    rating: 4,
    inStock: true,
    discount: 45,
  },
];

const BestSeller: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Best <span className="text-blue-900">Seller</span>
        </h2>

        {/* Mobile view */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {products.map((p) => (
            <div
              key={p.id}
              className="relative flex flex-col items-start gap-3 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-28 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {p.title}
              </h3>

              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={`${
                      i < (p.rating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-1 flex items-center">
                <span className="text-sm font-semibold text-gray-900">
                  Tk {p.price.toLocaleString()}
                </span>
                {p.oldPrice && (
                  <span className="text-gray-400 line-through ml-1 text-xs">
                    Tk {p.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* SM to LG view */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card
              key={p.id}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Discount badge */}
              {p.discount && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  -{p.discount}%
                </span>
              )}

              {/* Wishlist icon */}
              <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-gray-100">
                <Heart size={16} className="text-gray-600" />
              </button>

              <CardHeader className="flex justify-center items-center h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300"
                />
              </CardHeader>

              <CardContent>
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {p.title}
                </h3>

                <div className="flex items-center mt-2 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < (p.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    Tk {p.price.toLocaleString()}
                  </span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      Tk {p.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-2 text-xs font-medium ${
                    p.inStock ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {p.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between gap-2 mt-auto">
                <Button
                  variant="outline"
                  className="w-1/2 flex items-center justify-center gap-1"
                >
                  <ShoppingCart size={16} /> Add
                </Button>
                <Button className="w-1/2 bg-blue-900 hover:bg-blue-800 text-white">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
