import React, { Component } from 'react';
import Image from './Image';

class Images extends Component {

    render() {
        return (
            this.props.images.map((image) =>(
                <Image image={image} openModal={this.props.openModal}/>
            ))
        );
    }
}
export default Images;