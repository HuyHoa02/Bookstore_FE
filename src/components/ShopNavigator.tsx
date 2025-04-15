import { CheckOutlined, FollowTheSignsOutlined, PersonAddAlt1Outlined, StarBorderOutlined, StartOutlined, Storefront } from '@mui/icons-material';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const ShopNavigator = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                p: 3,
                mb: 5,
                alignItems: { md: 'center' },
                gap: { xs: 3, md: 0 }
            }}
        >
            {/* Shop Info */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: { xs: '100%', md: '30%' },
                    justifyContent: 'center'
                }}
            >
                <Box>
                    <img
                        src="/category1.jpg"
                        alt="Shop"
                        style={{
                            height: '80px',
                            width: '80px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '5px solid rgba(0,0,0,0.2)'
                        }}
                    />
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Trang shop
                    </Typography>
                    <Button href='/store' variant="outlined" color="error">
                        <Storefront sx={{ mr: 1 }} fontSize='small' />
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Go to Shop</Typography>
                    </Button>
                </Box>
            </Box>

            {/* Divider */}
            <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', md: 'block' }, mx: 4 }}
            />

            <Box sx={{ display: { md: 'flex' }, alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
                <Stack
                    direction={{ xs: 'row', md: 'column' }}
                    spacing={2}
                    sx={{ m: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><StarBorderOutlined fontSize='small' sx={{ mr: 1 }} />Rating</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>3.1k</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><CheckOutlined fontSize='small' sx={{ mr: 1 }} />Sold</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>4.2k</Typography>
                    </Box>
                </Stack>

                <Stack
                    direction={{ xs: 'row', md: 'column' }}
                    spacing={2}
                    sx={{ m: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><PersonAddAlt1Outlined fontSize='small' sx={{ mr: 1 }} />Followers:</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>2.3k</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><Storefront fontSize='small' sx={{ mr: 1 }} />Products</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>120</Typography>
                    </Box>
                </Stack>
                <Stack
                    direction={{ xs: 'row', md: 'column' }}
                    spacing={2}
                    sx={{ m: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><PersonAddAlt1Outlined fontSize='small' sx={{ mr: 1 }} />Followers:</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>2.3k</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1"><Storefront fontSize='small' sx={{ mr: 1 }} />Products</Typography>
                        <Typography variant='body1' sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>120</Typography>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default ShopNavigator;
