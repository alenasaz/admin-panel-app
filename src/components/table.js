import "./table.css";

const Table = () => {
  return (
    <div className="table__body">
      <table className="table">
        <tr className="table__header-item">
          <th>
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
          </th>
          <th>#</th>
          <th>Дата</th>
          <th>Статус</th>
          <th>Позиций</th>
          <th>Сумма</th>
          <th>ФИО покупателя</th>
        </tr>
        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>1270989</td>
          <td>15.02.2021, 18:00</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_orange"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
            <span className="table__header-item-text">Новый</span>
          </td>
          <td>6</td>
          <td>101 907 ₽</td>
          <td>Чернышев Филипп Семёнович</td>
        </tr>
        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>2353474</td>
          <td>12.03.2021, 05:15</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_orange"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
            <span className="table__header-item-text">Новый</span>
          </td>
          <td>2</td>
          <td>98 003 ₽</td>
          <td>Филиппов Степан Васильевич</td>
        </tr>
        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>1103397</td>
          <td>03.02.2021, 08:04</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_blue"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
            <span className="table__header-item-text">Рассчет</span>
          </td>

          <td>5</td>
          <td>3 800 ₽</td>
          <td>Тихонова Алина Давидовна</td>
        </tr>
        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>6924662</td>
          <td>21.01.2021, 13:32</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_green"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="table__header-item-text table__header-item-text_green">
              Выполнен
            </span>
          </td>
          <td>1</td>
          <td>5 700 ₽</td>
          <td>Александрова Юлия Никитична</td>
        </tr>
        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>2200086</td>
          <td>19.01.2021, 10:28</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_black"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#8055FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 12.5L3.5 3.5" fill="none" />
              <circle cx="8" cy="8" r="6.5" fill="none" />
            </svg>
            <span className="table__header-item-text table__header-item-text_grey">
              Отменен
            </span>
          </td>

          <td>–</td>
          <td>–</td>
          <td>Андрей</td>
        </tr>

        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>2842064</td>
          <td>04.01.2021, 12:12</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_orange"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
            <span className="table__header-item-text">Отложен</span>
          </td>

          <td>1</td>
          <td>20 500 ₽</td>
          <td>Судакова Анастасия Ильинична</td>
        </tr>

        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>1730071</td>
          <td>17.12.2020, 22:45</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_green"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="table__header-item-text table__header-item-text_green">
              Выполнен
            </span>
          </td>
          <td>1</td>
          <td>1 399 ₽</td>
          <td>Зверева Арина Николаевна</td>
        </tr>

        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>7987376</td>
          <td>07.12.2020, 08:57</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_green"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="table__header-item-text table__header-item-text_green">
              Выполнен
            </span>
          </td>
          <td>3</td>
          <td>117 810 ₽</td>
          <td>Карташов Максим Кириллович</td>
        </tr>

        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>1373265</td>
          <td>15.11.2020, 14:26</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_green"
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="table__header-item-text table__header-item-text_green">
              Выполнен
            </span>
          </td>
          <td>1</td>
          <td>17 008 ₽</td>
          <td>Васильев Вадим Даниилович</td>
        </tr>

        <tr className="table__cell-item">
          <td>
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
          </td>
          <td>1311100</td>
          <td>07.11.2020, 18:52</td>
          <td className="table__item">
            <svg
              className="table__item-icon table__header-icon_black"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#8055FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 12.5L3.5 3.5" fill="none" />
              <circle cx="8" cy="8" r="6.5" fill="none" />
            </svg>
            <span className="table__header-item-text table__header-item-text_grey">
              Отменен
            </span>
          </td>
          <td>-</td>
          <td>-</td>
          <td>София</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
