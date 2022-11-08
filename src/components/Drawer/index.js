import React from 'react';
import styles from './Drawer.module.scss';

const Drawer = () => {
  return (
    <div className={styles.overlay}>
        <div className={styles.drawer}>
            <div className="d-flex justify-between align-center mb-20">
                <h3>Корзина</h3>
                <img className="cu-p" src="./img/btn-remove.svg" alt="Exit" />
            </div>

            <div className={styles.items}>
                <div className="cartItem d-flex align-center mt-20">
                    <img className="cartItemImg" src="./img/sneakers/1.jpg" alt="Product" />
                    <div>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove" />
                </div>
                <div className="cartItem d-flex align-center mt-20">
                    <img className="cartItemImg" src="./img/sneakers/9.jpg" alt="Product" />
                    <div>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove" />
                </div>
            </div>

            <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                        <span>Итоги:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1 074 руб.</b>
                    </li>
                </ul>
                    <button className="greenButton">Оформить заказ <img src="./img/arrow.svg" alt="Arrow" /></button>
            </div>
        </div>
    </div>
  )
}

export default Drawer
