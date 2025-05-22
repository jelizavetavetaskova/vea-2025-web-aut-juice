import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
    static get url() {
        return "/#/address/saved";
    }

    static get newAddressButton() {
        return cy.get(".btn-new-address");
    }
}