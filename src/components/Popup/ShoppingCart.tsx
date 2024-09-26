import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { ShoppingCartContext } from "../Shared/ShoppingCartContext";
import CartProduct from "./CartProduct";
import Button from "../Shared/Button";
import useLocalStorage from "../Shared/LocalStorage";

type setOrderPopup = {
  setOrderPopup: (value: boolean) => void;
  setShoppingNotForm: (value: boolean) => void;
};

const ShoppingCart = ({ setOrderPopup, setShoppingNotForm }: setOrderPopup) => {
  const { cartProducts, cartCount } = useContext(ShoppingCartContext);
  const { getValue } = useLocalStorage("cartProducts");

  let products = cartProducts;
  const [total, setTotal] = useState(
    products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0)
  );

  useEffect(() => {
    products = getValue() || [];
    setTotal(
      products.reduce((acc, product) => {
        return acc + product.price * product.count;
      }, 0)
    );
  }, [localStorage.getItem("cartProducts")]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4 dark:text-white">
        <h2 className="font-semibold">Shopping Cart</h2>
        <IoClose
          onClick={() => setOrderPopup(false)}
          className="text-2xl cursor-pointer"
        />
      </div>
      {/* Items Container */}
      <div className="text-primary">
        {cartCount === 0 ? (
          <p className="font-bold">Your Shopping Cart is Empty</p>
        ) : (
          <div>
            <div className="">
              {cartProducts.map((product) => {
                return (
                  <div key={product.id}>
                    <CartProduct product={product} />
                  </div>
                );
              })}
            </div>
            <p className="flex items-center justify-between mt-4 font-bold text-black dark:text-white">
              Total: <span>{`$${total.toFixed(2)}`}</span>
            </p>
            <div
              className="mx-auto mt-8 w-fit"
              onClick={() => setShoppingNotForm(false)}
            >
              <Button text="Order Now" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
