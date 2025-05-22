import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }

    static get shipping() {
        return cy.get(".cdk-column-Name");
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to delivery method selection"');
    }
}