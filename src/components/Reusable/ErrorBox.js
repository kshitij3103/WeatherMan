import * as React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorBox(props) {
  const isInfo = props.type === 'info';

  const accentColor = isInfo ? '#f5a922' : '#DC2941';
  const bgColor = isInfo
    ? 'rgba(245, 169, 34, 0.1)'   // Amber tint
    : 'rgba(220, 41, 65, 0.15)'; // Soft red tint

  return (
    <Box
      display={props.display || 'flex'}
      justifyContent={props.justifyContent || 'center'}
      alignItems={props.alignItems || 'center'}
      margin={props.margin || '1rem auto'}
      gap={props.gap || '10px'}
      flex={props.flex || 'auto'}
      width={props.width || 'auto'}
      sx={{
        padding: '1rem 1.5rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color: accentColor,
        border: `1px solid ${accentColor}`,
        borderRadius: '10px',
        backgroundColor: bgColor,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: '24px' }} />

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '13px', sm: '15px' },
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          color: '#E0E0E0',
        }}
      >
        {props.errorMessage || 'Internal error'}
      </Typography>
    </Box>
  );
}
