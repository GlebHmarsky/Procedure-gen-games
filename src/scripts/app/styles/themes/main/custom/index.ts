import { CustomTheme } from '../../types';

const customThemeProperties: CustomTheme = {
  decorations: {
    progressIndicators: {
      blue: '#619CF9',
      orange: '#FFB74E',
      pink: '#D78AFB',
    },
    linearProgressBar: {
      shadow: 'inset 0 0 0.08rem 0 rgb(46 39 125 / 30%)',
      fill: 'linear-gradient(271.7deg, #908ef0 0%, #6a68b2 100%)',
    },
    uikitShadows: {
      toggleButtonSelected: 'rgba(127, 127, 127, 0.5) 0px 0px 25px 0px',
    },
    uniqColors: {
      beige: '#f3f3f3',
      lightPurple: '#9795FF',
      grey: '#F3F3F4',
      lightBlue: '#7892C9',
    },
  },
};

export default customThemeProperties;
