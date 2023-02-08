import React, { useState } from "react";

function PlantCard({plant}) {

  const [sold,setSold]=useState(true);
  function handleClick(){
    setSold(!sold);
  }

  return (
    <li className="card">
      <img onClick={handleClick}
        src={plant.image} 
        alt={plant.name} 
      />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {sold ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
