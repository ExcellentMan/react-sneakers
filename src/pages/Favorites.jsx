import React from "react";
import Card from "../components/Card/index";
import { AppContext } from '../App';

function Favorites() {
const {favorites, onAddToFavorite} = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="searchHeader">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers">
      {favorites
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
