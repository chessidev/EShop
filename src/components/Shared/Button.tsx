type ButtonProps = {
  textColor?: string;
  bgColor?: string;
  text: string;
  onClickHandler?: () => void;
};

const Button = ({ textColor, bgColor, text, onClickHandler }: ButtonProps) => {
  return (
    <button
      className={`${textColor || "text-white"} ${
        bgColor || "bg-primary"
      } capitalize rounded-full w-fit px-8 py-2 hover:scale-110 duration-300 relative z-20`}
      onClick={onClickHandler || (() => {})}
    >
      {text}
    </button>
  );
};

export default Button;
