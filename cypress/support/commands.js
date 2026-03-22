import loginPage from '../pages/LoginPage'

Cypress.Commands.add('login', (email, senha) => {
  loginPage.acessarLogin()
  loginPage.login(email, senha)
  loginPage.validarLoginSucesso()
})

Cypress.Commands.add('acessaPagina', (buttonName, pageTitle) => {

    cy.contains('button', buttonName)
        .should('be.visible')
        .click()

    cy.contains('h1', pageTitle)
        .should('be.visible')

})

