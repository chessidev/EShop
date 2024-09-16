import Banner from "./components/Shared/Banner";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Banners from "./components/Shared/Banners";

export default function App() {
  return (
    <div className="duration-300 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <Banner banner={Banners[0]} />
      <Products />
      <Banner banner={Banners[1]} />
    </div>
  );
}
