import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/typography/
 */

const defaultProps: ComponentsProps['MuiTypography'] = {};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiTypography']
> = () => ({
  noWrap: {
    //whiteSpace: 'nowrap',
  },
});

export default {
  defaultProps,
  styleOverride,
};
