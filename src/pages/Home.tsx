import FeaturedCategories from "@/components/Categories";
import FooterComponent from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

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

      <section className="h-[100vh] bg-white"></section>

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
