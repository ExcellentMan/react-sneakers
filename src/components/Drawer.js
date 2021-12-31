function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <aside className="drawer">
        <h2>Корзина
          <img className="removeBtn" src="img/btn-cross.svg" alt="btn-cross" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-cross.svg" alt="btn-cross" />
          </div>
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-cross.svg" alt="btn-cross" />
          </div>

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
          <button className="greenBtn">Оформить заказ <img src="img/arrow.svg" alt="arrow" /></button>
        </div>
      </aside>
    </div>
  );
}

export default Drawer;