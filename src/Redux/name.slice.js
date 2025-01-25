import { createSlice } from "@reduxjs/toolkit";// named import

const nameSlice = createSlice({  
    name: "name",
    initialState: {
        name: "John Doe"
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { changeName } = nameSlice.actions
export const { reducer: nameReducer } = nameSlice

