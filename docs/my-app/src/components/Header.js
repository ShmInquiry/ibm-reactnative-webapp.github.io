import '../App.css'
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from '../assets/cart-item.png';
import homeIcon from '../assets/app-logo-icon.png';


export default function Header() {
  // const totalItems = useSelector(
  //   (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  // );

  const cart = useSelector(state => state.cart.cartItems);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='header'>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img 
          src={homeIcon} 
          alt="Home" 
          style={{
            height: '54px',
            objectFit: 'contain',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            backgroundColor: '#214001',
            padding: '0px' // optional: spacing inside background
          }}
        />
        Home
        </Link>

      <Link to="/products">Shop</Link>

      <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img 
          src={cartIcon} 
          alt="Cart" 
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)', // 🔦 soft shadow
            backgroundColor: '#214001',
            padding: '4px' // optional: spacing inside background
          }} 
        />
        Cart ({totalItems})
      </Link>
     </header>
  );
}

