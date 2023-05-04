export const TextInput = ({
  type = "text",
  changeHandler,
  placeholder,
  _style,
  name,
  state,
}) => {
  return (
    <input
      onChange={changeHandler}
      placeholder={placeholder}
      type={type}
      name={name}
      value={state[name]}
      className={` border p-3 rounded-md font-rubik focus:outline-none focus:border-sky-400 focus:border ring-1 focus:invalid:border-pink-500 disabled:text-slate-500 ring-sky-500 ${_style}`}
    />
  );
};

export const RadioInput = ({
  _style,
  name = "",
  changeHandler,
  value,
  label,
}) => {
  return (
    <div className={`flex items-center  ${_style}`}>
      <input
        id={label}
        name={name}
        value={label}
        onChange={changeHandler}
        className="checked:bg-green-500 checked:border-grey-500"
        type="radio"
      />
      <label
        htmlFor={label}
        className="capitalize ml-2 font-poppins text-slate-900 font-medium tracking-wider"
      >
        {label}
      </label>
    </div>
  );
};
