// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import ProductDetailPage from './ProductDetailPage';
// import { addToCart } from '../redux/cartSlice';

// // Mock products data
// const mockProducts = [
//     {
//         id: 1,
//         name: 'Product 1',
//         description: 'Description for Product 1',
//         price: 99.99,
//         image: 'https://example.com/product1.jpg',
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         description: 'Description for Product 2',
//         price: 149.99,
//         image: 'https://example.com/product2.jpg',
//     },
// ];

// // Create a mock store with a cart reducer
// const mockStore = createStore((state = { cart: [] }, action) => {
//     switch (action.type) {
//         case 'cart/addToCart':
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload],
//             };
//         default:
//             return state;
//     }
// });

// describe('ProductDetailPage', () => {
//     test('renders product details correctly when product is found', () => {
//         // Render the component with the productId URL param
//         render(
//             <Provider store={mockStore}>
//                 <MemoryRouter initialEntries={['/product/1']}>
//                     <Route path="/product/:productId">
//                         <ProductDetailPage products={mockProducts} />
//                     </Route>
//                 </MemoryRouter>
//             </Provider>
//         );

//         // Check if product details are rendered correctly
//         expect(screen.getByText('Product 1')).toBeInTheDocument();
//         expect(screen.getByText('$99.99')).toBeInTheDocument();
//         expect(screen.getByText('Description for Product 1')).toBeInTheDocument();
//         expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/product1.jpg');
//     });

//     test('shows "Product not found" when product is not found', () => {
//         // Render the component with a non-existing productId
//         render(
//             <Provider store={mockStore}>
//                 <MemoryRouter initialEntries={['/product/999']}>
//                     <Route path="/product/:productId">
//                         <ProductDetailPage products={mockProducts} />
//                     </Route>
//                 </MemoryRouter>
//             </Provider>
//         );

//         // Check if "Product not found" message is displayed
//         expect(screen.getByText('Product not found')).toBeInTheDocument();
//     });

//     test('dispatches addToCart action when "Add to Cart" button is clicked', () => {
//         const mockDispatch = jest.fn();
//         const mockProduct = mockProducts[0];

//         // Render the component
//         render(
//             <Provider store={mockStore}>
//                 <MemoryRouter initialEntries={['/product/1']}>
//                     <Route path="/product/:productId">
//                         <ProductDetailPage products={mockProducts} />
//                     </Route>
//                 </MemoryRouter>
//             </Provider>
//         );

//         // Get the Add to Cart button and click it
//         const addToCartButton = screen.getByText('Add to Cart');
//         fireEvent.click(addToCartButton);

//         // Check if the addToCart action was dispatched
//         expect(mockDispatch).toHaveBeenCalledWith(addToCart(mockProduct));
//     });
// });
