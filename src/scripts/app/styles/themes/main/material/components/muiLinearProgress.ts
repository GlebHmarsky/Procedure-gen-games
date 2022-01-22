import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/linear-progress/
 */

const defaultProps: ComponentsProps['MuiLinearProgress'] = {
  variant: 'determinate',
};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiLinearProgress']
> = (muiTheme, customTheme) => ({
  root: {
    height: '0.5rem',
    borderRadius: '0.8rem',
    boxShadow: customTheme.decorations?.linearProgressBar.shadow,
    backgroundColor: muiTheme.palette.secondary.main,
  },
  bar: {
    background: customTheme.decorations?.linearProgressBar.fill,
  },
});

export default {
  defaultProps,
  styleOverride,
};
