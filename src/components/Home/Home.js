import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {useDispatch} from 'react-redux';
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch();
    const movieText = 'harry';

    useEffect(()=>{
        const fetchMovies = async() => {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>{
                console.log("error ", err);
            });
            console.log('res',response);

            dispatch(addMovies(response.data));
        }
        fetchMovies()
    },[]);

    return (
        <div className="home">
            <div className="banner-image"></div>
            <MovieList></MovieList>
        </div>
    )
}

export default Home;