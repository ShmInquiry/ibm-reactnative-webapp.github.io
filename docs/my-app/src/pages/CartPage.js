// import React from "react";
// import { useSelector } from "react-redux";
// import CartItem from "../components/CartItem";
// import { Link } from "react-router-dom";

// export default function CartPage() {
//   // const cart = useSelector((state) => state.cart.items);
//   const cart = useSelector((state) => state.cart.cartItems);


//   const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
//   const totalCost = cart?.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   ) ?? 0;

//   return (
//   <div className="cart-page-container">
//     <h2>Your Shopping Cart</h2>
//       <p>Total Items: {totalItems}</p>
//       <p>Total Cost: ${totalCost.toFixed(2)}</p>

//       {cart?.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart?.map((item) => <CartItem key={item.id} item={item} />)
//       )}

//       <div style={{ marginTop: "2rem" }}>
//         <Link to="/products">
//           <button>Continue Shopping</button>
//         </Link>
//         <button
//           onClick={() => alert("This is a mock checkout.")}
//           style={{ marginLeft: "1rem" }}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  const totalCost =
    cart?.reduce((sum, item) => sum + item.quantity * item.price, 0) ?? 0;

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  return (
    <div className="cart-page-container">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

      {cart?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))
      )}

      <div style={{ marginTop: "2rem" }}>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button
          onClick={() => alert("Coming Soon!")}
          style={{ marginLeft: "1rem" }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
