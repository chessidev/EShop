// eslint-disable-next-line react/prop-types
const Button = ({ textColor, bgColor, text, onClickHandler }) => {
  return (
    <button
      data-aos="fade-up"
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
