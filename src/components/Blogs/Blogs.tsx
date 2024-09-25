import Blog from "./Blog";
import blogsArray from "./blogsArray";

const Blogs = () => {
  return (
    <section className="container py-12">
      <article className="mb-10">
        <h2 className="text-3xl font-bold text-center lg:text-4xl dark:text-white">
          Recent News
        </h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Explore Our Blogs
        </p>
      </article>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-7">
        {blogsArray.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
