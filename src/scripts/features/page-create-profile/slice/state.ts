import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFieldsProps, TCreateFieldProps } from '../types';

type TStatus = 'correct' | 'noncorret' | 'none';

const initialState: {
  fieldsStatus: TStatus;
  fields: TFieldsProps;
  isCheckboxChecked: boolean;
} = {
  fieldsStatus: 'none',
  isCheckboxChecked: false,
  fields: {
    firstName: { isCorrect: false, value: '' },
    middleName: { isCorrect: false, value: '' },
    lastName: { isCorrect: false, value: '' },
    
    
    email: { isCorrect: false, value: '' },
    phone: { isCorrect: false, value: '' },
    
  },
};

const taskState = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setAllFieldsCorrectState(state, action: PayloadAction<TStatus>) {
      return {
        ...state,
        fieldsStatus: action.payload,
      };
    },
    setCheckboxStatus(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isCheckboxChecked: action.payload,
      };
    },
    setFieldByKey(
      state,
      action: PayloadAction<{
        key: keyof TFieldsProps;
        answer: TCreateFieldProps;
      }>
    ) {
      const newFields = JSON.parse(JSON.stringify(state.fields));
      newFields[action.payload.key] = action.payload.answer;
      return {
        ...state,
        fields: newFields,
      };
    },
  },
});

export const { setAllFieldsCorrectState, setCheckboxStatus, setFieldByKey } =
  taskState.actions;
export default taskState.reducer;
