import videoPage from '../pages/VideoPage'

//Testando interação com iFrames
describe('Reproduzir video', () => {

    it('CT-VIDEO-001 - Reprodução do vídeo ao clicar no player', () => {

        cy.fixture('login').then((data) => {
            cy.login(data.valido.email, data.valido.senha)

            cy.acessaPagina('Video', 'Video')

            videoPage.getIframe()
            videoPage.clicarPlay()
            videoPage.pausePlay()
        })
    })
})
