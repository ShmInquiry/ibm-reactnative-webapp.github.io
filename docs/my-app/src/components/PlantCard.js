// src/components/PlantCard.js
import React from 'react';
import { useSelector } from 'react-redux';

const PlantCard = ({ image }) => {
  return (
    <div className="plant-card">
      <img src={image} alt="Plant Sample" />
      <p>Price: $9.99</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default PlantCard;