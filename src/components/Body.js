import React, { Component } from 'react';
import Text from "./Text";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import Table from "./Table";
import Email from "./Email";
import Zoom from "./ZoomManager/Zoom";
import '../App.css';

class Body extends Component {

    constructor() {
        super();
        this.state = {
            windowHeight: 0,
            documentHeight: 0,
            trackLength: 0,
            displayButton: false,
        }
    }

    componentDidMount = () => {
        this.setState(
            {
                windowHeight: window.innerHeight, 
                documentHeight: document.documentElement.scrollHeight, 
            });
        this.setState({trackLength: this.state.windowHeight - this.state.documentHeight});
        window.addEventListener("resize", this.getMeasurements);
        window.addEventListener("scroll", this.measureScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.getMeasurements);
        window.removeEventListener("scroll", this.measureScroll);
    }

    getMeasurements = () => {
        this.setState(
            {
                windowHeight: window.innerHeight, 
                documentHeight: document.documentElement.scrollHeight, 
            });
        this.setState({trackLength: this.state.windowHeight - this.state.documentHeight});
    }

    measureScroll = () => {
        var scroll = window.pageYOffset;
        var percent = Math.floor(scroll/this.state.trackLength) * 100
        if(percent > 25) {
            this.displayButton();
        } else {
            this.hideButton();
        }

    }

    displayButton = () => {
        this.setState({displayButton: true});
    }

    hideButton = () => {
        this.setState({displayButton: false});
    }

    toTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
        this.hideButton();
    }

    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if(activeTab === 1) {
                return <Text/>
            }
            if(activeTab === 2) {
                return <ImageGallery displayButton={this.state.displayButton} toTop={this.toTop}/>
            }
            if(activeTab === 3) {
                return <VideoGallery/>
            }
            if(activeTab === 4) {
                return  <Table/>
            } 
            if(activeTab === 5) {
                return  <Email/>
            }
            if(activeTab === 6) {
                return  <Zoom/>
            }
            else {
                return <div></div>
            }
        }

        return (displayContent())
    }
}
export default Body;