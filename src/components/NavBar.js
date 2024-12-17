
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6 text-white">
                <li>
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/cart" className="hover:text-gray-400">Cart</Link>
                </li>
                <li>
                    <Link to="/checkout" className="hover:text-gray-400">Checkout</Link>
                </li>
                <li>
                    <Link to="/auth" className="hover:text-gray-400">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
