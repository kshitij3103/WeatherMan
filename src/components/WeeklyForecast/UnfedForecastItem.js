import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import WeeklyForecastItem from './WeeklyForecastItem';

const UnfedForecastItem = (props) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '12px',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        transition: '0.3s ease-in-out',
        '&:hover': {
          background: 'rgba(255,255,255,0.06)',
        },
      }}
    >
      {/* Top Section: Day & Icon */}
      <Grid
        item
        xs={12}
        sm={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '14px' },
            color: '#ffffff',
            marginBottom: '4px',
          }}
        >
          {props.day}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src={props.src}
            alt="weather"
            sx={{
              width: { xs: '24px', sm: '28px', md: '32px' },
              height: 'auto',
              marginRight: '6px',
              objectFit: 'contain',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              fontFamily: 'Roboto Condensed',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {props.value}
          </Typography>
        </Box>
      </Grid>

      {/* Middle Section: Temperature & Clouds */}
      <Grid
        item
        xs={6}
        sm={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <WeeklyForecastItem type="temperature" value={props.value} color="#4CAF50" />
        <WeeklyForecastItem type="clouds" value={props.value} color="#4CAF50" />
      </Grid>

      {/* Right Section: Wind & Humidity */}
      <Grid
        item
        xs={6}
        sm={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <WeeklyForecastItem type="wind" value={props.value} color="#4CAF50" />
        <WeeklyForecastItem type="humidity" value={props.value} color="#4CAF50" />
      </Grid>
    </Grid>
  );
};

export default UnfedForecastItem;
