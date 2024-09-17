import categoriesArray from "./categoriesArray";
import Category from "./Category";

const Categories = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
      {categoriesArray.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Categories;
