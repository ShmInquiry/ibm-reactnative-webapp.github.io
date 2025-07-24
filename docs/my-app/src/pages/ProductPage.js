// src/pages/ProductPage.js
// import React from 'react';
// import PlantCard from '../components/PlantCard';
// import { useSelector } from 'react-redux';
// import sample1 from '../assets/plant-products-samples/plant-sample-1.jpg';

// const importAll = (r) => r.keys().map(r);
// // const images = importAll(require.context('../assets/plant-products-samples/', false, /\.(png|jpe?g|svg)$/));
// const images = importAll(
//   require.context('../assets/plant-products-samples', false, /\.(png|jpe?g|svg)$/)
// );
// console.log("Loaded images:", images);

// const ProductPage = () => {
//   return (
//     <div className="product-list">
//       <h1>Products</h1>
//       <div className="product-grid">
//         {images.map((image, index) => (
//           <PlantCard key={index} image={image} />
//         ))}
        
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
// import React from 'react';
// import PlantCard from '../components/PlantCard';
// import { useSelector } from 'react-redux';
// import sample1 from '../assets/plant-products-samples/plant-sample-1.jpg';

// // Dynamically import images from the folder
// const importAll = (r) => r.keys().map(r);
// const images = importAll(
//   require.context('../assets/plant-products-samples', false, /\.(png|jpe?g|svg)$/)
// );

// const ProductPage = () => {
//   const products = images.map((image, index) => ({
//     id: index + 1,
//     name: `Plant ${index + 1}`,
//     price: 9.99 + index, // Example: different prices
//     image,
//   }));

//   return (
//     <div className="product-list">
//       <h1>Products</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <PlantCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React from 'react';
import PlantCard from '../components/PlantCard';
import { useSelector } from 'react-redux';

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context('../assets/plant-products-samples', false, /\.(png|jpe?g|svg)$/)
);

const ProductPage = () => {
  // Generate sample products
  const products = images.map((image, index) => ({
    id: index + 1,
    name: `Plant ${index + 1}`,
    price: 9.99 + index,
    image,
  }));

  // Simulate categories
  const categories = {
    Indoor: products.slice(0, 2),
    Outdoor: products.slice(3, 6),
    Succulents: products.slice(7, 8),
  };

  return (
    <div className="product-list">
      <h1>Products</h1>
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h2 style={{ margin: '20px 0 10px 20px', color: 'var(--text-color-saltrock-red)' }}>{category}</h2>
          <div className="product-grid">
            {items.map((product) => (
              <PlantCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
