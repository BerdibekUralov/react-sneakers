import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({title, price, imageUrl, onFavorite, onPlus}) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () =>{
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
        <img className={styles.favorite} onClick={onFavorite} src="./img/unliked.svg" alt="Unlikded" />
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
