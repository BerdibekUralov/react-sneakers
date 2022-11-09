import React from "react";
import 'macro-css';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 12999, 
    imgUrl: './img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15600, 
    imgUrl: './img/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 8499, 
    imgUrl: './img/sneakers/3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999, 
    imgUrl: './img/sneakers/4.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content pl-40 pr-40">
        <div className="d-flex justify-between align-center mb-40">
          <h3>Все кроссовки</h3>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search..." />
            <input placeholder="Search..." /> 
          </div>
        </div>
        
        <div className="content-cards d-flex justify-between">
          {
            arr.map((obj) => (
              <Card 
                title={obj.title} 
                price={obj.price} 
                image={obj.imgUrl}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
