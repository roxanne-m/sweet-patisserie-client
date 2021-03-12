import React, { Component } from 'react';

const DashboardContext = React.createContext({
  error: null,
  recipes: {},
  response: [],
  setError: () => {},
  setRecipes: () => {},
  setResponse: () => {},
});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    error: null,
    recipes: {},
    response: {},
  };

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setRecipes = (recipes) => {
    this.setState({ recipes });
  };

  setResponse = (response) => {
    this.setState({ response });
  };
  render() {
    const value = {
      error: this.state.error,
      recipes: this.state.recipes,
      response: this.state.response,
      setError: this.setError,
      setRecipes: this.setRecipes,
      setResponse: this.setResponse,
    };
    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
