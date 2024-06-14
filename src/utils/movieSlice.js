import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
     popularMovie:null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie:(state,action)=>{
        state.popularMovie=action.payload
    }
  },
});

export const { addNowPlayingMovie ,addTrailerVideo,addPopularMovie} = movieSlice.actions;
export default movieSlice.reducer;
