it('GET API Test',function()
{
    cy.request('GET','https://reqres.in/api/users?page=2')
})