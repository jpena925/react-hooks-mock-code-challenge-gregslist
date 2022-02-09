import React, {useState} from "react";

function Search({ display, setDisplay, isChecked, setIsChecked}) {
  const [search, setSearch] = useState('')
  

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay((display) => search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch((search) => e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked((isChecked) => !isChecked)}
        />
        Sort by location Alphabetically
      </label>
      <button type="submit" onSubmit={handleSubmit}>🔍</button>
    </form>
  );
}

export default Search;

// (e) => setDisplay((display) => e.target.value)