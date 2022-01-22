import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/card/
 */

const defaultProps: ComponentsProps['MuiCard'] = {
  variant: 'elevation',
};

const styleOverride: MuiThemeComponentFunc<ComponentsOverrides['MuiCard']> = (
  muiTheme
) => ({
  root: {
    padding: muiTheme.spacing(1, 2),
    minWidth: 'min-content',
  },
});

export default {
  defaultProps,
  styleOverride,
};
