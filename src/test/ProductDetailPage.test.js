import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductDetailPage from '../components/ProductDetailPage';

const mockProducts = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', image: 'https://via.placeholder.com/300' },
];

const mockStore = configureStore([]);
const store = mockStore({ cart: { items: [] } });

describe('ProductDetailPage', () => {
    it('renders product details', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/product/1']}>
                    <Routes>
                        <Route
                            path="/product/:productId"
                            element={<ProductDetailPage products={mockProducts} />}
                        />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        expect(screen.getByText(/\$100/i)).toBeInTheDocument();
        expect(screen.getByText(/Description for Product 1/i)).toBeInTheDocument();
    });

    it('adds product to cart', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/product/1']}>
                    <Routes>
                        <Route
                            path="/product/:productId"
                            element={<ProductDetailPage products={mockProducts} />}
                        />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        const button = screen.getByRole('button', { name: /Add to Cart/i });
        fireEvent.click(button);

        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'cart/addToCart', payload: mockProducts[0] }]);
    });
});
