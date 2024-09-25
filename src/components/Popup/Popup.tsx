import { useRef } from "react";
import Button from "../Shared/Button";
import { IoClose } from "react-icons/io5";

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
    }
  };

  return (
    <div
      onClick={clickHandeler}
      ref={container}
      className={`${popupHide} fixed top-0 left-0 z-50 items-center justify-center w-screen h-screen backdrop-blur-sm bg-black/50`}
    >
      <div className="p-4 bg-white rounded-3xl w-[300px] max-w-[90vw] dark:bg-gray-900 border-2 border-primary">
        <div className="flex items-center justify-between mb-4 dark:text-white">
          <h2 className="font-semibold">Order Now</h2>
          <IoClose
            onClick={() => setOrderPopup(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="name" className="sr-only ">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            className="border-gray-300 dark:text-white rounded-full border-[1px] p-2 focus:outline-none focus:border-primary dark:bg-gray-800"
          />
          <label htmlFor="email" className="sr-only ">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="border-gray-300 dark:text-white rounded-full border-[1px] p-2 focus:outline-none focus:border-primary dark:bg-gray-800"
          />
          <label htmlFor="address" className="sr-only ">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            name="address"
            className="border-gray-300 dark:text-white rounded-full border-[1px] p-2 focus:outline-none focus:border-primary dark:bg-gray-800"
          />
          <div className="mx-auto">
            <Button text="Order Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
