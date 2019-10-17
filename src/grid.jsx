import React from "react";
import "./App.css";

const Grid = ({ buttonClick }) => {
  return (
    //map over gridArray
    //return buttons
    //give id of index
    //make decision on what inner text to show
    <div className="gridContainer">
      <div>
        <button id="0" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="1" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="2" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="3" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="4" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="5" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="6" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="7" onClick={buttonClick}></button>
      </div>
      <div>
        <button id="8" onClick={buttonClick}></button>
      </div>
    </div>
  );
};
export default Grid;
