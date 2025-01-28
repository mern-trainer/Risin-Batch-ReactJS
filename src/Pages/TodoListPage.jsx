import { useState } from "react"
import toast from "react-hot-toast"
import { FaEye, FaList, FaPen, FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { createTodo, deleteTodo } from "../Redux/todo.slice"
import { useNavigate } from "react-router"

const TodoListPage = () => {

    const { todoList } = useSelector(state => state.todo)
    const [todo, setTodo] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleTodo = () => {
        if (todo == "") {
            return toast.error("Task is required")
        }
        const index = todoList.findIndex(item => item.title.toLowerCase() == todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exists")
        }
        const obj = {
            id: uuidv4(),
            title: todo,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            completed: false
        }
        dispatch(createTodo(obj))
        setTodo("")
        return toast.success("Task created successfully")
    }

    const handleDelete = id => {
        dispatch(deleteTodo({ id }))
        return toast.success("Task deleted successfully")
    }

    return <div className="d-flex flex-column align-items-center mt-4">
        <form onSubmit={e => {
            e.preventDefault()
            handleTodo()
        }} className="w-50">
            <div className="d-flex border border-2 border-success w-100">
                <div className="p-2"><FaList /></div>
                <input type="text" style={{ outline: 0}} className="border-0 w-100 p-2" placeholder="Enter the task..." name="todo" value={todo} onChange={e => setTodo(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success rounded-1 w-100 mt-2">Create Todo</button>
        </form>
        <div className="mt-2 d-flex flex-column gap-2 w-50">
            {
                todoList.map(item => {
                    return <div key={item.id} className="p-2 border border-2 border-success rounded-1 d-flex flex-column gap-2">
                        <div className="w-100">
                            {item.title}
                        </div>
                        <div className="d-flex mt-2 w-100 d-flex justify-content-around gap-2">
                            <button className="btn w-100 btn-danger" onClick={() => handleDelete(item.id)}><FaTrash /> Delete</button>
                            <button className="btn w-100 btn-primary" onClick={() => navigate(`/todo-v2/edit/${item.id}`)}><FaPen /> Edit</button>
                            <button className="btn w-100 btn-info" onClick={() => navigate(`/todo-v2/view/${item.id}`)}><FaEye /> View</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoListPage