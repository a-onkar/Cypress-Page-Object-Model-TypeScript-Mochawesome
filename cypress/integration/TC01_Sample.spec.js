import login from './pageObjects/loginPage'

describe('Understanding get command', () => {

    const l = new login()
    it('POM', () => {
        cy.visit('https://parabank.parasoft.com/')
       
        l.email().type('john')
        l.password().type('demo')
        l.submit().click()

        cy.url().should('include', 'overview.htm')


    })

   it('Verify About Us Page Title', () => {

    cy.contains('About Us').click()
    cy.title().should('eq', 'ParaBank | About Us')  //Verify Page Title with exact & full text
    cy.title().should('include', 'About Us')     //Verify Page Title with partial text

   } )

        
})