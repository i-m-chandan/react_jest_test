// import cartReducer, { addToCart, removeFromCart } from '../redux/cartSlice';

// describe('cartSlice', () => {
//     it('adds an item to the cart', () => {
//         const initialState = { items: [] };
//         const product = { id: 1, name: 'Product 1', price: 100 };

//         const nextState = cartReducer(initialState, addToCart(product));
//         expect(nextState.items).toHaveLength(1);
//         expect(nextState.items[0]).toEqual({ ...product, quantity: 1 });
//     });

//     it('removes an item from the cart', () => {
//         const initialState = {
//             items: [{ id: 1, name: 'Product 1', price: 100, quantity: 1 }],
//         };

//         const nextState = cartReducer(initialState, removeFromCart(1));
//         expect(nextState.items).toHaveLength(0);
//     });
// });
