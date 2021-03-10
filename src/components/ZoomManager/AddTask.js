import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)
    const [textInfor, setTextInfor] =useState('')

    const onSubmit = (e) => {
        // TODO: add error handling
        e.preventDefault()

        // error handling
        if(!title) {
            alert("Meeting must have a title!")
            return
        }
        if(title.length > 30) {
            alert("Meeting title must be shorter than 30 characters!")
            return
        }
        var today = new Date().getDate()
        console.log(Number(day.substr(8,2)))
        if(Number(day.substr(8,2)) <= today) {
            alert("Meeting date must after today!")
            return
        }
        if(!(textInfor.includes("zoom"))) {
            alert("Invalid zoom link!")
            return
        }

        onAdd({title, day, important, textInfor})
        setTitle('')
        setDay('')
        setImportant(false)
        setTextInfor('')
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
                <input type='datetime-local' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div>
                <label>Zoom Link</label>
                <input type='url' value={textInfor} onChange={(e) => setTextInfor(e.target.value)}/>
            </div>
            <div>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important}
                onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Meeting'/>
        </form>
    )
}
export default AddTask