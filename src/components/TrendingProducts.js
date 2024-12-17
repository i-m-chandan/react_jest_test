import React from 'react';
import ProductCard from './ProductCard';

const trendingProducts = [
    { id: '1', name: 'Trending Laptop', price: 1200, image: 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90' },
    { id: '2', name: 'Trending Phone', price: 700, image: 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90' },
    // Add more trending products here
];

const TrendingProducts = () => {
    return (
        <div>
            <h2>Trending Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {trendingProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
