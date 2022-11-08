import React from "react";
import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <div>
            <h3>Корзина</h3>
          </div>

          <div className="mt-40">
            <div className="cartItem d-flex align-center">
              <img className="cartItemImg" src="./img/sneakers/1.jpg" alt="Product" />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={60} src="./img/logo.png" alt="Logo" className="mr-10" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-6">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex align-center justify-between">
          <li className="d-flex align-center">
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

      <div className="content pl-40 pr-40">
        <div className="d-flex justify-between align-center mb-40">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search..." />
            <input placeholder="Search..." /> 
          </div>
        </div>
        
        <div className="d-flex justify-between">
          <div className="card">
            <img className="favorite" src="./img/unliked.svg" alt="Unlikded" />
            <img width={133} height={122} src="./img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img className="plus" src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="favorite" src="./img/unliked.svg" alt="Unlikded" />
            <img width={133} height={122} src="./img/sneakers/2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img className="plus" src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="favorite" src="./img/unliked.svg" alt="Unlikded" />
            <img width={133} height={122} src="./img/sneakers/3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img className="plus" src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="favorite" src="./img/unliked.svg" alt="Unlikded" />
            <img width={133} height={122} src="./img/sneakers/4.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img className="plus" src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
