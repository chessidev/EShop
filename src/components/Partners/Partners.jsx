import partner_1 from "../../assets/brand/br-1.webp";
import partner_2 from "../../assets/brand/br-2.webp";
import partner_3 from "../../assets/brand/br-3.webp";
import partner_4 from "../../assets/brand/br-4.webp";
import partner_5 from "../../assets/brand/br-5.webp";
const partners = [
  { id: 1, image: partner_1 },
  { id: 2, image: partner_2 },
  { id: 3, image: partner_3 },
  { id: 4, image: partner_4 },
  { id: 5, image: partner_5 },
];

const Partners = () => {
  return (
    <section className="hidden py-8 mt-24 bg-gray-200 md:block dark:bg-white/10">
      <div className="container grid items-center grid-cols-5 gap-3 opacity-50 justify-items-center">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.image}
            alt="partner"
            className="w-[80px] dark:invert"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
