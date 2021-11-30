import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { Button } from "../Button/Button";
import { useState } from "react";
import "./Filters.css";
import Input from "../Input/Input";
import { actions } from "../../data";
import { store } from "../../data";

const Filters = () => {
  const [IsActive, setIsActive] = useState(false);
  return (
    <div className="filter__wrapper-main">
      <div className="filter__input">
        <Input
          title="Дата оформления"
          placeholder="dd.mm.dddd"
          //defaultValue="20.01.2021"
          svgName="filter"
          className="filter__input-area"
          onChange={(event) => {
            store.dispatch(
              actions.productsFilterSetDateAcion(event.currentTarget.value)
            );
          }}
        ></Input>

        <Input
          title=""
          placeholder="dd.mm.dddd"
          // defaultValue="20.01.2021"
          classNameDiv=''
          svgName="noicon"
          className="filter__input-area"
        ></Input>

        <Input
          title="Статус заказа"
          placeholder="Выберите статус заказа"
           defaultValue="Любой"
          classNameDiv='filter__input-field_long'
          svgName="dropdown"
          className="filter__input-area"
          onClick={(e) => setIsActive(!IsActive)}

        ></Input>
        {IsActive && <FilterDropdown />}
 

        <Input
          title="Сумма заказа"
          placeholder=""
          //defaultValue="от 5000"
          svgName="filter"
          className="filter__input-area"
          onChange={(event) => {
            store.dispatch(
              actions.productsFilterSetSumFromAcion(event.currentTarget.value)
            );
          }}
        ></Input>

        <Input
          title=""
          placeholder="₽"
          //defaultValue="до"
          svgName="filter"
          className="filter__input-area"
          onChange={(event) => {
            store.dispatch(
              actions.productsFilterSetSumToAcion(event.currentTarget.value)
            );
          }}
        ></Input>

        <Button className="button button__big-empty" buttonText="Применить" />
      </div>
    </div>
  );
};

export default Filters;

//
//         <label className="filter__input-group">
//           <span className="filter__input-title">Дата оформления</span>
//           <div className="filter__input-field filter__input-field_empty">
//             <input
//               className="filter__input-area"
//               placeholder="dd.mm.dddd"
//               value="20.01.2021"
//             />
//             <button className="filter__input-button">
//               <svg
//                 className="filter__input-icon filter__input-icon_incorrect"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 stroke="#8055FF"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
//               </svg>
//             </button>
//           </div>
//         </label>

// <div
//           className="
//               filter__input-field
//               filter__input-field_empty
//               filter-dropdown__input-group
//             "
//         ></div>
// <input className="filter__input-area" placeholder="dd.mm.dddd" />
// <button className="filter__input-button"></button>

// <label className="filter__input-group">
// <span className="filter__input-title">Сумма заказа</span>
// <div
//   className="
//       filter__input-field
//       filter__input-field_empty
//       filter__input-field_short
//     "
// >
//   <input
//     className="filter__input-area"
//     placeholder=""
//     value="от 5000"
//   />
//   <button className="filter__input-button">
//     <svg
//       className="filter__input-icon filter__input-icon_incorrect"
//       viewBox="0 0 16 16"
//       fill="none"
//       stroke="#8055FF"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
//     </svg>
//   </button>
// </div>
// </label>

// <div
// className="
//     filter__input-field
//     filter__input-field_empty
//     filter__input-field_short
//   "
// >
// <input className="filter__input-area" placeholder="₽" value="до" />
// <button className="filter__input-button">
//   <svg
//     className="filter__input-icon filter__input-icon_incorrect"
//     viewBox="0 0 16 16"
//     fill="none"
//     stroke="#8055FF"
//     xmlns="http://www.w3.org/2000/svg"
//   ></svg>
// </button>
// </div>


// <label className="filter__input-group filter-dropdown__input-group">
// <span className="filter__input-title">Статус заказа</span>
// <div
//   className="
//       filter__input-field
//       filter__input-field_empty
//       filter__input-field_long
//     "
// >
//   <input
//     className="filter__input-area"
//     placeholder="Выберите статус заказа"
//     value="Любой"
//   />
//   <button
//     className="filter__input-button"
//     onClick={(e) => setIsActive(!IsActive)}
//   >
//     <svg
//       className="filter__input-icon"
//       viewBox="0 0 16 16"
//       fill="#8055FF"
//       stroke="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none" />
//     </svg>
//   </button>
// </div>
// </label>
// {IsActive && <FilterDropdown />}