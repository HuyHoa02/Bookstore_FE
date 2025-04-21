import { Box, Container, Typography } from '@mui/material'
import ButtonPrimary from './ui/ButtonPrimary'

export default function Banner() {
    return (
        <Container maxWidth='xl' sx={{
            height: '100vh',
            backgroundImage: 'url(/banner-image-bg-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: { md: 'row-reverse' }, alignItems: 'center', justifyContent: 'space-between', p: 10 }}>
                        <Box sx={{ textAlign: 'center', width: '100%', mt: { xs: 5, md: 0 } }}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                                    30% Discount on all items. Hurry Up !!!
                                </Typography>
                                <ButtonPrimary href='#' content='Shop Collection' />
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                            <img
                                src='/banner-image3.png'
                                alt="banner"
                                className="img-fluid"
                                style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
