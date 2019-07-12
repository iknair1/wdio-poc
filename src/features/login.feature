Feature: User login to ER portal

Scenario Outline: login
Given I load the ER hub
And I provide <username> and <password>
And I click on the submit button
Then I see <page>
Examples:
| username     | password     | page      |
| testuser1    | password1    | homepage  |
|incorrect_user|incorrect_pwd | errorpage |
