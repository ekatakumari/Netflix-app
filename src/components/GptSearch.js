import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
