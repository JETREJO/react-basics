import Board from "../board/board";
import "./game.css";

interface GameProps {
  visible: boolean;
}

const Game: React.FC<GameProps> = ( {visible} ) => {
  return (
    <div className="game" style={{ display: (visible) ? "" : "none" }}>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default Game;
