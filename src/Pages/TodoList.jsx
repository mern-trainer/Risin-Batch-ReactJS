import React, { useContext, useState } from 'react'
import TaskList from '../Components/TaskList';
import SingleTaskView from '../Components/SingleTaskView';
import { TodoContext } from '../Providers/TodoProvider';

// Context api

const TodoList = () => {

    const { handleTodo, todo, setTodo, todoList, singleTask, setSingleTask } = useContext(TodoContext)

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
                    return <TaskList item={item} key={index}/>
                })
            }
        </div>
        <h3 className='mt-3'>Completed Tasks ({todoList.filter(item => item.status == "completed").length})</h3>
        <div className='d-flex flex-column gap-2 mt-2 w-50'>
            {
                todoList.filter(item => item.status == "completed").map((item, index) => {
                    return <TaskList item={item} key={index}/>
                })
            }
        </div>
    </div>
}

export default TodoList
