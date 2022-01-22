import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/toggle-button-group/
 */

const defaultProps: ComponentsProps['MuiToggleButtonGroup'] = {};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiToggleButtonGroup']
> = () => ({
  root: {},
});

export default {
  defaultProps,
  styleOverride,
};
