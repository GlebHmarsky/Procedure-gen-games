import { Theme as MuiTheme } from '@mui/material/styles';

type typesRelatedDictionary = {
  [type: string]: {
    [key: string]: string;
  };
};

export type CustomDecorations = {
  progressIndicators: {
    blue: string;
    orange: string;
    pink: string;
  };
  linearProgressBar: {
    shadow: string;
    fill: string;
  };
  uikitShadows: {
    toggleButtonSelected: string;
  };
  uniqColors: {
    beige: string;
    lightPurple: string;
    grey: string;
    lightBlue: string;
  };
} & typesRelatedDictionary;

export interface CustomTheme {
  decorations?: CustomDecorations;
}

export type MuiThemeComponentFunc<T> = (
  muiTheme: MuiTheme,
  customTheme: CustomTheme
) => T;
