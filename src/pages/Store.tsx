import { Box, Container, Grid, Typography } from "@mui/material"
import StoreCard from "../components/StoreCard"
import ProductType from "../types/Product"
import ProductCard from "../components/ProductCard"
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
]
const Store = () => {
    return (
        <Container maxWidth='xl'>
            <StoreCard />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Box sx={{ width: "90%" }}>
                    <Typography variant="h5">Best Seller</Typography>
                    <Grid container sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', mb: 5 }} spacing={5}>
                        {products.map((product: ProductType, index: number) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} >
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    author={product.author}
                                    price={product.price}
                                    title={product.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h5">Best Seller</Typography>
                    <Grid container sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', mb: 5 }} spacing={5}>
                        {products.map((product: ProductType, index: number) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} >
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    author={product.author}
                                    price={product.price}
                                    title={product.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h5">Best Seller</Typography>
                    <Grid container sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', mb: 5 }} spacing={5}>
                        {products.map((product: ProductType, index: number) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} >
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    author={product.author}
                                    price={product.price}
                                    title={product.title}
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
