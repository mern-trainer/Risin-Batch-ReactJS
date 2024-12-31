import React, { useState } from 'react'

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([]);

    const handleTodo = () => {
        
    }

    return <div>
        <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo} />
        <button onClick={handleTodo}>Add</button>
    </div>
}

export default TodoList
