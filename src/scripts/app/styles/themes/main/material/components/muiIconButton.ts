import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/icon-button/
 */

const defaultProps: ComponentsProps['MuiIconButton'] = {
  disableRipple: true,
};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiIconButton']
> = () => ({
  root: {
    padding: 0,
  },
});

export default {
  defaultProps,
  styleOverride,
};
