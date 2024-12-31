const TaskList = ({ item }) => {
    console.log(item);
    return <div className="bg-dark p-2 text-light">
        <h4>Title: {item.title}</h4>
        <p>Status: {item.status}</p>
        <p>CraetedAt: {item.createdAt}</p>
        <p>UpdatedAt: {item.updatedAt}</p>
    </div>
}

export default TaskList