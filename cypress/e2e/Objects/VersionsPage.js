class VersionsPage{
  
    selectFirstVersion(){
        return cy.get('[data-testid ="version-selector__card"]').first().click()
    }
}

module.exports = new VersionsPage();