import React from 'react'
import Header from './Header'
import useNovPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from './hooks/usePopularMovies';
import useTopRatingMovies from './hooks/useTopRatingMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNovPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      {
        showGptSearch ? (<GptSearch></GptSearch>) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
      

    </div>
  )
}

export default Browse;
