import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';

const mockProducts = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/300' },
];

describe('ProductList', () => {
    it('renders a list of products', () => {
        render(
            <BrowserRouter>
                <ProductList products={mockProducts} />
            </BrowserRouter>
        );

        const productNames = screen.getAllByText(/Product/i);
        expect(productNames).toHaveLength(2);
    });

    it('renders links to product detail pages', () => {
        render(
            <BrowserRouter>
                <ProductList products={mockProducts} />
            </BrowserRouter>
        );

        const links = screen.getAllByRole('link', { name: /View Details/i });
        expect(links).toHaveLength(2);
        expect(links[0]).toHaveAttribute('href', '/product/1');
        expect(links[1]).toHaveAttribute('href', '/product/2');
    });
});
