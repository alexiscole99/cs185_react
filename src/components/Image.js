import React, { Component } from 'react';
import '../App.css';

class Image extends Component {

    render() {
        return (
            <figure className="item">
                <img 
                    src={this.props.image.src} 
                    id={this.props.image.id} 
                    width='200'
                    onClick={this.props.openModal.bind(this, this.props.image.id, this.props.image.src)}
                />
            </figure>
        );
    }
}
export default Image;