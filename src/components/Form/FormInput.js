import "./FormInput.css";
import { InputIconClass, InputIconData } from "./FormIconData";
const FormInput = ({
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
}) => {
  const classNameInput = "input_field" + " " + className;
  const { path, circle } = InputIconData[svgName];
  const { classNameIcon } = InputIconClass[svgName];
  return (
    <div className="input_wrapper">
      <span className="input_title">{title}</span>
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={isDisabled}
      />
     
    </div>
  );
};

export default FormInput;
//<button className="button_input"></button>
//   <svg
//   className={classNameIcon}
//   viewBox={viewBox}
//   fill={fill}
//   stroke={stroke}
//   xmlns={xmlns}
// >
//   {circle} {path}
// </svg>
