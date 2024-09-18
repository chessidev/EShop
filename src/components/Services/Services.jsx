import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide, FaWallet } from "react-icons/fa6";

const Services = () => {
  return (
    <section
      data-aos="fade-up"
      className="container grid grid-cols-2 py-14 md:py-20 gap-x-4 gap-y-8 lg:grid-cols-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <FaCarSide className="text-4xl text-primary md:text-5xl" />
        <article>
          <h3 className="font-bold lg:text-xl dark:text-white">
            Free Shipping
          </h3>
          <p className="text-sm text-gray-400">Free Shipping On All Order</p>
        </article>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <FaCheckCircle className="text-4xl text-primary md:text-5xl" />
        <article>
          <h3 className="font-bold lg:text-xl dark:text-white">Safe Money</h3>
          <p className="text-sm text-gray-400">30 Days Money Back</p>
        </article>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <FaWallet className="text-4xl text-primary md:text-5xl" />
        <article>
          <h3 className="font-bold lg:text-xl dark:text-white">
            Secure Payment
          </h3>
          <p className="text-sm text-gray-400">All Payment Secure</p>
        </article>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <FaHeadphonesAlt className="text-4xl text-primary md:text-5xl" />
        <article>
          <h3 className="font-bold lg:text-xl dark:text-white">
            Online Supoort 24/7
          </h3>
          <p className="text-sm text-gray-400">Technical Support 24/7</p>
        </article>
      </div>
    </section>
  );
};

export default Services;
