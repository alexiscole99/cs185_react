const Task = ({task, onDelete, onUpdate, showUpdate, setShowUpdate}) => {

    const onClick = () => {
        if(!showUpdate) {
            setShowUpdate()
            onUpdate(task.id)
        }
    }

    return(
        <div className="task">
            <div className="task-grid">
                <h3 className="task-item">
                    {task.title}
                </h3>
                <div >
                    <h4 className="task-button" style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}>
                        Delete
                    </h4>
                    <h4 className="task-button" style={{color: 'green', cursor: 'pointer'}}
                    onClick={onClick}>
                        Update
                    </h4>
                </div>
            </div>
            <p> {task.day} </p>
            {task.important && <p> important </p>}
            <a href={task.textInfor}>
                {task.textInfor}
            </a>
        </div>
    )
}
export default Task