import { useState } from "react"

const TaskList = ({ item, handleRemove, setSingleTask, updateStatus, setEditTask, editTask }) => {

    console.log(editTask);

    const [editedTask, setEditedTask] = useState(editTask?.title)

    return <div className="bg-dark p-3 text-light rounded">
        <h4>Title: {editTask?.id == item.id ? <input type="text" placeholder="Enter Task" onChange={(event) => setEditedTask(event.target.value)} value={editedTask}/> : item.title}</h4>
        <div className="d-flex gap-3">
            <button className="btn btn-danger w-100" onClick={() => handleRemove(item.id)}>Remove</button>
            <button className="btn btn-info w-100" onClick={() => setSingleTask(item)}>View</button>
            <button className={`btn ${item.status == "pending" ? "btn-warning" : "btn-success"} w-100`} onClick={() => updateStatus(item.id)}>{item.status.replace(item.status[0], item.status[0].toUpperCase())}</button>
            <button className="btn btn-primary w-100" onClick={() => setEditTask(item)}>Edit</button>
        </div>
    </div>
}

export default TaskList

/*
    const obj = null

    const h = obj?.place?.name // optional chaining


*/