import PAGES from '../../utils/pages'

describe('Fourth parallel', () => {
  before(() => {
    cy.visit(PAGES.QA_JOBS_LISTING)

      .get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .click()
  })
  beforeEach(() => {
    Cypress.Cookies.preserveOnce(['CookieConsent'])
  })

  it('Logo is visible', () => {
    cy.get('.desktop .logo')
      .should('be.visible')          
  })

  it('Deliberate fail', () => {
    cy.wrap(true)
      .should('eql', false)
  })

  it('Deliberate wait for 10s', () => {
    cy.wait(10000)
  })
  
  it('There should be jobs for QA in GFT', () => {
    cy.get('.jobTitle')
      .should('have.length.gt', 0)
  })
})
