import { useState } from "react";
import Game from "./components/game/game";
import Navbar from "./components/navbar/navbar";
import FilterableProductTable from "./components/productsTable/mainProductTable/FilterableProductTable";
import { Product } from "./interfaces/Product";

const products: Product[] = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
];

const App = () => {

  const [gameVisible, setGameVisible] = useState<boolean>(false);
  const [tableVisible, setTableVisible] = useState<boolean>(true);

  function toggleGameVisible() {
    setGameVisible(!gameVisible);
  }

  function toggleTableVisible() {
    setTableVisible(!tableVisible);
  }

  return (
    <div>
      <Navbar
        gameVisible={gameVisible}
        setGameVisible={() => toggleGameVisible()}
        tableVisible={tableVisible}
        setTableVisible={() => toggleTableVisible()}
      />
      <Game visible={gameVisible} />
      <FilterableProductTable products={products} sectionVisible={tableVisible}/>
    </div>
  );
}

export default App;
