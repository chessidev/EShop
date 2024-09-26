import { useRef, useState } from "react";
import OrderForm from "./OrderForm";
import ShoppingCart from "./ShoppingCart";

type PopupProps = {
  orderPopup: boolean;
  setOrderPopup: (value: boolean) => void;
};

const Popup = ({ orderPopup, setOrderPopup }: PopupProps) => {
  const popupHide = orderPopup ? "flex" : "hidden";
  const container = useRef(null);
  const clickHandeler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (container.current === e.target) {
      setOrderPopup(false);
      setShoppingNotForm(true);
    }
  };

  const [shoppingNotForm, setShoppingNotForm] = useState(true);

  return (
    <div
      onClick={clickHandeler}
      ref={container}
      className={`${popupHide} fixed top-0 left-0 z-[1000] items-center justify-center w-screen h-screen backdrop-blur-sm bg-black/50`}
    >
      <div className="p-4 bg-white rounded-3xl min-w-[300px] max-w-[90vw] max-h-[90vh] overflow-y-scroll no-scrollbar dark:bg-gray-900 border-2 border-primary">
        {/* Shopping Cart */}
        <div className={`${shoppingNotForm ? "block" : "hidden"}`}>
          <ShoppingCart
            setOrderPopup={setOrderPopup}
            setShoppingNotForm={setShoppingNotForm}
          />
        </div>
        {/* Order Form */}
        <div className={`${shoppingNotForm ? "hidden" : "block"}`}>
          <OrderForm
            setOrderPopup={setOrderPopup}
            setShoppingNotForm={setShoppingNotForm}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
