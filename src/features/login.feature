Feature: User login to ER portal

Scenario Outline: login
Given I load the ER hub
And I provide <username> and <password>
And I click on the submit button
Then I see the homepage
Examples:
| username     | password     |
| testuser1    | password1    |
|incorrect_user|incorrect_pwd |
