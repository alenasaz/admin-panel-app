import React from "react";
import { iconStatusClass, iconStatusParam } from "./StatusIconData";
import './StatusIconStyle.css';
export const StatusIcon = ({
  status,
  viewBox = "0 0 16 16",
  fill = "#8055FF",
  stroke = "none",
  xmlns = "http://www.w3.org/2000/svg",
}) => {
  const { path, circle } = iconStatusClass[status];
  const { className } = iconStatusParam[status];
  return (
    <>
      <svg
        className={className}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        xmlns={xmlns}
      >
        {circle} {path}
      </svg>
    </>
  );
};
