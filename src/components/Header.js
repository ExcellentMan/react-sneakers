function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={18} height={17.18} src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={21.11} height={19} src="/img/like.svg" alt="like" />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;