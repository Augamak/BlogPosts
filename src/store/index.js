import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/articles';
import { getAllData } from './slices/thunks';

export const store = configureStore({
  reducer: {
    articlesStore: counterReducer,
},
})

getAllData(store)