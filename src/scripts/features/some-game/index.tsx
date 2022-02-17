import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/scripts/app/rootReducer';
import { addPlayData, switchTurn } from './slice';

/* TODO: Последовательность:
  Попробовать генерировать поле 
  Генерировать на поле фигуры
  Управлять фигурами
  Понимать кто где находится
  Задавать условия этого самого понимания
*/

export const SomeGame = () => {
  const dispatch = useDispatch()
  const { columnCount, playData, rowCount } = useSelector((state: RootState) => state.someGame)


  const clickHandler = (ri: number, ci: number) => {
    if (playData[ri][ci] === 0) {
    dispatch(addPlayData({ i: ri, j: ci }))
    dispatch(switchTurn())
    }
  }
  const blockInfo = (ri: number, ci: number) => {

    switch (playData[ri][ci]) {
      case 1:
        return 'X'
      case 2:
        return 'O'

      default:
        return null
    }
  }

  return (
    <Grid container flexDirection="column" alignContent="center" bgcolor="common.white">
      <Grid item sm={7} xs={11}>
        Hello this is some game
        <Grid container>


          <Grid container direction='column' spacing={0}>
            {Array(rowCount).fill('').map((_, ri) => {
              console.log(`rIndex ${ri}`)
              return (
                <Grid key={ri} container direction='row' spacing={0}>
                  {Array(columnCount).fill('').map((_, ci) => {
                    return (
                      <Button key={ci} onClick={() => { clickHandler(ri, ci) }}>
                        <Box
                          sx={{
                            width: '10rem',
                            height: '10rem',
                            border: `3px solid red`,
                            margin: '0.5rem',
                            color: 'black',
                            fontSize: '3rem',
                          }}

                        >
                          {blockInfo(ri, ci)}
                        </Box>
                      </Button>
                    )
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
function RootState(state: any, RootState: any): {} {
  throw new Error('Function not implemented.');
}

