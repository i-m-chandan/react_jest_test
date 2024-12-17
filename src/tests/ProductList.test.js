import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ProductListingPage from './ProductListingPage';  // Your component
import store from './redux/store'; // Import your redux store

const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 150, image: 'image2.jpg' },
    // Add other products as needed
];

test('renders links to product detail pages', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductListingPage products={products} />
            </MemoryRouter>
        </Provider>
    );

    // Check if links are rendered correctly
    products.forEach(product => {
        const link = screen.getByText(`View Details`);
        expect(link).toBeInTheDocument();
        expect(link.closest('a')).toHaveAttribute('href', `/product/${product.id}`);
    });
});
