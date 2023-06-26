class SummaryPage{
  
    downloadButton(){
        return cy.get('[data-testid="pdf-download-button-cover"]');
    };

    previewFee(){
        return cy.get('[data-testid="summary-price-box__monthly-price"]');
    };

    summaryCodeValue(){
        return cy.get('[data-testid="summary-code-value__code"] div');
    };

    validations(){
        this.downloadButton().should('exist')
        this.previewFee().should('contain','182')
        this.summaryCodeValue().should('contain','SMTXXC3Q')
    }
}

module.exports = new SummaryPage();