class VideoPage {

  getIframe() {
    return cy.get('iframe[title="Video Player"]')
      .should('exist')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  }

  clicarPlay() {
    this.getIframe()
      .find('.play-button')
      .click()
  }

  pausePlay() {
    this.getIframe()
      .find('.pause-button')
      .should('be.visible')
  }

}

export default new VideoPage()