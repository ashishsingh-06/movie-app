import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: {},
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        addMovies(state, action){
            state.movies = action.payload;
        },
    },
}) 

export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies
export const {addMovies} = movieSlice.actions;