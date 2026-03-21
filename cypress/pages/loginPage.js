class loginPage {
    acessarLogin() {
        cy.visit('/')
    }

    preencherEmail(email) {
        cy.get('#email').clear().type(email)
    }

    preencherSenha(senha) {
        cy.get('#password').clear().type(senha)
    }

    clicarEntrar() {
        cy.contains('button', 'Entrar').click()
    }

    validarLoginSucesso() {
        cy.get('[data-cy="welcome-message"]')
            .should('be.visible')
            .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
    }

    validarErroLogin() {
        cy.contains('Acesso negado! Tente novamente')
            .should('be.visible')
    }

    validarCamposObrigatorios() {
        cy.contains('Ei, não esqueça de digitar seu email!')
            .should('be.visible')
    }

    emailInvalido() {
        cy.contains('esse email parece estar errado')
            .should('be.visible')
    }

    login(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarEntrar()
    }

}

export default new loginPage()