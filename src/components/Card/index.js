import React from "react";
import styles from "./Card.module.scss";

function Card({id, title, price, imageUrl, onClickFavorite, onClickPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setisFavirite] = React.useState(favorited);

  const handlePlus = () => {
    onClickPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const handleLike = () => {
    onClickFavorite({ id, title, price, imageUrl });
    setisFavirite(!isFavorite);
    
  };

  

  return (
    <div className={styles.card}>
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
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
