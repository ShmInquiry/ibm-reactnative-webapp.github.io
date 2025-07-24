// src/components/PlantCard.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const PlantCard = ({ image }) => {
//   return (
//     <div className="plant-card">
//       <img src={image} alt="Plant Sample" />
//       <p>Price: $9.99</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default PlantCard;
// src/components/PlantCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const PlantCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="plant-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
