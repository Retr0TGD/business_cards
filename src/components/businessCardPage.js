import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Grid2, Typography, Box, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';

const generateQRCode = (url) => {
    return <QRCode value={url} size={128} />
};

const BusinessCardPage = ({ formData }) => {
    
    const navigate = useNavigate();
    const { name, role, phone, email, website } = formData;

    if (!formData) {
        return (
            <div>
                <h2>No Data Provided</h2>
                <button onClick={() => navigate('/')}>Back to form</button>
            </div>
        );
    }

    return (
        <Box p={4}>
            <Typography variant="h4" align="center" gutterBottom>
                Company Name
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 600,
                    margin: 'auto'
                }}
            >
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 xs={12} md={6}>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" color='textSecondary' gutterBottom>
                                {role}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <PhoneIcon />{phone}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <MailIcon />{email}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <LanguageIcon />{website}
                            </Typography>
                        </Box>
                    </Grid2>
                    
                    {/* QR code */}
                    <Grid2 
                        xs={12} 
                        md={6} 
                        display="flex" 
                        flexDirection="column" 
                        justifyContent="center" 
                        alignItems="center"
                    >
                        <Typography variant="h6" gutterBottom>
                            Scan me
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
