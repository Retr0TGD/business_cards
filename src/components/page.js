import React from "react";
import { Grid2, Typography, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QRCode from 'react-qr-code';

const ContactGrid = ({  contactInfo, qrValue }) => (
    <Grid2 container spacing={2} alignItems="center">
        {/* Contact Information */}
        <Grid2 item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={1}>
            <Typography>
                <PhoneIcon /> {contactInfo.phone}
            </Typography>
            <Typography>
                <LanguageIcon /> {contactInfo.website}
            </Typography>
            <Typography>
                <EmailIcon /> {contactInfo.email}
            </Typography>
            </Box>
        </Grid2>

        <Grid2 items xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography></Typography>
                {qrCodeData && (
                    <QRCodeSection data={qrCodeData} />
                )}
            </Box>
        </Grid2>

    </Grid2>
);

const QRCodeSection = ({ data }) => {
    return (
      <div>
        <QRCode value={data} />
      </div>
    );
};

export default ContactGrid