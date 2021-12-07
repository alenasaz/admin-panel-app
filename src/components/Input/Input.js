import "./Input.css";
import { InputIconClass, InputIconData } from "./InputIconData";
const Input = ({
  title,
  type = "text",
  className,
  placeholder,
  onChange,
  defaultValue,
  isDisabled = false,
  svgName,
  viewBox = "0 0 16 16",
  fill = "#8055FF",
  stroke = "none",
  xmlns = "http://www.w3.org/2000/svg",
  classNameDiv,
  onClick
}) => {
//   const classNameInput = "input_field" + " " + className;
  const { path, circle } = InputIconData[svgName];
  const { classNameIcon } = InputIconClass[svgName];
  const classNameIconNew = "filter__input-icon" + " " + classNameIcon;
  const classNameDiv1="filter__input-field filter__input-field_empty"+ " "+ classNameDiv;
  return (

    <div>
    <label className="filter__input-group">
      <span className="filter__input-title">{title}</span>
      <div className={classNameDiv1}>
        <input
          className={className}
          placeholder={placeholder}
          value={defaultValue}
          onChange={onChange}
        />
        <button className="filter__input-button" onClick={onClick}>
          <svg
          className={classNameIconNew}
          viewBox={viewBox}
          fill={fill}
          stroke={stroke}
          xmlns={xmlns}
        >
          {circle} {path}
          </svg>
        </button>
      </div>
    </label>
    </div>
    

  );
};

export default Input;


// <div className="input_wrapper">
// <span className="input_title">{title}</span>
// <input
//   type={type}
//   className={classNameInput}
//   placeholder={placeholder}
//   onChange={onChange}
//   defaultValue={defaultValue}
//   disabled={isDisabled}
// />

// </div>