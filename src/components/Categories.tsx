
interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Clothing & Fashion", image: "/clothing-fashion.png" },
  { name: "Grocery", image: "/grocery.png" },
  { name: "Electronics", image: "/electronics.png" },
  { name: "Stationary", image: "/stationary.png" },
  { name: "Accessories", image: "/accessories.png" },
  { name: "Skincare & Haircare", image: "/skincare-haircare.png" },
  { name: "Beauty", image: "/beauty.png" },
  { name: "Home & Kitchen", image: "/home-kitchen.png" },
  { name: "Sports", image: "/sports.png" },
];

const FeaturedCategories = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-12">
          Featured{" "}
          <span className="text-blue-900">
            Categories
          </span>
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Image Container */}
              <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Category Name */}
              <p className="text-sm text-gray-700 text-center font-medium leading-tight">
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