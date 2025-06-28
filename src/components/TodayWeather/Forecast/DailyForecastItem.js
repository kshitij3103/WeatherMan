import { Box, Typography } from '@mui/material';
import React from 'react';
import { weatherIcon } from '../../../utilities/IconsUtils';

const DailyForecastItem = ({ item, data }) => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.2), rgba(20, 20, 20, 0.2))',
        borderRadius: '12px',
        boxShadow:
          '0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '0.5rem 0.25rem',
        width: '100%',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08)',
          transform: 'scale(1.02)',
        },
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '10px', sm: '12px' },
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.1,
          padding: '4px',
          fontFamily: 'Poppins',
        }}
      >
        {item.time}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
        }}
      >
        <Box
          component="img"
          alt="weather icon"
          src={weatherIcon(`${data.weather[0].icon}.png`)}
          sx={{
            width: { xs: '36px', sm: '42px' },
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '12px', sm: '14px' },
          color: '#ffffff',
          textTransform: 'uppercase',
          lineHeight: 1.2,
          fontFamily: 'Poppins',
        }}
      >
        {item.temperature}
      </Typography>
    </Box>
  );
};

export default DailyForecastItem;
