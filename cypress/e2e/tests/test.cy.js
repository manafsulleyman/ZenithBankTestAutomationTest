import { baseUrl } from "../../fixtures/test-environment";

describe(`Current account validation `, () => {
  beforeEach(() => {
    cy.session("visit", () => {
      cy.visit(baseUrl);
    });
  });

  after(() => {
    cy.clearAllSessionStorage();
  });

  it("should be able to access the current account page", () => {
    cy.get("#continue-button").click();
    cy.findByRole("link", { name: /PERSONAL/i }).realHover("mouse");
    cy.findAllByText("Bank Accounts").should("be.visible");
    cy.get(
      "li[class='mega menu-item-1162 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children cg-std-menu parent'] ul[class='sub-menu']"
    ).should("contain.text", "Current Account");
    cy.get("a").contains("Current Account").click({ force: true });
  });

  it("should validate the features of the individual ", () => {
    cy.findAllByText("FEATURES AND BENEFITS").eq(0).click({ force: true });
    cy.get("#ui-id-2").then((items) => {
      expect(items[0]).to.include.text("Zero account opening balance");
      expect(items[0]).to.include.text("Internet Banking");
      expect(items[0]).to.include.text("Zenith Mobile Banking app");
      expect(items[0]).to.include.text("*966# Eazybanking");
      expect(items[0]).to.include.text("MasterCard/Visa/Verve debit card");
      expect(items[0]).to.include.text("Email/SMS Alertz");
      expect(items[0]).to.include.text("Cheque book");
    });
  });

  it("should validate the requirement of ", () => {
    cy.findAllByText("REQUIREMENTS").eq(0).click({ force: true });
    cy.get("#ui-id-4").then((items) => {
      expect(items[0]).to.include.text("Account opening form duly completed");
      expect(items[0]).to.include.text(
        "One recent clear passport photograph of signatory"
      );
      expect(items[0]).to.include.text(
        "Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)"
      );
      expect(items[0]).to.include.text("Residence permit (where applicable)");
      // expect(items[0]).to.include.text("Two independent and satisfactory references");
      expect(items[0]).to.include.text(
        "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)"
      );
    });
  });

  it("should validate the available channels", () => {
    cy.findAllByText("AVAILABLE CHANNELS").eq(0).click({ force: true });
    cy.get("#ui-id-6").then((items) => {
      expect(items[0]).to.include.text("*966# EazyBanking");
      expect(items[0]).to.include.text("Zenith Internet Banking");
      expect(items[0]).to.include.text("In-branch at any Zenith Bank branch");
      expect(items[0]).to.include.text(
        "ZenithDirect – our 24/7 telephone banking"
      );
      expect(items[0]).to.include.text(
        "Zenith Bank ATM nation-wide – free cash withdrawal"
      );
      expect(items[0]).to.include.text(
        "Zenith Mobile Banking App – 24/7 on your smart phone"
      );
      expect(items[0]).to.include.text(
        "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world"
      );
    });
  });
});
