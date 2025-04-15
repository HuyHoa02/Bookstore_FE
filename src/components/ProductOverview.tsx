import React from 'react'
import Product from '../types/Product'
import { Box, Button, Container, Typography } from '@mui/material'
import { CheckCircleOutlineSharp, ShoppingCartCheckoutOutlined } from '@mui/icons-material'

const ProductOverview: React.FC<Product> = ({ image, title, author, price }) => {
    return (
        <Container
            maxWidth='lg'
            sx={{
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                p: { xs: 2, md: 5 },
                mb: 3,
                alignItems: 'center',
                gap: { xs: 4, md: 10 }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '40%' }
                }}
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        height: '300px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '60%' },
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {author}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'var(--primary-color)',
                        fontWeight: 'bold',
                        mb: 4,
                    }}
                >
                    $ {price}
                </Typography>
                <Typography sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <CheckCircleOutlineSharp sx={{ color: 'var(--primary-color)', mr: 1 }} />
                    An tâm khi mua hàng, chính sách hoàn trả trong 15 ngày
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                    <Button
                        variant='outlined'
                        color='error'
                        sx={{ py: 1, display: 'flex', alignItems: 'center' }}
                    >
                        <ShoppingCartCheckoutOutlined sx={{ color: 'var(--primary-color)', mr: 1 }} />
                        Add To Cart
                    </Button>
                    <Button
                        variant='contained'
                        color='error'
                        sx={{ py: 1, px: 5 }}
                    >
                        Buy Now
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ProductOverview
