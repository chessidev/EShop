import Slider from "react-slick";
import image_01 from "../../assets/hero/headphone.webp";
import image_02 from "../../assets/category/vr.webp";
import image_03 from "../../assets/category/macbook.webp";
import Button from "../Shared/Button";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Heros = [
  {
    id: 1,
    title: "Beats Solo",
    subtitle: "Wireless",
    image: image_01,
    category: "headphone",
  },
  {
    id: 2,
    title: "Oculus Quest",
    subtitle: "VR",
    image: image_02,
    category: "virtual",
  },
  {
    id: 3,
    title: "Macbook Pro",
    subtitle: "Latest Model",
    image: image_03,
    category: "labtops",
  },
];

const Hero = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-center min-h-[550px] sm:min-h-[650px] rounded-3xl duration-300 dark:from-gray-900 from-gray-300 to-gray-100 bg-gradient-to-r dark:to-gray-800">
        <div className="w-full">
          <Slider {...settings}>
            {Heros.map((hero) => {
              return (
                <div key={hero.id} className="overflow-clip">
                  <div className=" px-4 sm:px-16 relative pb-12 min-h-[400px] sm:min-h-[600px] sm:flex items-center">
                    {/* image */}
                    <div className="right-0 max-h-full mx-auto lg:right-8 xl:right-24 bottom-1/2 sm:translate-y-1/2 sm:absolute">
                      <img
                        src={hero.image}
                        alt="hero image"
                        className=" w-[150px] sm:w-[250px] md:scale-110 lg:scale-125 xl:scale-150 max-w-full max-h-full mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-10 object-contain"
                      />
                    </div>
                    {/* Text */}
                    <article className="flex flex-col items-center justify-center gap-4 pt-16 font-bold text-center sm:items-start sm:text-left">
                      <h2
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl capitalize sm:text-4xl lg:text-5xl dark:text-white"
                      >
                        {hero.title}
                      </h2>
                      <h2
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl capitalize sm:text-6xl lg:text-7xl dark:text-white "
                      >
                        {hero.subtitle}
                      </h2>
                      <h2 className="text-5xl text-white uppercase sm:text-6xl lg:text-9xl dark:text-white/5">
                        {hero.category}
                      </h2>
                      <Button
                        text="shop by category"
                        textColor="text-white"
                        bgColor="bg-primary"
                      />
                    </article>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
