import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.notYetCostomerLink.click();
      const emailNumber = Math.floor(Math.random() * 101);
      const email = "email_" + emailNumber.toString() + "@ebox.com";
      const password = "randompassword123#";
      RegistrationPage.emailField.type(email);
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      RegistrationPage.securityQuestionField.click();
      RegistrationPage.menuOptions.contains("Your favorite book?").click();
      RegistrationPage.answerField.type("RandomAnswer");
      RegistrationPage.registerButton.click();
      LoginPage.emailField.type(email);
      LoginPage.passwordField.type(password);
      LoginPage.loginButton.click();
      HomePage.accountButton.click();
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("Lemon{enter}");
      HomePage.cardResult.contains("Lemon Juice (500ml)").click();
      HomePage.validateLabel.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("500ml{enter}");
      HomePage.cardResult.contains("Lemon Juice (500ml)").click();
      HomePage.validateLabel.should("contain.text", "Sour but full of vitamins.");
    });
    
    it("Search 500ml and validate cards", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("500ml{enter}");
      HomePage.cardResult.contains("Eggfruit Juice (500ml)").click();
      HomePage.validateLabel.should("contain.text", "Now with even more exotic flavour.");
      HomePage.closeButton.click();

      HomePage.cardResult.contains("Lemon Juice (500ml)").click();
      HomePage.validateLabel.should("contain.text", "Sour but full of vitamins.");
      HomePage.closeButton.click();

      HomePage.cardResult.contains("Strawberry Juice (500ml)").click();
      HomePage.validateLabel.should("contain.text", "Sweet & tasty!");
      HomePage.closeButton.click();
    });

    it("Read a review", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("King{enter}");
      HomePage.cardResult.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      HomePage.reviewsExpand.click();
      HomePage.comment.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
    });

    it("Add a review", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("Raspberry{enter}");
      HomePage.cardResult.contains("Raspberry Juice (1000ml)").click();
      HomePage.reviewArea.type("Tastes like metal");
      HomePage.submitReview.click();
      HomePage.reviewsExpand.click();
      HomePage.comment.should("contain.text", "Tastes like metal")
    });

    it("Validate product card amount", () => {
      HomePage.amountOfCards.should("contain.text", "12");
      HomePage.amountOfCards.click();
      HomePage.amount.contains("24").click();
      HomePage.amountOfCards.should("contain.text", "24");
      HomePage.amountOfCards.click();
      HomePage.amount.contains("36").click();
      HomePage.amountOfCards.should("contain.text", "36");
    });

    it("Buy Girlie T-shirt", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("Girlie{enter}");
      HomePage.addToBasketButton.click();
      HomePage.myBasketButton.contains("Your Basket").click();
      BasketPage.checkoutButton.click();
      SelectAddressPage.address.contains("United Fakedom").click();
      SelectAddressPage.continueButton.contains("Continue").click();
      DeliveryMethodPage.shipping.contains("Standard Delivery").click();
      DeliveryMethodPage.continueButton.contains("Continue").click();
      PaymentOptionsPage.card.contains("5678").parent().find(".mdc-radio__native-control").click();
      PaymentOptionsPage.continueButton.click();
      OrderSummaryPage.checkoutButton.click();
      OrderCompletionPage.thankyouForOrder.should("contain.text", "Thank you for your purchase!")
    });

    it("Add address", () => {
      HomePage.accountButton.click();
      HomePage.ordersButton.click();
      HomePage.menuButton.contains("My saved addresses").click();
      SavedAddressesPage.newAddressButton.click();
      CreateAddressPage.countryField.type("Latvia");
      CreateAddressPage.nameField.type("Elisa");
      CreateAddressPage.phoneNoField.type("20000000");
      CreateAddressPage.zipCodeField.type("LV-3000");
      CreateAddressPage.addressField.type("Ganibu iela 1 - 1");
      CreateAddressPage.cityField.type("Riga");
      CreateAddressPage.submitButton.click();
      CreateAddressPage.addressCell.should("contain.text", "Ganibu iela 1 - 1, Riga, , LV-3000")
    });

    
    it("Add payment option", () => {
      HomePage.accountButton.click();
      HomePage.ordersButton.click();
      HomePage.menuButton.contains("My Payment Options").click();
      SavedPaymentMethodsPage.addCard.click();
      SavedPaymentMethodsPage.nameField.type("Elisa");
      SavedPaymentMethodsPage.cardNoField.type("1234567890123456");
      SavedPaymentMethodsPage.monthField.select("7");
      SavedPaymentMethodsPage.yearField.select("2090");
      SavedPaymentMethodsPage.submitButton.click();

      SavedPaymentMethodsPage.cardNoColumn.should("contain.text", "3456");
    });
  });
});
