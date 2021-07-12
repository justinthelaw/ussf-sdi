import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }

  toggleAddRecipeForm = () => {
    this.setState({ isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: target.value });
  }

  submitRecipe = (e) => {
    e.preventDefault();
    this.setState({
      recipes: [...this.state.recipes,
      {
        name: this.state.newRecipeName,
        instructions: this.state.newRecipeInstructions
      }
      ]
    })
    this.setState({
      newRecipeName: '',
      newRecipeInstructions: ''
    })
  }

  render() {
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={(e) => {
        this.submitRecipe(e)
      }} >
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          id="newRecipeName"
          name="newRecipeName"
          onChange={this.handleChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions"
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
            ? addNewRecipeForm
            : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
        }
        {
          this.state.recipes.length > 0 ?
            <ul>
              {this.state.recipes.map((recipe, index) => <li key={index}>{recipe.name + ": " + recipe.instructions}</li>)}
            </ul> :
            <p>There are no recipes to list.</p>
        }
      </div>
    )
  }
}

export default App;
