import React from 'react'

export const GameOver = ({ winner, onRestart }) => {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            <p>{winner ? `${winner} won!` : `it's draw`} </p>
            <p><button onClick={onRestart}>Rematch!</button></p>
        </div>
    )
}
