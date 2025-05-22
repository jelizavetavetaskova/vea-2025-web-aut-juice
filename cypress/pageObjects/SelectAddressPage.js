import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
    }

    static get address() {
        return cy.get(".cdk-column-Country");
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to payment selection"]');
    }
}