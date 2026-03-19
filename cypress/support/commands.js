Cypress.Commands.add('login', (email, senha)=> {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.contains('button', 'Entrar').click()
})