import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        createTodo: (state, action) => {
            state.todoList = [...state.todoList, action.payload]
        },
        updateTodo: (state, action) => {
            state.todoList = state.todoList.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice