
it('Asseration Test',function()
{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(3000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.title().should('equal','OrangeHRM')
    cy.get('.oxd-button--secondary').should('contain','Save')//Asseration Step
    .should('have.class','oxd-button')//Asseration Step
    .should('be.visible')//Asseration Step
    .should('be.enabled')//Asseration Step
    //Expect Asseration
    let name='Sandesh'
    expect(name).to.be.equal('Sandesh')

    //Assert
    assert.equal(45,45,'Number is Equal')
})