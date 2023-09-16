import { baseUrl } from "../../fixtures/test-environment";
import {
  features,
  requirements,
  availableChannels,
} from "../../fixtures/current-account-test-data";

describe("Current account info validation", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit(baseUrl);
    cy.get("#continue-button").click();
    cy.findByRole("link", { name: /PERSONAL/i }).realHover("mouse");
    cy.findAllByText("Bank Accounts").should("be.visible");
    cy.contains("Current Account").click({ force: true });
  });

  it("should validate the features of the individual current account", () => {
    cy.findAllByText("FEATURES AND BENEFITS").eq(0).click({ force: true });
    cy.get("#ui-id-2")
      .should("include.text", features.featureOne)
      .and("include.text", features.featureTwo)
      .and("include.text", features.featureThree)
      .and("include.text", features.featureFour)
      .and("include.text", features.featureFive)
      .and("include.text", features.featureSix)
      .and("include.text", features.featureSeven);
  });

  it("should validate the requirements of the individual current account", () => {
    cy.findAllByText("REQUIREMENTS").eq(0).click({ force: true });
    cy.get("#ui-id-4")
      .should("include.text", requirements.requirementOne)
      .and("include.text", requirements.requirementTwo)
      .and("include.text", requirements.requirementThree)
      .and("include.text", requirements.requirementFour)
      .and("include.text", requirements.requirementSix);
  });

  it("should validate the available channels of the individual current account", () => {
    cy.findAllByText("AVAILABLE CHANNELS").eq(0).click({ force: true });
    cy.get("#ui-id-6")
      .should("include.text", availableChannels.channelOne)
      .and("include.text", availableChannels.channelTwo)
      .and("include.text", availableChannels.channelThree)
      .and("include.text", availableChannels.channelFour)
      .and("include.text", availableChannels.channelFive)
      .and("include.text", availableChannels.channelSix)
      .and("include.text", availableChannels.channelSeven);
  });
});
