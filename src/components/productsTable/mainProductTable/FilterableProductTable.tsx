import { Product } from "../../../interfaces/Product";
import SearchBar from "../searchBar/SearchBar";
import ProductTable from "../table/ProductTable";

interface FiltProdTableProps {
  products: Product[];
  sectionVisible: boolean;
}

const FilterableProductTable: React.FC<FiltProdTableProps> = ({ products, sectionVisible }) => {
  return (
    <div style={{display: (sectionVisible) ? "" : "none" }}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
