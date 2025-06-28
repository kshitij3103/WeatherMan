import { Box } from '@mui/material';
import React from 'react';

const WeatherIconDetail = (props) => {
  return (
    <Box
      component="img"
      sx={{
        width: { xs: '50px', sm: '60px' },
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        padding: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        objectFit: 'contain',
      }}
      alt="weather icon"
      src={props.src}
    />
  );
};

export default WeatherIconDetail;
