import { Box, Button, Typography } from '@mui/material';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../types/Product';
import ProductCard from './ProductCard';
import ButtonPrimary from './ButtonPrimary';

const products: Product[] = [
    {
        title: 'House Of Sky Breath',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item1.png'
    },
    {
        title: 'HeartLand Stars',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item2.png'
    },
    {
        title: 'Heavenly Bodies',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item3.png'
    },
    {
        title: 'His Saving Grace',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item4.png'
    },
    {
        title: 'My Dearest Darkest',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item5.png'
    },
    {
        title: 'The Story Of Success',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item6.png'
    },
    {
        title: 'Echoes Of The Ancients',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item7.png'
    },
    {
        title: 'The Midnight Garden',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item8.png'
    },
    {
        title: 'Whispering Winds',
        author: 'Lauren Asher',
        price: '870',
        image: '/product-item9.png'
    },
]

export default function ProductCarousel() {
    return (
        <div className="carousel-container">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ flex: 1, ml: 8 }}>
                    <Typography variant="h4">
                        Best Selling Items
                    </Typography>
                </Box>
                <Box sx={{ mr: 8 }}>
                    <ButtonPrimary href="/products" content="View All" />
                </Box>
            </Box>
            <Swiper
                spaceBetween={50}
                slidesPerView={5} // Default value for larger screens
                navigation={false}
                pagination={{ clickable: false }}
                loop={false}
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{
                    height: '100vh',
                    backgroundImage: 'url(/product-image-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '50px'
                }}
                breakpoints={{
                    // When the screen width is 1200px or more, show 5 slides
                    1200: {
                        slidesPerView: 5,
                    },
                    // When the screen width is 900px or more, show 4 slides
                    900: {
                        slidesPerView: 4,
                    },
                    // When the screen width is 600px or more, show 3 slides
                    600: {
                        slidesPerView: 3,
                    },
                    // When the screen width is less than 600px, show 2 slides
                    400: {
                        slidesPerView: 2,
                    },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                            image={product.image}
                            author={product.author}
                            price={product.price}
                            title={product.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
