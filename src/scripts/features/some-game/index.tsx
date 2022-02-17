import { Grid } from '@mui/material';
import React from 'react';

/* TODO: Последовательность:
  Попробовать генерировать поле 
  Генерировать на поле фигуры
  Управлять фигурами
  Понимать кто где находится
  Задавать условия этого самого понимания
*/

export const SomeGame = () => {

  return (
    <Grid container flexDirection="column" alignContent="center" bgcolor="common.white">
      <Grid item sm={7} xs={11}>
        <Grid container>
          Hello this is some game
        </Grid>
      </Grid>
    </Grid>
  );
};
