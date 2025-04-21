import { Box, Typography } from '@mui/material';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ui/ProductCard';
import ButtonPrimary from './ui/ButtonPrimary';
import React, { useEffect } from 'react';
import Book from '../types/Book';
import api from '../services/api';

export default function ProductCarousel() {
    const [books, setBooks] = React.useState<Book[] | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await api.get('/books/all');
                const { result } = response.data;

                setBooks(result);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        }

        fetchBooks();
    }, [])

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
                {books?.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                            key={index}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            author={product.author}
                            price={product.price}
                            title={product.title}
                            categoryName={product.categoryName}
                            description={product.description}
                            stock={product.stock}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
