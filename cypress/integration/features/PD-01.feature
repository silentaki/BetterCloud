Feature: : Create csv file with leadership membername and title
    create csv file and store the names and excerpts from the profile
    @TC
    Scenario: Store the names and excerpts from the profile into csv file
        Given User navigates to BetterCloud website
        #Then User clicks "Company" tab
        Then User clicks about us and verify About BetterCloud is visible
        And User click leadership link
        Then User saves names and excerpts from the profile into csv file