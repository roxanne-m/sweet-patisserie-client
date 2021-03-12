import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';

import './App.css';

class App extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div>
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}

          <Switch>
            <PublicOnlyRoute path={'/landing'} component={LandingPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />

            <PublicOnlyRoute path={'/login'} component={LoginRoute} />

            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
