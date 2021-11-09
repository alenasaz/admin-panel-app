import HeaderButton from './header-button';
import './header.css';

const Header = () => {
  return (
    <div className="page-header">
    <h1 className="page-header__text">Список заказов</h1>
    <HeaderButton></HeaderButton>
  </div>
  )
}

export default Header;