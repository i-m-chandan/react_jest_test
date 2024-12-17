import React from 'react';

const recentlyViewedProducts = [
    { id: '1', name: 'Recently Viewed Laptop', price: 1100, image: 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90' },
    { id: '2', name: 'Recently Viewed Phone', price: 650, image: 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90' },
];

const RecentlyViewed = () => {
    return (
        <div>
            <h2>Recently Viewed</h2>
            <div className="grid grid-cols-3 gap-4">
                {recentlyViewedProducts.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
