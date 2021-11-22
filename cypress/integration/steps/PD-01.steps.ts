import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { mainPage } from "../pages/main.page";

Given("User navigates to BetterCloud website", () => {
  mainPage.visit("https://www.bettercloud.com/");
});

Given("User navigate to about us page and verify About BetterCloud is visible", () => {
  mainPage.visit("https://www.bettercloud.com/company");
  mainPage.Title.should("be.visible");
  mainPage.Title.invoke("prop", "outerHTML").should("contains", "h1");
});

Given("User navigate to leadership page", () => {
  mainPage.visit("https://www.bettercloud.com/leadership");
  mainPage.leadershipHeader.should("be.visible");
  mainPage.leadershipHeader.invoke("text").should("contains", "Leadership");
});

Given("User saves names and excerpts from the profile into csv file", () => {
  mainPage.leadershipName
    .each(($el, index, $nameList) => {})
    .then(($nameList) => {
      cy.writeFile(
        "cypress/integration/export/names.csv",
        $nameList.text(),
        "utf-8"
      );
    });

  mainPage.leadershipTitle
    .each(($el, index, $titleList) => {
    })
    .then(($titleList) => {
      cy.writeFile(
        "cypress/integration/export/names.csv",
        $titleList.text(),
        "utf-8", { flag: 'a+' }
      );
    });
});
