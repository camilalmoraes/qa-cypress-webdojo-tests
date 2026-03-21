import videoPage from '../pages/videoPage'
import loginPage from '../pages/loginPage'

//Testando interação com iFrames
describe('Reproduzir video', () => {

    it('CT-VIDEO-001 - Reprodução do vídeo ao clicar no player', () => {

        loginPage.acessarLogin()

        cy.fixture('login').then((data) => {

            loginPage.login(data.valido.email, data.valido.senha)

            loginPage.validarLoginSucesso()
        })

        cy.acessaPagina('Video', 'Video')

        videoPage.getIframe()
        videoPage.clicarPlay()
        videoPage.pausePlay()
    })
})