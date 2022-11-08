import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
        <img className={styles.favorite} src="./img/unliked.svg" alt="Unlikded" />
        <img width={133} height={122} src="./img/sneakers/1.jpg" alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div>
                <span>Цена:</span><br/>
                <b>12 999 руб.</b>
            </div>
              
            <button>
                <img className={styles.plus} src="./img/plus.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Card
