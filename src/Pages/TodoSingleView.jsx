import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

const TodoSingleView = () => {

    const { todoList } = useSelector(state => state.todo)
    const { id } = useParams()
    const [todo, setTodo] = useState(todoList.find(item => item.id == id))

    return <div className="d-flex justify-content-center mt-4">
        <div className="w-50 text-center"> 
            <div>Title: {todo?.title}</div>
            <div>Status: { todo?.completed ? "Completed" : "Pending" }</div>
            <div>CreatedAt: {todo?.createdAt}</div>
            <div>UpdatedAt: {todo?.updatedAt}</div>
        </div>
    </div>
}

export default TodoSingleView