define({ "api": [  {    "type": "post",    "url": "/accounts/:account_id/policy_keys",    "title": "Create a Policy Key",    "name": "Create_a_Policy_Key",    "group": "Policy",    "version": "1.0.0",    "description": "<p>Create a new policy key to access the Playback API</p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>String</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p> "          }        ],        "Request Body Fields (Concise Format)": [          {            "group": "Request Body Fields (Concise Format)",            "type": "<p>Object</p> ",            "optional": false,            "field": "key-data",            "description": "<p>data for the policy key (used for concise format)</p> "          },          {            "group": "Request Body Fields (Concise Format)",            "type": "<p>String</p> ",            "optional": false,            "field": "key-data.account-id",            "description": "<p>Video Cloud account id</p> "          },          {            "group": "Request Body Fields (Concise Format)",            "type": "<p>String[]</p> ",            "optional": true,            "field": "key-data.allowed-domains",            "description": "<p>For domain restriction, the domains this key will work on (concise format)</p> "          }        ],        "Request Body Fields (Full Format)": [          {            "group": "Request Body Fields (Full Format)",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "policies",            "description": "<p>an array of policy objects (required if using the full format rather than the concise format)</p> "          },          {            "group": "Request Body Fields (Full Format)",            "type": "<p>Object</p> ",            "optional": false,            "field": "policies.pattern",            "description": "<p>the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key</p> "          },          {            "group": "Request Body Fields (Full Format)",            "type": "<p>String</p> ",            "optional": false,            "field": "policies.pattern.logical-operator",            "description": "<p>the logical operator is used to match accounts or domains; operators allowed are <code>=</code>, <code>!=</code>, <code>contains?</code>, and <code>not-contains?</code>; logical operators may be combined using <code>and</code> or <code>or</code></p> "          },          {            "group": "Request Body Fields (Full Format)",            "type": "<p>String</p> ",            "allowedValues": [              "\"allow\"",              "\"deny\""            ],            "optional": false,            "field": "policies.effect",            "description": "<p>whether domains/accounts matching the pattern should be allowed or denied access to the Playback API</p> "          }        ]      },      "examples": [        {          "title": "Create Policy Request Body Examples:",          "content": "// concise format\n{\n    \"account-id\": \"8523\",\n    \"allowed-domains\": [\n        \"http://www.mysite.com\",\n        \"https://secure.mysite.com\"\n    ]\n}\n// full format\n{\n     \"policies\": [\n         {\n             \"pattern\": {\n                 \"!=\": [\n                     \"1752604059001\"\n                 ]\n             },\n             \"effect\": \"deny\"\n         },\n         {\n             \"pattern\": {\n                 \"not-contains?\": [\n                     [\n                         \"http://www.mysite.com\",\n                         \"https://secure.mysite.com\"\n                     ],\n                     \"[request.domain]\"\n                 ]\n             },\n             \"effect\": \"deny\"\n         }\n     ]\n }",          "type": "json"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "<p>String</p> ",            "optional": false,            "field": "key_string",            "description": "<p>the policy key string</p> "          },          {            "group": "Response Fields",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "policies",            "description": "<p>array of policy maps</p> "          },          {            "group": "Response Fields",            "type": "<p>Object</p> ",            "optional": false,            "field": "policies.pattern",            "description": "<p>the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key</p> "          },          {            "group": "Response Fields",            "type": "<p>String</p> ",            "optional": false,            "field": "policies.pattern.logical-operator",            "description": "<p>the logical operator is used to match accounts or domains; operators allowed are <code>=</code>, <code>!=</code>, <code>contains?</code>, and <code>not-contains?</code>; logical operators may be combined using <code>and</code> or <code>or</code></p> "          },          {            "group": "Response Fields",            "type": "<p>String</p> ",            "optional": false,            "field": "policies.effect",            "description": "<p>whether domains/accounts matching the pattern should be allowed or denied access to the Playback API</p> "          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"key-string\": \"BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk\",\n    \"policies\": [\n        {\n            \"effect\": \"deny\",\n            \"pattern\": {\n                \"!=\": [\n                    \"[request.params.account-id],\n                    \"57838016001\"\n                ]\n            }\n        }\n    ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your policy key is correct</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "NOT_AVAILABLE",            "description": "<p>400: The resource you are requesting is temporarily unavailable</p> "          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNKNOWN",            "description": "<p>500: Issue in Brightcove system; try again later.</p> "          },          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p> "          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/policy.js",    "groupTitle": "Policy"  },  {    "type": "get",    "url": "/accounts/:account_id/policy_keys/:key_string",    "title": "Get Policy",    "name": "Get_Policy",    "group": "Policy",    "version": "1.0.0",    "description": "<p>Get a policy key associated with a policy key string</p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>String</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID</p> "          },          {            "group": "Path Parameters",            "type": "<p>String</p> ",            "optional": false,            "field": "key_string",            "description": "<p>the key string for the policy</p> "          }        ]      },      "examples": [        {          "title": "Get Policy Example:",          "content": "https://policy.api.brightcove.com/v1/accounts/57838016001/policy_keys/BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk",          "type": "String"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "<p>String</p> ",            "optional": false,            "field": "key_string",            "description": "<p>the policy key</p> "          },          {            "group": "Response Fields",            "type": "<p>Object[]</p> ",            "optional": false,            "field": "policies",            "description": "<p>array of policy maps</p> "          }        ],        "Response Fields)": [          {            "group": "Response Fields)",            "type": "<p>Object</p> ",            "optional": false,            "field": "policies.pattern",            "description": "<p>the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key</p> "          },          {            "group": "Response Fields)",            "type": "<p>String</p> ",            "optional": false,            "field": "policies.pattern.logical-operator",            "description": "<p>the logical operator is used to match accounts or domains; operators allowed are <code>=</code>, <code>!=</code>, <code>contains?</code>, and <code>not-contains?</code>; logical operators may be combined using <code>and</code> or <code>or</code></p> "          },          {            "group": "Response Fields)",            "type": "<p>String</p> ",            "optional": false,            "field": "policies.effect",            "description": "<p>whether domains/accounts matching the pattern should be allowed or denied access to the Playback API</p> "          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"key-string\": \"BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk\",\n    \"policies\": [\n        {\n            \"effect\": \"deny\",\n            \"pattern\": {\n                \"!=\": [\n                    \"[request.params.account-id]\",\n                    \"57838016001\"\n                ]\n            }\n        }\n    ]\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your policy key is correct</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "NOT_AVAILABLE",            "description": "<p>400: The resource you are requesting is temporarily unavailable</p> "          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNKNOWN",            "description": "<p>500: Issue in Brightcove system; try again later.</p> "          },          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p> "          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/policy.js",    "groupTitle": "Policy"  }] });