import { ButtonIconClass, ButtonIconData } from "./ButtonIconData";
import { useState } from "react";

const ButtonIcon = ({
  classNameB,
  buttonText,
  svgName,

  viewBox = "0 0 16 16",
  fill = "#8055FF",
  stroke = "none",
  xmlns = "http://www.w3.org/2000/svg",
}) => {
    const { path, circle } = ButtonIconData[svgName];
    const { className } = ButtonIconClass[svgName];
  return (
    <button className={classNameB} >
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

export default ButtonIcon;
