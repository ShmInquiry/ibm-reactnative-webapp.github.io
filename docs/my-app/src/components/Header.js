import '../App.css'
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // const totalItems = useSelector(
  //   (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  // );

  const cart = useSelector(state => state.cart.cartItems);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='header'>
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">🛒 Cart ({totalItems})</Link>
    </header>
  );
}

