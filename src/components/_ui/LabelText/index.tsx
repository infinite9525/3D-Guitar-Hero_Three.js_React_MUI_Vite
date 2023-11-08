import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  label: string;
  value?: string;
};

const LabelText: React.FC<Props> = ({ label, value }) => {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          color: '#555555',
          marginRight: '20px',
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          color: '#000000',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default LabelText;
