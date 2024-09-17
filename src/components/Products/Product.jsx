/* eslint-disable react/prop-types */
import Button from "../Shared/Button";

const Product = ({ product }) => {
  return (
    <div className="group">
      <div className="relative">
        <img
          src={product.image || ""}
          alt={product.name || ""}
          className="object-cover w-[260px] h-[180px] rounded-md"
        />
        <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-0 duration-300 backdrop-blur-sm overflow-clip group-hover:h-full">
          <Button text={"add to cart"} />
        </div>
      </div>
      <div>
        <h3 className="font-bold dark:text-white">{product.name || ""}</h3>
        <p className="font-bold dark:text-white">${product.price || ""}</p>
      </div>
    </div>
  );
};

export default Product;
