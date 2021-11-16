import "./FooterPagination.css"

const FooterPagination= () => {
  return (
    <div className="table__footer-pagination">
    <form className="table__footer-pagination-form">
      <button className="table__footer-button table__footer-button_small">
        <span className="table__footer-button-text">1</span>
      </button>
      <button
        className="
          table__footer-button
          table__footer-button_small
          table__footer-button_transparent
        "
      >
        <span className="table__footer-button-text">2</span>
      </button>
      <button
        className="
          table__footer-button
          table__footer-button_small
          table__footer-button_transparent
        "
      >
        <span className="table__footer-button-text">3</span>
      </button>
      <span className="table__pagination-continue">…</span>
      <button
        className="
          table__footer-button
          table__footer-button_small
          table__footer-button_transparent
        "
      >
        <span className="table__footer-button-text">18</span>
      </button>
      <button
        className="
          table__footer-button
          table__footer-button_small
          table__footer-button_transparent
        "
      >
        <span className="table__footer-button-text">#</span>
      </button>
    </form>
  </div>

  )}

export default FooterPagination;