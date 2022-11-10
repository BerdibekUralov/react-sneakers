import React from 'react';
import styles from './Drawer.module.scss';

const Drawer = (props) => {
  return (
    <div className={styles.overlay}>
        <div className={styles.drawer}>
            <div className="d-flex justify-between align-center mb-20">
                <h3>Корзина</h3>
                <img onClick={props.onClose} className="cu-p" src="./img/btn-remove.svg" alt="Exit" />
            </div>

            {props.cartItems.length > 0 ?
                <div>
                    <div className={styles.items}>
                       {props.cartItems.map((obj) => (
                            <div className="cartItem d-flex align-center mt-20">
                                <img
                                    className="cartItemImg"
                                    src={obj.imageUrl}
                                    alt="Product"
                                />
                                <div>
                                    <p>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img 
                                    onClick={() => props.onRemove(obj.id)} 
                                    className="removeBtn" src="./img/btn-remove.svg" 
                                    alt="Remove"
                                />
                            </div>
                        ))}
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
            :
                <div className='cartEmpty d-flex align-center justify-between flex-column flex'>
                    <img className='mb-20' width={120} height={120} src='./img/empty-cart.jpg' alt='Cart' />
                    <h3>Корзина пустая</h3>
                    <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                </div>
            }
        </div>
    </div>
  )
}

export default Drawer
