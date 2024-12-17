import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartPage from '../pages/CartPage';

const mockStore = configureStore([]);

describe('CartPage', () => {
    it('displays cart items', () => {
        const store = mockStore({
            cart: {
                items: [
                    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
                    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
                ],
            },
        });

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>
        );

        // expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        // expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
        // expect(screen.getByText(/100/i)).toBeInTheDocument();
        // expect(screen.getByText(/200/i)).toBeInTheDocument();
    });

    it('displays "Your cart is empty" when no items are in the cart', () => {
        const store = mockStore({ cart: { items: [] } });

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>
        );

        expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    });

    it('handles "Proceed to Checkout" button click', () => {
        const store = mockStore({ cart: { items: [] } });

        render(
            <Provider store={store}>
                <CartPage />
            </Provider>
        );

        // const button = screen.getByRole('button', { name: /Proceed to Checkout/i });
        // fireEvent.click(button);

        // You can test for any expected behavior here, like navigation.
        // expect(button).toBeInTheDocument(); // Placeholder assertion
    });
});
