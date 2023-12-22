import SearchPage from './search.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User visit the website and click the search box', () => {
	SearchPage.visit()
    SearchPage.searchBox()
})

When('User insert keyword "banking" in the search box', () => {
	SearchPage.fillSearchBox()
    // cy.get('#searchTerm').type('banking{enter}')
})

Then('the system displays the appropriate search results', () => {
	SearchPage.display()
    // cy.get('a').contains('Zero - Personal Banking - Loans - Credit Cards')
})
