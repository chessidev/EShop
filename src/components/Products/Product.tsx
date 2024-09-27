import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../Shared/ShoppingCartContext";
import Button from "../Shared/Button";

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

const Product = ({ product }: ProductProps) => {
  const {
    increaseAmount,
    decreaseAmount,
    getItemQuantity,
    cartProducts,
    setCartCount,
    remove,
  } = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState(getItemQuantity(product));
  useEffect(() => {
    setQuantity(getItemQuantity(product));
  }, [localStorage.getItem("cartProducts")]);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${(product.id / 2) * 100}`}
      className="group w-fit overflow-clip"
    >
      <div className="relative">
        <img
          src={product.image || ""}
          alt={product.name || ""}
          className="object-cover w-[260px] h-[180px] rounded-md"
        />
        <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-0 duration-300 rounded-md backdrop-blur-sm overflow-clip group-hover:h-full">
          {quantity === 0 ? (
            <Button
              text={"add to cart"}
              onClickHandler={() => {
                increaseAmount(product);
                setQuantity(getItemQuantity(product));
                setCartCount(cartProducts.length);
              }}
            />
          ) : (
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <Button
                  circle={true}
                  text="-"
                  customStyles="text-xl font-bold"
                  onClickHandler={() => {
                    decreaseAmount(product);
                    setQuantity(getItemQuantity(product));
                    setCartCount(cartProducts.length);
                  }}
                />
                <p className="font-bold text-primary">
                  <span>{quantity}</span> in the cart
                </p>
                <Button
                  circle={true}
                  text="+"
                  customStyles="text-xl font-bold"
                  onClickHandler={() => {
                    increaseAmount(product);
                    setQuantity(getItemQuantity(product));
                    setCartCount(cartProducts.length);
                  }}
                />
              </div>
              <Button
                text={"remove"}
                onClickHandler={() => {
                  remove(product);
                  setQuantity(getItemQuantity(product));
                  setCartCount(cartProducts.length);
                }}
              />
            </div>
          )}
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
