import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from './thunks';

const initialState = {
    articles: [],
    status: 'idle',
    error: '',
};

export const counterSlice = createSlice({
  name: "articlesStore",
  initialState,
  reducers: {
    
    addNewArticle: (state, action) => {
      state.articles = [...state.articles, action.payload];
    },
  },

    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = "Succeeded";
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = "Failed";
                state.error = action.payload;
            })
    },
});

export const { addNewArticle } = counterSlice.actions;
export default counterSlice.reducer;

