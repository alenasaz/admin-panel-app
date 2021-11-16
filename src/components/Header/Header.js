import './Header.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const Header = () => {
  return (
    <div className="page-header">
    <h1 className="page-header__text">Список заказов</h1>
    
    <ButtonIcon
    classNameB="page-header__button page-header__button_transparent"
    buttonText="Cветлая тема"
    svgName="theme"
  />
  </div>
  )
}

export default Header;