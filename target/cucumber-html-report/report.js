$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook smoke scenario",
  "description": "",
  "id": "facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "aggdy",
        "gr3iut"
      ],
      "line": 13,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "etii45",
        "j8653vk"
      ],
      "line": 14,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "a26uh",
        "k86dy"
      ],
      "line": 15,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "mur5sx",
        ";i7rch"
      ],
      "line": 16,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;5"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 17,
      "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"aggdy\" and \"gr3iut\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.the_firefox_browser_is_open_with_the_Facebook_page()"
});
formatter.result({
  "duration": 50025922161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aggdy",
      "offset": 17
    },
    {
      "val": "gr3iut",
      "offset": 29
    }
  ],
  "location": "SmokeTest.the_user_enters_and(String,String)"
});
formatter.result({
  "duration": 1055042308,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3810811000,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.closeBrowser()"
});
formatter.result({
  "duration": 1260037736,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"etii45\" and \"j8653vk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.the_firefox_browser_is_open_with_the_Facebook_page()"
});
formatter.result({
  "duration": 12648682545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "etii45",
      "offset": 17
    },
    {
      "val": "j8653vk",
      "offset": 30
    }
  ],
  "location": "SmokeTest.the_user_enters_and(String,String)"
});
formatter.result({
  "duration": 964930121,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2225717885,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.closeBrowser()"
});
formatter.result({
  "duration": 797731688,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"a26uh\" and \"k86dy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.the_firefox_browser_is_open_with_the_Facebook_page()"
});
formatter.result({
  "duration": 14134866752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a26uh",
      "offset": 17
    },
    {
      "val": "k86dy",
      "offset": 29
    }
  ],
  "location": "SmokeTest.the_user_enters_and(String,String)"
});
formatter.result({
  "duration": 899532331,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4156137670,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.closeBrowser()"
});
formatter.result({
  "duration": 926312077,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"mur5sx\" and \";i7rch\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.the_firefox_browser_is_open_with_the_Facebook_page()"
});
formatter.result({
  "duration": 11781266370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mur5sx",
      "offset": 17
    },
    {
      "val": ";i7rch",
      "offset": 30
    }
  ],
  "location": "SmokeTest.the_user_enters_and(String,String)"
});
formatter.result({
  "duration": 1024062485,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2872121607,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.closeBrowser()"
});
formatter.result({
  "duration": 832330695,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-scenario;test-login-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The firefox browser is open with the Facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.the_firefox_browser_is_open_with_the_Facebook_page()"
});
formatter.result({
  "duration": 12904046048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SmokeTest.the_user_enters_and(String,String)"
});
formatter.result({
  "duration": 507393547,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2364885701,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.closeBrowser()"
});
formatter.result({
  "duration": 799198081,
  "status": "passed"
});
});