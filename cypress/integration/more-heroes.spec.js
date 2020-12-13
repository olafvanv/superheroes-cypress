describe('More Heroes page tests', () => {

  it('should show Superheroes as title of the page', () => {
    cy.visit('/');
    cy.get('.title').contains('Superheroes');
  });

  it('should show an empty state when there are no heroes', () => {
    // cy.server();
    // cy.route('/superhero-api/api/all.json', 'fixture:allheroes');

    cy.intercept('GET', '/superhero-api/api/all.json', {fixture: 'allheroes'}).as('getAllHeroes');

    cy.visit('/');
    cy.wait('@getAllHeroes');
    cy.get('.empty-state').should('be.visible');
  });
});
