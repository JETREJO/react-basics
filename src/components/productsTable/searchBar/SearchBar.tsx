const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Buscar..." />
      <label style={{display:"block"}}>
        <input type="checkbox" />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

export default SearchBar;
