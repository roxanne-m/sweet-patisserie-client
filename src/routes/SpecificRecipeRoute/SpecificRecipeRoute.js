import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardContext from '../../contexts/DashboardContext';
import SavedRecipesApiService from '../../services/saved-recipes-api-service';
import Button from '../../components/Button/Button';
import './SpecificRecipeRoute.css';

class SpecificRecipeRoute extends Component {
  static contextType = DashboardContext;

  componentDidMount() {
    this.context.clearError();
    SavedRecipesApiService.getSingleRecipe(this.props.match.params.id).then(
      (res) => {
        this.context.setCompleteRecipe(res);
      }
    );
  }

  render() {
    const listOfIngredients =
      this.context.completeRecipe.ingredients &&
      this.context.completeRecipe.ingredients.map((completeRecipe, index) => {
        return (
          <li className='recipe-list-style' key={index}>
            {completeRecipe.ingredients}
          </li>
        );
      });

    const listOfInstructions =
      this.context.completeRecipe.instructions &&
      this.context.completeRecipe.instructions.map((completeRecipe, index) => {
        return (
          <li className='recipe-list-style' key={index}>
            {completeRecipe.instructions}
          </li>
        );
      });
    return (
      <div>
        <Link to='/dashboard'>
          <Button>Back</Button>
        </Link>
        <br />
        <br />
        <section>
          <fieldset className='specific-recipe-style'>
            <h2>{this.context.completeRecipe.title}</h2>
            <fieldset className='description-style'>
              {this.context.completeRecipe.description}
            </fieldset>
            <h3>Ingredients</h3>
            <ol>{listOfIngredients}</ol>

            <h3>Instructions</h3>
            <ol>{listOfInstructions}</ol>
          </fieldset>
        </section>
      </div>
    );
  }
}

export default SpecificRecipeRoute;
