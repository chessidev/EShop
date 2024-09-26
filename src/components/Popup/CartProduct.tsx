import { useContext, useEffect, useState } from "react";
import Button from "../Shared/Button";
import { ShoppingCartContext } from "../Shared/ShoppingCartContext";
import { MdDelete } from "react-icons/md";

type product = {
  product: {
    id: number;
    price: number;
    count: number;
    image: string;
    name: string;
  };
};

const CartProduct = ({ product }: product) => {
  const {
    cartProducts,
    setCartCount,
    increaseAmount,
    decreaseAmount,
    getItemQuantity,
    remove,
  } = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState(getItemQuantity(product));

  useEffect(() => {
    setQuantity(getItemQuantity(product));
  }, [localStorage.getItem("cartProducts")]);

  return (
    <div className="flex flex-col items-center justify-between gap-4 py-5 md:flex-row md:py-3 border-b-[1px] border-gray-300 dark:border-gray-500">
      <div className="flex items-center justify-between w-full gap-4 md:justify-start">
        <img
          src={product.image || ""}
          alt={product.name || ""}
          className="w-[50px] h-[50px] object-cover rounded-md"
        />
        <div>
          <p className="font-semibold">{product.name || "Something"}</p>
          <p className="text-primary">${product.price * product.count}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center order-1 gap-4 md:-order-none">
          <Button
            circle={true}
            text="-"
            onClickHandler={() => {
              decreaseAmount(product);
              setQuantity(getItemQuantity(product));
              setCartCount(cartProducts.length);
            }}
          />
          <p>{quantity}</p>
          <Button
            text="+"
            circle={true}
            onClickHandler={() => {
              increaseAmount(product);
              setQuantity(getItemQuantity(product));
              setCartCount(cartProducts.length);
            }}
          />
        </div>
        <MdDelete
          onClick={() => remove(product)}
          className="flex items-center justify-center w-8 h-8 p-1 text-white duration-300 rounded-full cursor-pointer bg-primary hover:scale-110"
        />
      </div>
    </div>
  );
};

export default CartProduct;
