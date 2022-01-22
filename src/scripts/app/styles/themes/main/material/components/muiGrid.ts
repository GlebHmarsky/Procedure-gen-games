import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/grid/
 */

const defaultProps: ComponentsProps['MuiGrid'] = {};

const styleOverride: MuiThemeComponentFunc<ComponentsOverrides['MuiGrid']> =
  () => ({
    container: {
      minWidth: 'min-content',
    },
  });

export default {
  defaultProps,
  styleOverride,
};
