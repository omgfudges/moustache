import React, { useState, useEffect } from "react";

function Size(props) {
  const { currentSize, onSizeSet } = props;
  function isSelected(s) {
    if (currentSize == s) {
      return "btn active";
    } else {
      return "btn";
    }
  }

  let borderStyle = {
    border: "2px solid #cccccc",
  };

  console.log(currentSize);

  return (
    <div>
      <div className="row2 color size">
        SIZE<div className="star">*</div>
        <span className="color1">{currentSize}</span>
      </div>
      <div className="row2 leftalign container">
        <button onClick={() => onSizeSet("S")} className={isSelected("S")}>
          S
        </button>
        <button onClick={() => onSizeSet("M")} className={isSelected("M")}>
          M
        </button>
        <button onClick={() => onSizeSet("L")} className={isSelected("L")}>
          L
        </button>
      </div>
    </div>
  );
}

export default Size;
