
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
    <div className="w-full  py-16">
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