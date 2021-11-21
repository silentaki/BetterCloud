/// <reference types="cypress" />
class MainPage {

  get aboutUs(){
      return cy.get('span.menu-image-title').contains('About Us')
  }

  get leadership(){
      return cy.get('span.menu-image-title').contains('Leadership')
  }

  get Title(){
      return cy.get('div.fl-module-content h1')
  }

  get leadershipName(){
      return cy.get('h4.TeamBubbles-person_name')
  }

  get leadershipTitle(){
    return cy.get('p.TeamBubbles-person_title')
}

  get leadershipHeader() {
      return cy.get('div.fl-module-content h2')
  }

  get search(){
      return cy.get('button[aria-label="Search"]')
  }
  
  visit(url) {
    cy.visit(url)
}
   selectLink(link: string) {
    return cy.get('a').contains(link).click();
   }
}

export const mainPage = new MainPage();