interface NavbarProps {
  gameVisible: boolean;
  setGameVisible: Function;
  tableVisible: boolean;
  setTableVisible: Function;
}

const Navbar: React.FC<NavbarProps> = ( {setGameVisible, gameVisible, setTableVisible, tableVisible} ) => {

  function handleGame(){
    console.log("[NAVBAR] Setting Game visibility as...", !gameVisible);
    setGameVisible(!gameVisible)
  }

  function handleTable(){
    console.log("[NAVBAR] Setting Table visibility as...", !tableVisible);
    setTableVisible(!tableVisible)
  }

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleGame()}>Tic-Tac-Toe</button>
        </li>
        <li>
          <button onClick={() => handleTable()}>Tabla de Productos</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;