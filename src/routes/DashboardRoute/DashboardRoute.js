import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardContext from '../../contexts/DashboardContext';
import SavedRecipesApiService from '../../services/saved-recipes-api-service';
import './DashboardRoute.css';

class DashboardRoute extends Component {
  static contextType = DashboardContext;

  componentDidMount() {
    this.context.clearError();
    SavedRecipesApiService.getRecipes().then((res) => {
      this.context.setRecipes(res.recipes);
    });
  }
  render() {
    return <div></div>;
  }
}

export default DashboardRoute;
