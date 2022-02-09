import React from "react";
import Search from "./Search";
import AdForm from "./AdForm"

function Header({display, setDisplay, isChecked, setIsChecked, handleAddAd}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search display={display} setDisplay={setDisplay} isChecked={isChecked} setIsChecked={setIsChecked}/>
      <AdForm handleAddAd={handleAddAd}/>
    </header>
  );
}

export default Header;
