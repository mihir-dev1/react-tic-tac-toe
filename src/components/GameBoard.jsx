import React, { useState } from 'react';
export const GameBoard = ({onSelectSquare, board}) => {

  // const [gameBoard,setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((pervGameBoard) => {
  //     const updatedBoard = [...pervGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard
  //   })
  //   onSelectSquare();
  // }

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
             {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
             ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
