import { Box, Typography } from '@mui/material';
import React from 'react';

const TemperatureWeatherDetail = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        backgroundColor: '#1E1E1E',
        borderRadius: '8px',
        padding: '0.5rem',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '14px', sm: '16px', md: '18px' },
          color: '#ffffff',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '6px',
          fontFamily: 'Poppins',
        }}
      >
        {Math.round(props.temperature)} °C
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1,
          letterSpacing: { xs: '1px', sm: '0' },
          fontFamily: 'Roboto Condensed',
          textTransform: 'capitalize',
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};

export default TemperatureWeatherDetail;
