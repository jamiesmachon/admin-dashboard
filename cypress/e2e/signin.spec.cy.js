describe('SignInPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the signin form', () => {
    cy.get('form').should('exist');
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should display an error message if login credentials are incorrect', () => {
    cy.get('input[name="username"]').type('invalid_username');
    cy.get('input[name="password"]').type('invalid_password');
    cy.get('button[type="submit"]').click();
    cy.get('.toast.error').should('contain.text', 'Invalid credentials');
  });

  it('should redirect to the admin page if login credentials are correct', () => {
    cy.get('input[name="username"]').type('jamiesmachon');
    cy.get('input[name="password"]').type('fdrf15dw615wd6156dwv');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/admin');
  });
});
