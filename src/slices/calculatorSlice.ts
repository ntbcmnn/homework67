import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  display: string;
}

const initialState: CalculatorState = {
  display: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      state.display += action.payload;
    },

    removeLastSymbol: (state) => {
      state.display = state.display.slice(0, -1);
    },

    clearCalculator: (state) => {
      state.display = '';
    },

    calculateResult: (state) => {
      try {
        state.display = eval(state.display).toString();
      } catch (error) {
        state.display = '';
        console.error(error);
      }
    },
  },
});

export const {addSymbol, removeLastSymbol, clearCalculator, calculateResult} = calculatorSlice.actions;
export default calculatorSlice.reducer;