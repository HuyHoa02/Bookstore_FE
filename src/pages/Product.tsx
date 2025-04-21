import { Container, Grid } from "@mui/material"
import ProductCard from "../components/ui/ProductCard"
import ProductType from "../types/Product"
import React, { useEffect } from "react"
import Book from "../types/Book"
import api from "../services/api"


const products: ProductType[] = [
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


const Product = () => {
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
        <>
            <Container maxWidth='xl' >
                <Grid container sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', p: 5 }} spacing={5}>
                    {books?.map((product: Book, index: number) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} >
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Product
