import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

    static get userProfileMenuButton() {
      return cy.get("button[aria-label='Go to user profile']");
    }

    static get searchIcon() {
      return cy.get("#searchQuery")
    }
  
    static get searchField() {
      return cy.get("#searchQuery input");
    }

    static get cardResult() {
      return cy.get("div.mdc-card")
    }

    static get validateLabel() {
      return cy.get('[id*="mat-mdc-dialog-"]');
    }

    static get closeButton() {
      return cy.get(".close-dialog");
    }

    static get reviewsExpand() {
      return cy.get('[id*="mat-expansion-panel-header-"]')
    }

    static get comment() {
      return cy.get(".comment");
    }

    static get reviewArea() {
      return cy.get('textarea[id*="mat-input-"]');
    }

    static get submitReview() {
      return cy.get("#submitButton");
    }

    static get amountOfCards() {
      return cy.get(".mat-mdc-paginator-page-size-select");
    }

    static get amount() {
      return cy.get('[id*="mat-option-"]');
    }

    static get addToBasketButton() {
      return cy.get('button[aria-label="Add to Basket"]');
    }

    static get myBasketButton() {
      return cy.get('button[aria-label="Show the shopping cart"]');
    }

    static get ordersButton() {
      return cy.get('button[aria-label="Show Orders and Payment Menu"]')
    }

    static get menuButton() {
      return cy.get(".mat-mdc-menu-item");
    }
}
