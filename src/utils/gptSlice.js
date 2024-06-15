import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const{movieName,movieResult}=action.payload
            state.movieName=movieName
            state.movieResult=movieResult
        }
    }
})
export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer