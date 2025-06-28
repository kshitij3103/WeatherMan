import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const DayWeatherDetails = ({ day, src, description }) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: { xs: '12px', sm: '20px', md: '32px' },
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '12px',
        paddingY: '8px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.07)',
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: { xs: 400, sm: 600 },
          fontSize: { xs: '12px', sm: '13px', md: '14px' },
          color: '#ffffff',
          lineHeight: 1,
          height: '31px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {day}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '31px',
        }}
      >
        <Box
          component="img"
          alt="weather"
          src={src}
          sx={{
            width: { xs: '24px', sm: '28px', md: '31px' },
            height: 'auto',
            marginRight: '6px',
            objectFit: 'contain',
          }}
        />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontSize: { xs: '12px', md: '14px' },
            color: 'rgba(255,255,255, 0.75)',
            lineHeight: 1,
            fontFamily: 'Roboto Condensed',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DayWeatherDetails;
