import React from "react";
import "../App.css";

const Grid2 = ({ gridArray }) => {
  return (
    <div className="gridContainer">
      {gridArray.map((gridItem, index) => {
        return (
          <button id={index} key={index}>
            {gridItem === null ? null : gridItem === true ? "O" : "X"}
          </button>
        );
      })}
    </div>
  );
};
export default Grid2;
