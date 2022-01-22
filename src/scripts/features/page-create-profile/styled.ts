import { Button } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  height: 100vh;
  position: relative;
`;
// export const RegisterInputContainer = styled(Box)<{ filled?: boolean }>(
//   ({ theme, filled = false }) => ({
//     border: `3px solid ${filled ? theme.palette.primary.main : theme.decorations?.uniqColors.grey
//       }`,
//     borderRadius: '2rem',
//     minHeight: '1.8rem',
//     height: '100%',
//     width: '100%',
//     fontSize: '20px',
//     padding: 0,
//     boxShadow: 'none',
//     textAlign: 'left',
//     transition: '0.3s ease',
//   })
// );

export const RegisterTextField = styled.input<{ filled?: boolean }>(
  ({ theme, filled = false }) => ({
    border: `3px solid ${
      filled ? theme.palette.primary.main : theme.decorations?.uniqColors.grey
    }`,
    borderRadius: '2rem',
    minHeight: '1.8rem',
    width: '100%',
    fontSize: '20px',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    [theme.breakpoints.down('xl')]: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    boxShadow: 'none',
    textAlign: 'left',
    transition: '0.3s ease',
    ':focus': {
      border: `3px solid ${theme.palette.primary.main}`,
      transition: '0.2s ease-out',
      outline: 'none',
    },
  })
);

export const StyledButton = styled(Button)<{ active?: boolean }>(
  ({ theme, active = true }) => ({
    outline: 'none',
    width: '100%',
    height: '2.4rem',
    [theme.breakpoints.down('xl')]: {
      height: '2rem',
    },
    background: active
      ? theme.palette.primary.main
      : theme.decorations!.uniqColors.grey,
    color: active ? 'white' : '#B1B1B1',

    boxShadow: 'none',
    borderRadius: `2rem`,
  })
);
