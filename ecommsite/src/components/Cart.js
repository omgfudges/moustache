import React, { useState, useRef } from "react";
import { Overlay } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const { cartItems, onAdd } = props;
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const shoppingCart = <FontAwesomeIcon icon={faCartPlus} />;

  const sizeSelected = JSON.stringify(cartItems);
  let countSmall = "";
  let countMedium = "";
  let countLarge = "";

  let item = new Map();

  item.set("S", 0);
  item.set("M", 0);
  item.set("L", 0);

  for (let i = 0; i < sizeSelected.length; i++) {
    if (sizeSelected[i] == "S") {
      countSmall++;
      console.log("Small Tees:", countSmall);
    } else if (sizeSelected[i] == "M") {
      countMedium++;
      console.log("Medium Tees:", countMedium);
    } else if (sizeSelected[i] == "L") {
      countLarge++;
      console.log("Large Tees:", countLarge);
    }
  }
  //   console.log(item);
  console.log(JSON.stringify(cartItems));

  return (
    <div>
      <button className="cartBtn" ref={target} onClick={() => setShow(!show)}>
        My Cart <span>{shoppingCart}</span> ({cartItems.length})
      </button>
      <Overlay target={target.current} show={show} placement="bottom-end">
        {({ placements, arrowProps, show: _show, popper, ...props }) => (
          <div
            className="cart"
            {...props}
            style={{
              ...props.style,
            }}
          >
            {countSmall != "" && (
              <div className="row3">
                <div className="col-1">
                  <img
                    className="cartimg"
                    src="https://i.imgur.com/rQEtas1.jpg"
                    alt="Classic Tee"
                  ></img>
                </div>
                <div className="col-2">
                  <p className="cartTxt">Classic Tee</p>
                  <p className="cartTxt thick">{countSmall}x $75.00</p>
                  <p className="cartTxt">Size: S</p>
                </div>
              </div>
            )}
            {countMedium != "" && (
              <div className="row3">
                <div className="col-1">
                  <img
                    className="cartimg"
                    src="https://i.imgur.com/rQEtas1.jpg"
                    alt="Classic Tee"
                  ></img>
                </div>
                <div className="col-2">
                  <p className="cartTxt">Classic Tee</p>
                  <p className="cartTxt thick">{countMedium}x $75.00</p>
                  <p className="cartTxt">Size: M</p>
                </div>
              </div>
            )}
            {countLarge != "" && (
              <div className="row3">
                <div className="col-1">
                  <img
                    className="cartimg"
                    src="https://i.imgur.com/rQEtas1.jpg"
                    alt="Classic Tee"
                  ></img>
                </div>
                <div className="col-2">
                  <p className="cartTxt">Classic Tee</p>
                  <p className="cartTxt thick">{countLarge}x $75.00</p>
                  <p className="cartTxt">Size: L</p>
                </div>
              </div>
            )}
          </div>
        )}
      </Overlay>
    </div>
  );
}
