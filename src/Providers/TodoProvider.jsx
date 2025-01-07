import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid"

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")
    const [singleTask, setSingleTask] = useState(null);
    const [editTask, setEditTask] = useState(null);
    const [editedTask, setEditedTask] = useState("")

    const handleTodo = () => {
        const task = todo.trim()
        if (task == "") {
            return toast.error("Task is required")
        }
        const index = todoList.findIndex((item) => item.title.toLowerCase() == task.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exists")
        }
        const dateTime = new Date().toISOString()
        const taskObj = {
            id: uuidv4(),
            title: task,
            status: "pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
    }

    const handleRemove = (id) => {
        const response = todoList.filter(todo => todo.id != id)
        setTodoList(response)
    }

    const handleEdit = (id) => {
        const response = todoList.map(todo => {
            if (todo.id == id) {
                const dateTime = new Date().toISOString()
                return {...todo, title: editedTask, updatedAt: dateTime}
            }
            return todo
        })
        setTodoList(response)
        setEditTask(null)
        setEditedTask("")
    }

    const updateStatus = (id) => {
        const response = todoList.map(todo => {
            if (todo.id == id) {
                const dateTime = new Date().toISOString()
                return {...todo, updatedAt: dateTime, status: todo.status == "pending" ? "completed" : "pending"}
            }
            return todo
        })
        setTodoList(response)
    }

    return <TodoContext.Provider value={{ todoList, todo, setTodo, singleTask, setSingleTask, editTask, setEditTask, editedTask, setEditedTask, setTodoList, handleTodo, handleRemove, handleEdit, updateStatus }}>
        {children}
    </TodoContext.Provider>
}