import "./square.css";

interface SquareProps {
  value: string;
  onSquareClick: Function;
}

const Square: React.FC<SquareProps> = ( {value, onSquareClick} ) => {

  return (
    <button
      className="square"
      onClick={() => onSquareClick()}
    >
      {value}
    </button>
  );
}

export default Square;