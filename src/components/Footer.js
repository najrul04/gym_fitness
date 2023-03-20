import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#E6E6FA">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Made by Najrul</Typography>
  </Box>
);

export default Footer;