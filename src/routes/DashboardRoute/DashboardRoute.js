import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardContext from '../../contexts/DashboardContext';
import SavedRecipesApiService from '../../services/saved-recipes-api-service';
import Button from '../../components/Button/Button';
import './DashboardRoute.css';

class DashboardRoute extends Component {
  static contextType = DashboardContext;

  componentDidMount() {
    this.context.clearError();
    SavedRecipesApiService.getRecipes().then((res) => {
      this.context.setRecipes(res);
      console.log(res, 'RES ');
    });
  }
  handleDeleteSubmit = (e) => {
    e.preventDefault();
    SavedRecipesApiService.deleteRecipe().then((res) => {
      this.context.setRecipes(res);
    });
  };

  render() {
    const recipesArray = this.context.recipes.map((recipe) => {
      return (
        <li className='recipe-list-style' key={recipe.id}>
          <h4>{recipe.title}</h4>

          <br />
          <button type='submit'>Delete Recipe</button>
        </li>
      );
    });
    console.log(recipesArray, 'RECIPES ARRAY');

    return (
      <div>
        <Link to='/add-recipe'>
          <Button>Add Recipe</Button>
        </Link>
        <h2>Recipe Dashboard</h2>

        <ul>{recipesArray}</ul>
      </div>
    );
  }
}

export default DashboardRoute;
