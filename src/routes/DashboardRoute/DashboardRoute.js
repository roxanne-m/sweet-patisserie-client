import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardContext from '../../contexts/DashboardContext';
import SavedRecipesApiService from '../../services/saved-recipes-api-service';
import Button from '../../components/Button/Button';
import './DashboardRoute.css';
import whisk from '../../components/Images/whisk.jpg';
import ingredients from '../../components/Images/ingredients.jpg';
import croissant from '../../components/Images/croissant.jpg';

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
        <li className='recipe-list-style' key={recipe.new_recipe_id}>
          <Link key={recipe.id} to={`/recipe/${recipe.new_recipe_id}`}>
            <h3>
              <u>{recipe.title}</u>
            </h3>
          </Link>
          <p>{recipe.description}</p>

          <br />
          <button
            className='delete-button'
            onClick={(e) => this.handleDeleteSubmit(e, recipe.new_recipe_id)}
          >
            Delete Recipe
          </button>
        </li>
      );
    });
    return (
      <div>
        <section>
          <div className='group'>
            <div className='item'>
              <img
                className='dashboard-img'
                src={ingredients}
                alt='Flour, honey, eggs, and baking utensils.'
                width='400'
              />
              <h3>Ingredients</h3>
              <hr />
              <p>Store your list of ingredients for your pastries.</p>
            </div>
            <div className='item'>
              <img
                className='dashboard-img'
                src={whisk}
                alt='Hand holding a whisk covered in batter.'
                width='400'
              />
              <h3>Instructions</h3>
              <hr />
              <p>List the instructions to recreate your lovely recipes.</p>
            </div>
            <div className='item'>
              <img
                className='dashboard-img'
                src={croissant}
                alt='A beautifully placed croissant with sugar coated strawberries.'
                width='400'
              />
              <h3>Bon Appétit</h3>
              <hr />
              <p>Enjoy!</p>
            </div>
          </div>
        </section>

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
