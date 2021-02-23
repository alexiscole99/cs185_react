import React, { Component } from 'react';
import '../App.css';

class ImgModal extends Component {

    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if(e.target.className !== "modal-content-landscape" || e.target.className !== "modal-content-portrait") {
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
                <div className={this.props.customStyle[1]}>
                    <img src={this.props.modalSrc} id={this.props.srcId} style={this.props.customStyle[0]}/>
                </div>
            </div>
        );
    }
}
export default ImgModal;