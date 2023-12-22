const URL = 'http://zero.webappsecurity.com/index.html'
const a = 'a'
const PASSWORD = '#user_password'
const Search_Box = '#searchTerm'

class SearchPage {
	static visit() {
		cy.visit(URL)
	}

    static searchBox() {
		cy.get(Search_Box).click()
	}

	static fillSearchBox(search) {
		cy.get(Search_Box).type('banking{enter}')
	}

	static display() {
		cy.get(a).contains('Zero - Personal Banking - Loans - Credit Cards')
	}
}
export default SearchPage
