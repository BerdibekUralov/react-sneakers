import React from "react";
import 'macro-css';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
        
        <div className="d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
