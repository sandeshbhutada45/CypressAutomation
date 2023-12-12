
beforeEach(function(){
    cy.fixture('example.json').as('data')
})
it('Read Write Test',function()
{
cy.fixture('example.json').its('name').should('equal','cypress')
cy.log(this.data.name) //Print in Console Name
cy.log(this.data.email) //Print in Console Email
})

///Read FILE
it('Read File Test', function(){
    cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','cypress')
})

//Write FILE
it('Write File Test', function(){
    cy.writeFile('sample.txt','Hello We are learning Cypress')
    cy.writeFile('sample.txt','\nHello I am Sandesh',{flag: 'a+'}) //Flag is used  to appened in new line and used \n before text
cy.readFile('sample.txt').should('contain','Cypress')
})
