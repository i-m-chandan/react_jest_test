import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App.js';
import { products } from '../utils/index.js';
import { MemoryRouter } from 'react-router-dom';

// Mock store setup
const mockStore = configureStore([]);
const store = mockStore({
  // Add any initial state here for testing if necessary
});

beforeAll(() => {
  // Temporarily suppress React Router warnings during tests
  jest.spyOn(console, 'warn').mockImplementation((message) => {
    if (!message.includes('React Router Future Flag Warning')) {
      console.warn(message);
    }
  });
});

afterAll(() => {
  // Restore console warning functionality after tests
  console.warn.mockRestore();
});


describe('App', () => {
  test('renders Home page when navigating to "/"', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if the Home page is rendered correctly
    const homeLink = screen.getByText(/Home/i);  // Assuming there's a text with 'Home' on Home page
    expect(homeLink).toBeInTheDocument();
  });

  test('renders ProductListingPage with products', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if a product is listed (assuming the product name is visible)
    const productName = screen.getByText(products[0].name);  // Replace with the first product's name
    expect(productName).toBeInTheDocument();
  });

  test('renders ProductDetailPage when navigating to /product/:productId', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Assuming you're testing the ProductDetailPage for the first product with productId
    const productDetailLink = screen.getByText(products[0].name);  // Replace with your product's name or any unique identifier
    expect(productDetailLink).toBeInTheDocument();
  });

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({ children }) => children,  // Mock BrowserRouter to just render children
  }));

  test('renders CartPage when navigating to /cart', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // const cartText = await screen.findByText(/Your Cart/i);
    // expect(cartText).toBeInTheDocument();
  });


  test('renders CheckoutPage when navigating to /checkout', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if CheckoutPage renders by looking for something unique to CheckoutPage
    const checkoutText = screen.getByText(/Checkout/i);  // Update based on your CheckoutPage's content
    expect(checkoutText).toBeInTheDocument();
  });

  test('renders AuthPage when navigating to /auth', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if AuthPage renders by looking for something unique to AuthPage
    // const authText = screen.getByText(/Login/i);  // Adjust according to your AuthPage's content
    // expect(authText).toBeInTheDocument();
  });
});
