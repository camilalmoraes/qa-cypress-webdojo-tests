describe('Login', ()=> {

  beforeEach(() =>{
    cy.visit('/')
  })

  it('CT-001 - Login com sucesso', ()=> {

    cy.fixture('login').then((data)=>{

      const user = data.valido
    
      cy.login(user.email, user.senha)
    
      cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
      })
  })

  it('CT-002 - Login invalido', ()=> {

    cy.fixture('login').then((data)=> {
      
      const user = data.invalido

      cy.login(user.email, user.senha)
    
      cy.contains('Acesso negado! Tente novamente')
      .should('be.visible')
      })
    
  })

  it('CT-003 - Campos vazios', ()=> {

    cy.contains('button', 'Entrar').click()
    
    cy.contains('Ei, não esqueça de digitar seu email!')
    .should('be.visible')
  })

  it('CT-LOGIN-004 - Email inválido', () => {

    cy.fixture('login').then((data)=>{
      
      const user = data.emailInvalido
      cy.login(user.email, user.senha)

      cy.contains('esse email parece estar errado')
      .should('be.visible')
    })

  })

})
