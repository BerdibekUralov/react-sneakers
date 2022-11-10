import React, { useEffect, useState } from "react";
import 'macro-css';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    axios.get('https://60d62397943aa60017768e77.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://60d62397943aa60017768e77.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://60d62397943aa60017768e77.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="wrapper clear">
      {cartOpened && 
        <Drawer
          key={new Date()}
          cartItems={cartItems} 
          onClose={() => setCartOpened(false)}
          onRemove = {onRemoveItem}
        />
      }

      <Header 
        onClickCart={() => setCartOpened(true)} 
      />

      <div className="content pl-40 pr-40">
        <div className="d-flex justify-between align-center mb-40">
        <h3>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h3>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search..." />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." /> 
          </div>
        </div>
        
        <div className="content-cards">
          {
            filtredItems.map((item, index) => (
              <Card
                key={index}
                title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
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
