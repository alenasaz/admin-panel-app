import "./footer.css";
import FooterDropdown from "./footer-dropdown.js";
import FooterPagination from "./footer-pagination.js";
import Header from "./header";

const HeaderFilterButton = () => {
  return (   <button className="button button__big-colored">
  <svg
    className="button__icon"
    viewBox="0 0 16 16"
    fill="#fff"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none" />
  </svg>
  <div className="button__text">Фильтры</div>
</button>)};

  export default HeaderFilterButton;
