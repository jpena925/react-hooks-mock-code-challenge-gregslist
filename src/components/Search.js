import React, {useState} from "react";

function Search({ display, setDisplay }) {
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
      <button type="submit" onSubmit={handleSubmit}>🔍</button>
    </form>
  );
}

export default Search;

// (e) => setDisplay((display) => e.target.value)