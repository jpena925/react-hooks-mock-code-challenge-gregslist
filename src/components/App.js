import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const URL = 'http://localhost:6001/listings'

function App() {
  const [ads, setAds] = useState([])
  const [display, setDisplay] = useState('')

  useEffect(()=> {
    fetch(URL)
    .then(res =>res.json())
    .then(data => setAds(data))
  },[])
  
  function onDeleteAd(id){
    setAds((ads) => [...ads].filter(elem => elem.id !== id))
  }

  const searchedAds = [...ads].filter(elem => elem.description.toLowerCase().includes(display.toLowerCase()))

  return (
    <div className="app">
      <Header display={display} setDisplay={setDisplay}/>
      <ListingsContainer ads={searchedAds} handleDeleteAd={onDeleteAd}/>
    </div>
  );
}

export default App;
