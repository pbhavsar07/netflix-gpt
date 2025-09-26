import React from 'react'
import Header from './Header'
import useNovPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNovPlayingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;
