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

Cypress.Commands.add('preencherCamposObrigatorios', ()=>{
    cy.get('#name').type('Camila Louzada Moraes')
    cy.get('#email').type('camila@gmail.com')
})

Cypress.Commands.add('aceitarTermos', () => {
  cy.contains('Li e aceito os').click()
})

Cypress.Commands.add('enviarFormulario', () => {
  cy.contains('button', 'Enviar formulário').click()
})

Cypress.Commands.add('selecionarCanais', ()=>{
    const listaCanais = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]
        //utilizando loop para selecionar todos os checkbox
        listaCanais.forEach((canais) => {
            cy.contains('span', canais)
                .click()
        })
})