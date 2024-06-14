
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
useNowPlayingMovies()
usePopularMovie()
  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
