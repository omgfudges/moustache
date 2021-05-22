import React from "react";

export default function Header(props) {
  return (
    <header className="row block center">
      <div></div>
      <div>
        <h3>
          My Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </h3>
      </div>
    </header>
  );
}
