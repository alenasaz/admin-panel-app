
export const iconStatusParam = {
    'Новый': {
      className: "table__item-icon table__header-icon_orange",
    },
    'Расчет': {
      className: "table__item-icon table__header-icon_blue",
    },
    'Выполнен': {
      className: "table__item-icon table__header-icon_green",
    },
    'Отменен': {
      className: "table__item-icon table__header-icon_black",
    },
    'Отложен': {
      className: "table__item-icon table__header-icon_blue",
    },
  };
  
  export const iconStatusClass = {
    'Новый': { circle: <circle cx="8" cy="8" r="4" stroke="none" />, path: "" },
    'Расчет': {
      circle: <circle cx="8" cy="8" r="4" stroke="none" />,
      path: "",
    },
    'Выполнен': {
      circle: "",
      path: <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />,
    },
    'Отменен': {
      path: <path d="M12.5 12.5L3.5 3.5" fill="none" />,
      circle: <circle cx="8" cy="8" r="6.5" fill="none" />,
    },
    'Отложен': {
      circle: <circle cx="8" cy="8" r="4" stroke="none" />,
      path: "",
    },
  };
  