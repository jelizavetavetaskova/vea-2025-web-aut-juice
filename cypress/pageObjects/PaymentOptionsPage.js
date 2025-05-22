import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get card() {
        return cy.get(".mat-mdc-cell");
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to review"]')
    }
}