describe("Home Page", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Header contains application name, Weather Grabber", () => {
    cy.findAllByRole('heading')
      .should('contain', 'Weather Grabber')
  })

  it("Github repo link brings user to the right Github repo", () => {
    cy.findAllByRole('link', { name: "Github repository" }).click()
    cy.url().should('eq', "https://github.com/justinthelaw/Weather_Grabber")
  })

})

describe("App Page", () => {
  beforeEach(() => {
    cy.visit('/app')
  })

  it("Header contains application name, Weather Grabber", () => {
    cy.findAllByRole('heading')
      .should('contain', 'Weather Grabber')
  })

  it("Contains a form for inputting user information", () => {
    cy.findByPlaceholderText('Name').type("Justin Law")
    cy.findByPlaceholderText('Email').type("justinwingchunglaw@gmail.com")
    cy.findByPlaceholderText('Zip Code').type("11714")
  })

})