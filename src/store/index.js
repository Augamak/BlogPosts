import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/articles';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
},
})
