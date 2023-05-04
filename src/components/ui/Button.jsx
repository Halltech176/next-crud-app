const Button = ({ text, _style, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`bg-slate-900 hover:border-slate-900 hover:bg-white border transition-all duration-75 hover:text-slate-900 text-slate-300 font-rubik px-3 py-2 rounded-md ${_style}`}
    >
      {text}
    </button>
  );
};
export default Button;
