import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get addCard() {
        return cy.get("#mat-expansion-panel-header-0");
    }
    
    static get nameField() {
        return cy.get(".mat-expansion-panel-body input").first();
    }

    static get cardNoField() {
        return cy.get(".mat-expansion-panel-body input").eq(1);
    }

    static get monthField() {
        return cy.get("select").first();
    }

    static get yearField() {
        return cy.get("select").eq(1);
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get cardNoColumn() {
        return cy.get(".cdk-column-Number");
    }
}