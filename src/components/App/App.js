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
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import SpecificRecipeRoute from '../../routes/SpecificRecipeRoute/SpecificRecipeRoute';
import AddRecipeRoute from '../../routes/AddRecipeRoute/AddRecipeRoute';

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
    console.log('');
    return (
      <div>
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}

          <Switch>
            <PublicOnlyRoute exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginRoute} />

            <PrivateRoute path={'/dashboard'} component={DashboardRoute} />
            <PrivateRoute
              path={'/recipe/:id'}
              component={SpecificRecipeRoute}
            />
            <PrivateRoute path={'/add-recipe'} component={AddRecipeRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
