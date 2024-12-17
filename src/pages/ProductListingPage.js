import React from 'react';
import { Link } from 'react-router-dom';

const ProductListingPage = ({ products }) => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Product Listings</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            {/* Product Name */}
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                            {/* Product Price */}
                            <p className="text-gray-600 mb-4">${product.price}</p>

                            {/* Link to Product Detail Page */}
                            <Link to={`/product/${product.id}`} className="text-blue-600 hover:text-blue-800">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
