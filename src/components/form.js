import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const CardForm = ({ setFormData }) => {
    const [formDataLocal, setFormDataLocal] = useState({
        name: '',
        role: '',
        phone: '',
        website: '',
        email: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { name, role, phone, email, website } = formData;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const websiteRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/i;

        if (!name || !role || !phone || !email || !website) {
            return "Please fill out all fields.";
        }

        if (!emailRegex.test(email)) {
            return "Please enter a valid email address.";
        }

        if (!websiteRegex.test(website)) {
            return "Please enter a valid website URL (e.g. https://linkedin.com/profile).";
        }

        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setError('');
        setFormData(formDataLocal);
        console.log("Form submitted:", formDataLocal);
    };

    return (
        <>
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
                    aria-label="Name"
                />
                <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    margin="normal"
                    required
                    aria-label="Role"
                />
                <TextField
                    fullWidth
                    label="Phone (e.g. (+1) 123 456 789)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                    required
                    aria-label="Phone"
                />
                <TextField
                    fullWidth
                    label="Website (e.g. linkedin.com/profile)"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    margin="normal"
                    required
                    aria-label="Website"
                />
                <TextField
                    fullWidth
                    label="Email (e.g. name@example.com)"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    aria-label="Email"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Generate Business Card
                </Button>
            </Box>

            {isSubmitted && <BusinessCard contactInfo={formData} />}
        </>
    );
};

export default CardForm;