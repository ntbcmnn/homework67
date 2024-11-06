import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from '../slices/passwordSlice.ts';
import calculatorReducer from '../slices/calculatorSlice.ts';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
    calculator: calculatorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;