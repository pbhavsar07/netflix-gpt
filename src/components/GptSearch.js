import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10" >
        <img   
          src="/netflix-background.jpg"
          alt="logo"
        />
      </div>

        <GptSearchBar />
        <GptMovieSuggestions></GptMovieSuggestions>
        

    </div>
  )
};

export default GptSearch