import { configureStore } from "@reduxjs/toolkit"; // named import
import { nameReducer } from "./name.slice";
import { counterReducer } from "./counter.slice";

export const store = configureStore({
    reducer: {
        name: nameReducer,
        counter: counterReducer
    }
})