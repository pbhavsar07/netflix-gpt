import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { API_options } from "../../utils/constant";


const useTopRatingMovies = () => {
  // Fetch data from TMOB api and update store 
  const dispatch= useDispatch();
  const getTopRatingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  }
  
useEffect(() => {
    getTopRatingMovies();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


};
export default useTopRatingMovies;