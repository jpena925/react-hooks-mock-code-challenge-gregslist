import React from "react";

function Search({ display, setDisplay }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={display}
        onChange={(e) => setDisplay((display) => e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;