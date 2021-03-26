import React, { Component } from 'react';
import DashboardContext from '../../contexts/DashboardContext';
import SavedRecipesApiService from '../../services/saved-recipes-api-service';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './AddRecipeRoute.css';

class AddRecipeRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      ingredients: [],
      ingredient: '', // represents the draft of ingredient
      instructions: [],
      instruction: '', // represents the draft of instruction
    };
  }

  static contextType = DashboardContext;

  // calls post api
  componentDidMount() {
    this.context.clearError();
  }

  // This function handles changes in state for text input
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleAddIngredient = (e) => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredient],
      ingredient: '',
    });
  };

  handleAddInstructions = (e) => {
    e.preventDefault();
    this.setState({
      instructions: [...this.state.instructions, this.state.instruction],
      instruction: '',
    });
  };

  // Handles the submit event when user submits their new recipe
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.ingredients.length === 0 ||
      this.state.instructions.length === 0
    ) {
      alert('Please provide at least one ingredient and one instruction.');
      return;
    }

    const recipe = {
      title: this.state.title,
      description: this.state.description,
    };
    SavedRecipesApiService.postRecipe(
      recipe,
      this.state.ingredients,
      this.state.instructions
    ).then((res) => {
      const path = `/recipe/${res.recipe.id}`;
      this.props.history.push(path);
    });
  };
  render() {
    let listIngredients = this.state.ingredients.map((ingredient, index) => {
      return (
        <li className='add-recipe-list' key={index}>
          {ingredient}
        </li>
      );
    });

    let listInstructions = this.state.instructions.map((instruction, index) => {
      return (
        <li className='add-recipe-list' key={index}>
          {instruction}
        </li>
      );
    });

    return (
      <div>
        <Link to='/dashboard'>
          <Button>Cancel</Button>
        </Link>

        <h2>Add A New Recipe</h2>
        <section>
          <fieldset className='add-recipe-form'>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor='title'>
                <b>Recipe Title:</b>{' '}
              </label>
              <br />
              <input
                className='input-form-styling'
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
              <br />
              <label htmlFor='description'>
                <b>Description: </b>
              </label>
              <br />
              <textarea
                className='textarea-form-styling'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
                rows='10'
                cols='30'
                placeholder='You may add an optional description for your recipe. E.g. (Nutritional facts, important notes, serving sizes, prep/cook time)'
              />
              <br />
              <label htmlFor='ingredient'>
                <b>Ingredients: </b>
              </label>
              <br />
              <input
                className='input-form-styling'
                type='text'
                name='ingredient'
                value={this.state.ingredient}
                onChange={this.handleChange}
              />{' '}
              <button
                type='button'
                onClick={this.handleAddIngredient}
                className='add-recipe-button'
              >
                Add Ingredient
              </button>
              <ol>{listIngredients}</ol>
              <br />
              <label htmlFor='instruction'>
                <b>Instructions: </b>
              </label>
              <br />
              <input
                className='input-form-styling'
                type='text'
                name='instruction'
                value={this.state.instruction}
                onChange={this.handleChange}
              />{' '}
              <button
                type='button'
                onClick={this.handleAddInstructions}
                className='add-recipe-button'
              >
                Add Instruction
              </button>
              <ol>{listInstructions}</ol>
              <br />
              <br />
              <Button type='submit'>Save Recipe</Button>
            </form>
          </fieldset>
        </section>
      </div>
    );
  }
}

export default AddRecipeRoute;
