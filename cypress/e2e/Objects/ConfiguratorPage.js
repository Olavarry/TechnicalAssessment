class ConfigPage{

    clickVehicle(){
        return cy.get('[data-testid="seat-model-selector__image"][alt="IBIZA"]').click()
    };

    acceptCookies(){
        return cy.contains('Aceptar Todas las Cookies').scrollIntoView().click()
    };
    
    selectFirstVersion(){
        return cy.get(['data-testid="version-selector__card"']).first().click()
    };
}

module.exports = new ConfigPage();