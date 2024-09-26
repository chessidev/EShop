import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "./LocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type Product = {
  id: number;
  price: number;
  count: number;
  image: string;
  name: string;
};

type ShoppingCartContext = {
  cartProducts: Product[];
  increaseAmount: (cartProduct: cartProduct) => void;
  decreaseAmount: ({ id }: { id: number }) => void;
  getItemQuantity: ({ id }: { id: number }) => number;
  remove: ({ id }: { id: number }) => void;
  setCartCount: (count: number) => void;
  cartCount: number;
};

type cartProduct = {
  id: number;
  price: number;
  image: string;
  name: string;
};
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const { updateValue, getValue } = useLocalStorage("cartProducts");
  const [cartProducts, setCartProducts] = useState<Product[]>(getValue() || []);
  const [cartCount, setCartCount] = useState(cartProducts.length);

  useEffect(() => {
    updateValue(cartProducts);
    setCartCount(cartProducts.length);
  }, [cartProducts]);

  const increaseAmount = (cartProduct: cartProduct) => {
    const productIndex = cartProducts.findIndex(
      (product) => product.id === cartProduct.id
    );
    if (productIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[productIndex].count++;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([...cartProducts, { ...cartProduct, count: 1 }]);
    }
    updateValue(cartProducts);
  };

  function decreaseAmount({ id }: { id: number }) {
    const productIndex = cartProducts.findIndex((product) => product.id === id);
    if (productIndex >= 0 && cartProducts[productIndex].count > 1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[productIndex].count--;
      setCartProducts(updatedCartProducts);
    } else {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts.splice(productIndex, 1);
      setCartProducts(updatedCartProducts);
    }
    updateValue(cartProducts);
  }

  function getItemQuantity({ id }: { id: number }) {
    const product = cartProducts.find((product) => product.id === id);
    return product ? product.count : 0;
  }

  function remove({ id }: { id: number }) {
    const index = cartProducts.findIndex((product) => product.id === id);
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts.splice(index, 1);
    setCartProducts(updatedCartProducts);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        increaseAmount,
        decreaseAmount,
        getItemQuantity,
        cartCount,
        setCartCount,
        remove,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
