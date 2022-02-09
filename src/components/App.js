import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const URL = 'http://localhost:6001/listings'

function App() {
  const [ads, setAds] = useState([])
  const [display, setDisplay] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(()=> {
    fetch(URL)
    .then(res =>res.json())
    .then(data => setAds(data))
  },[])
  
  function onDeleteAd(id){
    setAds((ads) => [...ads].filter(elem => elem.id !== id))
  }

  function onAddAd(newItem){
    setAds((ads) => [...ads, newItem])
  }

  const searchedAds = isChecked ? [...ads]
    .filter(elem => elem.description.toLowerCase().includes(display.toLowerCase()))
    .sort((a,b) => a.location < b.location ? -1 : 1)
    : [...ads].filter(elem => elem.description.toLowerCase().includes(display.toLowerCase()))

  return (
    <div className="app">
      <Header display={display} setDisplay={setDisplay} isChecked={isChecked} setIsChecked={setIsChecked} handleAddAd={onAddAd}/>
      <ListingsContainer ads={searchedAds} handleDeleteAd={onDeleteAd}/>
    </div>
  );
}

export default App;
