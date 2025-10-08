import React from "react";
import { Star, Heart } from "lucide-react";

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
    image: "/HomeImages/image.png",
    price: 700,
    oldPrice: 1400,
    rating: 0,
  },
  {
    id: 2,
    title: "Sharp 25 Liter Hot & Grill Microwave Oven (R75MT)...",
    image: "/HomeImages/airpod.png",
    price: 17390,
    oldPrice: 23600,
    rating: 0,
  },
  {
    id: 3,
    title: "PRAN Full Cream Milk Powder 500 gm",
    image: "/HomeImages/wallet.png",
    price: 350,
    oldPrice: 440,
    rating: 5,
  },
  {
    id: 4,
    title: "Saudi Extreme 4T SAE 20W50 API SN JASO MA 1L TIN...",
    image: "/HomeImages/kettle.png",
    price: 630,
    oldPrice: 700,
    rating: 0,
  },
  {
    id: 5,
    title: "EVA Ladies Thongs-Super 5G-Red",
    image: "/HomeImages/nail.png",
    price: 102,
    oldPrice: 120,
    rating: 0,
  },
  {
    id: 6,
    title: "Magic Clean Bucket Parrot Green",
    image: "/HomeImages/iron.png",
    price: 1700,
    oldPrice: 2000,
    rating: 2,
  },
  {
    id: 7,
    title: "Duranta Steel 1-Spd Junior Ryan 16” Yellow Bicycle",
    image: "/HomeImages/rice.png",
    price: 8800,
    oldPrice: undefined,
    rating: 5,
  },
  {
    id: 8,
    title: "Super Power Spring push toys car",
    image: "/HomeImages/toaster.png",
    price: 427,
    oldPrice: 790,
    rating: 0,
  },
  {
    id: 9,
    title: "Super Power Spring push toys car",
    image: "/HomeImages/toaster.png",
    price: 427,
    oldPrice: 790,
    rating: 0,
  },
  {
    id: 10,
    title: "Super Power Spring push toys car",
    image: "/HomeImages/toaster.png",
    price: 427,
    oldPrice: 790,
    rating: 0,
  },
];

const Recom: React.FC = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Recommended <span className="text-blue-900">For You</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-lg mx-auto">
            Handpicked items just for you — explore our top recommendations and grab the best deals before they’re gone.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p, index) => (
            <div
              key={p.id}
              className={`relative flex flex-col items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl hover:border-red-400 transition-all duration-300 group
                ${index < 2 ? "md:col-span-2 bg-gray-50" : ""}`}
            >
              {/* Wishlist Heart Icon */}
              <button
                aria-label="Add to Wishlist"
                className="absolute top-3 right-3 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Heart size={20} />
              </button>

              {/* Product Image */}
              <img
                src={p.image}
                alt={p.title}
                className={`object-contain mx-auto transition-transform duration-300 group-hover:scale-105 ${
                  index < 2 ? "w-44 h-44" : "w-28 h-28"
                }`}
              />

              {/* Product Details */}
              <div className="flex flex-col justify-between w-full mt-2">
                <h3
                  className={`${
                    index < 2
                      ? "text-lg font-semibold"
                      : "text-sm font-medium"
                  } text-gray-800 line-clamp-2`}
                >
                  {p.title}
                </h3>

                {/* Rating */}
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
                <div className="mt-2 flex items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Tk {p.price.toLocaleString()}
                  </span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      Tk {p.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                {index < 2 && (
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
                      Buy Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-sm rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recom;
