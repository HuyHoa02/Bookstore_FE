import { Button, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react';

export default function Footer() {
    const navigater: string[] = ["Home", "About", "Contact"];
    const [isActive, setIsActive] = useState('Home');


    return (
        <Container maxWidth="xl" sx={{ p: 4 }}>
            <Grid container spacing={10}>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={{ xs: 12, sm: 6, md: 3 }}>
                    <img src="/public/main-logo.png" alt="" style={{ width: '200px' }} />
                    <Typography textAlign={'justify'}>
                        Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                    </Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant='h5'>
                        Quick Links
                    </Typography>
                    {navigater.map((item, index) => (
                        <Button
                            key={index}
                            sx={{
                                color: item === isActive ? 'var(--primary-color)' : 'black',
                                fontSize: '16px',
                                '&:hover': {
                                    color: 'var(--primary-color)'
                                }
                            }}
                            onClick={() => setIsActive(item)}
                            disableRipple>
                            {item}
                        </Button>
                    ))}
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant='h5'>Help & Info Help</Typography>
                    <Typography>Track Your Order</Typography>
                    <Typography>Shipping + Delivery</Typography>
                    <Typography>Contact Us</Typography>
                    <Typography>Faqs</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant='h5'>Contact Us</Typography>
                    <Typography>Do you have any queries or suggestions? yourinfo@gmail.com</Typography>
                    <Typography>If you need support? Just give us a call. +55 111 222 333 44</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
