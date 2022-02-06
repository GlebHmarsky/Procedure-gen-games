import React from 'react';
import Root from '../components/routing';

import { Box, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/main';
import { Provider } from 'react-redux';
import appStore from './store';

const App = () => {
  return (
    <Provider store={appStore}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box height='100vh' width="100vw" bgcolor='common.white'>
            <Root />
          </Box>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
