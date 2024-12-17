import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice'; // Import necessary actions

const CartPage = () => {
    const cart = useSelector((state) => state.cart); // Get the cart data from the Redux store
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));  // Dispatch remove item action
    };

    const handleClearCart = () => {
        dispatch(clearCart());  // Dispatch clear cart action
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Your Cart</h1>

            {cart.items.length === 0 ? (
                <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.items.map(item => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                <div className="ml-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-lg font-bold text-blue-600">${item.price * item.quantity}</p>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="ml-4 text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handleClearCart}
                            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Clear Cart
                        </button>
                        <div className="text-lg font-bold text-blue-600">
                            Total: ${cart.totalAmount}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
