import { useState } from "react";
import Player from "./components/Player";
import Log from "./components/Log"
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurn] = useState([]);

  function handleActive(rowIndex, colIndex) {
    // switches symbol between each player once a turn has been taken
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updateTurn;
    });
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialName="Player"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        {/* passes argument to player component, isActive is a boolean prop whose value is set to true if activePlayer matches the symbol */}
        <Player
          initialName="Enemy"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
      <GameBoard selectSquare={handleActive} turns={gameTurns} />
      {/* selectSquare is a function passed as a prop from the App component to the GameBoard component */}
      <Log />
    </div>
  );
}

export default App;
