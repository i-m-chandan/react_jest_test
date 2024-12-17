import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../redux/cartSlice';

const Checkout = () => {
    const [paymentDetails, setPaymentDetails] = useState('');
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePayment = () => {
        // Handle payment processing here
        alert('Payment successful!');
        cartItems.forEach(item => dispatch(removeItem(item.id))); // Clear the cart after successful payment
        navigate('/');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
            <input
                type="text"
                placeholder="Enter payment details"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
            />
            <button onClick={handlePayment}>Pay</button>
        </div>
    );
};

export default Checkout;
