import React, { Component } from 'react';

const DashboardContext = React.createContext({
  error: null,
  recipes: [],
  response: [],
  completeRecipe: {},
  setError: () => {},
  clearError: () => {},
  setRecipes: () => {},
  setResponse: () => {},
  deleteRecipe: () => {},
  setCompleteRecipe: () => {},
});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    error: null,
    recipes: [],
    response: {},
    completeRecipe: {},
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

  deleteRecipe = (recipeId) => {
    this.setRecipes(
      this.state.recipes.filter((recipe) => recipe.new_recipe_id !== recipeId)
    );
  };

  setCompleteRecipe = (completeRecipe) => {
    this.setState({ completeRecipe });
  };
  render() {
    const value = {
      error: this.state.error,
      recipes: this.state.recipes,
      response: this.state.response,
      completeRecipe: this.state.completeRecipe,
      setError: this.setError,
      clearError: this.clearError,
      setRecipes: this.setRecipes,
      setResponse: this.setResponse,
      deleteRecipe: this.deleteRecipe,
      setCompleteRecipe: this.setCompleteRecipe,
    };

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
