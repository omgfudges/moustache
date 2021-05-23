import Main from "./components/Main";
import Pic from "./components/Pic";
import Cart from "./components/Cart";
import { useState } from "react";
import data from "./data";

function App() {
  const { product } = data;
  const [cart, setCart] = useState([]);

  function addToCart(size) {
    let cartItem = {
      ...product,
      size: size,
    };
    setCart([...cart, cartItem]);
  }

  return (
    <div className="App">
      <header className="row block center">
        <div></div>
        <h3>
          <Cart cartItems={cart}></Cart>
        </h3>
      </header>
      <div className="row flex-grid">
        <Pic></Pic>
        <Main onAdd={addToCart}></Main>
      </div>
    </div>
  );
}

export default App;
