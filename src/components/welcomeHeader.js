import React, { Component } from 'react';

class Welcomeheader extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="display-4">
                            Enter a username and password to sign up!
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default Welcomeheader;