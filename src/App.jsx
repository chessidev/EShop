import Banner from "./components/Shared/Banner";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Banners from "./components/Shared/Banners";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useState } from "react";

export default function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  return (
    <div className="duration-300 dark:bg-gray-900">
      <Navbar setOrderPopup={setOrderPopup} />
      <Hero />
      <Categories />
      <Services />
      <Banner banner={Banners[0]} />
      <Products />
      <Banner banner={Banners[1]} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}
