import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SecurityIcon from '@mui/icons-material/Security';

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        title: 'Free delivery',
        description: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
        icon: <LocalShippingIcon fontSize="large" sx={{ color: 'var(--primary-color)' }} />, // Using MUI LocalShipping icon
    },
    {
        title: 'Quality guarantee',
        description: 'Dolor sit amet orem ipsu mcons ectetur adipi elit.',
        icon: <VerifiedUserIcon fontSize="large" sx={{ color: 'var(--primary-color)' }} />, // Using MUI VerifiedUser icon
    },
    {
        title: 'Daily offers',
        description: 'Amet consectetur adipi elit loreme ipsum dolor sit.',
        icon: <LocalOfferIcon fontSize="large" sx={{ color: 'var(--primary-color)' }} />, // Using MUI LocalOffer icon
    },
    {
        title: '100% secure payment',
        description: 'Rem Lopsum dolor sit amet, consectetur adipi elit.',
        icon: <SecurityIcon fontSize="large" sx={{ color: 'var(--primary-color)' }} />, // Using MUI Security icon
    },
];

const CompanyServices = () => {
    return (
        <Container style={{ padding: '20px 0' }}>
            <Grid container spacing={1}>
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                padding: '20px',
                                height: '100%',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    height: '100px',
                                    marginRight: '20px',
                                }}
                            >
                                {service.icon}
                            </Box>
                            <Box>
                                <Typography variant="h6" component="h4" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1">{service.description}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CompanyServices;
