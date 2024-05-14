
import './App.css';
import { useState } from 'react';
import Board from './Board';

function App() {
  const playerX = {key: 1, name: 'X'};
  const playerY = {key: 2, name: 'Y'};
  const defaultBoard = [[undefined,undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];

  const [player, setPlayer] = useState(playerX);
  const [boardState, setBoardState] = useState(defaultBoard);
  const [gameState, setGameState] = useState(undefined);

  const updateBoard = (index) => {
    let tempBoard = [...boardState];
    
    const row = Math.floor(index/3);
    const col = index%3;
    tempBoard[row][col] = {...player, isDisabled: true};
    setBoardState(tempBoard);
  
    if(
      ( 
        tempBoard[0][0]?.key === tempBoard[0][1]?.key && 
        tempBoard[0][1]?.key === tempBoard[0][2]?.key && 
        tempBoard[0][2]?.key === tempBoard[0][0]?.key && 
        tempBoard[0][0]?.key && tempBoard[0][1]?.key && tempBoard[0][2]?.key
      ) ||
      (
        tempBoard[1][0]?.key === tempBoard[1][1]?.key && 
        tempBoard[1][1]?.key === tempBoard[1][2]?.key && 
        tempBoard[1][2]?.key === tempBoard[1][0]?.key && 
        tempBoard[1][0]?.key && tempBoard[1][1]?.key && tempBoard[1][2]?.key
      ) ||
      (
        tempBoard[2][0]?.key === tempBoard[2][1]?.key && 
        tempBoard[2][1]?.key === tempBoard[2][2]?.key && 
        tempBoard[2][2]?.key === tempBoard[2][0]?.key && 
        tempBoard[2][0]?.key && tempBoard[2][1]?.key && tempBoard[2][2]?.key
      ) ||
      (
        tempBoard[0][0]?.key === tempBoard[1][0]?.key && 
        tempBoard[1][0]?.key === tempBoard[2][0]?.key && 
        tempBoard[2][0]?.key === tempBoard[0][0]?.key && 
        tempBoard[0][0]?.key && tempBoard[1][0]?.key && tempBoard[2][0]?.key
      ) ||
      (
        tempBoard[0][1]?.key === tempBoard[1][1]?.key && 
        tempBoard[1][1]?.key === tempBoard[2][1]?.key && 
        tempBoard[2][1]?.key === tempBoard[0][1]?.key && 
        tempBoard[0][1]?.key && tempBoard[1][1]?.key && tempBoard[2][1]?.key
      ) ||
      (
        tempBoard[0][2]?.key === tempBoard[1][2]?.key && 
        tempBoard[1][2]?.key === tempBoard[2][2]?.key && 
        tempBoard[2][2]?.key === tempBoard[0][2]?.key && 
        tempBoard[0][2]?.key && tempBoard[1][2]?.key && tempBoard[2][2]?.key
      ) ||
      (
        tempBoard[0][0]?.key === tempBoard[1][1]?.key && 
        tempBoard[1][1]?.key === tempBoard[2][2]?.key && 
        tempBoard[2][2]?.key === tempBoard[0][0]?.key &&
        tempBoard[0][0]?.key && tempBoard[1][1]?.key && tempBoard[2][2]?.key
      ) ||
      (
        tempBoard[0][2]?.key === tempBoard[1][1]?.key && 
        tempBoard[1][1]?.key === tempBoard[2][0]?.key && 
        tempBoard[2][0]?.key === tempBoard[0][2]?.key &&
        tempBoard[0][2]?.key && tempBoard[1][1]?.key && tempBoard[2][0]?.key
      )
    )
    {
      setGameState(1);
    }
    else if (tempBoard.reduce((boardAcc, cellRow) => {
      const rowSum = cellRow.reduce((acc, cell) => cell?.key ? acc+1 : acc, 0);
      return boardAcc + rowSum;
    }, 0) === 9){
      setGameState(-1);
    }
    else{
      setPlayer((player) => player?.key === 1 ? playerY : playerX);
      setGameState(0);
    }
  }

  return (
    <div className="App">
    <h1>TIC-TAC-TOE</h1>
    <button 
      className='ResetButton'
      onClick={()=>{
        setBoardState(defaultBoard);
        setGameState(undefined);
        setPlayer(playerX);
      }}
    >
      RESET BOARD
    </button>
    <Board boardState={boardState} updateBoard={Boolean(gameState) ? () => {}: updateBoard }/>
    {gameState === undefined && <h3> {'Click Board to Start !!!'}</h3>}
    {gameState === 0 && <h3> {`Player ${player.name}'s Turn`}</h3>}
    {gameState === 1 && <h3> {`Player ${player.name} won 🎉`}</h3>}
    {gameState === -1 && <h3> {`Game Over 👾`}</h3>}
    </div>
  );
}

export default App;
