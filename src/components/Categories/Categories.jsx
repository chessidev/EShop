import Button from "../Shared/Button";
import categoriesArray from "./categoriesArray";

const Categories = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
      {categoriesArray.map((category) => (
        <div
          key={category.id || ""}
          className={`overflow-clip py-10 pl-5 text-white bg-gradient-to-br ${
            category.bgClasses || ""
          } ${category.responsiveClasses || ""} rounded-3xl h-[320px] relative`}
        >
          <article
            className={`flex flex-col ${
              category.articleClasses || ""
            } h-full pb-4`}
          >
            <p className="pb-1 opacity-90 -gray-400">Enjoy</p>
            <p className="pb-1 text-2xl font-semibold">With</p>
            <h2 className="mb-2 text-4xl font-semibold capitalize opacity-20">
              {category.name || ""}
            </h2>
            <Button
              text="browse"
              textColor={category.textColor || ""}
              bgColor={category.bgColor || ""}
            />
          </article>
          <img
            src={category.image || ""}
            alt={category.name || ""}
            className={`absolute ${category.imageClasses || ""}`}
          />
        </div>
      ))}
    </section>
  );
};

export default Categories;
