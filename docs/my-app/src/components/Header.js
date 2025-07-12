import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // const totalItems = useSelector(
  //   (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  // );

  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">🛒 Cart ({totalItems})</Link>
    </header>
  );
}

