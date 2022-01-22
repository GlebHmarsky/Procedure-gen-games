import { MuiThemeComponentFunc } from '../../../types';
import { ComponentsProps, ComponentsOverrides } from '@mui/material/styles';

/**
 * https://mui.com/api/toggle-button/
 */

const defaultProps: ComponentsProps['MuiToggleButton'] = {};

const styleOverride: MuiThemeComponentFunc<
  ComponentsOverrides['MuiToggleButton']
> = (muiTheme, customTheme) => ({
  root: {
    transitionProperty: 'color, background-color, border-color, box-shadow',
    textTransform: 'none',
    border: 'none',
    padding: muiTheme.spacing(0, 2),
    fontSize: '1rem',
    lineHeight: 1.5,
    '&.MuiToggleButton-primary': {
      color: muiTheme.palette.text.primary,
    },
    [`&&.Mui-selected.MuiToggleButton-primary,
      &&.MuiToggleButton-primary:hover`]: {
      backgroundColor: muiTheme.palette.primary.main,
      color: muiTheme.palette.common.white,
      borderRadius: muiTheme.shape.borderRadius,
      boxShadow: customTheme.decorations?.uikitShadows.toggleButtonSelected,
    },
  },
});

export default {
  defaultProps,
  styleOverride,
};
