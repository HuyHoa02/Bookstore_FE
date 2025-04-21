import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductOverview from '../components/ProductOverview';
import ShopNavigator from '../components/ShopNavigator';
import Book from '../types/Book';

const ProductDetails: React.FC = () => {
    const location = useLocation();
    const product = location.state as Book;

    return (
        <>
            <ProductOverview
                id={product.id}
                imageUrl={product.imageUrl}
                author={product.author}
                price={product.price}
                title={product.title}
                categoryName={product.categoryName}
                description={product.description}
                stock={product.stock}
            />
            <ShopNavigator />
        </>
    );
};

export default ProductDetails;
