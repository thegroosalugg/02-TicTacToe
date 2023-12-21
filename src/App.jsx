import Player from "./components/Player";
import GameBoard from "./components/GameBoard"

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName='Player' symbol='X' />
        <Player initialName='Enemy' symbol='O' />
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
