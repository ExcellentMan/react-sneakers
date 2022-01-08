import Card from "../components/Card/index";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="searchHeader">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers">
      {items
          .map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onClickFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
