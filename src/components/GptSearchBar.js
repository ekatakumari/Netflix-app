import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openAI";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch=useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB=async(movie)=>{
    const searchData=await fetch (`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTION)
    const json= await searchData.json()
  return json.results
}
  const handleGptSearchClick = async () => {
    // const query =
    //   "Act as a movie Recomendation System and suggest some movie for the query" +
    //   searchText.current.value +
    //   "only give me naves of 5 movies, comma seperated like the example result given ahead. Example result : Gadar,Sholay, Don, Golmal,Koi mil gaya";
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(chatCompletion);
    let movie=['Gadar','padosan']
    const data=movie.map((m)=>searchMovieTMDB(m))
    const tmdbResult= await Promise.all(data)
    dispatch(addGptMovieResult({
       movieName: movie, movieResult:tmdbResult
    }))
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSeachPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
