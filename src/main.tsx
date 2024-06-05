import React, { useState } from 'react';
import Board from './Component/Board';
import './assets/index.css';

export  const Main = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const squaresCopy = squares.slice();
	
	console.log(squaresCopy);
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

const reset=()=>{
setSquares(Array(9).fill(null));
}


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
	
  } else {
 if(!isNull(squares)){
   status = `Draw`;
   
 }else{
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}
  }

  return (
    <div className="game flex flex-col items-center mt-10">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info mt-4 text-xl">
        <div>{status}</div>
      </div>
	     <div className="game-info mt-4 text-xl">
	  <button type="button" onClick={reset} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">RESET</button>
     </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
	
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const isNull = (inputArray) => {
  let check = false;
        for (var i = 0; i < inputArray.length; i++) {
           let currentElement =  inputArray[i];
			 if (currentElement === null) {
           return true;
        }
		 
        }
  return  check;
  
}


