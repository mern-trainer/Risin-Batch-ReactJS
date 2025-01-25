import { createSlice } from "@reduxjs/toolkit";// named import

const counterSlice = createSlice({  
    name: "counter",
    initialState: {
        value: 0,
        list: []
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload.number // a = a + b => a+=b => a = a + 1 => a+=1
        },
        decrement: (state, action) => {
            state.value -= action.payload.number
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice

