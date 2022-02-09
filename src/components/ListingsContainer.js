import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ ads, handleDeleteAd }) {
  return (
    <main>
      <ul className="cards">
        {ads.map(ad => <ListingCard key={ad.id} ad={ad} handleDeleteAd={handleDeleteAd}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
