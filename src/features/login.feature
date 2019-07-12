Feature: User login to ER portal

Scenario Outline: login
Given I load the ER hub
And I provide <username> and <password>
And I click on the submit button
Then I see <page>
Examples:
|username|password|login component|

