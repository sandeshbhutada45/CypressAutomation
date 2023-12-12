beforeEach(function(){
    cy.fixture('example.json').as('data')
})
it('Orange HRM Test1',function()
{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(3000)
    cy.readFile('./cypress/fixtures/example.json').its('Username').should('eq','Admin')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.Username)//Read Username from file
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.Password)//Read Password from file
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
})
