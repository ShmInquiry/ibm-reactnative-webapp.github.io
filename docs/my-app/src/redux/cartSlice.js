// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [
            { id: 1, name: 'Fiddle Leaf Fig', price: 29.99, image: 'path/to/image1.jpg' },
            { id: 2, name: 'Snake Plant', price: 19.99, image: 'path/to/image2.jpg' },
            // Add more products as needed
        ],
        cartItems: [],
    },
    reducers: {
        // addToCart: (state, action) => {
        //     state.cartItems.push(action.payload);
        // },
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          },

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
          },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
            }
          },
        // Other reducers like removeFromCart, etc.
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
