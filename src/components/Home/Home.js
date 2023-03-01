import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import {useDispatch} from 'react-redux';
import { addMovies, fetchMovies, fetchSeries } from "../../features/movies/movieSlice";
import './Home.scss';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovies())
        dispatch(fetchSeries())
    },[dispatch]);

    return (
        <div className="home">
            <div className="banner-image">
                <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="banner"/>
            </div>
            <MovieList></MovieList>
        </div>
    )
}

export default Home;