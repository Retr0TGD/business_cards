import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // In case the user wants to navigate back

const BusinessCardPage = ({ formData }) => {
    const navigate = useNavigate();

    if (!formData) {
        return (
            <Box mt={4} textAlign="center">
                <Typography variant="h6">No Data Provided</Typography>
                <Button variant="contained" onClick={() => navigate('/')}>Go Back</Button>
            </Box>
        );
    }

    return (
        <Box mt={4} p={2} border={1} borderRadius={2} maxWidth="400px" mx="auto">
            <Typography variant="h6" mb={1}>{formData.name}</Typography>
            <Typography variant="subtitle1" mb={1}>{formData.role}</Typography>
            <Typography variant="body1">Phone: {formData.phone}</Typography>
            <Typography variant="body1">Website: {formData.website}</Typography>
            <Typography variant="body1">Email: {formData.email}</Typography>
        </Box>
    );
};

export default BusinessCardPage;
