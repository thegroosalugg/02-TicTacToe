import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name='Bozo' symbol='X' />
        <Player name='Jojo' symbol='X' />
      </ol>
      Game boooooard
    </div>
  );
}

export default App;
