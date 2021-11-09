import "./filter-dropdown.css";

const FilterDropdown= () => {
  return (
    <div className="dropdown">
    <ul className="dropdown__list">
      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Новый</span>
        </label>
      </li>

      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Расчет</span>
        </label>
      </li>

      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Подтвержден</span>
        </label>
      </li>

      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Отложен</span>
        </label>
      </li>

      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Выполнен</span>
        </label>
      </li>

      <li className="dropdown__item">
        <label className="dropdown__label">
          <div className="dropdown__group">
            <input className="dropdown__input" type="checkbox" />
            <svg
              className="dropdown__item-img"
              viewBox="0 0 16 16"
              fill="#FFF"
              stroke="none"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </div>
          <span className="dropdown__item-label">Отменен</span>
        </label>
      </li>
    </ul>
  </div>
   )}

export default FilterDropdown;