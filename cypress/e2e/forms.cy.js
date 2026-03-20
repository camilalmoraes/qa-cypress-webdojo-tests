describe('forms', () => {

    before(() => {
        cy.visit('/')
        cy.fixture('login').then((data) => {

            const user = data.valido
            cy.login(user.email, user.senha)
        })
    })

    it('CT-FORM-001', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        cy.get('#name').type('Camila Louzada Moraes')
        cy.get('#email').type('camila@gmail.com')

        cy.get('#phone').type('83988888888')
            .should('have.value', '(83) 98888-8888') //Para confirmar que o valor é o mesmo com a mascara

        cy.get('#consultancyType').select('Individual')

        //Double check
        cy.contains('span', 'Pessoa Física')
            .should('be.visible')
            .click()
        cy.contains('span', 'Pessoa Jurídica')
            .should('be.not.checked')

        cy.get('#document').type('86083034507')
            .should('have.value', '860.830.345-07')

        //criando constante para utilizar no loop
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

        cy.contains('button', 'Enviar formulário')
            .should('be.visible')
            .click()

        

    })
})