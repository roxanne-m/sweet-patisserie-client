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
    });
  }
  handleDeleteSubmit = (e, recipeId) => {
    e.preventDefault();
    SavedRecipesApiService.deleteRecipe(recipeId).then((res) => {
      this.context.deleteRecipe(recipeId);
    });
  };

  render() {
    const recipesArray = this.context.recipes.map((recipe) => {
      return (
        <li className='recipe-list-style' key={recipe.id}>
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <h3>
              <u>{recipe.title}</u>
            </h3>
          </Link>
          <p>{recipe.description}</p>

          <br />
          <button onClick={(e) => this.handleDeleteSubmit(e, recipe.id)}>
            Delete Recipe
          </button>
        </li>
      );
    });
    return (
      <div>
        <Link to='/add-recipe'>
          <Button>Add Recipe</Button>
        </Link>
        <h2>Recipe Dashboard</h2>
        <section>
          <ul>{recipesArray}</ul>
        </section>
      </div>
    );
  }
}

export default DashboardRoute;
