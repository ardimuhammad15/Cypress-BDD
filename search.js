const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User visit the website and click the search box', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#searchTerm').click()
})

When('User insert keyword "banking" in the search box', () => {
	cy.get('#searchTerm').type('banking{enter}')
})

Then('the system displays the appropriate search results', () => {
	cy.get('a').contains('Zero - Personal Banking - Loans - Credit Cards')
})
