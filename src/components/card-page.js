import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Grid2, Typography, Box, Paper, Button, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessLogo from './BusinessLogo';

const generateQRCode = (url) => {
    return <QRCode value={url} size={128} />;
};

const BusinessCardPage = ({ formData }) => {
    const navigate = useNavigate();
    const { name, role, phone, email, website, address } = formData;

    // Handle missing formData
    if (!name || !email || !website) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h6" color="error" gutterBottom>
                    No data provided or incomplete data!
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Back to Form
                </Button>
            </Box>
        );
    }

    return (
        <Box p={4}>
            <Grid2 container spacing={4} justifyContent="center">
            
                {/* Front of the Business Card */}
                <Grid2 item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 4,
                            maxWidth: 800,
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '90%',
                        }}
                    >
                        <Box textAlign="center" mb={4}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {name}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {role}
                            </Typography>
                        </Box>
                        <Grid2 container spacing={4} alignItems="center">
                            <Grid2 item xs={12} md={6}>
                                <Box>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <PhoneIcon sx={{ mr: 1 }} />
                                        <Link href={`tel:${phone}`} underline="none" color="inherit">
                                            {phone}
                                        </Link>
                                    </Box>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <LocationOnIcon sx={{ mr: 1 }} />
                                        <Link
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                                            target="_blank"
                                            rel="noopener"
                                            underline="none"
                                            color="inherit"
                                        >
                                            {address}
                                        </Link>
                                    </Box>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <MailIcon sx={{ mr: 1 }} />
                                        <Link href={`mailto:${email}`} underline="none" color="inherit">
                                            {email}
                                        </Link>
                                    </Box>
                                    <Box display="flex" alignItems="center" mb={1}>
                                        <LanguageIcon sx={{ mr: 1 }} />
                                        <Link fontWeight='bold' href={`https:///www.standardbank.co.mz/`} underline="none" color="inherit" target="_blank" rel="noopener">
                                            Standard Bank
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2
                                item
                                xs={12}
                                md={6}
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                                    {generateQRCode(website)}
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Grid2>

                {/* Back of the Business Card */}
                <Grid2 item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 4,
                            maxWidth: 800,
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90%',
                        }}
                    >
                        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                            <BusinessLogo />
                        </Box>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default BusinessCardPage;