import React from "react";
import { useSelector } from "react-redux";
import MoveList from "./MoveList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResult, movieName } = gpt;
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
    <div>
      {movieName.map((m, index) => (
        <MoveList key={m} title={m} movies={movieResult[index]} />
      ))}
    </div>
  </div>
  
  );
};

export default GptMovieSuggestion;
