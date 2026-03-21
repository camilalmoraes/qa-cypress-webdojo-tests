
import formPage from '../pages/FormPage'
import loginPage from '../pages/loginPage'

describe('forms', () => {

    beforeEach(() => {
        loginPage.acessarLogin()

        cy.fixture('login').then((data) => {
            loginPage.preencherEmail(data.valido.email)
            loginPage.preencherSenha(data.valido.senha)
            loginPage.clicarEntrar()
        })
    })

    it('CT-FORM-001 - Envio com campos obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        formPage.preencherNome('Camila Louzada Moraes')
        formPage.preencherEmail('camila@gmail.com')
        formPage.preencherTelefone('83988888888')

        formPage.selecionarTipoConsultoria('Individual')
        formPage.selecionarPessoaFisica()
        formPage.preencherCPF('86083034507')

        formPage.selecionarCanais()
        formPage.uploadArquivo()

        formPage.preencherDetalhes('Blablabla')

        formPage.adicionarTecnologia('Cypress')
        formPage.validarTecnologia('Cypress')

        formPage.aceitarTermos()
        formPage.enviarFormulario()

        formPage.validarSucesso()
    })

    it('CT-FORM-02 - Envio do formulário com apenas dados obrigatórios válidos', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        formPage.preencherNome('Camila Louzada Moraes')
        formPage.preencherEmail('camila@gmail.com')

        formPage.aceitarTermos()
        formPage.enviarFormulario()

        formPage.validarSucesso()

    })

    it('CT-FORM-003 - Envio sem preencher campos obrigatórios', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        formPage.preencherTelefone('83988888888')

        formPage.selecionarTipoConsultoria('Individual')
        formPage.selecionarPessoaFisica()
        formPage.preencherCPF('86083034507')

        formPage.selecionarCanais()
        formPage.uploadArquivo()

        formPage.preencherDetalhes('Blablabla')

        formPage.adicionarTecnologia('Cypress')
        formPage.validarTecnologia('Cypress')

        formPage.aceitarTermos()
        formPage.enviarFormulario()

        formPage.validarCampoEmail()
        formPage.validarCampoNome()
    })

    it('CT-FORM-004 - Email em formato inválido', () => {
        cy.acessaPagina('Formulário', 'Consultoria')

        formPage.preencherNome('Camila Louzada Moraes')
        formPage.preencherEmail('camila')

        formPage.aceitarTermos()
        formPage.enviarFormulario()

        cy.get('#email').then(($input) => {
            const message = $input[0].validationMessage

            expect(message).to.not.be.empty
        })
    })

    it('CT-FORM-005 - Envio sem aceitar termos de uso', () => {

        cy.acessaPagina('Formulário', 'Consultoria')

        formPage.preencherNome('Camila Louzada Moraes')
        formPage.preencherEmail('camila@gmail.com')

        formPage.enviarFormulario()

        cy.contains('Você precisa aceitar os termos de uso')
            .should('be.visible')
    })
})