import React, { Component } from 'react';

class ScrollButton extends Component {

    render() {
        return(
            <button 
                id="top-button" 
                class="top-button" 
                style={{display: this.props.displayButton ? "inline-block" : "none"}}
                onClick={this.props.toTop.bind(this)}>
                    Back to top
                </button>
        );
    }
}
export default ScrollButton;