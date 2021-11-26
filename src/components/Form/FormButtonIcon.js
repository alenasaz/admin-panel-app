import { FormButtonIconClass, FormButtonIconData } from "./FormButtonIconData"

const FormButtonIcon = ({
  classNameB,
  buttonText,
  svgName,
  onClick,
  viewBox = "0 0 16 16",
  fill = "#8055FF",
  stroke = "none",
  xmlns = "http://www.w3.org/2000/svg",
}) => {
    const { path, circle } = FormButtonIconData[svgName];
    const { className } = FormButtonIconClass[svgName];
  return (
    <button className={classNameB} onClick={onClick} >
      <svg
        className={className}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        xmlns={xmlns}
      >
        {circle} {path}
      </svg>
      <span className="button__text">{buttonText}</span>
    </button>
  );
};

export default FormButtonIcon;
