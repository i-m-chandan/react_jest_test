import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="bg-blue-500 text-white p-2" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
