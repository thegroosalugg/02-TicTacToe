import { useState } from "react";
import Player from "./components/Player";
import Log from "./components/Log";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./components/winning_combinations";

function checkActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    // switches symbol between each player once a turn has been taken
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);

  const activePlayer = checkActivePlayer(gameTurns);

  function handleActive(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const currentPlayer = checkActivePlayer(prevTurn);

      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updateTurn;
    });
  }

  return (
    <main>
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
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
