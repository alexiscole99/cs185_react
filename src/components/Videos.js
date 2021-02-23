import React, { Component } from 'react';
import Video from './Video';

class Videos extends Component {

    render() {
        return (
            this.props.videos.map((video) =>(
                <Video video={video} openModal={this.props.openModal}/>
            ))
        );
    }
}
export default Videos;