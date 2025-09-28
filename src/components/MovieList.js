import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(title, movies);
  return (
    <div className="px-6">
        <h1 className="text-3xl py-4 text-white"> {title} </h1>
        <div className="flex overflow-x-scroll">
            <div className="flex"> 
            {
                movies?.length > 0 ?
                    movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path}/>)  : <p> Movies not foun </p>
            }
              
            </div>
        </div>
    </div>
  )
}

export default MovieList