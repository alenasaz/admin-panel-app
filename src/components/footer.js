import "./footer.css";
import FooterDropdown from "./footer-dropdown.js";
import FooterPagination from "./footer-pagination.js";

const Footer = () => {
  return (
    <div className="table__footer">
      <form className="table__footer-action">
        <span className="table__footer-text">Выбрано записей: 5</span>
        <button className="table__footer-button">
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
        </button>
        <button className="table__footer-button table__footer-button_red">
          <svg
            className="table__footer-icon"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#8055FF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
              fill="none"
              stroke-linecap="round"
            />
            <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
          </svg>

          <span className="table__footer-button-text">Удалить</span>
        </button>
      </form>
      <FooterDropdown></FooterDropdown>
      <FooterPagination></FooterPagination>
    </div>
  );
};

export default Footer;
