import "./FooterPagination.css";
import { connect } from "react-redux";
import { actions, store } from "../../data";
import { selectors } from "../../data";
import { Button } from "../Button/Button";

function FooterPagination({ currentPage, productsList, pagingSize }) {
  const dataCount = productsList.length;
  const totalPages = Math.ceil(dataCount / pagingSize);
  const Pages = [...Array(totalPages).keys()];
  console.log("Данные", dataCount, totalPages, Pages);

  return (
    <div className="table__footer-pagination">
      <form className="table__footer-pagination-form">
        {Pages.map((page, index) => (
          <Button
            className={
              currentPage - 1 === page
                ? "table__footer-button table__footer-button_small"
                : "table__footer-button table__footer-button_small table__footer-button_transparent"
            }
            buttonText={index + 1}
            onClick={() => {
              store.dispatch(actions.productsPagingAction(page));
            }}
            key={index + 1}
          ></Button>
        ))}
        <Button
          className="
        table__footer-button
        table__footer-button_small
        table__footer-button_transparent
      "
          buttonText="#"
        ></Button>
      </form>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    currentPage: selectors.getCurrentPage(state),
    pagingSize: selectors.getPagingSize(state),
    productsList: selectors.getProductsList(state),
  };
};

export default connect(mapStateToProps)(FooterPagination);

// <form className="table__footer-pagination-form">
// <button className="table__footer-button table__footer-button_small">
//   <span className="table__footer-button-text">1</span>
// </button>
// <button
//   className="
//   table__footer-button
//   table__footer-button_small
//   table__footer-button_transparent
// "
// >
//   <span className="table__footer-button-text">2</span>
// </button>
// <button
//   className="
//   table__footer-button
//   table__footer-button_small
//   table__footer-button_transparent
// "
// >
//   <span className="table__footer-button-text">3</span>
// </button>
// <span className="table__pagination-continue">…</span>
// <button
//   className="
//   table__footer-button
//   table__footer-button_small
//   table__footer-button_transparent
// "
// >
//   <span className="table__footer-button-text">18</span>
// </button>

// </form>
