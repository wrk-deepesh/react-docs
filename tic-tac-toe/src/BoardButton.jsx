import React from 'react'

const BoardButton = ({index, updateBoard, val}) => {
  const cellClickHandler = () => {updateBoard(index)};
  return (
    <button 
        className = 'cell' 
        onClick = { 
            val?.isDisabled ? 
                ()=> {} :
                cellClickHandler
            } 
        disabled = { val?.isDisaabled }
    >
        {val?.name}
    </button>
  )
}

export default BoardButton