import product_1 from "../../assets/product/p-1.webp";
import product_2 from "../../assets/product/p-2.webp";
import product_3 from "../../assets/product/p-3.webp";
import product_4 from "../../assets/product/p-4.webp";
import product_5 from "../../assets/product/p-5.webp";
import product_6 from "../../assets/product/p-6.webp";
import product_7 from "../../assets/product/p-7.webp";
import product_8 from "../../assets/product/p-8.webp";
import Button from "../Shared/Button";
const productsArray = [
  {
    id: 1,
    name: "Boat Headphone",
    price: 120,
    image: product_1,
  },
  {
    id: 2,
    name: "Rocky Mountain",
    price: 420,
    image: product_2,
  },
  {
    id: 3,
    name: "Goggles",
    price: 320,
    image: product_3,
  },
  {
    id: 4,
    name: "Printed",
    price: 220,
    image: product_4,
  },
  {
    id: 5,
    name: "Boat Headphone",
    price: 120,
    image: product_5,
  },
  {
    id: 6,
    name: "Rocky Mountain",
    price: 420,
    image: product_6,
  },
  {
    id: 7,
    name: "Goggles",
    price: 320,
    image: product_7,
  },
  {
    id: 8,
    name: "Printed",
    price: 220,
    image: product_8,
  },
];
const Products = () => {
  return (
    <section className="container py-12">
      <article>
        <h2 className="text-3xl font-bold text-center lg:text-4xl dark:text-white">
          Our Products
        </h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Explore Our Products
        </p>
      </article>
      {/* Cards Setion */}
      <div className="grid justify-center my-10 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-4">
        {productsArray.map((product) => (
          <div key={product.id} className="group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-[260px] h-[180px] rounded-md"
              />
              <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-0 duration-300 backdrop-blur-sm overflow-clip group-hover:h-full">
                <Button text={"add to cart"} />
              </div>
            </div>
            <div>
              <h3 className="font-bold dark:text-white">{product.name}</h3>
              <p className="font-bold dark:text-white">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
