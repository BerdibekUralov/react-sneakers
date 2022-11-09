import React, { useEffect, useState } from "react";
import 'macro-css';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://60d62397943aa60017768e77.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} /> : null}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content pl-40 pr-40">
        <div className="d-flex justify-between align-center mb-40">
          <h3>Все кроссовки</h3>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search..." />
            <input placeholder="Search..." /> 
          </div>
        </div>
        
        <div className="content-cards">
          {
            items.map((item) => (
              <Card
                title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Dabavili v zakladki')}
                onPlus={onAddToCart}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
