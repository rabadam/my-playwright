# my-playwright
Feature: Website Navigation  
  As a user  
  I want to navigate across all pages of my website  
  So that I can confirm each page loads correctly  

  Scenario: Navigate to the Home page  
    Given I open the website "https://ruelabadam.com"  
    Then I should see the Home page load successfully  

  Scenario: Navigate to the About page  
    Given I am on the Home page  
    When I click on the "About" link  
    Then I should see the About page load successfully  

  Scenario: Navigate to the Podcast page  
    Given I am on the Home page  
    When I click on the "Podcast" link  
    Then I should see the Podcast page load successfully  

  Scenario: Navigate to the Blog page  
    Given I am on the Home page  
    When I click on the "Blog" link  
    Then I should see the Blog page load successfully  

  Scenario: Navigate to the Contact page  
    Given I am on the Home page  
    When I click on the "Contact" link  
    Then I should see the Contact page load successfully  

  Scenario: Ensure all pages are accessible from each other  
    Given I am on any page of the website  
    When I click on each navigation link  
    Then I should be able to navigate to the respective page successfully  
