import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchMessage} from '../actions/index';
class Protected extends Component {

    //  constructor(props) {
    //      super(props);
    //     this.checkAuth = this.checkAuth.bind(this); 
    // }
    //  checkAuth() {
    //     if (this.props.authenticated == false) {
    //         return (
    //            <Redirect push to="/signin" />
    //         )
    //     }
    // }
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <div>
                {/*{this.checkAuth()}    */}
                <h2>Protected page</h2> 
                <h5>{this.props.message}</h5> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message
    }
}

// export default Protected; 
export default connect(mapStateToProps,{fetchMessage})(Protected); 