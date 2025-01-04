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

    return <div className="d-flex flex-column align-items-center mt-5">
        {singleTask && <SingleTaskView singleTask={singleTask} setSingleTask={setSingleTask} /> }
        <div className="w-50">
            <input className="p-2 w-100" type="text" onChange={(event) => setTodo(event.target.value)} value={todo} placeholder="Enter Task"/>
            <button onClick={handleTodo} className="w-100 btn btn-success rounded-0 mt-2">Add</button>
        </div>
        <h3 className='mt-3'>Pending Tasks ({todoList.filter(item => item.status == "pending").length})</h3>
        <div className='d-flex flex-column gap-2 mt-2 w-50'>
            {
                todoList.filter(item => item.status == "pending").map((item, index) => {
                    return <TaskList handleEdit={handleEdit} setEditedTask={setEditedTask} editedTask={editedTask} editTask={editTask} setEditTask={setEditTask} updateStatus={updateStatus} setSingleTask={setSingleTask} handleRemove={handleRemove} item={item} key={index}/>
                })
            }
        </div>
        <h3 className='mt-3'>Completed Tasks ({todoList.filter(item => item.status == "completed").length})</h3>
        <div className='d-flex flex-column gap-2 mt-2 w-50'>
            {
                todoList.filter(item => item.status == "completed").map((item, index) => {
                    return <TaskList handleEdit={handleEdit} setEditedTask={setEditedTask} editedTask={editedTask} editTask={editTask} setEditTask={setEditTask} updateStatus={updateStatus} setSingleTask={setSingleTask} handleRemove={handleRemove} item={item} key={index}/>
                })
            }
        </div>
    </div>
}

export default TodoList
