Feature: Search Feature

    As a valid user
    I want to search data quickly

    Scenario: Search data with keyword
        Given User visit the website and click the search box
        When User insert keyword "banking" in the search box
        Then the system displays the appropriate search results