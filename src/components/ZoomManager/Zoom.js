import { useState, useEffect } from 'react';
import './Zoom.css';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Header from './Header';
import UpdateTask from './UpdateTask';

const Zoom = () => {
    const [tasks, setTasks] = useState([])
    const [showFullSchedule, setShowFullSchedule] = useState(true)
    const [showUpdate, setShowUpdate] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        console.log(data)
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }

    const updateTask = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, important: !taskToToggle.important}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })
        const data = await res.json()
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, important: data.important} : task
            )
        )
    }

    return (
        <div className='zoom-container'>
            <Header showFullSchedule={showFullSchedule} 
            setShowFullSchedule={() => setShowFullSchedule(!showFullSchedule)}/>
            {!showFullSchedule && <AddTask onAdd={addTask}/>}
            {showFullSchedule && (tasks.length > 0 ? 
            <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} 
            showUpdate={showUpdate} setShowUpdate={() => setShowUpdate(!showUpdate)}/> :
            "No available Meetings")}
            {showUpdate && <UpdateTask onAdd={updateTask} 
            setShowUpdate={() => setShowUpdate(!showUpdate)}/>}
        </div>

    )
}

export default Zoom