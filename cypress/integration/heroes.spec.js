describe('Heroes page', () => {

  it('should show Superheroes as title', () => {
    cy.visit('/');
    cy.get('.title').contains('Superheroes');
  });

  it('should show 250 heroes on the homepage', () => {
    cy.get('.hero-block').should('have.length', 250);
  });

  it('should show only 3 heroes when searching on Batman', () => {
    cy.get('.search-input').type('Batman');
    cy.get('.hero-block').should('have.length', 3);
  });

  it('should show still scroll when having more than 15 heroes', function() {
    this.skip();
  })

  it('should open the details when clicking on a hero', () => {
    cy.get('#69.hero-block').click();
    cy.url().should('include', '/hero-details/69');
    cy.get('.details h2').contains('Batman')
  });

  it('should show an empty state when there are no search results', () => {
    cy.visit('/');
    cy.get('.search-input').type('Tacoman');
    cy.get('.empty-state').should('be.visible');
  });
});
