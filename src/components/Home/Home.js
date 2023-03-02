import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies, fetchSeries } from "../../features/movies/movieSlice";
import './Home.scss';
import Loader from "../Loader/Loader";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => state.movies);

    useEffect(()=>{
        dispatch(fetchMovies('Harry'))
        dispatch(fetchSeries('All'))
    },[dispatch]);

    const submitSearchHandler = (e) => {
        e.preventDefault();
        if(searchTerm === "") {
            alert('Please Enter Search Term...');
        } else {
            dispatch(fetchMovies(searchTerm))
            dispatch(fetchSeries(searchTerm))
            setSearchTerm('');
        }
    }

    return (
        <div className="home">
            <div className="banner-image">
                <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="banner"/>
                <div className="search-bar">
                    <form onSubmit={submitSearchHandler}>
                        <input type="text" value={searchTerm} placeholder="Search movies or series..." onChange={(e)=>setSearchTerm(e.target.value)} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            {
                state.loading ? <Loader/> : <MovieList/>
            }
        </div>
    )
}

export default Home;