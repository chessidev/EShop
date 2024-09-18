/* eslint-disable react/prop-types */
import Button from "./Button";

const Banner = ({ banner }) => {
  return (
    <section className="container py-12">
      <div
        className={`${banner.productColor}  text-white min-h-[550px] md:min-h-fit rounded-3xl grid gap-6 md:grid-cols-3 items-center`}
      >
        <div className="p-6 sm:p-8">
          <p className="text-sm uppercase">{banner.discount}</p>
          <h2 className="text-4xl font-bold uppercase lg:text-7xl">
            {banner.title}
          </h2>
          <p className="text-sm capitalize">{banner.date}</p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={banner.image}
            alt="product image"
            className="w-[250px] scale-125 md:w-[350px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <h2 className="text-xl font-bold capitalize ">
            {banner.productTitle}
          </h2>
          <h2 className="text-3xl font-bold capitalize sm:text-5xl">
            {banner.productSale}
          </h2>
          <p className="text-sm">{banner.productDiscription}</p>
          <Button
            textColor={banner.textColor}
            bgColor="bg-white"
            text="shop now"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
