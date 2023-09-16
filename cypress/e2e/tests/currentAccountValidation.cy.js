import { baseUrl } from "../../fixtures/test-environment";
import {
  features,
  requirements,
  availableChannels,
} from "../../fixtures/current-account-test-data";

describe(`Current account validation `, () => {
  before(() => {
    cy.clearAllCookies();
  });

  it("should be able to access the current account page", () => {
    cy.visit(baseUrl);
    cy.get("#continue-button").click();
    cy.findByRole("link", { name: /PERSONAL/i }).realHover("mouse");
    cy.findAllByText("Bank Accounts").should("be.visible");
    cy.get(
      "li[class='mega menu-item-1162 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children cg-std-menu parent'] ul[class='sub-menu']"
    ).should("contain.text", "Current Account");
    cy.get("a").contains("Current Account").click({ force: true });
  });

  it("should validate the features of the individual current account", () => {
    cy.findAllByText("FEATURES AND BENEFITS").eq(0).click({ force: true });
    cy.get("#ui-id-2").then((items) => {
      expect(items[0]).to.include.text(features.featureOne);
      expect(items[0]).to.include.text(features.featureTwo);
      expect(items[0]).to.include.text(features.featureThree);
      expect(items[0]).to.include.text(features.featureFour);
      expect(items[0]).to.include.text(features.featureFive);
      expect(items[0]).to.include.text(features.featureSix);
      expect(items[0]).to.include.text(features.featureSeven);
    });
  });

  it("should validate the requirements of the individual current account", () => {
    cy.findAllByText("REQUIREMENTS").eq(0).click({ force: true });
    cy.get("#ui-id-4").then((items) => {
      expect(items[0]).to.include.text(requirements.requirementOne);
      expect(items[0]).to.include.text(requirements.requirementTwo);
      expect(items[0]).to.include.text(requirements.requirementThree);
      expect(items[0]).to.include.text(requirements.requirementFour);
      // expect(items[0]).to.include.text(requirements.requirementFive);
      expect(items[0]).to.include.text(requirements.requirementSix);
    });
  });

  it("should validate the available channels of the individual current account", () => {
    cy.findAllByText("AVAILABLE CHANNELS").eq(0).click({ force: true });
    cy.get("#ui-id-6").then((items) => {
      expect(items[0]).to.include.text(availableChannels.channelOne);
      expect(items[0]).to.include.text(availableChannels.channelTwo);
      expect(items[0]).to.include.text(availableChannels.channelThree);
      expect(items[0]).to.include.text(availableChannels.channelFour);
      expect(items[0]).to.include.text(availableChannels.channelFive);
      expect(items[0]).to.include.text(availableChannels.channelSix);
      expect(items[0]).to.include.text(availableChannels.channelSeven);
    });
  });
});
