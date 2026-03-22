import LoginPage from "../pages/LoginPage"
import KanbanPage from "../pages/KanbanPage"

//Aprendendo a usar drag and drop
describe('Kanban Board', () => {

    it('CT-Kanban-001 - Mover tarefa para proxima coluna', () => {

        cy.fixture('login').then((data) => {
            cy.login(data.valido.email, data.valido.senha)
        })

        cy.acessaPagina('Kanban', 'Kanban Board')
        KanbanPage.moverCard()
        KanbanPage.validaAtualizacao()

    })
})