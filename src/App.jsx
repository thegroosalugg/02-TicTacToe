import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName='Player' symbol='X' />
        <Player initialName='Enemy' symbol='O' />
      </ol>
      Game boooooard
    </div>
  );
}

export default App;
