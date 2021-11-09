import "./footer.css";
import FooterDropdown from "./footer-dropdown.js";
import FooterPagination from "./footer-pagination.js";

const ChangeButton= () => {
  return (         <button className="table__footer-button">
  <svg
    className="table__footer-icon"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#8055FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 14.5H15" fill="none" />
    <path
      d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4"
      fill="none"
    />
  </svg>
  <span className="table__footer-button-text">Изменить статус</span>
</button> ) }

export default ChangeButton;