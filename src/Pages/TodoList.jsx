import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TaskList from '../Components/TaskList';
import { v4 as uuidv4 } from "uuid"
import SingleTaskView from '../Components/SingleTaskView';

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([]);
    const [singleTask, setSingleTask] = useState(null);
    const [editTask, setEditTask] = useState(null);

    console.log(editTask);

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
        setTodoList([taskObj, ...todoList])
        setTodo("")
    }

    const handleRemove = (id) => {
        const response = todoList.filter(todo => todo.id != id)
        setTodoList(response)
    }

    const updateStatus = (id) => {
        const response = todoList.map(todo => {
            if (todo.id == id) {
                return {...todo, status: todo.status == "pending" ? "completed" : "pending"}
            }
            return todo
        })
        setTodoList(response)
    }

    return <div className="d-flex flex-column align-items-center mt-5">
        {/* {singleTask ? <SingleTaskView /> : null } */}
        {singleTask && <SingleTaskView singleTask={singleTask} setSingleTask={setSingleTask} /> }
        <div className="w-50">
            <input className="p-2 w-100" type="text" onChange={(event) => setTodo(event.target.value)} value={todo} placeholder="Enter Task"/>
            <button onClick={handleTodo} className="w-100 btn btn-success rounded-0 mt-2">Add</button>
        </div>
        <div className='d-flex flex-column gap-2 mt-4 w-50'>
            {
                todoList.map((item, index) => {
                    return <TaskList editTask={editTask} setEditTask={setEditTask} updateStatus={updateStatus} setSingleTask={setSingleTask} handleRemove={handleRemove} item={item} key={index}/>
                })
            }
        </div>
    </div>
}

export default TodoList
