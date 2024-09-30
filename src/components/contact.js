import React from "react";
import { Grid2, Typography, Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import QRCode from 'react-qr-code';

const ContactGrid = ({ contactInfo }) => (
    <Grid2 container spacing={2} alignItems="center">
        <Grid2 item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="body1">
                    <LocalPhoneIcon sx={{ mr: 1 }} />
                    {contactInfo.phone || 'N/A'}
                </Typography>
                <Typography variant="body1">
                    <PublicIcon sx={{ mr: 1 }} />
                    {contactInfo.website || 'N/A'}
                </Typography>
                <Typography variant="body1">
                    <EmailIcon sx={{ mr: 1 }} />
                    {contactInfo.email || 'N/A'}
                </Typography>
            </Box>
        </Grid2>
        <Grid2 item xs={12} md={6}>
            {contactInfo.website ? (
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography variant="body1" mb={1}>Scan to visit website</Typography>
                    <QRCode value={contactInfo.website} size={128} />
                </Box>
            ) : (
                <Typography variant="body1" textAlign="center">No website available</Typography>
            )}
        </Grid2>
    </Grid2>
);

export default ContactGrid;