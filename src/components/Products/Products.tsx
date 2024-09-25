import Product from "./Product";
import productsArray from "./productsArray";

const Products = () => {
  return (
    <section className="container py-12">
      <article>
        <h2 className="text-3xl font-bold text-center lg:text-4xl dark:text-white">
          Our Products
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Explore Our Products
        </p>
      </article>
      {/* Cards Setion */}
      <div className="grid justify-center my-10 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-4">
        {productsArray.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
