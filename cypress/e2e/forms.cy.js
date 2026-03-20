
describe('forms', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('login').then((data) => {

            const user = data.valido
            cy.login(user.email, user.senha)
        })
    })

    it('CT-FORM-001 - Envio com campos obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        cy.preencherCamposObrigatorios()

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

        cy.selecionarCanais()

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/anexo.png', { force: true })

        cy.get('#details').type('Blablablablablabla')

        cy.get('#technologies').type('Cypress')
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', 'Cypress')
            .should('be.visible')

        cy.aceitarTermos()

        cy.enviarFormulario()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')
    })

    it('CT-FORM-02 - Envio do formulário com apenas dados obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        cy.preencherCamposObrigatorios()

        cy.aceitarTermos()

        cy.enviarFormulario()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')

    })

    it('CT-FORM-003 - Envio sem preencher campos obrigatórios', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        cy.get('#phone').type('83988888888')
            .should('have.value', '(83) 98888-8888')

        cy.get('#consultancyType').select('Individual')

        //Double check
        cy.contains('span', 'Pessoa Física')
            .should('be.visible')
            .click()
        cy.contains('span', 'Pessoa Jurídica')
            .should('be.not.checked')

        cy.get('#document').type('86083034507')
            .should('have.value', '860.830.345-07')

        cy.selecionarCanais()

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/anexo.png', { force: true })

        cy.get('#details').type('Blablablablablabla')

        cy.get('#technologies').type('Cypress')
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', 'Cypress')
            .should('be.visible')

        cy.aceitarTermos()

        cy.enviarFormulario()

        cy.contains('Digite nome e sobrenome')
            .should('be.visible')

        cy.contains('Informe um email válido')
            .should('be.visible')
    })

    it('CT-FORM-004 - Email em formato inválido', () => {
        cy.acessaPagina('Formulário', 'Consultoria')

        cy.preencherCamposObrigatorios()

        cy.aceitarTermos()

        cy.enviarFormulario()

        cy.get('#email').then(($input) => {
            const message = $input[0].validationMessage

            expect(message).to.not.be.empty
        })
    })

    it('CT-FORM-005 - Envio sem aceitar termos de uso', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        cy.preencherCamposObrigatorios()

        cy.enviarFormulario()

        cy.contains('Você precisa aceitar os termos de uso')
            .should('be.visible')
    })
})