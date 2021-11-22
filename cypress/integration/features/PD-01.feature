Feature: : Create csv file with leadership membername and title
    create csv file and store the names and excerpts from the profile
    @TC
    Scenario: Store the names and excerpts from the profile into csv file
        Given User navigates to BetterCloud website
        Then User navigate to about us page and verify About BetterCloud is visible
        And User navigate to leadership page
        Then User saves names and excerpts from the profile into csv file