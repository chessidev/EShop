import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <div className="duration-300 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Categories />
      <Services />
    </div>
  );
}
