type ButtonProps = {
  textColor?: string;
  bgColor?: string;
  text: string;
  circle?: true;
  onClickHandler?: () => void;
};

const Button = ({
  textColor,
  bgColor,
  text,
  onClickHandler,
  circle,
}: ButtonProps) => {
  return (
    <button
      className={`${textColor || "text-white"} ${
        bgColor || "bg-primary"
      } capitalize rounded-full ${
        circle ? "w-8 h-8 flex items-center justify-center" : "w-fit px-8 py-2"
      } hover:scale-110 duration-300 relative z-20`}
      onClick={onClickHandler || (() => {})}
    >
      {text}
    </button>
  );
};

export default Button;
