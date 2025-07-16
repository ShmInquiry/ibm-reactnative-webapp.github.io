// src/pages/ProductPage.js
import React from 'react';
import PlantCard from '../components/PlantCard';
import { useSelector } from 'react-redux';
import sample1 from '../assets/plant-products-samples/plant-sample-1.jpg';


const importAll = (r) => r.keys().map(r);
// const images = importAll(require.context('../assets/plant-products-samples/', false, /\.(png|jpe?g|svg)$/));
const images = importAll(
  require.context('../assets/plant-products-samples', false, /\.(png|jpe?g|svg)$/)
);
console.log("Loaded images:", images);


const ProductPage = () => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="product-grid">
        {images.map((image, index) => (
          <PlantCard key={index} image={image} />
        ))}
        
      </div>
    </div>
  );
};

export default ProductPage;