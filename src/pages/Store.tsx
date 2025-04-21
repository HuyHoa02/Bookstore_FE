import { Box, Container, Grid, Typography } from "@mui/material"
import StoreCard from "../components/ui/StoreCard"
import ProductType from "../types/Product"
import ProductCard from "../components/ui/ProductCard"
import React, { useEffect } from "react"
import Book from "../types/Book"
import api from "../services/api"

const Store = () => {
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
        <Container maxWidth='xl'>
            <StoreCard />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Box sx={{ width: "90%" }}>
                    <Typography variant="h5">Best Seller</Typography>
                    <Grid container sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', mb: 5 }} spacing={5}>
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
                </Box>
            </Box>
        </Container >
    )
}

export default Store
