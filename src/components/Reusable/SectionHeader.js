import { Typography } from '@mui/material';
import React from 'react';

const SectionHeader = ({ title, mb }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: '14px', sm: '18px', md: '20px' },
        color: '#E0E0E0', // Light gray text for dark background
        fontWeight: 600,
        lineHeight: 1.2,
        textAlign: 'center',
        fontFamily: '"Poppins", "Roboto Condensed", sans-serif',
        marginBottom: mb || '1.2rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
