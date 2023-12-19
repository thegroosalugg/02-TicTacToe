import { useState } from "react";

export default function Player({ name, symbol }) {
  const [edit, setEdit] = useState(false);

  function editName() {
    setEdit(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (edit) {
    playerName = <input type='text' required/>;
  }

  return (
    <li>
      <span className="player">
        {/* <span className="player-name">{name}</span> */}
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editName}>Edit</button>
    </li>
  );
}
