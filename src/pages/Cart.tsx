import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Button,
    Divider,
    Avatar,
    Stack,
    Paper,
    Checkbox,
    AppBar,
    Toolbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

type CartItem = {
    id: string;
    title: string;
    image: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    variant?: string;
};

type ShopGroup = {
    shopId: string;
    shopName: string;
    items: CartItem[];
};

const sampleData: ShopGroup[] = [
    {
        shopId: "shop1",
        shopName: "DORI Bags",
        items: [
            {
                id: "item1",
                title: "Stylish Women’s Handbag, Trendy Design",
                image: "https://via.placeholder.com/100",
                originalPrice: 420000,
                price: 295000,
                quantity: 1,
                variant: "White with Gift Box",
            },
        ],
    },
    {
        shopId: "shop2",
        shopName: "MINI MARKET 247",
        items: [],
    },
];

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string[]>([]);

    const allItemIds = sampleData.flatMap((s) => s.items.map((i) => i.id));
    const totalSelected = selected.length;
    const totalAmount = sampleData
        .flatMap((s) => s.items)
        .filter((i) => selected.includes(i.id))
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleToggle = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (checked: boolean) => {
        setSelected(checked ? allItemIds : []);
    };

    return (
        <Box sx={{ bgcolor: "#fefefe", p: 2, pb: 12, minHeight: '100vh' }}>
            {/* Header */}
            <Box
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                sx={{ bgcolor: "#fff", borderRadius: 2, boxShadow: 1 }}
            >
                <Checkbox
                    checked={selected.length === allItemIds.length && selected.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                />
                <Box flex={1}>
                    <Typography fontWeight="bold">Product</Typography>
                </Box>
                <Box width={100} textAlign="center">
                    Price
                </Box>
                <Box width={100} textAlign="center">
                    Quantity
                </Box>
                <Box width={100} textAlign="center">
                    Total
                </Box>
                <Box width={100} textAlign="center">
                    Actions
                </Box>
            </Box>

            {/* Cart Items */}
            {sampleData.map((shop) => (
                <Box key={shop.shopId} mt={3}>
                    {/* Shop Header */}
                    <Box display="flex" alignItems="center" mb={1}>
                        <StorefrontIcon color="primary" sx={{ mr: 1 }} />
                        <Typography fontWeight="bold" color="primary">
                            {shop.shopName}
                        </Typography>
                    </Box>

                    {shop.items.map((item) => (
                        <Paper
                            key={item.id}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 2,
                                mb: 1,
                                flexWrap: "wrap",
                                bgcolor: "#fff",
                                borderRadius: 2,
                                boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Checkbox
                                checked={selected.includes(item.id)}
                                onChange={() => handleToggle(item.id)}
                            />
                            <Avatar
                                src={item.image}
                                variant="square"
                                sx={{ width: 80, height: 80, mr: 2 }}
                            />
                            <Box flex={1}>
                                <Typography fontWeight={600}>{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Variant: {item.variant}
                                </Typography>
                            </Box>
                            <Box width={100} textAlign="right">
                                <Typography
                                    variant="body2"
                                    sx={{ textDecoration: "line-through", color: "#aaa" }}
                                >
                                    ₫{item.originalPrice?.toLocaleString()}
                                </Typography>
                                <Typography fontWeight="bold" color="primary">
                                    ₫{item.price.toLocaleString()}
                                </Typography>
                            </Box>
                            <Box width={100} textAlign="center">
                                <Stack direction="row" justifyContent="center" alignItems="center">
                                    <IconButton color="primary">
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography>{item.quantity}</Typography>
                                    <IconButton color="primary">
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </Box>
                            <Box width={100} textAlign="right">
                                <Typography color="primary" fontWeight="bold">
                                    ₫{(item.price * item.quantity).toLocaleString()}
                                </Typography>
                            </Box>
                            <Box width={100} textAlign="center">
                                <IconButton color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            ))}

            {/* Fixed Footer */}
            <AppBar
                position="fixed"
                color="inherit"
                sx={{ top: "auto", bottom: 0, boxShadow: "0 -2px 8px rgba(0,0,0,0.1)" }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Stack direction="row" alignItems="center">
                        <Checkbox
                            checked={selected.length === allItemIds.length && selected.length > 0}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        <Typography>Select All ({totalSelected})</Typography>
                        <Button sx={{ ml: 2 }} size="small">
                            Delete
                        </Button>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography fontWeight="bold">
                            Total:{" "}
                            <Typography
                                component="span"
                                fontWeight="bold"
                                color="primary"
                                sx={{ fontSize: 18 }}
                            >
                                ₫{totalAmount.toLocaleString()}
                            </Typography>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: 10, px: 4 }}
                            onClick={() => navigate("/checkout")}
                        >
                            Checkout
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Cart;
