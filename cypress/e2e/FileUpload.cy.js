
it('File Upload Test',function(){
    cy.visit('https://filebin.net/')
    cy.get('#fileField').attachFile('example.json')
})