import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovie=()=>{
    const dispatch=useDispatch()
    const getPopularMovie = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTION
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(addPopularMovie(data.results))
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };
    useEffect(() => {
        getPopularMovie();
    }, []);
}
export default usePopularMovie