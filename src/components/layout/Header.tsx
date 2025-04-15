import {
    Login,
    Logout,
    MenuOutlined,
    Settings,
    ShoppingCartOutlined
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { useAuth } from '../../contexts/AuthContext';


export default function Header() {
    const { user, logout } = useAuth();
    const isLogin = !!user;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
    };

    const renderMenuItems = () => {
        if (isLogin) {
            return (
                <>
                    <MenuItem onClick={handleClose}>
                        <Typography sx={{ ml: 2 }}>Profile</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                        Logout
                    </MenuItem>
                </>
            );
        }
    };

    return (
        <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center" sx={{ p: 4 }}>
                {/* Logo */}
                <Grid size={{ xs: 6, sm: 2 }}>
                    <Link type="div" sx={{ display: 'flex', justifyContent: 'center' }} href="/">
                        <img src="/public/main-logo.png" alt="Logo" />
                    </Link>
                </Grid>

                {/* Search Bar */}
                <Grid size={{ sm: 8 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                        <SearchBar />
                    </Box>
                </Grid>

                <Grid size={{ xs: 6, sm: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
                        {isLogin ? (
                            <>
                                <Box>
                                    <Link href='/cart'><ShoppingCartOutlined fontSize='medium' sx={{ mr: 2 }} /></Link>
                                </Box>
                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
                                    <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {user.name}
                                    </Typography>
                                </Box>

                                <IconButton
                                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <MenuOutlined />
                                </IconButton>
                            </>
                        ) : (
                            <Link
                                type='button'
                                underline='none'
                                sx={{
                                    p: 1,
                                    color: 'black',
                                    fontSize: '16px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    paddingX: 2,
                                    '&:hover': {
                                        backgroundColor: 'var(--primary-color)',
                                        color: '#fff'
                                    }
                                }}
                                href="/sign-in"
                            >
                                Log in <Login sx={{ ml: 2 }} />
                            </Link>
                        )}
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {renderMenuItems()}
                    </Menu>
                </Grid>
            </Grid>
        </Container >
    );
}
