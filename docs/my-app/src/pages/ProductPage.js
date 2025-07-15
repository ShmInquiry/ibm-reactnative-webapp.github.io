// src/pages/ProductPage.js
import React from 'react';
import PlantCard from '../components/PlantCard'; // Assuming you have a PlantCard component
import { useSelector } from 'react-redux';

const ProductPage = () => {
    const products = useSelector((state) => state.cart.products); // Adjust based on your state structure

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products?.map((product) => (
                    <PlantCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;