import muiTheme from './material';
import customTheme from './custom';

import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  ...muiTheme,
  ...customTheme,
};

export default theme;
