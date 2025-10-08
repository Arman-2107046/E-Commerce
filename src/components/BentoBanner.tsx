import React from "react";

const BentoBannerGrid: React.FC = () => {
  const banners = [
    {
      id: 1,
      title: "Flat 10% Discount",
      description: "টেবিলে থাকুক ইতিহাসের ছাপ!",
      imageUrl: "your-image-url-1",
    },
    {
      id: 2,
      title: "20% Discount",
      description: "রান্না এখন মজার ব্যাপার!",
      imageUrl: "your-image-url-2",
    },
    {
      id: 3,
      title: "Smartphone Dhamaka Sale",
      description: "UP TO TK 9500 OFF",
      imageUrl: "your-image-url-3",
    },
    {
      id: 4,
      title: "13% Discount",
      description: "অগ্রাহায়ক কাপড়ের সহজ সমাধান",
      imageUrl: "your-image-url-4",
    },
    {
      id: 5,
      title: "Air Fryer Clearance Sale",
      description: "SAY NO TO OIL",
      imageUrl: "your-image-url-5",
    },
    {
      id: 6,
      title: "Exclusive Coupon",
      description: "Extra 5% off on First Purchase",
      imageUrl: "your-image-url-6",
    },
  ];

  return (
    <div className="max-w-[85rem] mx-auto px-4 py-10">
      {/* Top Row (2 banners) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {banners.slice(0, 2).map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
              <h3 className="text-2xl font-bold drop-shadow">{banner.title}</h3>
              <p className="text-sm opacity-90">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row (3 banners) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.slice(2, 5).map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold drop-shadow">{banner.title}</h3>
              <p className="text-xs opacity-90">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoBannerGrid;
