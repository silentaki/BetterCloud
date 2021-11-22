import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { mainPage } from "../pages/main.page";

Given("User navigates to BetterCloud website", () => {
  mainPage.visit("https://www.bettercloud.com/");
});

Then("User clicks {string} tab", (link1: string) => {
  mainPage.visit("https://www.bettercloud.com/");
  cy.get('a').contains('Company').invoke('show').trigger('mouseover').click({ force: true })
  cy.wait(1000)
  cy.get('button[aria-label="Menu Toggle Company"]').click({force:true})
  cy.wait(5000)
  
  // cy.document().then($document => {
  //   $document.addEventListener('click',(MouseEvent)=>{
  //     MouseEvent.stopPropagation()
  //   })
//   function DoPrevent(e) {
//     e.preventDefault();
//     e.stopPropagation();
//  }
//    cy.get('li.user-login').off('')
  })
  

  // mainPage.search.should('be.visible')
 // cy.get('button[aria-label="Menu Toggle Company"] + div.wrapper-sub-menu').invoke('show').click({ force: true })
  //mainPage.aboutUs.should("be.visible");
  //cy.get('button[aria-label="Menu Toggle Company"] + div.wrapper-sub-menu').click({force:true})
  // cy.get('a').contains('Company').invoke('show').trigger('mouseover').click({ force: true })

Given("User clicks about us and verify About BetterCloud is visible", () => {
  mainPage.visit("https://www.bettercloud.com/company");
  // mainPage.aboutUs.should("be.visible");
  // mainPage.aboutUs.click();
  mainPage.Title.invoke("prop", "outerHTML").should("contains", "h1");
});

Given("User click leadership link", () => {
  mainPage.visit("https://www.bettercloud.com/leadership");
  // mainPage.leadership.should("be.visible");
  // mainPage.leadership.click();
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
