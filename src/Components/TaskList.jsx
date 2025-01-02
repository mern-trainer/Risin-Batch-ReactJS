const TaskList = ({ item, handleRemove, setSingleTask }) => {
    return <div className="bg-dark p-3 text-light rounded">
        <h4>Title: {item.title}</h4>
        <div className="d-flex gap-3">
            <button className="btn btn-danger w-100" onClick={() => handleRemove(item.id)}>Remove Task</button>
            <button className="btn btn-info w-100" onClick={() => setSingleTask(item)}>View Task</button>
        </div>
    </div>
}

export default TaskList