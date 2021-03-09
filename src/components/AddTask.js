import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        // TODO: add error handling
        e.preventDefault()
        onAdd({title, day, important})
        setTitle('')
        setDay('')
        setImportant(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Meeting</label>
                <input type='text' placeholder='Add Task'
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Date</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important}
                onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save'/>
        </form>
    )
}
export default AddTask