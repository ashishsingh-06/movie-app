import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

const initialState = {
    loading: false,
    movies: {},
    series: {},
    selectedMovieOrShow: {}
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (movieText) => {
    return movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .then((res)=>res.data)
});

export const fetchSeries = createAsyncThunk('movie/fetchSeries', async (seriesText) => {
    // const seriesText = 'harry';
    return movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
        .then((res) => res.data);
});

export const fetchMovieOrSeriesDetail = createAsyncThunk('movie/fetchMovieOrSeriesDetail', async (imdbId) => {
    return movieApi.get(`?apiKey=${APIKey}&i=${imdbId}&Plot=full`)
        .then((res) => res.data);
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        removeSelectedMovieOrSeries: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.loading = false
            state.movies = {}
        })
        builder.addCase(fetchSeries.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(fetchSeries.fulfilled, (state, action) => {
            state.series = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchSeries.rejected, (state) => {
            state.loading = false;
            state.series = {}
        })
        builder.addCase(fetchMovieOrSeriesDetail.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(fetchMovieOrSeriesDetail.fulfilled, (state, action) => {
            state.selectedMovieOrShow = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchMovieOrSeriesDetail.rejected, (state) => {
            state.loading = false;
            state.selectedMovieOrShow = {}
        })
    }
}) 

export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series
export const getSelectedMovieOrSeries = (state) => state.movies.selectedMovieOrShow
export const {removeSelectedMovieOrSeries} = movieSlice.actions;