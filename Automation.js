


describe('Password change Test', () => {
    
  
    it('Tests', () => {

      cy.visit('https://tutorialsninja.com/demo/');

     // Log in 
      
      cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
      cy.get('.dropdown-menu > :nth-child(2) > a').click()
  
      // Entering Credentials

      cy.get('#input-email').type('shivamsharma@gmail.com')
      cy.get('#input-password').type('123@')
      cy.get('form > .btn').click()

      //Search Item on Search Bar

      cy.get('.form-control').type('mac')
      cy.get('.input-group-btn > .btn').click()

      // Selecting item and add to cart

      cy.get(':nth-child(3) > .product-thumb > .image > a > .img-responsive').click()
      cy.get('#button-cart').click()


      // Go to my account and select account setting

      cy.get('.caret').click()
      cy.get('.dropdown-menu > :nth-child(1) > a').should('be.visible').click()


      // click on change password

      cy.get('#content > :nth-child(2) > :nth-child(2) > a').click()


      // change password 

      cy.get('#input-password').type('shivam123')
      cy.get('#input-confirm').type('shivam123')
      cy.get('.pull-right > .btn').click()

      // change password with space and special symbol

      cy.get('#content > :nth-child(2) > :nth-child(2) > a').click()
      cy.get('#input-password').type('shivam 123@')
      cy.get('#input-confirm').type('shivam 123@')
      cy.get('.pull-right > .btn').click()

      // change password with number and special symbol

      cy.get('#content > :nth-child(2) > :nth-child(2) > a').click()
      cy.get('#input-password').type('123@')
      cy.get('#input-confirm').type('123@')
      cy.get('.pull-right > .btn').should('be.visible').click()

      cy.get('#content > :nth-child(2) > :nth-child(2) > a').click()
      cy.get('#input-password').should('not.have.value','shivam123').type('123@')
      cy.get('#input-confirm').should('not.have.value','shivam123').type('123@')
      cy.get('.pull-right > .btn').click()









    });
 });
  

