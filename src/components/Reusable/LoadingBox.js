import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBox(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem',
        borderRadius: '10px',
        backgroundColor: 'rgba(30,30,30,0.8)',
        color: '#E0E0E0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        width: props.width || '100%',
        minHeight: props.minHeight || '120px',
      }}
    >
      <CircularProgress sx={{ color: '#4CAF50' }} />
      {props.children}
    </Box>
  );
}
