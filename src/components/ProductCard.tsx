import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // import Link
import Product from '../types/Product';

const ProductCard: React.FC<Product> = ({ image, title, author, price }) => {
    return (
        <Link
            to="/products/details"
            state={{ image, title, author, price }}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Card
                sx={{
                    width: 250,
                    maxHeight: 500,
                    boxShadow: 2,
                    p: 1,
                    m: 1,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                        boxShadow: 8,
                    },
                }}
            >
                {/* Product Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ height: '220px', objectFit: 'contain' }}
                    />
                </Box>
                <CardContent>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', marginBottom: 1 }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginBottom: 2 }}
                    >
                        {author}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: 2,
                            color: 'var(--primary-color)',
                            fontWeight: 'bold',
                        }}
                    >
                        ${price}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
