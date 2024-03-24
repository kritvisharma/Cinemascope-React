
import React, {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL= "http://www.omdbapi.com?apikey=3bd870a9";

const movie1= 
{
    "Title": "The Iron Lady",
    "Year": "2011",
    "imdbID": "tt1007029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg"
}



const App =()=>{

    const[movies,setMovies]= useState([]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Iron');
    },[])

    return(
        <div className='app'>
            <h1>CinemaScope</h1>

            <div className='search'>
                <input placeholder='Search for Movies' value="Superman" onChange={()=>{}}></input>
                
                <img
                src ={SearchIcon}
                alt="search"
                onClick={()=>{}}/>
            </div>

            <div className='container'>
                <MovieCard movie1={movies[0]} />
            </div>

            
        </div>
    );
}

export default App;