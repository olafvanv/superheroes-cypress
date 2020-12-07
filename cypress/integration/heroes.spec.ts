/// <reference types="Cypress" />

describe('Heroes page', () => {

  beforeEach(() => {
    cy.intercept('GET', '/superhero-api/api/all.json', {fixture: 'allheroes.json'});
    cy.intercept('GET','/superhero-api/api/id/1.json').as('getDataFirst');
    cy.visit('/');
  })

  // it('should show the title \'Superheroes\'', () => {
  //   cy.visit('/');
  //   cy.get('title').contains('Superheroes');
  // });

  it('should show 250 heroes', () => {
    // cy.server();
    // cy.fixture('allheroes').then((heroes) => {
    //   cy.route({
    //     method: 'GET',
    //     url: '/superhero-api/api/all.json',
    //     response: heroes
    //   });
    // });
    // cy.visit('/')

    cy.get('.hero-block').should('have.length', 250);
  });

  // it('should show 3 heroes when searching on \'Batman\. ', () => {
  //   cy.get('.search-input').type('Batman').then(() => {
  //     cy.get('.hero-block').should('have.length', 3);
  //   });
  // });

  it('should go to the details page when clicking on a hero', () => {
    // cy.server().route({ method: 'GET',  url: '/superhero-api/api/id/1.json'}).as('getDataFirst');
    // cy.wait('@getDataFirst').its('status').should('eq', 200);

    cy.get('.hero-block').first().click();
    // cy.wait('@getDataFirst').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/hero-details/');
  });
})
