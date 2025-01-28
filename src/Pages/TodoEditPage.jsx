import { useState } from "react"
import { FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateTodo } from "../Redux/todo.slice";
import toast from "react-hot-toast";

const TodoEditPage = () => {

    const { todoList } = useSelector(state => state.todo)   
    const { id } = useParams()
    const [editedTodo, setEditedTodo] = useState(todoList.find(item => item.id == id).title)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = () => {
        if (editedTodo == "") return toast.error("Task is required")
        const index = todoList.findIndex(item => item.id != id && item.title.toLowerCase() == editedTodo.toLowerCase())
        if (index > -1) return toast.error("Task already exists")
        dispatch(updateTodo({ id, title: editedTodo }))
        setEditedTodo("")
        setTimeout(() => {
            navigate("/todo-v2")
        }, 600);
        return toast.success("Task updated successfully")
    }

    return <div className="d-flex justify-content-center">
        <div className="w-50 mt-2">
            <form onSubmit={e => {
                e.preventDefault()
                handleUpdate()
            }} className="w-100">
                <div className="d-flex border border-2 border-success w-100">
                    <div className="p-2"><FaList /></div>
                    <input type="text" style={{ outline: 0}} className="border-0 w-100 p-2" placeholder="Edit the task..." name="todo" value={editedTodo} onChange={e => setEditedTodo(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success rounded-1 w-100 mt-2">Update Todo</button>
            </form>
        </div>
    </div>
}

export default TodoEditPage