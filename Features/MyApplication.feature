Feature: Facebook smoke scenario

Scenario Outline: Test login with valid credentials

Given The firefox browser is open with the Facebook page
When The user enters "<username>" and "<password>"
Then user should be able to login successfully
Then application should be closed


Examples:
|username|password|
|aggdy|gr3iut|
|etii45|j8653vk|
|a26uh|k86dy|
|mur5sx|;i7rch|
|      |      |

