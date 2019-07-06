import React, { Component } from 'react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: ""
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

    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="inputUserName">
                            Username:
                        </label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputUserName" />
                    </div>
                    <div className="form-group">
                        <label for="passwordInput">
                            Password:
                        </label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="passwordInput" />
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