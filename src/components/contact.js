import React from "react";
import { Grid2, Typography, Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import QRCode from 'react-qr-code';

const ContactGrid = ({  contactInfo }) => (
    <Grid2 container spacing={2} alignItems="center">
        <Grid2 item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={1}>
            <Typography>
                <LocalPhoneIcon /> {contactInfo.phone}
            </Typography>
            <Typography>
                <PublicIcon /> {contactInfo.website}
            </Typography>
            <Typography>
                <EmailIcon /> {contactInfo.email}
            </Typography>
            </Box>
        </Grid2>

        <Grid2 items xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="body1" mb={1}>Scan to visit website</Typography>
                <QRCode value={contactInfo.website} size={128} />
            </Box>
        </Grid2>
    </Grid2>
);

export default ContactGrid;