import React, { useState } from "react";
import Size from "./Size";

export default function Main(props) {
  const { products, onAdd } = props;
  const [size, setSize] = useState("");
  function onSizeSet(s) {
    setSize(s);
    // console.log("size set");
    // console.log("s:", s, "size:", size);
  }

  return (
    <main className="col-1">
      <div>
        <h2 className="color1">Classic Tee</h2>
        <div className="color1 thick">$75.00</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Size currentSize={size} onSizeSet={onSizeSet}></Size>
      </div>
      <div className="container">
        <button onClick={() => onAdd(size)} className="btn2">
          ADD TO CART
        </button>
      </div>
    </main>
  );
}
