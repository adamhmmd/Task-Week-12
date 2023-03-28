import * as React from 'react';
import './TicTacToe.css';
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true);
  const [gil, setGil] = React.useState('CHOSE ANYWHERE!');
  
  function selectSquare(num) {
    
    if (calculateWinner(squares) || squares[num]) {
      return
    }
    squares[num] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)

    const winner = calculateWinner(squares)
    let turn
  
    if (winner) {
      turn = `Winner: ${winner}`;
      setGil(turn)
      } else {
      turn = 'Next player: ' + (isX ? 'O' : 'X');
      setGil(turn)
    }

  }

  

  function restart() {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className='status' >
        <Text fontSize='lg' noOfLines={[1, 2, 3]} >
        {gil}
        </Text>
        </div>
      <div className='container'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='container'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='container' >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
        <div className='tombol'> <Button colorScheme='blue' align='center' variant='outline' onClick={restart}>
        Restart Game Now!
      </Button></div>
     
    </div>
  );
}

function Game() {
  return (
    <div >
      <div >
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
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
}

function App() {
  return <Game />;
}

export default App;
