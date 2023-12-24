import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  // each row is an array. Each 'column' is a single element inside the array, and not an actual column
  const [gameBoard, setGameboard] = useState(initialBoard);

  function handleBoard(rowIndex, colIndex) {
    setGameboard((prevGameBoard) => {
      const updateBoard = [ // new inmutable array is created using ...spread operator as to not alter original
        ...prevGameBoard.map((innerArray) => [...innerArray]), // 
      ];
      updateBoard[rowIndex][colIndex] = "X";
      return updateBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleBoard(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
