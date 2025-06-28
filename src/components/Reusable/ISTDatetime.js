import { Typography } from '@mui/material';
import React from 'react';
import { getISTDatetime } from '../../utilities/DatetimeUtils';

const ISTDatetime = () => {
  const istFullDate = getISTDatetime();

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: 400,
        fontSize: { xs: '10px', sm: '12px' },
        color: '#E0E0E0', // consistent light text for dark theme
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins, sans-serif',
        letterSpacing: '0.5px',
        textAlign: 'right',
      }}
    >
      {istFullDate} IST
    </Typography>
  );
};

export default ISTDatetime;
