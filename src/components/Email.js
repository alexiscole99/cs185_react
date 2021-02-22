import React, { Component } from 'react';

class Email extends Component {
    constructor(){
        super();
        this.state = {
          email: "",
          message :"",
        }
        this.validateEmail = (e) => {
            e.preventDefault();
            var address = this.state.email;
            console.log("address: ", address);
            if((address.endsWith(".com") || address.endsWith(".edu")) && address.includes("@")) {
                this.setState({message: "Email successfully recorded."})
            }else {
                this.setState({message: "Invalid email address."})
            }
        }
        this.handleChange = (e) => {
            this.setState({email: e.target.value});
        }
    }

    render() {
        console.log("email")
        return (
            <div>
                <h1>Email Validation</h1>
                <form onSubmit={this.validateEmail}>
                    <label for="email">Email:
                        <input 
                            type="text" 
                            id="address" 
                            name="email" 
                            onChange={this.handleChange} 
                            style={{margin: '20px'}}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}
export default Email;