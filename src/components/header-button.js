import "./footer.css";
import FooterDropdown from "./footer-dropdown.js";
import FooterPagination from "./footer-pagination.js";
import Header from "./header";

const HeaderButton = () => {
  return (
    <button className="page-header__button page-header__button_transparent">
      <svg
        className="page-header__icon"
        viewBox="0 0 16 16"
        fill="#8055FF"
        strok="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="4" stroke="none" />
        <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
        <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
        <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
        <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
        <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none" />
        <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
        <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
        <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
      </svg>
      <span className="page-header__button__text">Cветлая тема</span>
    </button>
  );
};

export default HeaderButton;
