import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../styles/app.scss';
import Header from 'header';
import SignIn from 'auth/signin';
import SignUp from 'auth/signup';
import Signout from 'auth/signout';
import RequireAuth from 'auth/require_auth';
import LandingPage from 'landing_page';
import Protected from 'protected';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { match } = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path={`${match.url}signin`} component={SignIn} />
                        <Route path={`${match.url}signup`} component={SignUp} />
                        <Route path={`${match.url}signout`} component={Signout} />
                        <Route path={`${match.url}protected`} component={RequireAuth(Protected)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
