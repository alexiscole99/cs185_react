import React, { Component } from 'react';
import Text from "./Text";
import '../App.css';

class Body extends Component {

    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if(activeTab === 1) {
                return <Text/>
            } else {
                return <div></div>
            }
        }

        return (displayContent())
    }
}
export default Body;