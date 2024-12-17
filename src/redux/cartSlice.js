// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;  // Increase the quantity if item already exists
            } else {
                state.items.push({ ...newItem, quantity: 1 });  // Add the item if it doesn’t exist
            }
            state.totalAmount += newItem.price;  // Update the total amount
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalAmount -= existingItem.price * existingItem.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
