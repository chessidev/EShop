import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="duration-300 dark:bg-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}
