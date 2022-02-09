import React from "react";
import Search from "./Search";

function Header({display, setDisplay}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search display={display} setDisplay={setDisplay}/>
    </header>
  );
}

export default Header;
