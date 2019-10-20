import React from "react";
import "../App.css";

const Grid = ({ buttonClick, gridArray }) => {
  return (
    <div className="gridContainer">
      {gridArray.map((gridItem, index) => {
        return (
          <button id={index} key={index} onClick={buttonClick}>
            {gridItem === null ? null : gridItem === true ? "O" : "X"}
          </button>
        );
      })}
    </div>
  );
};
export default Grid;
