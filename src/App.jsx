import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActive() { // switches symbol between each player once a turn has been taken
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player" symbol="X" isActive={activePlayer === 'X'} />
        {/* passes argument to player component, isActive is a boolean prop whose value is set to true if activePlayer matches the symbol */}
        <Player initialName="Enemy" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard selectSquare={handleActive} activeSymbol={activePlayer} />
      {/* selectSquare is a function passed as a prop from the App component to the GameBoard component */}
    </div>
  );
}

export default App;
