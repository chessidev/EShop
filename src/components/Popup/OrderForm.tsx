import Button from "../Shared/Button";
import { IoClose } from "react-icons/io5";

type setOrderPopup = {
  setOrderPopup: (value: boolean) => void;
  setShoppingNotForm: (value: boolean) => void;
};

const OrderForm = ({ setOrderPopup, setShoppingNotForm }: setOrderPopup) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 dark:text-white">
        <h2 className="font-semibold">Order Now</h2>
        <IoClose
          onClick={() => {
            setOrderPopup(false);
            setShoppingNotForm(true);
          }}
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
      </form>
      <div
        className="mx-auto mt-8 w-fit"
        onClick={() => {
          setShoppingNotForm(true);
          setOrderPopup(false);
        }}
      >
        <Button text="Order Now" />
      </div>
    </div>
  );
};

export default OrderForm;
