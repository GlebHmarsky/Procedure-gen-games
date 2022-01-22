import 'styled-components';
import { Theme as MuiTheme } from '@mui/material/styles';
import { CustomTheme } from './themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme, MuiTheme {}
}
