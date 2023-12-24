const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ selectSquare, turns }) {
  let gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn; // uses destructuring to extract the square and player properties from the current turn object.
    // The square property contains information about the position of the move, and the player property contains the symbol of the player making the move.
    const { row, col } = square; // further destructures the square object to extract the row and col properties, representing the row and column of the move on the game board.

    gameBoard[row][col] = player; // updates the gameBoard by assigning the current player's symbol (X or O) to the specified position (row, col) on the board.

    // gameBoard[turn.square.row][turn.square.col] = turn.player; // the above destructing can also be written like this
  }

  // each row is an array. Each 'column' is a single element inside the array, and not an actual column
  // const [gameBoard, setGameboard] = useState(initialBoard);

  // function handleBoard(rowIndex, colIndex) {
  //   setGameboard((prevGameBoard) => {
  //     const updateBoard = [
  //       // new inmutable array is created using ...spread operator as to not alter original
  //       ...prevGameBoard.map((innerArray) => [...innerArray]), // a second spread operator clones the nested arrays
  //     ];
  //     updateBoard[rowIndex][colIndex] = activeSymbol; // the value of the new variable is then updated without changing the original
  //     return updateBoard;
  //   });

  //   selectSquare(); // the prop function is called here to notify the parent component 'App' that a square has been selected
  // }
  // This pattern is often used in React to allow child components to communicate with their parent components.
  // By passing a function as a prop from the parent to the child, the child can call that function to interact with the parent.
  // In this case, it's a way for the GameBoard component to signal to the App component that a move has been made.

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
