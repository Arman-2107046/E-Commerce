import React from "react";
import { Star } from "lucide-react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Flocked Labubu x Coca-Cola Statue Set | 10-Piece...",
    image: "/HomeImages/tomato.png",
    price: 700,
    oldPrice: 1400,
    rating: 0,
  },
  {
    id: 2,
    title: "Sharp 25 Liter Hot & Grill Microwave Oven (R75MT)...",
    image: "/HomeImages/bread.jpg",
    price: 17390,
    oldPrice: 23600,
    rating: 0,
  },
  {
    id: 3,
    title: "PRAN Full Cream Milk Powder 500 gm",
    image: "/HomeImages/beef.jpg",
    price: 350,
    oldPrice: 440,
    rating: 5,
  },
  {
    id: 4,
    title: "Saudi Extreme 4T SAE 20W50 API SN JASO MA 1L TIN...",
    image: "/HomeImages/chicken.jpg",
    price: 630,
    oldPrice: 700,
    rating: 0,
  },
  {
    id: 5,
    title: "EVA Ladies Thongs-Super 5G-Red",
    image: "/HomeImages/eggs.jpg",
    price: 102,
    oldPrice: 120,
    rating: 0,
  },
  {
    id: 6,
    title: "Magic Clean Bucket Parrot Green",
    image: "/HomeImages/buiscuit.jpg",
    price: 1700,
    oldPrice: 2000,
    rating: 2,
  },
  {
    id: 7,
    title: "Duranta Steel 1-Spd Junior Ryan 16” Yellow Bicycle",
    image: "/HomeImages/nutella.jpg",
    price: 8800,
    oldPrice: undefined,
    rating: 5,
  },
  {
    id: 8,
    title: "Super Power Spring push toys car",
    image: "/HomeImages/ricep.jpg",
    price: 427,
    oldPrice: 790,
    rating: 0,
  },
];

const GroceryFood: React.FC = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Farm Fresh <span className="text-blue-900"> Groceries</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-28 h-28 object-contain mx-auto sm:mx-0"
              />

              <div className="flex flex-col justify-between w-full">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {p.title}
                </h3>

                {/* Ratings */}
                <div className="flex items-center mt-1">
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

                {/* Price */}
                <div className="mt-1">
                  <span className="text-lg font-semibold text-gray-900">
                    Tk {p.price.toLocaleString()}
                  </span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      Tk {p.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroceryFood;
