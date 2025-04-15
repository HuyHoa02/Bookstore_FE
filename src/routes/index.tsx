// routes/index.ts
import React, { JSX } from 'react';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Product from '../pages/Product';
import ProductDetails from '../pages/ProductDetails';
import Store from '../pages/Store';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export type AppRoute = {
    path: string;
    element: JSX.Element;
    header: boolean;
};

const routes: AppRoute[] = [
    { path: '/', element: <Home />, header: true },
    { path: '/sign-in', element: <SignIn />, header: false },
    { path: '/sign-up', element: <SignUp />, header: false },
    { path: '/cart', element: <Cart />, header: true },
    { path: '/checkout', element: <Checkout />, header: false },
    { path: '/products', element: <Product />, header: true },
    { path: '/products/details', element: <ProductDetails />, header: true },
    { path: '/store', element: <Store />, header: true },
];

export default routes;
