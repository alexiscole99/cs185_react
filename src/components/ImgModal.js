import React, { Component } from 'react';
import '../App.css';

class ImgModal extends Component {

    render() {
        return (
            <div 
                className="modal" 
                style={{display: this.props.showModal ? 'block' : 'none'}}
            >
                <div className={this.props.customStyle[1]} style={this.props.customStyle[0]}>
                    <img id={this.props.srcId} src={this.props.modalSrc}/>
                </div>
            </div>
        );
    }
}
export default ImgModal;