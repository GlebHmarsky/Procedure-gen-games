import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/circular-progress/
 */

const defaultProps: ComponentsProps['MuiCircularProgress'] = {
  variant: 'determinate',
};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiCircularProgress']
> = () => ({
  root: {
    //backgroundColor: muiTheme.palette.secondary.main,
  },
  circle: {
    //background: customTheme.colors?.linearProgressBar.fill,
    //boxShadow: customTheme.colors?.linearProgressBar.shadow,
  },
});

export default {
  defaultProps,
  styleOverride,
};
