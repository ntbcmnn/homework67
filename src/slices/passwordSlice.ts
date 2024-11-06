import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  input: string;
  isAccessGranted: boolean | null;
}

const initialState: PasswordState = {
  input: '',
  isAccessGranted: null,
};

const correctPin = '0000';

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeLastSymbol: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkPassword: (state) => {
      state.isAccessGranted = state.input === correctPin;
    },
  },
});

export const {addSymbol, removeLastSymbol, checkPassword} = passwordSlice.actions;
export default passwordSlice.reducer;