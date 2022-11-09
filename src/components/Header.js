import React from 'react'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={60} src="./img/logo.png" alt="Logo" className="mr-10" />
            <div>
                <h3 className="text-uppercase">React sneakers</h3>
                <p className="opacity-6">Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight d-flex align-center justify-between">
            <li onClick={props.onClickCart} className="d-flex align-center cu-p">
                <img width={18} src="./img/cart.svg" alt="Cart" />
                <span>1205 руб.</span>
            </li>
            <li className="d-flex align-center">
                <img width={18} src="./img/heart.svg" alt="User" />
            </li>
            <li className="d-flex align-center">
                <img width={18} src="./img/user.svg" alt="User" />
            </li>
        </ul>
    </header>
  )
}

export default Header
