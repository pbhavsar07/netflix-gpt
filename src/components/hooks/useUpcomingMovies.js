import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { API_options } from "../../utils/constant";


const useUpcomingMovies = () => {
  // Fetch data from TMOB api and update store 
  const dispatch= useDispatch();
  const getUpcomingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results))
  }
  
useEffect(() => {
    getUpcomingMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


};
export default useUpcomingMovies;