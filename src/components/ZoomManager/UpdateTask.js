import {useState} from 'react';

const UpdateTask = ({onAdd, setShowUpdate}) => {
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
        if(day.getDate() <= today) {
            alert("Meeting date must later than today!")
            return
        }
        if(!(textInfor.includes("zoom"))) {
            alert("Invalid zoom link!")
            return
        }
        
        onAdd({title, day, important, textInfor})
        setShowUpdate()
        setTitle('')
        setDay('')
        setImportant(false)
        setTextInfor('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Meeting</label>
                <input type='text' placeholder='Update Task'
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
            <input type='submit' value='Update Meeting'/>
        </form>
    )
}
export default UpdateTask