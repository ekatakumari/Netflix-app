import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from './gptSlice'
import configSlice from "./configSlice"
const appStore = configureStore(
    {
  reducer: {
    user: useReducer,
    movies:movieReducer,
    gpt:gptReducer,
    config:configSlice,
  }
});
export default appStore;
