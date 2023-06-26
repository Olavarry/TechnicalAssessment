class MotorPage{
  
    selectMotor(){
        return cy.get('[data-testid="seat_engine_selector_card-main-card"]').first().click()
    }
}

module.exports = new MotorPage();