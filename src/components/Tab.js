import React, { Component } from 'react';
import '../App.css';

class Tab extends Component {

    addStyle = () => {
        if(this.props.out.id === this.props.activeTab) {
            return {backgroundColor: '#b088f9'}
        }else {
            return {}
        }
    };

    render () {
        return (
            // inline styling and onclick bind
            <div className="tab" style={this.addStyle()} onClick={this.props.ctab.bind(this,this.props.out.id)}>{this.props.out.title}</div>
        );
    }
    
}
export default Tab;