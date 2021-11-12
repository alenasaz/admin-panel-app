import TableCheckbox from "./table-checkbox";
import "./table.css";
import products from "../data/list";

function DisplayTable() {
  const classStatus = {
    Новый: "table__header-item-text",
    Расчет: "table__header-item-text ",
    Выполнен: "table__header-item-text table__header-item-text_green",
    Отменен: "table__header-item-text table__header-item-text_grey",
    Отложен: "table__header-item-text",
  };

  const iconStatusParam = {
    Новый: {
      className: "table__item-icon table__header-icon_orange",
      viewBox: "0 0 16 16",
      fill: "#8055FF",
      stroke: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Расчет: {
      className: "table__item-icon table__header-icon_blue",
      viewBox: "0 0 16 16",
      fill: "#8055FF",
      stroke: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Выполнен: {
      className: "table__item-icon table__header-icon_green",
      viewBox: "0 0 16 16",
      fill: "#8055FF",
      stroke: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Отменен: {
      className: "table__item-icon table__header-icon_black",
      viewBox: "0 0 16 16",
      fill: "#8055FF",
      stroke: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Отложен: {
      className: "table__item-icon table__header-icon_blue",
      viewBox: "0 0 16 16",
      fill: "#8055FF",
      stroke: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
  };

  const iconStatusClass = {
    Новый: { circle: <circle cx="8" cy="8" r="4" stroke="none" />, path: "" },
    Расчет: {
      circle: <circle cx="8" cy="8" r="4" stroke="none" />,
      path: "",
    },
    Выполнен: {
      circle: "",
      path: <path  d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"   />,
    },
    Отменен: {
      path: <path d="M12.5 12.5L3.5 3.5" fill="none" />,
      circle: <circle cx="8" cy="8" r="6.5" fill="none" />,
    },
    Отложен: {
      circle: <circle cx="8" cy="8" r="4" stroke="none" />,
      path: '',
    },
  };
  const DisplayData = products.map((info) => {
    const { className, viewBox, fill, stroke, xmlns } =
      iconStatusParam[info.status];

      const { path, circle } = iconStatusClass[info.status];
    // {iconStatusClass[info.status]}
    console.log(className);
    return (
      <tr className="table__cell-item">
        <TableCheckbox></TableCheckbox>
        <td>{info.id}</td>
        <td>{info.date}</td>
        <td className="table__item">
          <svg
            className={className}
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
            xmlns={xmlns}
          >
            {circle} {path}
          </svg>
          <span className={classStatus[info.status]}>{info.status}</span>
        </td>
        <td>{info.position}</td>
        <td>{info.sum}</td>
        <td>{info.fullName}</td>
      </tr>
    );
  });
  return (
    <div className="table__body">
      <table className="table">
        <tr className="table__header-item">
          <th>
            <TableCheckbox></TableCheckbox>
          </th>
          <th>#</th>
          <th>Дата</th>
          <th>Статус</th>
          <th>Позиций</th>
          <th>Сумма</th>
          <th>ФИО покупателя</th>
        </tr>
        {DisplayData}
      </table>
    </div>
  );
}

export default DisplayTable;
