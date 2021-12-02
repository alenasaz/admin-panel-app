import TableCheckbox from "../Checkbox/TableCheckbox";
import "./Table.css";
// import products from "../../data/list";
import { StatusIcon } from "../Icons/StatusIcon";
import { connect } from "react-redux";
import { store, actions, userColumn } from "../../data";
import { selectors } from "../../data";


const classStatus = {
  Новый: "table__header-item-text",
  Расчет: "table__header-item-text ",
  Выполнен: "table__header-item-text table__header-item-text_green",
  Отменен: "table__header-item-text table__header-item-text_grey",
  Отложен: "table__header-item-text",
};
//&& info.sum < parseInt(FilterSumTo)  && info.sum > parseInt(FilterSumFrom)

//info.date.includes(FilterDate) &&  ()&& (info.fullName.includes(FilterNumFio)||info.date.includes(FilterNumFio))

//&& info.sum<=FilterSumTo

const { 
  ID_COL,
  STATUS_COL,
  POSITION_COL, 
  DATE_COL, 
  SUM_COL, 
  NAME_COL
} = userColumn 

const { productsSortAction } = actions

function Table({
  productsList,
}) {

  const DisplayData = productsList.map((info) => {
      return (
        <tr className="table__cell-item">
          <TableCheckbox />
          <td>{info.id}</td>
          <td>{info.date}</td>
          <td className="table__item">
            <StatusIcon status={info.status} />
            <span className={classStatus[info.status]}>{info.status}</span>
          </td>
          <td>{info.position}</td>
          <td>
            {" "}
            {info.sum !== "-"
              ? Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                }).format(info.sum)
              : info.sum}
          </td>
          <td>{info.fullName}</td>
        </tr>
      );
    });
  // DisplayData = DisplayData.filter((product)=>product.date.includes(FilterDate))

  return (
    <div className="table__body">
      <table className="table">
        <tr className="table__header-item">
          <th>
            <TableCheckbox />
          </th>
          <th onClick={() => {store.dispatch(productsSortAction(ID_COL))}}>#</th>
          <th onClick={() => {store.dispatch(productsSortAction(DATE_COL))}}>Дата</th>
          <th onClick={() => {store.dispatch(productsSortAction(STATUS_COL))}}>Статус</th>
          <th onClick={() => {store.dispatch(productsSortAction(POSITION_COL))}}>Позиций</th>
          <th onClick={() => {store.dispatch(productsSortAction(SUM_COL))}} >Сумма</th>
          <th onClick={() => {store.dispatch(productsSortAction(NAME_COL))}} >ФИО покупателя</th>
        </tr>

        {DisplayData}
      </table>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    productsList: selectors.getResultProductsList(state),

  };
};



export default connect(mapStateToProps)(Table);

