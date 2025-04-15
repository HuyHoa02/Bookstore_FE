import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import CompanyServices from '../components/CompanyService'
import ProductCarousel from '../components/ProductCarousel'

import React from 'react'

const Home: React.FC = () => {
    return (
        <div>
            <Carousel />
            <CompanyServices />
            <ProductCarousel />
            <Banner />
        </div>
    )
}

export default Home

