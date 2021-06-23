
describe('Cypress Assertions CFU2', () => {
  it('Find FAQ', () => {
    cy.visit('index.html') //pass
    // cy.get(<FAQ/>) //fail
    cy.findByRole('link', {name: /faq/i}) //fail
    cy.get('[href="/faq/questions/using-cypress-faq.html"]') //pass
    cy.get('ul > li:nth-child(5) > a') //pass
    // cy.get('select').select('FAQ') //fail
  })
})

describe("Cypress Test CFU6", () => {
  beforeEach(() => {
      cy.visit('http://www.google.com')
  })
  it("Searching for 'Platform One' yields search results", () => {
    cy.get('.gLFyf') //pass
      .type('Platform One') //pass
      .should('have.value', 'Platform One') //pass
      .get('[value="Google Search"]').first().click({multiple: false})
      .url().should('contain', 'Platform+One')
  })
})