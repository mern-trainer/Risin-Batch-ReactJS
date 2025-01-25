import { configureStore } from "@reduxjs/toolkit"; // named import
import { nameReducer } from "./name.slice";

export const store = configureStore({
    reducer: {
        name: nameReducer
    }
})