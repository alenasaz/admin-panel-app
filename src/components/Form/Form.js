import "./Form.css";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import FormTable from "./FormTable";
import FormButtonIcon from "./FormButtonIcon";
import FormInput from "./FormInput";
import { selectors, actions } from "../../data";
import { connect } from "react-redux";

const numOrder = 2353474;

const DataOrderList = [
  {
    article: "rt.12024",
    orderName: "Стил блейдс фо грасс",
    price: 15339,
  },
  {
    article: "al.24600",
    orderName: "Газонокосилка Apple Magic Grass Remover",
    price: 82664,
  },
];

export function FormPure(props)  {

  const {
    status, 
    fullName,
    date,
    isOpenForm,
    nameChange,
    statusChange,
    saveClick,
  } = props

  return (
    <div className="main" style={{display:isOpenForm ? '':'none'}}>
      <form className="form">
        <div className="header">
          <h1 className="header-text">Заявка #{numOrder}</h1>
          <FormButtonIcon
            classNameB="button button__big-colored"
            buttonText=""
            svgName="close"
          >
            {" "}
          </FormButtonIcon>
        </div>

        <FormInput
          title="Дата и время заказа"
          // defaultValue="06.12.2021"
          value={date}
          className="input_disabled"
          svgName="lock"
        />

        <FormInput
          title="ФИО покупателя"
          placeholder="Введите ФИО"
          // defaultValue="Степан"
          value={fullName}
          onChange={(event) => nameChange(event.currentTarget.value)}
          svgName="lock"
        />

        <FormTable orders={DataOrderList} />

        <FormInput
          title="Уровень лояльности"
          placeholder="Введите ФИО"
          defaultValue="Новичок"
          className="input_disabled"
          svgName="lock"
        />

        <FormInput
          title="Статус заказа"
          placeholder="Статус заказа"
          // defaultValue={status}
          value = {status}
          onChange={(event) => statusChange(event.currentTarget.value)}
          svgName="lock"
        />

        <FormInput
          title="Код подтверждения"
          placeholder="Введите ФИО"
          defaultValue="000"
          className="input_incorrect"
          svgName="lock"
        />

        <FormButtonIcon
          classNameB="button button__big-colored"
          buttonText="Сохранить"
          svgName="save"
          type="button"
          onClick={()=>saveClick({fullName,status,date})}
        >
          {" "}
        </FormButtonIcon>
      </form>
    </div>
  );

}
const mapStateToProps = (state) => { 
  return { 
      fullName: selectors.getfullName(state), 
      status: selectors.getStatus(state), 
      date: selectors.getDate(state), 
      isOpenForm: selectors.getUsersIsOpenEditForm(state),

  } 
}

const mapDispatchToProps = (dispatch) => { 
  return { 
       saveClick: (updatedData) => dispatch(actions.productsFormSaveAction(updatedData)), 
      // cancelClick: () => dispatch(actions.userListEditFormCancelClickAction()), 
      nameChange: (fullName) => dispatch(actions.productsNameEditAction(fullName)), 
      statusChange: (status) => dispatch(actions.productsStatusEditAction(status)), 
  } 
}
export const Form = connect(mapStateToProps, mapDispatchToProps)(FormPure);

// <div className="input">
// <label className="input_label">
// <span>Дата и время заказа</span>
// <div className="input-window-icon">
// <input className="input_window_blue" type="text" value="Новичок"/>
//     <svg  className="input_icon" viewBox="0 0 16 16" fill="#000" stroke="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" stroke="none"/>
//         <path d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z" stroke="none"/>
//     </svg>

// </div>
// </label>
// </div>

//   <label className="filter__input-group filter-dropdown__input-group">
//   <span className="filter__input-title">Статус заказа</span>
//   <div
//     className="
//         filter__input-field
//         filter__input-field_empty
//         filter__input-field_long
//       "
//   >
//     <input
//       className="filter__input-area"
//       placeholder="Выберите статус заказа"
//       value="Новый"
//     />
//     <button className="filter__input-button">
//       <svg
//         className="filter__input-icon"
//         viewBox="0 0 16 16"
//         fill="#8055FF"
//         stroke="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none" />
//       </svg>
//     </button>
//   </div>
// </label>

//   <label className="filter__input-group filter-dropdown__input-group">
//   <span className="filter__input-title">ФИО покупателя</span>
//   <div
//     className="
//         filter__input-field
//         filter__input-field_empty
//         filter__input-field_long
//       "
//   >
//     <input
//       className="filter__input-area"
//       placeholder="Выберите статус заказа"
//       value="Степан"
//     />
//   </div>
// </label>

// <div className="input">
// <label className="input_label">
// <span>Дата и время заказа</span>
// <div className="input-window-icon">
// <input className="input_window_blue" type="text" value="06.12.2021"/>
//     <svg  className="input_icon" viewBox="0 0 16 16" fill="#000" stroke="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" stroke="none"/>
//         <path d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z" stroke="none"/>
//     </svg>

// </div>
// </label>
// </div>
