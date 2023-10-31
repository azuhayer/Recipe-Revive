describe('Login', () => {
    beforeEach(() => {
      // Visit the homepage
      cy.visit('http://localhost:3000/')
    });
  
    it('should find and click the login link then test toggle', () => {

      // Find a link with an href attribute containing "login" and click it
      cy.get('a[href*="login"]').click()
      // The new url should include "/login"
      cy.url().should('include', '/login')
      // Check if the initial state is "Sign Up"
      cy.get('.header .text').should('contain', 'Sign Up');

      // Click the "Login" button to toggle to the "Login" state
      cy.get('.submit-container .submit').eq(1).click();

      // Check if the state is now "Login"
      cy.get('.header .text').should('contain', 'Login');
  
      // After clicking the login link, make sure it has some inputs.
      cy.get('input').should('be.visible');
  
      // Click the "Sign Up" button to toggle back to the "Sign Up" state
      cy.get('.submit-container .submit').eq(0).click();

      // Check if the state is now "Sign Up"
      cy.get('.header .text').should('contain', 'Sign Up');

      // After clicking the Signup, make sure it has some inputs.
      cy.get('input').should('be.visible');
  
      // due to limited functionality and this not being fully set up this is all i can do
    });
    
  });