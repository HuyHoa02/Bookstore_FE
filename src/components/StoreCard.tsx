import { CheckOutlined, PersonAddAlt1Outlined, StarBorderOutlined, Storefront } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'


const StoreCard: React.FC = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#fff", height: '200px', display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Box sx={{ width: "80%", display: 'flex', m: 5 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '40%',
                            height: '100%',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'url(/category1.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'blur(2px)',
                                zIndex: 1,
                            }}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: '100%',
                                mx: 5,
                                py: 2,
                                color: '#fff',
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
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    Trang shop
                                </Typography>
                                <Box>
                                    <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
                                        <PersonAddAlt1Outlined fontSize="small" sx={{ mr: 1 }} />
                                        Follow
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '60%', mb: 3 }}>
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
                    </Box>
                </Box>
            </Box></>
    )
}

export default StoreCard
