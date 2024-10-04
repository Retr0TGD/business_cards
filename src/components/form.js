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
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataLocal(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { name, role, phone, email, website } = formDataLocal;

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
        navigate('/business-card')
        console.log("Form submitted:", formDataLocal);
    };

    return (
            <Box component="form" onSubmit={handleSubmit} 
                sx={{
                    maxWidth: '400px',
                    mx: 'auto',
                    p: 2
                }}
            >
                <Typography variant="h5" mb={2} textAlign="center">Business Card Form</Typography>

                {/* Show error message */}
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formDataLocal.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={formDataLocal.role}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Phone (e.g. (+1) 123 456 789)"
                    name="phone"
                    value={formDataLocal.phone}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Website (e.g. linkedin.com/profile)"
                    name="website"
                    value={formDataLocal.website}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email (e.g. name@example.com)"
                    name="email"
                    value={formDataLocal.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Generate Business Card
                </Button>
            </Box>
    );
};

export default CardForm;