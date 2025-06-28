import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  switch (type) {
    case 'temperature':
      iconContent = <ThermostatIcon sx={{ fontSize: { xs: 15, sm: 16, md: 18 } }} />;
      break;
    case 'wind':
      iconContent = <AirIcon sx={{ fontSize: { xs: 15, sm: 16, md: 18 } }} />;
      break;
    case 'clouds':
      iconContent = <FilterDramaIcon sx={{ fontSize: { xs: 15, sm: 16, md: 18 } }} />;
      break;
    case 'humidity':
      iconContent = (
        <SvgIcon
          component={HumidityIcon}
          inheritViewBox
          sx={{ fontSize: { xs: 15, sm: 16, md: 18 } }}
        />
      );
      break;
    default:
      iconContent = null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px',
        color: 'rgba(255, 255, 255, 0.7)',
        gap: { xs: '3px', sm: '4px', md: '6px' },
        width: '100%',
        padding: '2px 0',
      }}
    >
      {iconContent}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '12px', sm: '13px' },
          fontWeight: { xs: 400, sm: 600 },
          color: 'white',
          fontFamily: 'Poppins',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
