import React, { useState } from "react";

function ListingCard({ad, handleDeleteAd }) {
  const [fav, setFav] = useState(false)

  function handleDelete(ad){

    fetch(`http://localhost:6001/listings/${ad.id}`, {
      method: 'DELETE'
    })
    .then(handleDeleteAd(ad.id))
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ad.image} alt={ad.description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={e => setFav(fav => !fav)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={e => setFav(fav => !fav)}>☆</button>
        )}
        <strong>{ad.description}</strong>
        <span> · {ad.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(ad)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
