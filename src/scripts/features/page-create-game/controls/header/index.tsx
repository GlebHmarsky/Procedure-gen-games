import React from 'react';
import TensorLogo from 'assets/TLogo.svg';
import TensorSchool from 'assets/TENSOR SCHOOL.svg';
import { Grid } from '@mui/material';

const Header = () => {
  return (
    <Grid
      container
      py={8}
      flexDirection="row"
      wrap="nowrap"
      alignItems="center"
    >
      <img src={TensorLogo} alt="Tensor school" height={70} />
      <img src={TensorSchool} alt="Tensor school" height={40} />
    </Grid>
  );
};

export default Header;
