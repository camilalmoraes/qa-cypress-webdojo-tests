
import FormPage from '../pages/FormPage'

describe('forms', () => {

    beforeEach(() => {
        cy.fixture('login').then((data) => {
            cy.login(data.valido.email, data.valido.senha)
        })
    })

    it('CT-FORM-001 - Envio com campos obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        FormPage.preencherNome('Camila Louzada Moraes')
        FormPage.preencherEmail('camila@gmail.com')
        FormPage.preencherTelefone('83988888888')

        FormPage.selecionarTipoConsultoria('Individual')
        FormPage.selecionarPessoaFisica()
        FormPage.preencherCPF('86083034507')

        FormPage.selecionarCanais()
        FormPage.uploadArquivo()

        FormPage.preencherDetalhes('Blablabla')

        FormPage.adicionarTecnologia('Cypress')
        FormPage.validarTecnologia('Cypress')

        FormPage.aceitarTermos()
        FormPage.enviarFormulario()

        FormPage.validarSucesso()
    })

    it('CT-FORM-02 - Envio do formulário com apenas dados obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        FormPage.preencherNome('Camila Louzada Moraes')
        FormPage.preencherEmail('camila@gmail.com')

        FormPage.aceitarTermos()
        FormPage.enviarFormulario()

        FormPage.validarSucesso()

    })

    it('CT-FORM-003 - Envio sem preencher campos obrigatórios', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        FormPage.preencherTelefone('83988888888')

        FormPage.selecionarTipoConsultoria('Individual')
        FormPage.selecionarPessoaFisica()
        FormPage.preencherCPF('86083034507')

        FormPage.selecionarCanais()
        FormPage.uploadArquivo()

        FormPage.preencherDetalhes('Blablabla')

        FormPage.adicionarTecnologia('Cypress')
        FormPage.validarTecnologia('Cypress')

        FormPage.aceitarTermos()
        FormPage.enviarFormulario()

        FormPage.validarCampoEmail()
        FormPage.validarCampoNome()
    })

    it('CT-FORM-004 - Email em formato inválido', () => {
        cy.acessaPagina('Formulário', 'Consultoria')

        FormPage.preencherNome('Camila Louzada Moraes')
        FormPage.preencherEmail('camila')

        FormPage.aceitarTermos()
        FormPage.enviarFormulario()

        cy.get('#email').then(($input) => {
            const message = $input[0].validationMessage

            expect(message).to.not.be.empty
        })
    })

    it('CT-FORM-005 - Envio sem aceitar termos de uso', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        FormPage.preencherNome('Camila Louzada Moraes')
        FormPage.preencherEmail('camila@gmail.com')

        FormPage.enviarFormulario()

        cy.contains('Você precisa aceitar os termos de uso')
            .should('be.visible')
    })
})