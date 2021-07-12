describe("Home page", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole('heading').should('contain', 'My Recipes')
    cy.get('p')
      .findByText('There are no recipes to list.')
      .should('exist')
  })

  it("contains an add recipe button that when clicked opens a form", () => {
    cy.findByRole('button').click();

    cy.get('form')
      .findByRole('button')
      .should('exist')
  })

  it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
    cy.findByRole('button').click();
    cy.findByRole('textbox', { name: /Recipe name/i }).should('exist')
    cy.findByRole('textbox', { name: /instructions/i }).should('exist')
  })

  it("displays a recipe name and instructions under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    cy.findByRole('button').click()
    cy.findByRole('textbox', { name: /Recipe name/i }).type(recipeName)
    cy.findByRole('textbox', { name: /instructions/i }).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")

    return cy.findByRole('button').click()
      .then(() => {
        cy.findByRole('listitem', /tofu scramble tacos/i).should('exist')
        cy.findByRole('listitem', /1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas/i).should('exist')
      })
  })

  it("displays MULTIPLE (CFU 3) recipe names and instructions under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    cy.findByRole('button').click()
    cy.findByRole('textbox', { name: /Recipe name/i }).type(recipeName)
    cy.findByRole('textbox', { name: /instructions/i }).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    cy.findByRole('button').click()


    const secondRecipeName = 'Water';
    cy.findByRole('textbox', { name: /Recipe name/i }).type(secondRecipeName)
    cy.findByRole('textbox', { name: /instructions/i }).type("1. take water from tap")

    return cy.findByRole('button').click()
      .then(() => {
        cy.findByText('Tofu Scramble Tacos: 1. heat a skillet on medium with a dollop of coconut oil 2. warm flour tortillas').should('exist')
        cy.findByText('Water: 1. take water from tap').should('exist')
      })
  })
})