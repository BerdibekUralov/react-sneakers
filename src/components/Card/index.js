import React from 'react';
import styles from './Card.module.scss';

const Card = ({title, price, image}) => {
  return (
    <div className={styles.card}>
        <img className={styles.favorite} src="./img/unliked.svg" alt="Unlikded" />
        <img width={133} height={122} src={image} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div>
                <span>Цена:</span><br/>
                <b>{price} руб.</b>
            </div>
              
            <button className='button'>
                <img className={styles.plus} src="./img/plus.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Card
