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
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        // Other reducers like removeFromCart, etc.
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

