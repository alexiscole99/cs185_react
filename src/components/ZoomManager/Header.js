import "./Zoom.css"

const Header = ({showFullSchedule, setShowFullSchedule}) => {

    return (
        <header className="header">
            <h1>
                Zoom Meeting Manager
            </h1>
            <button className="btn" onClick={setShowFullSchedule}>
            {showFullSchedule ? "Create Meeting" : "Full Schedule"}
            </button>
        </header>
    )
}
export default Header