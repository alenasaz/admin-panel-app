import './TableCheckbox.css';

const TableCheckbox = () => {
  return (
      
      <label  className="dropdown__label">
      <div className="checkbox-group">
      <input className="table__input" type="checkbox" />
      <svg
        className="table__item-img"
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
      </label>
  )}
export default TableCheckbox;