import { useState } from "react";
import { alertTool } from "../../tools/alerts";
import "./square.css";

interface SquareProps {
  squareNumber: string;
}

const Square: React.FC<SquareProps> = ( {squareNumber} ) => {

  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    alertTool("Hiciste click! " + squareNumber);
    setValue("X");
  }

  return (
    <button
      className="square"
      onClick={() => handleClick()}
    >
      {value}
    </button>
  );
}

export default Square;