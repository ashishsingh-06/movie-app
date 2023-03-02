import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchMovieOrSeriesDetail, getSelectedMovieOrSeries, removeSelectedMovieOrSeries } from "../../features/movies/movieSlice";
import Loader from "../Loader/Loader";
import "./MovieDetail.scss";

const MovieDetail = () => {

    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrSeries);
    const state = useSelector((state) => state.movies);

    useEffect(()=>{
        dispatch(fetchMovieOrSeriesDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrSeries());
        }
    },[dispatch, imdbID])

    return (
        <div className="movie-details">
            {
                state.loading ? (<Loader/>) : 
            <>
                <div className="section-left">
                    <div className="movie-title">{data.Title}</div>
                    <div className="movie-rating">
                        <span>
                            IMDB Rating <i className="fa fa-star"/> : {data.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <i className="fa fa-thumbs-up"/> : {data.imdbVotes}
                        </span>
                        <span>
                            Runtime <i className="fa fa-film"/> : {data.Runtime}
                        </span>
                        <span>
                            Year <i className="fa fa-calendar"/> : {data.Year}
                        </span>
                    </div>
                    <div className="movie-plot">
                        <p>{data.Plot}</p>
                    </div>
                    <div className="movie-info">
                        <div>
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Stars</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Generes</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </div>
                </div>
                <div className="section-right">
                    <img src={data.Poster} alt={data.Title} />
                </div>
            </>
            }
        </div>
    )
}

export default MovieDetail;