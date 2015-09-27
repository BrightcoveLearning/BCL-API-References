define({ "api": [  {    "type": "get",    "url": "/data",    "title": "Get Analytics Report",    "name": "Get_Analytics_Report",    "group": "Report",    "version": "1.0.0",    "description": "<p>Get an analytics report on one or more dimensions</p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "URL Parameters": [          {            "group": "URL Parameters",            "type": "<p>Number</p> ",            "optional": false,            "field": "account_ids",            "description": "<p>one or more Video Cloud account IDs separated by commas</p> "          },          {            "group": "URL Parameters",            "type": "<p>Number</p> ",            "optional": true,            "field": "limit",            "defaultValue": "10",            "description": "<p>number of videos to return</p> "          },          {            "group": "URL Parameters",            "type": "<p>Number</p> ",            "optional": true,            "field": "offset",            "defaultValue": "0",            "description": "<p>number of videos to skip in the response</p> "          },          {            "group": "URL Parameters",            "type": "<p>String</p> ",            "optional": true,            "field": "sort",            "description": "<p>field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending</p> "          },          {            "group": "URL Parameters",            "type": "<p>String</p> ",            "allowedValues": [              "\"account\"",              "\"city\"",              "\"country\"",              "\"region\"",              "\"date\"",              "\"date-time\"",              "\"device_os\"",              "\"device_type\"",              "\"player\"",              "\"referrer_domain\"",              "\"destination_domain\"",              "\"search_terms\"",              "\"source_type\"",              "\"video\""            ],            "optional": false,            "field": "dimensions",            "description": "<p>one or more dimensions to report on; see <a href=\"http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#reportDimensions\">Multiple Dimensions</a> for which combined dimensions are supported</p> "          },          {            "group": "URL Parameters",            "type": "<p>String</p> ",            "allowedValues": [              "\"dimension==value\""            ],            "optional": true,            "field": "where",            "description": "<p>one or more dimension==value pairs to filter the results; see <a href=\"http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#filterValues\">Where Filters</a> for details</p> "          },          {            "group": "URL Parameters",            "type": "<p>String</p> ",            "optional": true,            "field": "from",            "defaultValue": "(30 days before now)",            "description": "<p>Start time for the period covered by the report — epoch time in milliseconds or a date in the format <code>yyyy-mm-dd</code> (such as <code>2013-09-26</code>)</p> "          }        ]      },      "examples": [        {          "title": "Video Dimension Report Example:",          "content": "https://analytics.api.brightcove.com/v1/data?accounts=57838016001&dimensions=video&where=video==4442677263001&from=2015-08-01&to=2015-08-31&fields=video_view,video_impression,video",          "type": "String"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "<p>String</p> ",            "optional": false,            "field": "key_string",            "description": "<p>the policy key string</p> "          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your policy key is correct</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "NOT_AVAILABLE",            "description": "<p>400: The resource you are requesting is temporarily unavailable</p> "          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNKNOWN",            "description": "<p>500: Issue in Brightcove system; try again later.</p> "          },          {            "group": "Error 5xx",            "type": "<p>json</p> ",            "optional": false,            "field": "TIMEOUT",            "description": "<p>500: Server likely too busy; try again later.</p> "          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "src/report.js",    "groupTitle": "Report"  }] });