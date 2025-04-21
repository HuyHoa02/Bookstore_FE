import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // import Link
import Book from '../../types/Book';

const ProductCard: React.FC<Book> = ({ id, imageUrl, title, author, price, description, categoryName, stock }) => {
    return (
        <Link
            to="/products/details"
            state={{ id, imageUrl, title, author, price, description, categoryName, stock }}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Card
                sx={{
                    width: 250,
                    height: 400,
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
                        src={imageUrl}
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
