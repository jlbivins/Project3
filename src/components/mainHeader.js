import React, { Component } from 'react';

class Mainheader extends Component {
    render() {
        return(
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Menu Opt. 1
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Menu Opt. 2
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Menu Opt. 3
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Menu Opt. 4
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Mainheader;