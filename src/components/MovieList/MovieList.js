import React, { useMemo } from "react";
import { useSelector } from 'react-redux';
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.scss';

const MovieList = () => {

    let renderMovies = "";
    const movies = useSelector(getAllMovies)

    renderMovies = movies.Response === 'True' ? (
        <>
            {
                movies.Search.map((item,index) => {
                    return <MovieCard data={item} key={index}/>
                })
            }
        </>
    ) : (<div className="error"><h3></h3></div>)

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    )
}

export default MovieList;