import './styles.css';
import { useState } from 'react';

function Square({value, onSquareClick}){

  return(
    <button className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);   // Used to keep information of which player goes next
  const [squares, setSquares] = useState(Array(9).fill(null));

  // handleClick: function to update the value of square with o,x,null
  function handleClick(i){
    // avoid move overwriting another one
    if(squares[i] || calculateWinner(squares)){   //determine if there is already a value in position of square
      return;
    }
    const nextSquares = squares.slice();  // Copy of the squares array
    // handle the players taking turns
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }

  // Determine the winner
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner" + winner;
  }else{
    status = "Next Player: "+ (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="border-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="border-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={ ()=> handleClick(5)} />
      </div>
      <div className="border-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares){
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

  for(let i =0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}