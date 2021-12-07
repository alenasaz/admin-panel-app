import './FormTable.css'
//import OrderFormItem from "./orderFormItem";

const OrderFormItem = ({ article, orderName, price }) => {
    return (
      <li className="list-row">
        <div className="list-item">{article}</div>
        <div className="list-item">{orderName}</div>
        <div className="list-item">{`${price.toLocaleString()} ₽`}</div>
      </li>
    );
  };

const FormTable = ({ orders }) => {
  const ordersRender = orders.map((item) => {
    return <OrderFormItem {...item} key={item.article} />;
  });

  const finalSum = orders
    .reduce((accum, item) => accum + item.price, 0)
    .toLocaleString();

  return (
    <div className="order-table">
      <ul className="order-list">
        <li className="order-header">
          <div className="list-item">Артикул</div>
          <div className="list-item">Наименование</div>
          <div className="list-item">Цена</div>
        </li>

        {ordersRender}

        <li className="order-footer">
          {`Итоговая сумма: ${finalSum} ₽`}
        </li>
      </ul>
    </div>
  );
};

export default FormTable;