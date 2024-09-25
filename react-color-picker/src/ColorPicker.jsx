import React, { useState } from "react";
const RandomColor = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
export default function ColorPicker() {
  // function component -> useState = Hook
  // stateless component -> function component

  const [color, SetColor] = useState("#FFFFFF");

  function getRandomNumber() {
    return Math.floor(Math.random() * RandomColor.length);
  }

  function getRandomColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += RandomColor[getRandomNumber()];
    }
    return hex;
  }
  // Get a random color from the array

  function randomColorChange() {
    SetColor(getRandomColor());
  }
  //event handling color change
  function handleColorChange(event) {
    SetColor(event.target.value);
  }

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label> Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
        <button className="randomize" onClick={randomColorChange}>
          Randomize
        </button>
      </div>
    </>
  );
}
