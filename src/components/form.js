import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import QRCode from 'react-qr-code';

const CardForm = ({ onsubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        phone: '',
        website: '',
        email: ''
    });

    const [qrCodeData, setQrCodeData] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(''); // Reset error message on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, role, phone, email, website } = formData;

        if (!name || !role || !phone || !email || !website) {
            setError("fill out all fields.");
            return;
        }

        setQrCodeData(website);
        console.log("Form submitted:", formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} p={2} maxWidth="400px" mx="auto">
            <Typography variant="h5" mb={2} textAlign="center">Business Card Form</Typography>

            {/* Show error message */}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Phone (e.g. (+1) 111 111 111)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Website (e.g. linkedin.com/profile)"
                name="website"
                value={formData.website}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Email (e.g. name@example.com)"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Generate Business Card
            </Button>

            {qrCodeData && (
                <Box textAlign="center" mt={4}>
                    <Typography variant="h6" mb={2}>Your QR Code:</Typography>
                    <QRCodeSection data={qrCodeData} />
                </Box>
            )}
        </Box>
    );
};

const QRCodeSection = ({ data }) => {
    return (
        <div>
            <QRCode value={data} />
        </div>
    );
};

export default CardForm;