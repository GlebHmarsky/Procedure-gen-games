import {
  ThemeOptions,
  Theme as MuiTheme,
  createTheme,
} from '@mui/material/styles';

import CustomTheme from '../custom';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

import MuiCardComponent from './components/muiCard';
import MuiIconButtonComponent from './components/muiIconButton';
import MuiLinearProgressComponent from './components/muiLinearProgress';
import MuiCircularProgressComponent from './components/muiCircularProgress';
import MuiTypographyComponent from './components/muiTypography';
import MuiGridComponent from './components/muiGrid';
import MuiToggleButtonGroupComponent from './components/muiToggleButtonGroup';
import MuiToggleButtonComponent from './components/muiToggleButton';

const muiThemeProperties: ThemeOptions = {
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
  palette,
  shadows,
  typography,
};

const muiThemeWithoutOverrides: MuiTheme = createTheme({
  ...muiThemeProperties,
});

const muiTheme: MuiTheme = createTheme({
  ...muiThemeProperties,
  components: {
    MuiCard: {
      defaultProps: MuiCardComponent.defaultProps,
      styleOverrides: MuiCardComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiIconButton: {
      defaultProps: MuiIconButtonComponent.defaultProps,
      styleOverrides: MuiIconButtonComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiLinearProgress: {
      defaultProps: MuiLinearProgressComponent.defaultProps,
      styleOverrides: MuiLinearProgressComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiCircularProgress: {
      defaultProps: MuiCircularProgressComponent.defaultProps,
      styleOverrides: MuiCircularProgressComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiTypography: {
      defaultProps: MuiTypographyComponent.defaultProps,
      styleOverrides: MuiTypographyComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiGrid: {
      defaultProps: MuiGridComponent.defaultProps,
      styleOverrides: MuiGridComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiToggleButtonGroup: {
      defaultProps: MuiToggleButtonGroupComponent.defaultProps,
      styleOverrides: MuiToggleButtonGroupComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
    MuiToggleButton: {
      defaultProps: MuiToggleButtonComponent.defaultProps,
      styleOverrides: MuiToggleButtonComponent.styleOverride(
        muiThemeWithoutOverrides,
        CustomTheme
      ),
    },
  },
});

export default muiTheme;
