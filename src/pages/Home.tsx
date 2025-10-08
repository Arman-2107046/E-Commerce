// import BentoBannerGrid from "@/components/BentoBanner";
import BestSeller from "@/components/BestSeller";
import FeaturedCategories from "@/components/Categories";
import FooterComponent from "@/components/Footer";
import GroceryFood from "@/components/GroceryFood";
import HeroSection from "@/components/Hero";
import HotDeals from "@/components/HotDeals";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";
import Newsletter from "@/components/Newsletter";
import Recom from "@/components/Recom";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <HeroSection />
      </section>

      <section>
        <FeaturedCategories />
      </section>

      <section className="flex justify-center mt-[5rem] rounded-lg">
        <img
          src="/Banners/arrival.jpg"
          alt="Banner"
          className="w-9/10 h-auto object-cover rounded-md"
        />
      </section>

      <section>
        <NewArrival />
      </section>

      <section className="flex justify-center mt-[5rem] rounded-lg">
        <img
          src="/Banners/best.jpg"
          alt="Banner"
          className="w-9/10 h-auto object-cover rounded-md"
        />
      </section>

      <section>
        <BestSeller />
      </section>

      <section className="flex justify-center mt-[5rem] rounded-lg">
        <img
          src="/Banners/gadget-banner.jpg"
          alt="Banner"
          className="w-9/10 h-auto object-cover rounded-md"
        />
      </section>

      <section>
        <HotDeals />
      </section>

      <section className="flex justify-center mt-[5rem] ">
        <img
          src="/Banners/grocery.png"
          alt="Banner"
          className="w-9/10 h-auto object-cover "
        />
      </section>

      <section>
        <GroceryFood />
      </section>

      <section className="flex justify-center mt-[5rem] rounded-lg">
        <img
          src="/Banners/recom.jpg"
          alt="Banner"
          className="w-9/10 h-auto object-cover rounded-md"
        />
      </section>

      <section>
        <Recom/>
      </section>

      {/* <section className="h-[100vh] bg-white"></section> */}

      <section>
        <Newsletter />
      </section>

      <section>
        <FooterComponent />
      </section>
    </div>
  );
};

export default Home;
