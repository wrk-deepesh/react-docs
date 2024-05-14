import React from 'react'
import BoardButton from './BoardButton';
import './index.css';

const Board=({ boardState, updateBoard }) => {
  const getPlayerBoardVal = (index) => {
    const row = Math.floor(index/3);
    const col = index%3;
    return boardState[row][col];
  }
  return (
    <div className='board'>
      <div className='cell-row'>
        <BoardButton index={0} updateBoard={updateBoard} val={getPlayerBoardVal(0)} />
        <BoardButton index={1} updateBoard={updateBoard} val={getPlayerBoardVal(1)} />
        <BoardButton index={2} updateBoard={updateBoard} val={getPlayerBoardVal(2)} />
      </div>
      <div className='cell-row'>
      <BoardButton index={3} updateBoard={updateBoard} val={getPlayerBoardVal(3)} />
      <BoardButton index={4} updateBoard={updateBoard} val={getPlayerBoardVal(4)} />
      <BoardButton index={5} updateBoard={updateBoard} val={getPlayerBoardVal(5)} />
      </div>
      <div className='cell-row'>
      <BoardButton index={6} updateBoard={updateBoard} val={getPlayerBoardVal(6)} />
      <BoardButton index={7} updateBoard={updateBoard} val={getPlayerBoardVal(7)} />
      <BoardButton index={8} updateBoard={updateBoard} val={getPlayerBoardVal(8)} />
      </div>
    </div>
  )
}

export default Board