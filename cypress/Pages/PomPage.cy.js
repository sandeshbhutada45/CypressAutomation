export class Login{


    username=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btn='.oxd-button'
    navigateURL(url){
        cy.visit(url)
    }

    enterUsernamePassword(){
        cy.get(this.username).type('Admin')
        cy.get(this.password).type('admin123')
    }

    clickButton(){
        cy.get(this.btn).click()
    }
}