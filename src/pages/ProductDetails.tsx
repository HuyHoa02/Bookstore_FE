import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../types/Product';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductOverview from '../components/ProductOverview';
import { Box, Divider } from '@mui/material';
import ShopNavigator from '../components/ShopNavigator';

const ProductDetails: React.FC = () => {
    const location = useLocation();
    const product = location.state as Product;

    return (
        <>
            <ProductOverview
                image={product.image}
                title={product.title}
                author={product.author}
                price={product.price}
            />
            <ShopNavigator />
        </>
    );
};

export default ProductDetails;
