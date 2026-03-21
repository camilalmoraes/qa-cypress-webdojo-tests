import loginPage from "../pages/loginPage"
import kanbanPage from "../pages/kanbanPage"

//Aprendendo a usar drag and drop
describe('Kanban Board', () => {

    it('CT-Kanban-001 - Mover tarefa para proxima coluna', () => {

        loginPage.acessarLogin()

        cy.fixture('login').then((data) => {
            loginPage.preencherEmail(data.valido.email)
            loginPage.preencherSenha(data.valido.senha)
            loginPage.clicarEntrar()
        })

        cy.acessaPagina('Kanban', 'Kanban Board')
        kanbanPage.moverCard()
        kanbanPage.validaAtualizacao()

    })
})