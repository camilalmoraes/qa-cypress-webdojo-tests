Cypress.Commands.add('acessaPagina', (buttonName, pageTitle) => {

    cy.contains('button', buttonName)
        .should('be.visible')
        .click()

    cy.contains('h1', pageTitle)
        .should('be.visible')

})

