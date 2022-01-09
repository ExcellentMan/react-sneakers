import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

import { AppContext } from '../../App';

function Card({
  id,
  title,
  price,
  imageUrl,
  onClickFavorite,
  onClickPlus,
  favorited,
  loading,
}) {
  
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setisFavirite] = React.useState(favorited);
  
  // const { isItemFavorite } = React.useContext(AppContext);

  const handlePlus = () => {
    onClickPlus({ id, title, price, imageUrl });
  };

  const handleLike = () => {
    onClickFavorite({ id, title, price, imageUrl });
    setisFavirite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height= {220}
          viewBox="0 0 150 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="1" rx="10" ry="10" width="150" height="120" /> 
    <rect x="0" y="140" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="160" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="190" rx="8" ry="8" width="80" height="24" /> 
    <rect x="118" y="182" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              onClick={handleLike}
              src={isFavorite ? "/img/heartPink.svg" : "/img/heartGrey.svg"}
              alt="unliked"
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div>
            <div>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={handlePlus}
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
