import Cta from "@/components/App/Home/Cta";
import Categories from "@/components/App/Home/Categories";
import FeaturedProducts from "@/components/App/Home/FeaturedProducts";
import Features from "@/components/App/Home/Features";
import Hero from "@/components/App/Home/Hero";
import Products from "@/components/App/Home/Products";
import WhyUs from "@/components/App/Home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <WhyUs />
      <Categories />
      <Products />
      <Cta />
    </>
  );
};

export default Home;
