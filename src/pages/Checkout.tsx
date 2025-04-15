import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Stack,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Divider,
    Avatar,
    Paper,
    Select,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
    IconButton,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

type CartItem = {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
};

const sampleData: CartItem[] = [
    {
        id: "item1",
        title: "Stylish Women’s Handbag, Trendy Design",
        image: "https://via.placeholder.com/100",
        price: 295000,
        quantity: 1,
    },
];

const sampleAddresses = [
    "123 Main Street, HCMC",
    "456 Nguyen Street, Hanoi",
    "789 Le Lai, Da Nang",
];

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("cash");
    const [selectedItems, setSelectedItems] = useState<string[]>(sampleData.map(item => item.id)); // Auto-select all items

    const handleAddressChange = (event: SelectChangeEvent<string>) => {
        setSelectedAddress(event.target.value);
    };

    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    const totalAmount = sampleData
        .filter((item) => selectedItems.includes(item.id))
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleSubmit = () => {
        // Handle form submission
        if (!selectedAddress) {
            alert("Please select a shipping address.");
            return;
        }

        if (selectedItems.length === 0) {
            alert("Please select at least one item.");
            return;
        }

        // Navigate to the order confirmation page or process payment
        navigate("/order/confirmation");
    };

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ p: 2, width: '80%' }}>

                {/* Address Section */}
                <Box mb={1} p={2} bgcolor="#fefefe" boxShadow={1}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Select Shipping Address
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="address-select-label">Select Address</InputLabel>
                        <Select
                            labelId="address-select-label"
                            value={selectedAddress}
                            onChange={handleAddressChange}
                            label="Select Address"
                        >
                            {sampleAddresses.map((address, index) => (
                                <MenuItem key={index} value={address}>
                                    {address}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box mb={1} p={2} bgcolor="#fefefe" boxShadow={1}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Select Payment Method
                    </Typography>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Payment Method</FormLabel>
                        <RadioGroup
                            value={paymentMethod}
                            onChange={handlePaymentChange}
                            row
                        >
                            <FormControlLabel
                                value="cash"
                                control={<Radio />}
                                label="Cash on Delivery"
                            />
                            <FormControlLabel
                                value="vnpay"
                                control={<Radio />}
                                label="VNPay"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box mb={1} p={2} bgcolor="#fefefe" boxShadow={1}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Cart Summary
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Total</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sampleData.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Avatar
                                                    src={item.image}
                                                    variant="square"
                                                    sx={{ width: 60, height: 60 }}
                                                />
                                                <Typography>{item.title}</Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            ₫{item.price.toLocaleString()}
                                        </TableCell>
                                        <TableCell align="center">{item.quantity}</TableCell>
                                        <TableCell align="center">
                                            ₫{(item.price * item.quantity).toLocaleString()}
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton color="error">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box p={2} bgcolor="#fefefe" boxShadow={1}>
                    <Stack direction="row" justifyContent="space-between" p={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Total:{" "}
                            <Typography component="span" fontWeight="bold" color="primary">
                                ₫{totalAmount.toLocaleString()}
                            </Typography>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{ borderRadius: 10 }}
                        >
                            Proceed to Checkout
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default Checkout;
