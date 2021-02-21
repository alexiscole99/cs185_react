import React, { Component } from 'react';

function Tab(props) {

    const addStyle = () => {
        if(props.out.id === props.activeTab) {
            return {backgroundColor: '#b088f9'}
        }else {
            return {backgroundColor: '#98acf8'}
        }
    };
    console.log(props)

    return (
        // inline styling and onclick bind
        <div style={addStyle()} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>
    )
}
export default Tab;