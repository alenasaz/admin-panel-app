import './FooterDropdown.css'

const FooterDropdown = () => {
  return (

<form className="table__footer-dropdown">
<span className="dropdown__item-label">Удалить n записей?</span>
<button className="button__item button__item-empty">
  <span className="button__text">Удалить</span>
</button>
<button className="button__item">
  <span className="button__text">Отмена</span>
</button>
</form> ) };

export default FooterDropdown;