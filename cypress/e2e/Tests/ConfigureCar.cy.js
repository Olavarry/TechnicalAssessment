/// <reference types="Cypress" />

//Import objects
import ConfigPage from '../Objects/ConfiguratorPage.js'
import VersionsPage from '../Objects/VersionsPage.js'
import MotorPage from '../Objects/MotorPage.js'
import DesignPage from '../Objects/DesignPage.js'
import OptionalPage from '../Objects/OptionalPage.js'
import SummaryPage from '../Objects/SummaryPage.js'

describe('Configure vehicle', () => {
    
    it('Validate download button and preview fee', () =>{

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test when there is an unhandled website exception
        return false
      });

      //Using intercept to catch relevant requests that I will wait to happen to continue testing.
      cy.intercept('GET', 'https://product-car-configurator.prod.code.seat.cloud.vwgroup.com/car-configurator-adapter/v1/engines/engine-info')
        .as('engineInfo');
      cy.intercept('GET', 'https://product-car-configurator.prod.code.seat.cloud.vwgroup.com/car-configurator-adapter/v1/equipments*')
        .as('equipments');
      cy.intercept('POST', 'https://product-car-configurator.prod.code.seat.cloud.vwgroup.com/car-configurator-adapter/v1/equipments*')
        .as('colorSelected');
        

      cy.visit('https://www.seat.es/configurador.html/model?wf=seat-es-es')
      
      ConfigPage.acceptCookies();
      //Wait for this request to happen before doing further actions
      cy.wait('@engineInfo'); 
      ConfigPage.clickVehicle();
      VersionsPage.selectFirstVersion();
      //Wait for this request to happen before doing further actions
      cy.wait('@equipments');
      MotorPage.selectMotor();
      //Wait for this request to happen before doing further actions  
      cy.wait('@engineInfo')   
      DesignPage.selectColor();  
      //Wait for this request to happen before doing further actions
      cy.wait('@colorSelected');
      DesignPage.confirm();
      OptionalPage.confirm();
      //Run validations
      SummaryPage.validations();
    });
});