import { Box, Button, Typography } from '@mui/material';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import ButtonPrimary from './ButtonPrimary';

const Carousel = () => {
    // Define the structure for your banners (optional if you want to map data)
    interface Banner {
        title: string;
        description: string;
        image: string;
        link: string;
    }

    // Sample data to map over (you can replace this with actual dynamic data)
    const banners: Banner[] = [
        {
            title: 'The Fine Print Book Collection',
            description: 'Best Offer Save 30%. Grab it now!',
            image: '/banner-image2.png',
            link: 'index.html',
        },
        {
            title: 'How Innovation works',
            description: 'Discount available. Grab it now!',
            image: '/banner-image1.png',
            link: 'index.html',
        },
        {
            title: 'Your Heart is the Sea',
            description: 'Limited stocks available. Grab it now!',
            image: '/banner-image.png',
            link: 'index.html',
        },
    ];

    return (
        <div className="carousel-container" >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: false }}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{
                    height: '100vh',
                    backgroundImage: 'url(/banner-image-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '50px'
                }}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <Box sx={{ display: 'flex', flexDirection: { md: 'row-reverse' }, alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                                        <img
                                            src={banner.image}
                                            alt="banner"
                                            className="img-fluid"
                                            style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
                                        />
                                    </Box>
                                    <Box sx={{ textAlign: 'center', width: '100%', mt: { xs: 5, md: 0 } }}>
                                        <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                                {banner.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                                                {banner.description}
                                            </Typography>
                                            <ButtonPrimary href={banner.link} content='Shop Collection' />
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Carousel;
