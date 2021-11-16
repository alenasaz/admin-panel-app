import { useState } from "react";
import "./Footer.css";
import FooterDropdown from "../FooterDropdown/FooterDropdown.js";
import FooterPagination from "../FooterPagination/FooterPagination.js";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Footer = () => {
  const [IsActive, setIsActive] = useState(true);
  return (
    <div className="table__footer">
      <form className="table__footer-action">
        <span className="table__footer-text">Выбрано записей: 5</span>
        <ButtonIcon
          classNameB="table__footer-button"
          buttonText="Изменить статус"
          svgName="change"
        />

        <ButtonIcon
          classNameB="table__footer-button table__footer-button_red"
          buttonText="Удалить"
          svgName="delete"
          onClick={(e)=> setIsActive(!IsActive)}
        />
      </form>
      { IsActive && ( <FooterDropdown /> )
      }
      <FooterPagination></FooterPagination>
    </div>
  );
};

export default Footer;
