import React, { useState } from 'react';
import { Box } from '@mui/material';
import CardForm from './components/form';
import Header from './components/header';
import ContactGrid from './components/contact';
import Company from './components/company';

const BusinessCard = () => {
  const [cardData, setCardData] = useState(null);

  const handleFormSubmit = (data) => {
    setCardData(data);
  };

  return (
    <Box>
      {!cardData ? (
        <CardForm onSubmit={handleFormSubmit} />
      ) : (
        <Box p={4}>
          <Header name={cardData.name} role={cardData.role} />
          <ContactGrid 
            contactInfo={{
              phone: cardData.phone,
              website: cardData.website,
              email: cardData.email
            }}
          />
          <Company companyName="Wardiere Inc." address="123 Business St, City, Country" />
        </Box>
      )}
    </Box>
  );
};

export default BusinessCard;