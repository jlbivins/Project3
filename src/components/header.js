import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="jumbotron jumbotron-fluid header">
                    <div className="container">
                        <h1 className="display-4">
                            Welcome to (project 3)!
                        </h1>
                        <div className="button-pos">
                            <button type="button" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;