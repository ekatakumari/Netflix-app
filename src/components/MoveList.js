import React from "react";
import MovieCard from "./MovieCard";

const MoveList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-4xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-x-hidden">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;  // Safari and Chrome
          }
        `}
      </style>
    </div>
  );
};

export default MoveList;
