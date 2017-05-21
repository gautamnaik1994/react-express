import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
          const { match } = this.props;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Blog</a>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        <li className="active">
                            <Link to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header; 