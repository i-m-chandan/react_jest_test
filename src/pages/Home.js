import React from 'react';
import ProductList from '../components/ProductList.js';
import TrendingProducts from '../components/TrendingProducts';
import RecentlyViewed from '../components/RecentlyViewed';

import { products } from '../utils/index.js';


const Home = () => {
    return (
        <div>
            <ProductList products={products} />
            <TrendingProducts />
            <RecentlyViewed />
        </div>
    );
};

export default Home;
