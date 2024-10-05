import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const CardForm = ({ setFormData }) => {
    const [formDataLocal, setFormDataLocal] = useState({
        name: '',
        role: '',
        phone: '',
        website: '',
        email: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataLocal(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear the error for the specific field once the user starts typing
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    const validateField = (name, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const websiteRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/i;

        switch (name) {
            case 'email':
                if (!emailRegex.test(value)) return 'Please enter a valid email address.';
                break;
            case 'website':
                if (!websiteRegex.test(value)) return 'Please enter a valid website URL (e.g. https://linkedin.com/profile).';
                break;
            case 'name':
            case 'role':
            case 'phone':
            case 'address':
                if (!value) return `Please fill out the ${name} field.`;
                break;
            default:
                return null;
        }
        return null;
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formDataLocal).forEach((key) => {
            const error = validateField(key, formDataLocal[key]);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setFormData(formDataLocal);
        navigate('/business-card');
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

            {Object.keys(errors).length > 0 && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Please fill all the fields.
                </Alert>
            )}

            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formDataLocal.name}
                onChange={handleChange}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
                required
                autoFocus
            />
            <TextField
                fullWidth
                label="Role"
                name="role"
                value={formDataLocal.role}
                onChange={handleChange}
                margin="normal"
                error={!!errors.role}
                helperText={errors.role}
                required
            />
            <TextField
                fullWidth
                label="Phone Number (e.g. +258 123 456 789)"
                name="phone"
                value={formDataLocal.phone}
                onChange={handleChange}
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone}
                required
            />
            <TextField
                fullWidth
                label="Address"
                name="address"
                value={formDataLocal.address}
                onChange={handleChange}
                margin="normal"
                error={!!errors.address}
                helperText={errors.address}
                required
            />
            <TextField
                fullWidth
                label="Website (e.g. https://linkedin.com/profile)"
                name="website"
                value={formDataLocal.website}
                onChange={handleChange}
                margin="normal"
                error={!!errors.website}
                helperText={errors.website}
                required
            />
            <TextField
                fullWidth
                label="Email (e.g. name@example.com)"
                name="email"
                value={formDataLocal.email}
                onChange={handleChange}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
                required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Generate Business Card
            </Button>
        </Box>
    );
};

export default CardForm;