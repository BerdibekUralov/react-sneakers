import React from "react";
import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={60} src="./img/logo.png" alt="Logo" className="mr-10" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-6">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-20 d-flex align-center">
            <img width={18} src="./img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="d-flex align-center">
            <img width={18} src="./img/user.svg" alt="User" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h2>Все кроссовки</h2>
        
        <div className="d-flex justify-between">
          <div className="card">
            <img width={133} height={122} src="./img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="./img/sneakers/2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="./img/sneakers/3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="./img/sneakers/4.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              
              <button>
                <img src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
