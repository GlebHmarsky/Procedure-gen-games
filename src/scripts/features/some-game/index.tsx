import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

/* TODO: Последовательность:
  Попробовать генерировать поле 
  Генерировать на поле фигуры
  Управлять фигурами
  Понимать кто где находится
  Задавать условия этого самого понимания
*/

export const SomeGame = () => {
  const [rows] = useState(3)
  const [columns] = useState(3)
  
  return (
    <Grid container flexDirection="column" alignContent="center" bgcolor="common.white">
      <Grid item sm={7} xs={11}>
        Hello this is some game
        <Grid container>


          <Grid container direction='column' spacing={0}>
            {Array(rows).fill('').map((_, ri) => {
              console.log(`rIndex ${ri}`)
              return (
                <Grid key={ri} container direction='row' spacing={0}>
                  {Array(columns).fill('').map((_, ci) => {
                    return (
                      <Box key={ci}
                        sx={{
                          width: '10rem',
                          height: '10rem',
                          border: `3px solid red`,
                          margin: '0.5rem',
                          color: 'black',
                          fontSize: '3rem',
                        }}
                      >
                        {`${ci + ri}`}

                      </Box>)
                  })}

                </Grid>

              )
            })}


          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
