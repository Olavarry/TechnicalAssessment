class OptionalPage{
  
    confirm(){
        return cy.contains('Confirmar e ir al resumen').click()
    }
}

module.exports = new OptionalPage();