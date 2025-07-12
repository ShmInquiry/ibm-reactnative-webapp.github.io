// src/components/PlantCard.js
import React from 'react';

const PlantCard = ({ product }) => {
    return (
        <div className="plant-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default PlantCard;

