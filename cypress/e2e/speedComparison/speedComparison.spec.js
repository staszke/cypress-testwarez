import TABLE_CSS from '../../utils/css/Table.css'
import REGEX from '../../utils/regex'

const rowRegex = Cypress._.values(REGEX).join('|')

describe('Comparison', () => {
  beforeEach(function() {
    cy.visit('speedComparison.html')
      .then(() => {
        
    cy.wrap(Date.now())
        .as('zeroTime')
      })
  })

  it('Cypress API - Split Regex', function() { 
    cy.get(TABLE_CSS.DATA_CELLS.GENERIC_TIDM)
      .each(tidmCell => {
        cy.wrap(tidmCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.TIDM))

      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NAME)
      .each(nameCell => {
        cy.wrap(nameCell)
        .invoke('text')
        .should('match', new RegExp(REGEX.GENERAL_TEXT))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_CURR)
      .each(currCell => {
        cy.wrap(currCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.CURRENCY))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_MCAP)
      .each(mcapCell => {
        cy.wrap(mcapCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_LPRC)
      .each(lprcCell => {
        cy.wrap(lprcCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NCHG)
      .each(nchgCell => {
        cy.wrap(nchgCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_PCHG)
      .each(pchgCell => {
        cy.wrap(pchgCell)
          .invoke('text')
          .should('match', new RegExp(REGEX.PERCENT_CHANGE))
      })
      .then(() => {
        cy.wrap(Date.now())
        .then(date => date - this.zeroTime)
        .as('justCypressSplitRegex')
      })      
  })
  
  it('Cypress API & CJS - Split regex', function() {
    cy.get(TABLE_CSS.DATA_CELLS.GENERIC_TIDM)
      .each(tidmCell => {
        expect(tidmCell.text()).to.match(new RegExp(REGEX.TIDM))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NAME)
      .each(nameCell => {
        expect(nameCell.text()).to.match(new RegExp(REGEX.GENERAL_TEXT))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_CURR)
      .each(currCell => {
        expect(currCell.text()).to.match(new RegExp(REGEX.CURRENCY))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_MCAP)
      .each(mcapCell => {
        expect(mcapCell.text()).to.match(new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_LPRC)
      .each(lprcCell => {
        expect(lprcCell.text()).to.match(new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NCHG)
      .each(nchgCell => {
        expect(nchgCell.text()).to.match(new RegExp(REGEX.PRICE))
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_PCHG)
      .each(pchgCell => {
        expect(pchgCell.text()).to.match(new RegExp(REGEX.PERCENT_CHANGE))
      })
      .then(() => {
        cy.wrap(Date.now())
          .then(date => date - this.zeroTime)
          .as('cypressCjsSplitRegex')
      })

      
  })
  
  it('With lodash - Split regex', function() {
    cy.get(TABLE_CSS.DATA_CELLS.GENERIC_TIDM)
      .then(tidmCellList => {
        Cypress._.map(Cypress.$.makeArray(tidmCellList), 'innerText')
          .forEach(tidmCellText => {
            expect(tidmCellText).to.match(new RegExp(REGEX.TIDM))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NAME)
      .then(nameCellList => {
        Cypress._.map(Cypress.$.makeArray(nameCellList), 'innerText')
          .forEach(nameCellText => {
            expect(nameCellText).to.match(new RegExp(REGEX.GENERAL_TEXT))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_CURR)
      .then(currCellList => {
        Cypress._.map(Cypress.$.makeArray(currCellList), 'innerText')
          .forEach(currCellText => {
            expect(currCellText).to.match(new RegExp(REGEX.CURRENCY))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_MCAP)
      .then(mcapCellList => {
        Cypress._.map(Cypress.$.makeArray(mcapCellList), 'innerText')
          .forEach(mcapCellText => {
            expect(mcapCellText).to.match(new RegExp(REGEX.PRICE))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_LPRC)
      .then(lprcCellList => {
        Cypress._.map(Cypress.$.makeArray(lprcCellList), 'innerText')
          .forEach(lprcCellText => {
            expect(lprcCellText).to.match(new RegExp(REGEX.PRICE))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_NCHG)
      .then(nchgCellList => {
        Cypress._.map(Cypress.$.makeArray(nchgCellList), 'innerText')
          .forEach(nchgCellText => {
            expect(nchgCellText).to.match(new RegExp(REGEX.PRICE))
          })
      })

      .get(TABLE_CSS.DATA_CELLS.GENERIC_PCHG)
      .then(pchgCellList => {
        Cypress._.map(Cypress.$.makeArray(pchgCellList), 'innerText')
          .forEach(pchgCellText => {
            expect(pchgCellText).to.match(new RegExp(REGEX.PERCENT_CHANGE))
          })
      })
      .then(() => {
        cy.wrap(Date.now())
          .then(date => date - this.zeroTime)
          .as('lodashSplitRegex')
      })

  })

  it('Cypress API - Joint Regex', function() {
    cy.get(TABLE_CSS.GENERIC_DATA_ROW)
      .each(row => {
        cy.wrap(row)
          .invoke('text')
          .should('match', new RegExp(rowRegex))
      })
      .then(() => {
        cy.wrap(Date.now())
          .then(date => date - this.zeroTime)
          .as('justCypressJointRegex')
      })

  })

  it('Cypress API & CJS - Joint regex', function() {
    cy.get(TABLE_CSS.GENERIC_DATA_ROW)
      .each(row => {
        expect(row.text()).to.match(new RegExp(rowRegex))
      })
      .then(() => {
        cy.wrap(Date.now())
          .then(date => date - this.zeroTime)
          .as('cypressCjsJointRegex')
      })

  })

  it('With lodash - Joint regex', function() {
    cy.get(TABLE_CSS.GENERIC_DATA_ROW)
      .then(dataRows => {
        Cypress._.map(Cypress.$.makeArray(dataRows), 'innerText')
          .forEach(rowText => {
            expect(rowText).to.match(new RegExp(rowRegex))
          })
      })
      .then(() => {
        cy.wrap(Date.now())
          .then(date => date - this.zeroTime)
          .as('lodashJointRegex')
      })

  })

  it('Results', function() {
    cy.log(`"Cypress API - Split regex" took ${this.justCypressSplitRegex/1000}s`)
    cy.log(`"Cypress API & CJS - Split regex" took ${this.cypressCjsSplitRegex/1000}s`)
    cy.log(`"Lodash - Split regex" took ${this.lodashSplitRegex/1000}s`)
    cy.log(`"Cypress API - Joint regex" took ${this.justCypressJointRegex/1000}s`)
    cy.log(`"Cypress API & CJS - Joint regex" took ${this.cypressCjsJointRegex/1000}s`)
    cy.log(`"Lodash - Joint regex" took ${this.lodashJointRegex/1000}s`)
  })

})
