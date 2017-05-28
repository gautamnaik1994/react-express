import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {signoutUser} from '../actions/index';

class Header extends Component {

    constructor(props) {
        super(props);
        this.renderHeaderComponent = this.renderHeaderComponent.bind(this);
        // this.handleSigout = this.handleSigout.bind(this);
    }

    // handleSigout() {
    //     alert("signout");
    //     this.props.signoutUser();
       
    // }

    renderHeaderComponent() {
        if (this.props.authenticated == true) {
            return[<li className="nav-item">
                <Link className="nav-link" to="/protected">Protected</Link>
            </li>,
            <li className="nav-item">
                <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>]
        }
        else {
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            ]
        }
    }

    render() {
          const { match } = this.props;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Redux Auth</Link>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                       
                           {this.renderHeaderComponent()}
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStatToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStatToProps,null)(Header); 