describe('My First Tests', () => {

  it('Does not do much!', () => {
    expect(1).to.equal(1) //pass
    // expect(1).to.equal(2) //fail
  })

  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io') //pass
    cy.contains('type').click() //pass
    cy.url().should('include', '/commands/actions') //pass
    })

    it('Looks for type in Kitchen Sink', () => {
    cy.visit('https://example.cypress.io') //pass
    cy.contains('type') //pass
    // cy.contains('nonsense') //fail
  })

  it('Clicks the link with "type"', () => {
    cy.visit('https://example.cypress.io') //pass
    cy.contains('type').click() //pass
  })

  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io') //pass
    cy.contains('type').click() //pass
    cy.url().should('include', '/commands/actions') //pass
    cy.get('.action-email') //pass
      .type('fake@email.com') //pass
      .should('have.value', 'fake@email.com') //pass
  })

})