import React,{ useState} from 'react'

export const Player = ({initialName,symbol, isActive, onPlayerNameChange}) => {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setEditing] = useState(false);
    const handelEditClick = () => {
        setEditing((editing) => !editing);
        onPlayerNameChange(symbol, playerName);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    if(isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/>
    }
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handelEditClick}>{isEditing? 'Save' : 'Edit'}</button>
    </li>
  )
}
