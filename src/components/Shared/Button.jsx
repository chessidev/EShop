// eslint-disable-next-line react/prop-types
const Button = ({ textColor, bgColor, text }) => {
  return (
    <button
      className={`${textColor} ${bgColor} capitalize rounded-full w-fit px-8 py-2 hover:scale-110 duration-300 relative z-20`}
    >
      {text}
    </button>
  );
};

export default Button;
