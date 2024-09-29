import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = ({ name, role }) => (
    <Box>
        <Typography variant="h4" component="h1" fontWeight="bold">
            {name.toUpperCase()}
        </Typography>
        <Typography variant="subtitle1" component="h2">
            {role.toUpperCase()}
        </Typography>
    </Box>
);

export default Header;