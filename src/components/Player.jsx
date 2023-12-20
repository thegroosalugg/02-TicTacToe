import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [editting, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleClick() {
    setEdit((toggle) => !toggle);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (editting) {
    editPlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
      <span className="player">
        {/* <span className="player-name">{initialName}</span> */}
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editting ? 'Save' : 'Edit'}</button>
    </li>
  );
}
