import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
    static get url() {
        return "/#/order-completion/";
    }

    static get thankyouForOrder() {
        return cy.get(".confirmation");
    }
}