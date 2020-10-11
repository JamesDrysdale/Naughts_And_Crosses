import React from "react";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => (
    <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} />
  );
  return (
    <>
      <div className="board-row">
        {[0, 1, 2].map((i) => {
          return renderSquare(i);
        })}
      </div>
      <div className="board-row">
        {[3, 4, 5].map((i) => {
          return renderSquare(i);
        })}
      </div>
      <div className="board-row">
        {[6, 7, 8].map((i) => {
          return renderSquare(i);
        })}
      </div>
    </>
  );
};

export default Board;
