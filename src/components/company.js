import React from 'react';
import { Typography, Box } from '@mui/material';

const Company = ({ companyName, address }) => (
  <Box mt={4} textAlign="left">
    <Typography variant="h6" fontWeight="bold" color="#2A65BA">
      {companyName}
    </Typography>
    <Typography variant="body2">{address}</Typography>
  </Box>
);

export default Company;