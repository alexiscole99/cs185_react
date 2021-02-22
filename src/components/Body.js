import React, { Component } from 'react';
import Text from "./Text";
import Email from "./Email";
import '../App.css';

class Body extends Component {

    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if(activeTab === 1) {
                return <Text/>
            } 
            if(activeTab === 5) {
                return  <Email/>
            }
            else {
                return <div></div>
            }
        }

        return (displayContent())
    }
}
export default Body;