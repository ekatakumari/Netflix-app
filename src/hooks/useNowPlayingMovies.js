import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const getNowPlayingMovie = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTION
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(addNowPlayingMovie(data.results))
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };
    useEffect(() => {
      getNowPlayingMovie();
    }, []);
}
export default useNowPlayingMovies