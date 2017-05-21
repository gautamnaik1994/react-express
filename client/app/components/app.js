import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import '../styles/app.scss';

import Header from 'header';
import SignIn from 'auth/signin';
import LandingPage from 'landing_page';
import TestComponent2 from 'testcomponent2';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { match } = this.props;
        console.log("%c match ", 'font-size: 25px', match);

        return (
            <div>
                <Header />
                <div className="container">
                    <Switch>
                       
                        <Route exact path="/" component={LandingPage} />
                        <Route path={`${match.url}signin`} component={SignIn} />
                        <Route path={`${match.url}protected`} component={TestComponent2} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
