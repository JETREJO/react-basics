import { useState } from "react";
import Square from "./square/square";
import { alertTool } from "../tools/alerts";

function Board() {

  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick(i:number) {
    alertTool("Click! - Casilla: " + i);
    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">

        {/* <Square value={squares[0]} onSquareClick={handleClick(0)}/> */}
        {/*
          * NOTA: Si escribimos de esta forma el envío de la función handleClick()
          * el navegador interpreta que la estamos mandando a llamar (ejecutando) desde
          * el momento que instanciamos el componente Square, por lo que al provocar
          * un re-render en este componente (el padre) y por cada render del padre provoca
          * un render en el hijo (Square) y al instanciar al hijo se provoca de nuevo un
          * re-render en el padre, esto provoca un loop de renders. Es por eso que para
          * mandar una función como prop a un hijo se escribe de esta forma:
          * () => functionToExecute() 
        */}

        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board;
