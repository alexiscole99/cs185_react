import React, { Component } from 'react';
import '../App.css';

class Video extends Component {

    render () {
        return (
            <div className="item" onClick={this.props.openModal.bind(this, this.props.video.id, this.props.video.src)}>
                <iframe 
                    id={this.props.video.id} 
                    className="video" 
                    src={this.props.video.src} 
                    height="250"
                    width="250"
                />
            </div>
        );
    }
}
export default Video;