interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: Function;
  setInStockOnly: Function;
}

const SearchBar: React.FC<SearchBarProps> = ( {filterText, inStockOnly, setFilterText, setInStockOnly} ) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Buscar..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)} />
      <label style={{display:"block"}}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)} />
        {"Mostrar solo productos en stock"}
      </label>
    </form>
  );
}

export default SearchBar;
