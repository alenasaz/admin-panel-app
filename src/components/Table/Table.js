import TableCheckbox from "../Checkbox/TableCheckbox";
import "./Table.css";
// import products from "../../data/list";
import { StatusIcon } from "../Icons/StatusIcon";
import { connect } from "react-redux";
import userEvent from "@testing-library/user-event";

const classStatus = {
  Новый: "table__header-item-text",
  Расчет: "table__header-item-text ",
  Выполнен: "table__header-item-text table__header-item-text_green",
  Отменен: "table__header-item-text table__header-item-text_grey",
  Отложен: "table__header-item-text",
};
//&& info.sum < parseInt(FilterSumTo)  && info.sum > parseInt(FilterSumFrom) 

function Table({productsList, FilterDate, FilterSumFrom, FilterSumTo, FilterNumFio }) {

  console.log("redux", FilterDate);

  const DisplayData = productsList.filter((info)=> info.date.includes(FilterDate) &&  info.sum.includes(FilterSumFrom) && info.sum.includes(FilterSumTo) && (info.fullName.includes(FilterNumFio)||info.date.includes(FilterNumFio))).map((info) => {
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
  // DisplayData = DisplayData.filter((product)=>product.date.includes(FilterDate))
  

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

const mapStateToProps = function(state) {
  return {
    productsList: state.productListReducer.productsList,
    FilterDate: state.filterReducer.FilterDate,
    FilterSumFrom: state.filterReducer.FilterSumFrom,
    FilterSumTo: state.filterReducer.FilterSumTo,
    FilterNumFio:state.filterReducer.FilterNumFio,
  }
}

export default connect(mapStateToProps)(Table);

//{}
