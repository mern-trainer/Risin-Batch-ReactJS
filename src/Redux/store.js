import { configureStore } from "@reduxjs/toolkit"; // named import
import { nameReducer } from "./name.slice";
import { counterReducer } from "./counter.slice";
import { todoReducer } from "./todo.slice";

export const store = configureStore({
    reducer: {
        name: nameReducer,
        counter: counterReducer,
        todo: todoReducer
    }
})

// Redux => JavaScript library for managing application state.


// Principles => Action, Reducer, Store

// Action => an object that represents an action or event to be performed on the state.
// Reducer => a function that takes the current state and an action and returns a new state.
// Store {Object} => a central location for managing the state of an application.