describe('Navigating to Login page', function() {
    it('Navigates to login', function() {
    //Visit the Demo QA Website
    cy.visit("/");

    cy.get('[data-name="logo-big-dash"]')
    //cy.title().should('include', 'Sign in to KeepWorks')
    //to inspect username field
    
    //cy.get('input[name="email"]').type('test@keepworks.com');
    //to inspect password field
    
    //cy.get('input[name="password"]').type("qweqwe123!{enter}")
    //to submit the fields
    cy.get('a[href="/forgot-password"]').click();
    cy.get('input[name="email"]').type('test@keepworks.com');
    //cy.contains('Sign In')
    //cy.contains('submit').click()
    cy.contains('Submit').click();
    cy.get('a[href="/login"]').click();
    
})
})