import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetailPage = ({ products }) => {
    const { productId } = useParams();  // Extracts the productId from the URL
    const dispatch = useDispatch();


    // Find the product from the products array based on the productId from the URL
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <p>Product not found</p>;  // If no product is found, show the message
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));  // Dispatch the action to add the product to the cart
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">{product.name}</h1>
            <div className="flex flex-col md:flex-row">
                <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="md:ml-6 mt-4 md:mt-0">
                    <p className="text-xl font-bold text-blue-600">${product.price}</p>
                    <p className="mt-4">{product.description}</p>
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
