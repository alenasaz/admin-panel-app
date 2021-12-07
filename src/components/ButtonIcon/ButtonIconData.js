export const ButtonIconClass = {
  delete: {
    className: "table__footer-icon",
  },
  change: {
    className: "table__footer-icon",
  },
  filter: {
      className: "button__icon",
  },
  theme: {
      className: "page-header__icon"
  },
  save: 
  {
    className: "button__icon",
  }
};

export const ButtonIconData = {
  delete: {
    circle: (
      <path
        d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
        fill="none"
        stroke-linecap="round"
      />
    ),
    path: <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />,
  },
  change: {
    circle: <path d="M6 14.5H15" fill="none" />,
    path: (
      <path
        d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4"
        fill="none"
      />
    ),
  },
  filter: { 
    circle: "",
    path: <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none" />
  },
  theme: {
    circle: <circle cx="8" cy="8" r="4" stroke="none" />,
    path: '<path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" /> <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" /> <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" /> <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" /> <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none" /> <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" /> <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" /> <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />'
  },
  save: { 
    circle: "",
    path: <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none" />
  },
};


