import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TaskList from '../Components/TaskList';
import { v4 as uuidv4 } from "uuid"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([]);

    const handleTodo = () => {
        if (todo == "") {
            return toast.error("Task is required")
        }
        const dateTime = new Date().toISOString()
        const taskObj = {
            id: uuidv4(),
            title: todo,
            status: "pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        // if (todoList.includes(todo)) {
        //     return toast.error("Task already exists")
        // }
        setTodoList([...todoList, taskObj]);
    }

    return <div>
        <div>
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo} />
            <button onClick={handleTodo}>Add</button>
        </div>
        <div className='d-flex flex-column gap-2 mt-4'>
            {
                todoList.map((item, index) => {
                    return <TaskList item={item} key={index}/>
                })
            }
        </div>
    </div>
}

export default TodoList
