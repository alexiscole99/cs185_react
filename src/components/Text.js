import React, { Component } from 'react';

class Text extends Component {
    
    render() {
        console.log("text")
        return (
            <div>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/><br/>
                    <label for="grade">Grade Level:</label><br/>
                    <input type ="radio" id="grade" name="grade" value="Freshman"/>
                    <label for="grade">Freshman</label><br/>
                    <input type ="radio" id="grade" name="grade" value="Sophomore"/>
                    <label for="grade">Sophomore</label><br/>
                    <input type ="radio" id="grade" name="grade" value="Junior"/>
                    <label for="grade">Junior</label><br/>
                    <input type ="radio" id="grade" name="grade" value="Senior"/>
                    <label for="grade">Senior</label><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Text;