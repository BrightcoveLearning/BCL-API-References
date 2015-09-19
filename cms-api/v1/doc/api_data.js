define({ "api": [  {    "type": "post",    "url": "/accounts/:account_id/videos",    "title": "Create Video",    "name": "Create_Video",    "group": "Video",    "version": "1.0.0",    "description": "<p>Create a new video object in the account. <em>Note: this does not ingest a video file - use the <a href=\"http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html\">Dynamic Ingest API</a> for ingestion</em></p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p> "          }        ],        "Request Body Fields": [          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": false,            "field": "name",            "description": "<p>video title</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "description",            "description": "<p>video short description</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "long_description",            "description": "<p>video long description</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "reference_id",            "description": "<p>video reference-id (must be unique within the account)</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "allowedValues": [              "\"ACTIVE\"",              "\"INACTIVE\""            ],            "optional": true,            "field": "state",            "defaultValue": "ACTIVE",            "description": "<p>state determines whether the video is playable or not</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string[]</p> ",            "optional": true,            "field": "tags",            "defaultValue": "[]",            "description": "<p>array of tags</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "custom_fields",            "defaultValue": "{}",            "description": "<p>map of fieldname-value pairs</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "geo",            "defaultValue": "{}",            "description": "<p>map of geo-filtering properties</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string[]</p> ",            "optional": true,            "field": "geo.countries",            "defaultValue": "null",            "description": "<p>array of <a href=\"https://www.iso.org/obp/ui/\">ISO 3166 list of 2-letter codes</a></p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "geo.exclude_countries",            "defaultValue": "false",            "description": "<p>if true, country array is treated as a list of countries excluded from viewing</p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "geo.restricted",            "defaultValue": "false",            "description": "<p>whether geo-restriction is enabled for thie video</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "schedule",            "defaultValue": "{}",            "description": "<p>map of scheduling properties</p> "          },          {            "group": "Request Body Fields",            "type": "<p>dateString</p> ",            "optional": true,            "field": "starts_at",            "defaultValue": "null",            "description": "<p>start date-time of availability in <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\">ISO-8601</a> format</p> "          },          {            "group": "Request Body Fields",            "type": "<p>dateString</p> ",            "optional": true,            "field": "ends_at",            "defaultValue": "null",            "description": "<p>end date-time of availability in <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\">ISO-8601</a> format</p> "          }        ]      },      "examples": [        {          "title": "Create Video Example:",          "content": "{\n    \"name\": \"Moose Herd\",\n    \"description\": \"Herd of moose grazing\",\n    \"reference_id\": \"moose_2015_09_17\",\n    \"tags\": [\n        \"nature\",\n        \"animals\"\n    ],\n    \"custom_fields\": {\n        \"topic\": \"wildlife\",\n        \"subtopic\": \"mammals\"\n    }\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": " HTTP/1.1 201 Created\n{\n    \"account_id\": \"57838016001\",\n    \"complete\": false,\n    \"created_at\": \"2015-09-18T15:59:23.756Z\",\n    \"cue_points\": [],\n    \"custom_fields\": {},\n    \"description\": \"Herd of moose grazing\",\n    \"digital_master_id\": null,\n    \"duration\": null,\n    \"economics\": \"AD_SUPPORTED\",\n    \"folder_id\": null,\n    \"geo\": null,\n    \"id\": \"4494811891001\",\n    \"images\": {},\n    \"link\": null,\n    \"long_description\": null,\n    \"name\": \"Moose Herd\",\n    \"reference_id\": \"moose_2015_09_17\",\n    \"schedule\": null,\n    \"sharing\": null,\n    \"state\": \"ACTIVE\",\n    \"tags\": [\n        \"animals\",\n        \"nature\"\n    ],\n    \"text_tracks\": [],\n    \"updated_at\": \"2015-09-18T15:59:23.764Z\"\n} *",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed - check to make sure your client credentials were correct for the access token</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "BAD_VALUE",            "description": "<p>400: The JSON could not be parsed</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "REFERENCE_ID_IN_USE",            "description": "<p>409: The specified reference id is already in use</p> "          }        ]      },      "examples": [        {          "title": "409 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n       \"error_code\": \"REFERENCE_ID_IN_USE\",\n       \"message\": \"Reference id moose_2015_09_17 is already in use.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "./cms-api.js",    "groupTitle": "Video"  },  {    "type": "get",    "url": "/accounts/:account_id/videos/:video_id",    "title": "Get Video by ID",    "name": "Get_Video_by_ID",    "group": "Video",    "version": "1.0.0",    "description": "<p>Gets a video objects for the account</p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p> "          },          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "video_id",            "description": "<p>Video Cloud video ID.</p> "          }        ]      }    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n    \"account_id\": \"1752604059001\",\n    \"complete\": true,\n    \"created_at\": \"2015-09-17T16:08:37.108Z\",\n    \"cue_points\": [],\n    \"custom_fields\": {},\n    \"description\": null,\n    \"digital_master_id\": \"4492154733001\",\n    \"duration\": 155573,\n    \"economics\": \"AD_SUPPORTED\",\n    \"folder_id\": null,\n    \"geo\": null,\n    \"id\": \"4492075574001\",\n    \"images\": {\n        \"poster\": {\n            \"asset_id\": \"4492153571001\",\n            \"sources\": [\n                {\n                    \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001\"\n                }\n            ],\n            \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001\"\n        },\n        \"thumbnail\": {\n            \"asset_id\": \"4492154714001\",\n            \"sources\": [\n                {\n                    \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001\"\n                }\n            ],\n            \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001\"\n        }\n    },\n    \"link\": null,\n    \"long_description\": null,\n    \"name\": \"sea_marvels.mp4\",\n    \"reference_id\": null,\n    \"schedule\": null,\n    \"sharing\": null,\n    \"state\": \"ACTIVE\",\n    \"tags\": [],\n    \"text_tracks\": [\n        {\n            \"asset_id\": \"0cbd3425-8e94-46e6-9a10-a0d4491d4893\",\n            \"default\": true,\n            \"id\": \"c9001cee-d7f9-4b67-955c-9764cfc3d1f4\",\n            \"kind\": \"captions\",\n            \"label\": null,\n            \"mime_type\": \"text/vtt\",\n            \"sources\": [\n                {\n                    \"src\": \"https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001\"\n                }\n            ],\n            \"src\": \"https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001\",\n            \"srclang\": \"en\"\n        }\n    ],\n    \"updated_at\": \"2015-09-17T17:41:20.782Z\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed - check to make sure your client credentials were correct for the access token</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "INVALID_SORT",            "description": "<p>400: sort parameter specified and invalid field</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "INVALID_SEARCH",            "description": "<p>400: search string invalid (may not have been URI-encoded)</p> "          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "./cms-api.js",    "groupTitle": "Video"  },  {    "type": "get",    "url": "/accounts/:account_id/videos",    "title": "Get Videos",    "name": "Get_Videos",    "group": "Video",    "version": "1.0.0",    "description": "<p>Gets a page of video objects for the account</p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p> "          }        ],        "URL Parameters": [          {            "group": "URL Parameters",            "type": "<p>number</p> ",            "optional": true,            "field": "limit",            "defaultValue": "10",            "description": "<p>number of videos to return</p> "          },          {            "group": "URL Parameters",            "type": "<p>number</p> ",            "optional": true,            "field": "offset",            "defaultValue": "0",            "description": "<p>number of videos to skip in the response</p> "          },          {            "group": "URL Parameters",            "type": "<p>string</p> ",            "optional": true,            "field": "q",            "description": "<p>search string - see<a href=\"http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria\">search guide</a> for details</p> "          },          {            "group": "URL Parameters",            "type": "<p>string</p> ",            "optional": true,            "field": "sort",            "description": "<p>field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending</p> "          }        ]      },      "examples": [        {          "title": "Search Example:",          "content": "https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature",          "type": "string"        }      ]    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"account_id\": \"1752604059001\",\n         \"complete\": true,\n         \"created_at\": \"2015-09-17T16:08:37.108Z\",\n         \"cue_points\": [],\n         \"custom_fields\": {},\n         \"description\": null,\n         \"digital_master_id\": \"4492154733001\",\n         \"duration\": 155573,\n         \"economics\": \"AD_SUPPORTED\",\n         \"folder_id\": null,\n         \"geo\": null,\n         \"id\": \"4492075574001\",\n         \"images\": {\n             \"poster\": {\n                 \"asset_id\": \"4492153571001\",\n                 \"sources\": [\n                     {\n                         \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001\"\n                     }\n                 ],\n                 \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001\"\n             },\n             \"thumbnail\": {\n                 \"asset_id\": \"4492154714001\",\n                 \"sources\": [\n                     {\n                         \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001\"\n                     }\n                 ],\n                 \"src\": \"https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001\"\n             }\n         },\n         \"link\": null,\n         \"long_description\": null,\n         \"name\": \"sea_marvels.mp4\",\n         \"reference_id\": null,\n         \"schedule\": null,\n         \"sharing\": null,\n         \"state\": \"ACTIVE\",\n         \"tags\": [],\n         \"text_tracks\": [\n             {\n                 \"asset_id\": \"0cbd3425-8e94-46e6-9a10-a0d4491d4893\",\n                 \"default\": true,\n                 \"id\": \"c9001cee-d7f9-4b67-955c-9764cfc3d1f4\",\n                 \"kind\": \"captions\",\n                 \"label\": null,\n                 \"mime_type\": \"text/vtt\",\n                 \"sources\": [\n                     {\n                         \"src\": \"https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001\"\n                     }\n                 ],\n                 \"src\": \"https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001\",\n                 \"srclang\": \"en\"\n             }\n         ],\n         \"updated_at\": \"2015-09-17T17:41:20.782Z\"\n     }\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed - check to make sure your client credentials were correct for the access token</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "INVALID_SORT",            "description": "<p>400: sort parameter specified and invalid field</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "INVALID_SEARCH",            "description": "<p>400: search string invalid (may not have been URI-encoded)</p> "          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "./cms-api.js",    "groupTitle": "Video"  },  {    "type": "patch",    "url": "/accounts/:account_id/videos/:video_id",    "title": "Update Video",    "name": "Update_Video",    "group": "Video",    "version": "1.0.0",    "description": "<p>Update a new video object in the account <em>note that this API does not ingest any media files - use the <a href=\"http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html\">Dynamic Ingest API</a> for ingestion</em></p> ",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p> "          },          {            "group": "Header",            "type": "string",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html\">Getting Access Tokens</a>)</p> "          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p> "          },          {            "group": "Path Parameters",            "type": "<p>number</p> ",            "optional": false,            "field": "video_id",            "description": "<p>Video Cloud video ID.</p> "          }        ],        "Request Body Fields": [          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": false,            "field": "name",            "description": "<p>video title</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "description",            "description": "<p>video short description</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "long_description",            "description": "<p>video long description</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "reference_id",            "description": "<p>video reference-id (must be unique within the account)</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "allowedValues": [              "\"ACTIVE\"",              "\"INACTIVE\""            ],            "optional": true,            "field": "state",            "defaultValue": "ACTIVE",            "description": "<p>state determines whether the video is playable or not</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string[]</p> ",            "optional": true,            "field": "tags",            "defaultValue": "[]",            "description": "<p>array of tags</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "custom_fields",            "defaultValue": "{}",            "description": "<p>map of fieldname-value pairs</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object[]</p> ",            "optional": true,            "field": "cue_points",            "defaultValue": "[]",            "description": "<p>array of cue point maps</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "cue_points.name",            "description": "<p>cue point name</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "allowedValues": [              "\"AD\"",              "\"CODE\""            ],            "optional": true,            "field": "cue_points.type",            "defaultValue": "AD",            "description": "<p>cue point type</p> "          },          {            "group": "Request Body Fields",            "type": "<p>number</p> ",            "optional": false,            "field": "cue_points.time",            "description": "<p>time of the cue point in seconds; example: 10.527</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "cue_points.metadata",            "defaultValue": "null",            "description": "<p>optional metadata string (128 single-byte characters maximum)</p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "cue_points.force-stop",            "defaultValue": "false",            "description": "<p>whether video is force-stopped at the cue point</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "geo",            "defaultValue": "{}",            "description": "<p>map of geo-filtering properties</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string[]</p> ",            "optional": true,            "field": "geo.countries",            "defaultValue": "null",            "description": "<p>array of <a href=\"https://www.iso.org/obp/ui/\">ISO 3166 list of 2-letter codes</a></p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "geo.exclude_countries",            "defaultValue": "false",            "description": "<p>if true, country array is treated as a list of countries excluded from viewing</p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "geo.restricted",            "defaultValue": "false",            "description": "<p>whether geo-restriction is enabled for thie video</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "link",            "defaultValue": "{}",            "description": "<p>map of scheduling properties</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "link.text",            "description": "<p>text for the link</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "link.url",            "description": "<p>URL for the link</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object</p> ",            "optional": true,            "field": "schedule",            "defaultValue": "{}",            "description": "<p>map of scheduling properties</p> "          },          {            "group": "Request Body Fields",            "type": "<p>dateString</p> ",            "optional": true,            "field": "starts_at",            "defaultValue": "null",            "description": "<p>start date-time of availability in <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\">ISO-8601</a> format</p> "          },          {            "group": "Request Body Fields",            "type": "<p>dateString</p> ",            "optional": true,            "field": "ends_at",            "defaultValue": "null",            "description": "<p>end date-time of availability in <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\">ISO-8601</a> format</p> "          },          {            "group": "Request Body Fields",            "type": "<p>object[]</p> ",            "optional": true,            "field": "text_tracks",            "defaultValue": "[]",            "description": "<p>array of text track maps</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": false,            "field": "text_tracks.src",            "description": "<p>URL for the .vtt file</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "allowedValues": [              "\"captions\"",              "\"chapters\"",              "\"subtitles\"",              "\"metadata\""            ],            "optional": true,            "field": "text_tracks.kind",            "description": "<p>kind of text track</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": false,            "field": "text_tracks.srclang",            "description": "<p>2-letter language code, such as &quot;en&quot; or &quot;ko&quot;</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "text_tracks.mime_type",            "description": "<p>mime-type for the track</p> "          },          {            "group": "Request Body Fields",            "type": "<p>string</p> ",            "optional": true,            "field": "text_tracks.label",            "description": "<p>label for the track</p> "          },          {            "group": "Request Body Fields",            "type": "<p>boolean</p> ",            "optional": true,            "field": "text_tracks.default",            "defaultValue": "false",            "description": "<p>whether this is the default track</p> "          }        ]      },      "examples": [        {          "title": "Update Video Example:",          "content": "{\n    \"name\": \"Moose Herd\",\n    \"description\": \"Herd of moose grazing\",\n    \"reference_id\": \"moose_2015_09_17\",\n    \"tags\": [\n        \"nature\",\n        \"animals\"\n    ],\n    \"custom_fields\": {\n        \"topic\": \"wildlife\",\n        \"subtopic\": \"mammals\"\n    }\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": " HTTP/1.1 201 Created\n{\n    \"account_id\": \"57838016001\",\n    \"complete\": false,\n    \"created_at\": \"2015-09-18T15:59:23.756Z\",\n    \"cue_points\": [],\n    \"custom_fields\": {},\n    \"description\": \"Herd of moose grazing\",\n    \"digital_master_id\": null,\n    \"duration\": null,\n    \"economics\": \"AD_SUPPORTED\",\n    \"folder_id\": null,\n    \"geo\": null,\n    \"id\": \"4494811891001\",\n    \"images\": {},\n    \"link\": null,\n    \"long_description\": null,\n    \"name\": \"Moose Herd\",\n    \"reference_id\": \"moose_2015_09_17\",\n    \"schedule\": null,\n    \"sharing\": null,\n    \"state\": \"ACTIVE\",\n    \"tags\": [\n        \"animals\",\n        \"nature\"\n    ],\n    \"text_tracks\": [],\n    \"updated_at\": \"2015-09-18T15:59:23.764Z\"\n} *",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed - check to make sure your client credentials were correct for the access token</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "BAD_VALUE",            "description": "<p>400: The JSON could not be parsed</p> "          },          {            "group": "Error 4xx",            "type": "<p>json</p> ",            "optional": false,            "field": "REFERENCE_ID_IN_USE",            "description": "<p>409: The specified reference id is already in use</p> "          }        ]      },      "examples": [        {          "title": "409 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n       \"error_code\": \"REFERENCE_ID_IN_USE\",\n       \"message\": \"Reference id moose_2015_09_17 is already in use.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "./cms-api.js",    "groupTitle": "Video"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p> "          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_rcrooks_git_BCL_API_References_cms_api_v1_doc_main_js",    "groupTitle": "_Users_rcrooks_git_BCL_API_References_cms_api_v1_doc_main_js",    "name": ""  }] });