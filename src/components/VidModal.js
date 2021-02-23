import React, { Component } from 'react';
import '../App.css';

class VidModal extends Component {

    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if(e.target.className !== "modal-content-video") {
            this.props.closeModal();
        }
    }

    render() {
        return (
            <div 
                className="modal" 
                style={{display: this.props.showModal ? 'block' : 'none'}}
                onClick={this.handleClick}
            >
                <div className="modal-content-video">
                    <iframe 
                        id={this.props.srcId} 
                        src={this.props.modalSrc} 
                        height="100%"
                        width="100%"
                    />
                </div>
            </div>
        );
    }
}
export default VidModal;