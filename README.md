
# CyPress: An E2E Test Automation Framework


## Pre-requisite Software

  * Install Visual Studio Code (or may be your favourite IDE)
  * Install node.js (npm) latest stable version
  * Browsers (Chrome is must)
  * Install the latest (stable) version of git
  * Install the latest (stable) version of JRE (Java Runtime Environment)
  * Install Jenkins

  ## Tech-Stack
      - Node
      - cypress
      - TypeScript (Superset of JavaScript)
      - Cucumber
      - Cypress Dashboard
      - mochawesome-report
      - Jenkins


  ## Configuration & Run

  * git clone https://github.com/silentaki/BetterCloud
  * npm install (Installs all dependencies)

  ## CLI Access

  * npm run openCypress (Opens the UI)
  * npm run test (headless run)
  * npm run headTest (with UI)
  * npm run chromeTest (with Chrome latest version)
  * node_modules/.bin/cypress run --record --key b0e0ef56-b1b8-4d68-9c77-59d797de4d19 (cypress dashboard command)

  ## View Cypress Dasboard 

  - https://dashboard.cypress.io/projects/nyxe43/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

  ## Setup Jenkins (CI/CD)

   - https://updates.jenkins.io/download/war/ (download 2.321)
   - In terminal run: sudo java -jar jenkins.war
   - Open http://localhost:8080/
   - Enter the key from the terminal and setup the account

   ## Setup Project

   - Create Free Style Project and go to configuration
   - Under the project is parameterised 
     Select: string parameter
     Name: Script 
     Choices: runHeadless, chromeTest

   - Under Source Code Management
     Select: git
     Repository URL: https://github.com/silentaki/BetterCloud.git
     Branch Specifier: */master

   - Under Build
     Select: Execute Shell (2)
     Shell 1: npm --version
              npm install
     Shell 2: npm run "$Script"
     






