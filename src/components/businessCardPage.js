import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Grid2, Typography, Box, Paper, Button, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';

const generateQRCode = (url) => {
    return <QRCode value={url} size={128} />;
};

const BusinessCardPage = ({ formData }) => {
    const navigate = useNavigate();
    const { name, role, phone, email, website } = formData;

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
            <Typography variant="h4" align="center" gutterBottom>
                {/* Static Company Name or make dynamic */}
                Company Name
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 600,
                    margin: 'auto',
                }}
            >
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 xs={12} md={6}>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                {role}
                            </Typography>
                            <Box display="flex" alignItems="center" mb={1}>
                                <PhoneIcon sx={{ mr: 1 }} />
                                <Link href={`tel:${phone}`} underline="none" color="inherit">
                                    {phone}
                                </Link>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <MailIcon sx={{ mr: 1 }} />
                                <Link href={`mailto:${email}`} underline="none" color="inherit">
                                    Contact Me
                                </Link>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <LanguageIcon sx={{ mr: 1 }} />
                                <Link href={website} target="_blank" rel="noopener" underline="none" color="inherit">
                                    Profile
                                </Link>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2
                        xs={12}
                        md={6}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6" gutterBottom>
                            scan me
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                            {generateQRCode(website)}
                        </Box>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
};

export default BusinessCardPage;
