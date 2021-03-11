import React, { Component } from 'react';
import Images from './Images';
import ImgModal from './ImgModal';
import ScrollButton from './ScrollButton';
import '../App.css';
import Ams from '../images/amsterdam.jpg';
import Ams2 from '../images/amsterdam2.jpg';
import Ams3 from '../images/amsterdam3.jpg';
import Berlin from '../images/berlin.jpg';
import big_sur from '../images/big_sur.jpg';
import blue_sky from '../images/blue_sky.jpg';
import cph from '../images/copenhagen.jpg';
import elvin from '../images/elvin.jpg';
import iceland from '../images/iceland.jpg';
import iceland2 from '../images/iceland2.jpg';
import iceland3 from '../images/iceland3.jpg';
import lund from '../images/lund.jpg';
import lund2 from '../images/lund2.jpg';
import rowing from '../images/rowing.jpg';
import sb from '../images/sb.jpg';
import sd from '../images/sd.jpg';
import zaandam from '../images/zaandam.jpg';

class ImageGallery extends Component {
    constructor(){
        super();
        this.state = {
          showModal: false,
          modalSrc: sd,
          srcId: 17
        }
        this.openModal = (id, src) => {
            this.setState({showModal: true, modalSrc: src, srcId: id});
        }
        this.closeModal = () => {
            this.setState({showModal: false, modalSrc: sd, srcId: 17});
        }
        this.portrait = [0,1,2,4,9,11,12];
        this.landscape = [3,5,6,7,8,10,13,14,15,16];

        this.addStyle = (id) => {
            if(this.portrait.includes(Number(id))) {
                return [{height: '100%'}, 'modal-content-portrait']
            }
            if(this.landscape.includes(Number(id))) {
                return [{width: '100%'}, 'modal-content-landscape']
            }else {
                return [{}, ""];
            }
        }
        this.images = [{
            id: 0,
            src: Ams
        },
        {
            id: 1,
            src: Ams2
        },
        {
            id: 2,
            src: Ams3
        },
        {
            id: 3,
            src: Berlin
        },
        {
            id: 4,
            src: big_sur
        },
        {
            id: 5,
            src: blue_sky
        },
        {
            id: 6,
            src: cph
        },
        {
            id: 7,
            src: elvin
        },
        {
            id: 8,
            src: iceland
        },
        {
            id: 9,
            src: iceland2
        },
        {
            id: 10,
            src: iceland3
        },
        {
            id: 11,
            src: lund
        },
        {
            id: 12,
            src: lund2
        },
        {
            id: 13,
            src: rowing
        },
        {
            id: 14,
            src: sb
        },
        {
            id: 15,
            src: sd
        },
        {
            id: 16,
            src: zaandam
        }
        ]

    }

    render() {
        //console.log(Ams)
        return(
            <div>
                <div className="container">
                    <Images images={this.images} openModal={this.openModal}/>
                    <ImgModal 
                        showModal={this.state.showModal} 
                        closeModal={this.closeModal} 
                        customStyle={this.addStyle(this.state.srcId)} 
                        modalSrc={this.state.modalSrc}
                        srcId={this.state.srcId}
                    />
                </div>
                <ScrollButton displayButton={this.props.displayButton} toTop={this.props.toTop}/>
            </div>
        );
    }
}
export default ImageGallery;