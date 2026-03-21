class kanbanBoard {


    moverCard() {
        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable="true"]', 'Criar testes E2E')
            .trigger('dragstart', { dataTransfer })

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })
    }

    validaAtualizacao() {
        const dataTransfer = new DataTransfer()

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })
            .find('h3')
            .should('have.text', 'Done (5)')
    }

}
export default new kanbanBoard()