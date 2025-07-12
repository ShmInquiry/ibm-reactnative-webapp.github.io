import React from "react";

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={onDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
        <button onClick={onRemove} className="remove-item-button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;

