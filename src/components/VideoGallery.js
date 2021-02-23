import React, { Component } from 'react';
import Videos from './Videos';
import VidModal from './VidModal';
import '../App.css';

class VideoGallery extends Component {
    constructor(){
        super();
        this.state = {
          showModal: false,
          modalSrc: "",
          srcId: 9
        }

        this.videos = [{
            id: 0,
            src: "https://www.youtube.com/embed/L_LUpnjgPso"
        },
        {
            id: 1,
            src: "https://www.youtube.com/embed/ubNfkpbxXUs"
        },
        {
            id: 2,
            src: "https://www.youtube.com/embed/bn9F19Hi1Lk"
        },
        {
            id: 3,
            src: "https://www.youtube.com/embed/-yMS-z--1zE"
        },
        {
            id: 4,
            src: "https://www.youtube.com/embed/Tx83KIH5Gv0"
        },
        {
            id: 5,
            src: "https://www.youtube.com/embed/m_UGLf9mUg8"
        },
        {
            id: 6,
            src: "https://www.youtube.com/embed/irefffYWDUY"
        },
        {
            id: 7,
            src: "https://www.youtube.com/embed/UbxUSsFXYo4"
        },
        {
            id: 8,
            src: "https://www.youtube.com/embed/0-7IHOXkiV8"
        }]

    }

    openModal = (id, src) => {
        this.setState({showModal: true, modalSrc: src, srcId: id});
    }

    closeModal = () => {
        this.setState({showModal: false, modalSrc: "", srcId: 9});
    }

    render() {
        return(
            <div className="container">
                <Videos videos={this.videos} openModal={this.openModal}/>
                <VidModal 
                    id="video-modal"
                    showModal={this.state.showModal} 
                    closeModal={this.closeModal} 
                    modalSrc={this.state.modalSrc}
                    srcId={this.state.srcId}
                />
            </div>
        );
    }
}
export default VideoGallery;