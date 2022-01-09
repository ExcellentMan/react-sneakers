function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <aside className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="img/btn-cross.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column h100p">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-cross.svg"
                    alt="btn-cross"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotal">
              <ul className="cartTotal">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ <img src="img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="emptyBasket">
            <img src="/img/basket.svg" alt="backet" />
            <div>
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
            <button onClick={onClose} className="greenBtn btnBack">
              <img src="img/arrow_left.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Drawer;
