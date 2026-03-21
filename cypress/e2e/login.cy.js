import loginPage from '../pages/loginPage'

describe('Login', () => {

  beforeEach(() => {
    loginPage.acessarLogin()
  })

  it('CT-LOGIN-001 - Login com sucesso', () => {

    cy.fixture('login').then((data) => {

      loginPage.login(data.valido.email, data.valido.senha)

      loginPage.validarLoginSucesso()
    })
  })

  it('CT-LOGIN-002 - Login com senha inválida', () => {

    cy.fixture('login').then((data) => {

      loginPage.login(data.valido.email, data.valido.senha)

      loginPage.validarErroLogin()
    })

  })

  it('CT-LOGIN-003 - Login com campos vazios', () => {

    loginPage.clicarEntrar()

    loginPage.validarCamposObrigatorios()
  })

  it('CT-LOGIN-004 - Email com formato inválido', () => {

    cy.fixture('login').then((data) => {

      loginPage.login(data.emailInvalido.email, data.emailInvalido.senha)
      loginPage.emailInvalido()
    })

  })

})
