// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Explore Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <div className="p-6">
              {/* Product Name */}
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>

              {/* Product Price */}
              <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>

              {/* Product Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)} // Add product to cart
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>

              {/* View Details Button */}
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
