import React, { Component } from 'react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: "",
            err: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        if (event.target.name==="username"){
            this.setState({
                username: event.target.username
            });
        } else if (event.target.name==="password"){
            this.setState({
                password: event.target.password
            });
        }
    }

    handleSubmit(event) {
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="col s12" method="POST">
                    <div className="form-group">
                        <label for="inputUserName">
                            Username:
                        </label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputUserName"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required />
                    </div>
                    <div className="form-group">
                        <label for="passwordInput">
                            Password:
                        </label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInput"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default SignInForm;