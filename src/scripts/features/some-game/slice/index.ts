import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TState = {
  rowCount: number,
  columnCount: number,
  turnFirstPlayer: boolean,

  playData: Array<Array<number>>,
}

const initialState: TState =
{
  rowCount: 3,
  columnCount: 3,

  playData: Array<Array<number>>(3).map(() => Array(3).fill(0)),
  turnFirstPlayer: true
};

const taskSlice = createSlice({
  name: 'games/some-game',
  initialState: initialState,
  reducers: {
    switchTurn: (state) => {
      state.turnFirstPlayer = !state.turnFirstPlayer
    },

    addPlayData: (state, action: PayloadAction<{ i: number, j: number }>) => {
      const { i, j } = action.payload
      if (state.playData[i][j] === 0) {
        state.playData[i][j] = state.turnFirstPlayer ? 1 : 2
      }
    }
  },

});

export const { switchTurn, addPlayData } = taskSlice.actions;

export default taskSlice.reducer;
