interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Clothing & Fashion", image: "/CategoryImages/t-shirt.jpeg" },
  { name: "Grocery", image: "/CategoryImages/grocery.png" },
  { name: "Electronics", image: "/CategoryImages/electronics.jpg" },
  { name: "Stationary", image: "/CategoryImages/stationary.jpg" },
  { name: "Accessories", image: "/CategoryImages/accessories.jpg" },
  { name: "Skincare & Haircare", image: "/CategoryImages/skincare.jpg" },
  { name: "Beauty", image: "/CategoryImages/beauty.jpg" },
  { name: "Home & Kitchen", image: "/CategoryImages/kitchen.jpg" },
  { name: "Sports", image: "/CategoryImages/sports.jpg" },
];

const FeaturedCategories = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center sm:text-start">
          Featured <span className="text-blue-900">Categories</span>
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Image Container */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Category Name */}
              <p className="text-xs sm:text-sm text-gray-700 text-center font-medium leading-tight">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
