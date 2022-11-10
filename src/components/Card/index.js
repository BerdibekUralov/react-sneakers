import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({id, title, price, imageUrl, onFavorite, onPlus}) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () =>{
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Favorite" />
        </div>
        <img width={133} height={122} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div>
                <span>Цена:</span><br/>
                <b>{price} руб.</b>
            </div>
              
            <img onClick={onClickPlus} className={styles.plus} src={isAdded ? './img/btn-checked.svg' : './img/btn-plus.svg'} alt="Plus" />
        </div>
    </div>
  )
}

export default Card
