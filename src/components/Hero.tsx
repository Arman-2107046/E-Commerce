// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { useState, useEffect } from "react";

// const heroImages = [
//   "/HeroImages/h1.jpg",
//   "/HeroImages/h3.jpg",
//   "/HeroImages/h4.jpg",
//   "/HeroImages/h2.jpg",
// ];

// const rightImages = ["/HeroImages/r1.jpg", "/HeroImages/r2.jpg"];

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [carouselApi, setCarouselApi] = useState<any>(null);

//   // Autoplay
//   useEffect(() => {
//     if (!carouselApi) return;

//     const interval = setInterval(() => {
//       const nextIndex =
//         (carouselApi.selectedScrollSnap() + 1) % heroImages.length;
//       carouselApi.scrollTo(nextIndex);
//       setActiveSlide(nextIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [carouselApi]);

//   const handleDotClick = (index: number) => {
//     carouselApi?.scrollTo(index);
//     setActiveSlide(index);
//   };

//   const handleSelect = () => {
//     if (!carouselApi) return;
//     setActiveSlide(carouselApi.selectedScrollSnap());
//   };

//   return (
//     <div className="w-full mt-8 px-4 lg:px-8">
//       <div className="max-w-[90rem] mx-auto">
//         {/* Grid: carousel left, right images right on large screens */}
//         <div className="grid lg:grid-cols-3 gap-4">
//           {/* Carousel */}
//           <div className="lg:col-span-2 w-full relative">
//             <Carousel
//               setApi={setCarouselApi}
//               className="rounded-lg overflow-hidden shadow-lg w-full"
//             >
//               <CarouselContent onScroll={handleSelect}>
//                 {heroImages.map((img, idx) => (
//                   <CarouselItem key={idx}>
//                     <img
//                       src={img}
//                       alt={`Slide ${idx}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>

//               {/* Previous / Next Arrows */}
//               <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
//               <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />

//               {/* Dots */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {heroImages.map((_, idx) => (
//                   <button
//                     key={idx}
//                     className={`w-2 h-2 rounded-full ${
//                       idx === activeSlide ? "bg-blue-600" : "bg-gray-300"
//                     }`}
//                     onClick={() => handleDotClick(idx)}
//                   />
//                 ))}
//               </div>
//             </Carousel>
//           </div>

//           {/* Right images: stacked on large screens */}
//           <div className="hidden lg:flex flex-col gap-4">
//             {rightImages.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="h-[13rem] overflow-hidden rounded-lg shadow-lg"
//               >
//                 <img
//                   src={img}
//                   alt={`Right Image ${idx}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right images for small screens: two images side by side */}
//         <div className="grid grid-cols-2 gap-4 mt-4 lg:hidden">
//           {rightImages.map((img, idx) => (
//             <div
//               key={idx}
//               className="h-[150px] sm:h-[180px] overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={img}
//                 alt={`Right Image ${idx}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;











import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const heroImages = [
  "/HeroImages/h1.jpg",
  "/HeroImages/h3.jpg",
  "/HeroImages/h4.jpg",
  "/HeroImages/h2.jpg",
];

const rightImages = ["/HeroImages/r1.jpg", "/HeroImages/r2.jpg"];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Autoplay
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      const nextIndex =
        (carouselApi.selectedScrollSnap() + 1) % heroImages.length;
      carouselApi.scrollTo(nextIndex);
      setActiveSlide(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const handleDotClick = (index: number) => {
    carouselApi?.scrollTo(index);
    setActiveSlide(index);
  };

  const handleSelect = () => {
    if (!carouselApi) return;
    setActiveSlide(carouselApi.selectedScrollSnap());
  };

  return (
    <div className="w-full mt-8 px-4 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Grid: carousel left, right images right on large screens */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Carousel */}
          <div className="lg:col-span-2 w-full relative h-auto lg:h-[32rem]">
            <Carousel
              setApi={setCarouselApi}
              className="rounded-lg overflow-hidden shadow-lg w-full h-full"
            >
              <CarouselContent onScroll={handleSelect}>
                {heroImages.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={img}
                      alt={`Slide ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Previous / Next Arrows */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === activeSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => handleDotClick(idx)}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* Right images: stacked and same height as carousel */}
          <div className="hidden lg:flex flex-col gap-4 h-[32rem]">
            {rightImages.map((img, idx) => (
              <div key={idx} className="flex-1 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`Right Image ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right images for small screens: two images side by side */}
        <div className="grid grid-cols-2 gap-4 mt-4 lg:hidden">
          {rightImages.map((img, idx) => (
            <div
              key={idx}
              className="h-[150px] sm:h-[180px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Right Image ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
