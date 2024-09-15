import earphone from "../../assets/category/earphone.webp";
import gadget from "../../assets/category/watch.webp";
import labtop from "../../assets/category/macbook.webp";
import console from "../../assets/category/gaming.webp";
import vr from "../../assets/category/vr.webp";
import speaker from "../../assets/category/speaker.webp";

const categoriesArray = [
  {
    id: 1,
    name: "earphone",
    image: earphone,
    bgClasses: "from-black/90 to-black/70",
    imageClasses: "bottom-0 w-[320px]",
    responsiveClasses: "",
    articleClasses: "justify-end",
    textColor: "text-white",
    bgColor: "bg-primary",
  },
  {
    id: 2,
    name: "gadget",
    image: gadget,
    bgClasses: "from-brandYellow to-brandYellow/90",
    imageClasses: "bottom-0 -right-10 -translate-y-10 w-[320px]",
    responsiveClasses: "",
    articleClasses: "justify-end",
    textColor: "text-brandYellow",
    bgColor: "bg-white",
  },
  {
    id: 3,
    name: "labtop",
    image: labtop,
    bgClasses: "from-primary to-primary/90",
    imageClasses: "bottom-10 right-0 w-[250px]",
    articleClasses: "justify-end",
    responsiveClasses: "sm:col-span-2",
    textColor: "text-primary",
    bgColor: "bg-white",
  },
  {
    id: 4,
    name: "console",
    image: console,
    bgClasses: "from-gray-400 to-gray-100",
    imageClasses: "bottom-0 right-0 -translate-y-10 w-[250px]",
    responsiveClasses: "sm:col-span-2",
    articleClasses: "justify-end",
    textColor: "text-white",
    bgColor: "bg-primary",
  },
  {
    id: 5,
    name: "virtual",
    image: vr,
    bgClasses: "from-brandGreen to-brandGreen/90",
    imageClasses: "bottom-0 right-0 w-[320px]",
    responsiveClasses: "",
    articleClasses: "justify-start",
    textColor: "text-brandGreen",
    bgColor: "bg-white",
  },
  {
    id: 6,
    name: "speaker",
    image: speaker,
    bgClasses: "from-brandBlue to-brandBlue/90",
    imageClasses: "bottom-0 right-0 w-[250px]",
    responsiveClasses: "",
    articleClasses: "justify-start",
    textColor: "text-brandBlue",
    bgColor: "bg-white",
  },
];
export default categoriesArray;
