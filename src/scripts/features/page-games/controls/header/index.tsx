import React from 'react';
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
      {'А тут мы будем показывать уже готовые игра чтобы вы могли их посмотреть чутоку подробнее ;)'}
    </Grid>
  );
};

export default Header;
