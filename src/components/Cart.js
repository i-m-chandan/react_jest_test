import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;
