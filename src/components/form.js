import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CardForm = ({ onsubmit }) => {
    const [formData, setFormData] = useState({
        name: '', role: '', phone: '', 
        website: '', email: ''
    });

    const [qrCodeData, setQrCodeData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, role, phone, email, website } = formData;

        if(!name || !role || !phone || !email || !website) {
            alert("Fill out all fields");
            return;
        }

        setQrCodeData(website);

        console.log(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} p={2} maxWidth="400px" mx="auto">
            <Typography variant="h6" mb={2}>Fill in your details</Typography>
            Name
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />Role
            <TextField
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                margin="normal"
                required
            />Phone
            <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                required
            />Website
            <TextField
                fullWidth
                label="linkedin.com/profile"
                name="website"
                value={formData.website}
                onChange={handleChange}
                margin="normal"
                required
            />Email
            <TextField
                fullWidth
                label="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Generate Business Card
            </Button>

            {qrCodeData && (
                <QRCodeSection data={qrCodeData} />
            )}

        </Box>
    );
};

const QRCodeSection = ({ data }) => {
    return (
      <div>
        <QRCodeSection value={data} />
      </div>
    );
  };

export default CardForm;