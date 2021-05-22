import Header from "./components/Header";
import Main from "./components/Main";
import Pic from "./components/Pic";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";

function App() {
  const product = {
    id: "1",
    name: "T-Shirt",
    price: 75,
    image: "https://i.imgur.com/rQEtas1.jpg",
  };

  function addToCart(size) {
    let cartItem = {
      ...product,
      size: size,
    };
    setCart([...cart, cartItem]);
    console.log(cart.length);
    console.log(JSON.stringify(cart));
  }
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <header className="row block center">
        <div></div>
        <h3>
          My Cart<span> ({cart.length})</span>
        </h3>
      </header>
      <div className="row">
        <Pic></Pic>
        <Main onAdd={addToCart}></Main>
      </div>
    </div>
  );
}

export default App;
