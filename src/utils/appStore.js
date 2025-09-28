import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import  configReducer from './configSlice';

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            // once user is added, action.payload is returned and initialState will now be action.payload
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer
        }   
    })

export default appStore;
