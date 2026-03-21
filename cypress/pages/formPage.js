class formPage {

    preencherNome(nome) {
        cy.get('#name').type(nome)
    }

    preencherEmail(email) {
        cy.get('#email').type(email)
    }

    preencherTelefone(telefone) {
        cy.get('#phone')
            .type(telefone)
    }

    selecionarTipoConsultoria(tipo) {
        cy.get('#consultancyType').select(tipo)
    }

    selecionarPessoaFisica() {
        cy.contains('span', 'Pessoa Física').click()
    }

    preencherCPF(cpf) {
        cy.get('#document')
            .type(cpf)
            .should('have.value', '860.830.345-07')
    }

    selecionarCanais() {
        const lista = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        lista.forEach((canal) => {
            cy.contains('span', canal).click()
        })
    }

    uploadArquivo() {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/anexo.png', { force: true })
    }

    preencherDetalhes(texto) {
        cy.get('#details').type(texto)
    }

    adicionarTecnologia(tecnologia) {
        cy.get('#technologies')
            .type(tecnologia)
            .type('{enter}')
    }

    validarTecnologia(tecnologia) {
        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tecnologia)
            .should('be.visible')
    }

    aceitarTermos() {
        cy.contains('Li e aceito os').click()
    }

    enviarFormulario() {
        cy.contains('button', 'Enviar formulário').click()
    }

    validarSucesso() {
        cy.contains('consultoria foi enviada com sucesso')
            .should('be.visible')
    }

    validarCampoNome() {
        cy.contains('Digite nome e sobrenome')
            .should('be.visible')
    }

    validarCampoEmail() {
        cy.contains('Informe um email válido')
            .should('be.visible')
    }

}
export default new formPage()
