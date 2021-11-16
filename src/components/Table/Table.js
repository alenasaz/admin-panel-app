import TableCheckbox from "../Checkbox/TableCheckbox";
import "./Table.css";
import products from "../../data/list";
import { StatusIcon } from "../Icons/StatusIcon";

const classStatus = {
  Новый: "table__header-item-text",
  Расчет: "table__header-item-text ",
  Выполнен: "table__header-item-text table__header-item-text_green",
  Отменен: "table__header-item-text table__header-item-text_grey",
  Отложен: "table__header-item-text",
};

const DisplayData = products.map((info) => {
  return (
    <tr className="table__cell-item">
      <TableCheckbox/>
      <td>{info.id}</td>
      <td>{info.date}</td>
      <td className="table__item">
      <StatusIcon status={info.status}/>
        <span className={classStatus[info.status]}>{info.status}</span>
      </td>
      <td>{info.position}</td>
      <td>{info.sum}</td>
      <td>{info.fullName}</td>
    </tr>
  );
});

function Table() {

  return (
    <div className="table__body">
      <table className="table">
        <tr className="table__header-item">
          <th>
            <TableCheckbox/>
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

export default Table;
