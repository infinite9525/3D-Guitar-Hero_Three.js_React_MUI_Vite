import React from 'react';
import { Box, Stack } from '@mui/material';
import { bgcolor } from '@mui/system';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Stack component='div' sx={{ width: 1, height: 1, bgcolor: '#0d0d0d' }}>
      <Box
        component='div'
        sx={{ width: 1, height: '70px', minHeight: '70px', bgcolor: '#262626' }}
      ></Box>
      <Box component='div' sx={{ height: 1, width: 1, bgcolor: '#0d0d0d' }}>
        {children}
      </Box>
    </Stack>
  );
};

export default MainLayout;
