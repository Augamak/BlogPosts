import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk(
    'articlesStore/fetchArticle',
    async (_, {rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://api.slingacademy.com/v1/sample-data/blog-posts'
            );
            if (!response.ok) throw new Error("Request FAILED");
            const data = await response.json();
            return data.blogs;
        }   catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllData = (store) => {
    store.dispatch(fetchArticles())
}