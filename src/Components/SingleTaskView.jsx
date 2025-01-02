const SingleTaskView = ({ singleTask, setSingleTask }) => {
    
    return <div className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 bg-dark vw-100 vh-100 bg-opacity-50">
        <div className="p-3 w-50 bg-light rounded">
            <p>Task: {singleTask.title}</p>
            <p>Status: {singleTask.status}</p>
            <p>CraetedAt: {singleTask.createdAt}</p>
            <p>UpdatedAt: {singleTask.updatedAt}</p>
            <button onClick={() => setSingleTask(null)} className="btn btn-danger">Close</button>
        </div>
    </div>
}

export default SingleTaskView