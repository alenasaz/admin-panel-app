import "./footer.css";
import FooterDropdown from "./footer-dropdown.js";
import FooterPagination from "./footer-pagination.js";
import DeleteButton from "./delete-button";
import ChangeButton from "./change-button";

const Footer = () => {
  return (
    <div className="table__footer">
      <form className="table__footer-action">
        <span className="table__footer-text">Выбрано записей: 5</span>
        <ChangeButton></ChangeButton>
        <DeleteButton></DeleteButton>
      </form>
      <FooterDropdown></FooterDropdown>
      <FooterPagination></FooterPagination>
    </div>
  );
};

export default Footer;
