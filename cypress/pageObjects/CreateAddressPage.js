import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage {
    static get url() {
        return "/#/address/create";
    }

    static get countryField() {
        return cy.get('#mat-input-1');
    }

    static get nameField() {
        return cy.get('#mat-input-2')
    }
    
    static get phoneNoField() {
        return cy.get('#mat-input-3');
    }

    static get zipCodeField() {
        return cy.get("#mat-input-4")
    }

    static get addressField() {
        return cy.get("#address");
    }

    static get cityField() {
        return cy.get("#mat-input-6");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get nameCell() {
        return cy.get(".cdk-column-Name");
    }

    static get addressCell() {
        return this.nameCell.contains("Elisa").parent().find(".cdk-column-Address");
    }
}