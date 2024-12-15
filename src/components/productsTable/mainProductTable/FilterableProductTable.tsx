import { useState } from "react";
import { Product } from "../../../interfaces/Product";
import SearchBar from "../searchBar/SearchBar";
import ProductTable from "../table/ProductTable";

interface FiltProdTableProps {
  products: Product[];
  sectionVisible: boolean;
}

const FilterableProductTable: React.FC<FiltProdTableProps> = ({ products, sectionVisible }) => {

  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div style={{display: (sectionVisible) ? "" : "none", margin:"50px", border:"2px solid #CCC", padding:"20px" }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

export default FilterableProductTable;
