import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Add recipe button toggles visibility of a form on the page', () => {

  render(<App />);
  // `queryBy...` methods will return null if the element is not found:
  const recipeForm = screen.queryByText("Instructions:");

  // `getBy...` methods will "throw" an error if the element is not found:
  // const recipeForm = screen.getByText("Instructions:");

  expect(recipeForm).toBeNull();
  userEvent.click(screen.getByText("Add Recipe"));

  expect(screen.getByLabelText("Instructions:")).toBeInTheDocument();
});

const setup = () => {
  const app = render(<App />);

  userEvent.click(app.getByText('Add Recipe'));

  // Add the submit button to your setup method:
  const submitButton = app.getByRole('button')
  const instructionsInput = app.getByLabelText('Instructions:')
  const nameInput = app.getByLabelText('Recipe name:')

  return {
    instructionsInput,
    nameInput,
    submitButton
  }
}

test('typing in the recipe instructions makes the instructions appear in the form', async () => {
  const { instructionsInput } = setup();

  const recipeInstructions = "kinda hard to write instructions without knowing what I'm cooking"

  await userEvent.type(instructionsInput, recipeInstructions)
  expect(instructionsInput.value).toEqual(recipeInstructions);
});

test('recipe name and instructions from state appears in an unordered list', async () => {
  const { instructionsInput, nameInput, submitButton } = setup();
  const recipeName = "Lean Pockets"
  const recipeInstructions = "place in toaster oven on 350 for 45 minutes"

  await userEvent.type(instructionsInput, recipeInstructions)
  await userEvent.type(nameInput, recipeName)
  userEvent.click(submitButton);

  expect(screen.getByRole('listitem')).toBeInTheDocument();
  expect(screen.getByText(recipeName, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(": " + recipeInstructions, { exact: false })).toBeInTheDocument();
})

test('MULTIPLE (CFU 3) recipe name and instructions from state appears in an unordered list', async () => {
  const { instructionsInput, nameInput, submitButton } = setup();
  let recipeName = "Lean Pockets"
  let recipeInstructions = "place in toaster oven on 350 for 45 minutes"

  await userEvent.type(instructionsInput, recipeInstructions)
  await userEvent.type(nameInput, recipeName)
  userEvent.click(submitButton);


  let secondRecipeName = 'Water'
  let secondRecipeInstructions = '1. take water from tap'

  await userEvent.type(instructionsInput, secondRecipeInstructions)
  await userEvent.type(nameInput, secondRecipeName)
  userEvent.click(submitButton);

  expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument();
  expect(screen.getByText(recipeName, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(": " + recipeInstructions, { exact: false })).toBeInTheDocument();

  expect(screen.getByText(secondRecipeName, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(": " + secondRecipeInstructions, { exact: false })).toBeInTheDocument();
})