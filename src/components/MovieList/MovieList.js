import React from "react";
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.scss';

const MovieList = () => {

    let renderMovies = "";
    let renderSeries = "";
    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllSeries)

    renderMovies = movies.Response === 'True' ? (
        <>
            {
                movies.Search.map((item,index) => {
                    return <MovieCard data={item} key={index}/>
                })
            }
        </>
    ) : (<div className="error"><h3>{movies.error}</h3></div>)

    renderSeries = series.Response === 'True' ? (
        <>
            {
                series.Search.map((item, index) => {
                    return <MovieCard data={item} key={index}/>
                })
            }
        </>
    ) : (<div className="error"><h3>{series.error}</h3></div>)

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="series-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderSeries}
                </div>
            </div>
        </div>
    )
}

export default MovieList;