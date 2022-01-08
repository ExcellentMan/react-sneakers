import Card from "../components/Card/index";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
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

      <div className="sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onClickPlus={onAddToCart}
              onClickFavorite={onAddToFavorite}
                {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
