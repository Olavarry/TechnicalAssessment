class DesignPage{
  
    selectColor(){
        return cy.get('[data-testid="picker-group__parts-group"] div').contains('ESTANDAR').click()
    };

    confirm(){
        return cy.get('[data-testid="seat-cta-container"]').click()
        
    };
}

module.exports = new DesignPage();