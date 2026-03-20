Cypress.Commands.add('login', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('acessaPagina', (buttonName, pageTitle)=>{
    cy.contains('button', buttonName)
        .should('be.visible')
        .click()
    
    cy.contains('h1', pageTitle)
        .should('be.visible')

})