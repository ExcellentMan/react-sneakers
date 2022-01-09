import React from "react";
import { AppContext } from '../App';
import Card from "../components/Card/index";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isReady,
}) {
  const state = React.useContext(AppContext);

  const renderItems = () => {
    const filtredItems = state.items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isReady ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onClickPlus={onAddToCart}
        onClickFavorite={state.onAddToFavorite}
        favorited={state.favorites.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isReady}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="searchHeader">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
            type="text"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="searchClear"
              src="/img/cross.svg"
              alt="searchDel"
            />
          )}
        </div>
      </div>
      {/* {console.log(cartItems, items)} */}
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
