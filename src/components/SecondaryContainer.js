import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store?.movies);
  console.log('Movies: ', movies);

  return (
    // render only if movies.nowplaying is ther 
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-60 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>

    </div>
    )


    
  )
}

export default SecondaryContainer