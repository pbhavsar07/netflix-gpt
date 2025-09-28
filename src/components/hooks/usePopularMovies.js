import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";
import { API_options } from "../../utils/constant";


const usePopularMovies = () => {
  // Fetch data from TMOB api and update store 
  const dispatch= useDispatch();
  const getUsePopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
    const json = await data.json();
    console.log("Popular: ",json.results);
    dispatch(addPopularMovies(json.results))
  }
  
useEffect(() => {
    getUsePopularMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


};
export default usePopularMovies;