import React, { Component } from 'react';
import '../App.css';

class ImgModal extends Component {

    render() {
        //console.log(this.props.customStyle)
        console.log(this.props.srcId)
        //console.log(this.props.modalSrc)
        //console.log("modal: " + this.props.showModal)
        return (
            <div 
                className="modal" 
                style={{display: this.props.showModal ? 'block' : 'none'}}
            >
                <div className={this.props.customStyle[1]}>
                    <img src={this.props.modalSrc} id={this.props.srcId} style={this.props.customStyle[0]}/>
                </div>
            </div>
        );
    }
}
export default ImgModal;