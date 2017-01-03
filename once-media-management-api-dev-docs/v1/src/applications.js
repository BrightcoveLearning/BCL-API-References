// Get All Applications

/**
 * @api {get} /domains/:domainId/applications Get All Applications
 * @apiName Get All Applications
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns all applications configured in the domain. This method returns 20 results by default, totalResults indicates the total number of applications in the domain, previous and/or next page request URLs will be included within the response if necessary. URL Parameters may be appended to modify result sets.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (URL Parameters) {Number(1-100)} [pageSize=20] The number of items to return for the request
 * @apiParam (URL Parameters) {Number} [page=0] The set of items (based on `pageSize`) to return
 * @apiParam (URL Parameters) {String} [name] Filter to applications that have name substring. E.g. name=foo could return applications named "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="name","createdate","updatedate"} [sortField="updatedate"] Filter to applications that have name substring. E.g. name=foo could return applications named "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="asc","desc"} [sortDirection="desc"] Sort ascending or descending.
 *
 * @apiParamExample {Url} Get Applications Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of applications in result set
 * @apiSuccess (Response Fields) {String} results.id Each applicationId
 * @apiSuccess (Response Fields) {String} results.name Each application's name
 * @apiSuccess (Response Fields) {String} results.domainId Each application's parent domainId
 * @apiSuccess (Response Fields) {Url} prev URL to GET the previous application result set (if necessary)
 * @apiSuccess (Response Fields) {Url} next URL to GET the next application result set (if necessary)
 * @apiSuccess (Response Fields) {Number} totalResults The total number of applications in the domain
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "2baf3c54-2baf-3c54-be91-147ffc57ebbe",
 *                "name": "ExampleApplication01",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            },
 *            {
 *                "id": "a5ca87ef-a5ca-87ef-928c-70794563a8a1",
 *                "name": "ExampleApplication02",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            }
 *        ],
 *        "prev": null,
 *        "next": null,
 *        "totalResults": 2
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// Get Application Details

/**
 * @api {get} /domains/:domainId/applications/:applicationId Get Application Details
 * @apiName Get Application Details
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves the details of an application, including its ad configurations. Below are two examples:
 * 1. Single VAST ad request(s) will be made for each configured adPosition (preRoll, midRoll, and/or postRoll).
 * 2. Multiple (ad) configuration, enabling an ad decisioning server to specify all ad breaks in a single response (Freewheel SmartXML, DFP Ad Rules).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 *
 * @apiParamExample {Url} Get Application Details Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications/2baf3c54-2baf-3c54-be91-147ffc57ebbe
 *
 * @apiSuccess (Response Fields Example 1) {String} id The application Id
 * @apiSuccess (Response Fields Example 1) {String} name The application's name
 * @apiSuccess (Response Fields Example 1) {String} domainId The application's parent domainId
 * @apiSuccess (Response Fields Example 1) {Object} adConfig An object set of ads configured to the application
 * @apiSuccess (Response Fields Example 1) {Object} adConfig.preRoll A single VAST adConfig for the preRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adConfig.preRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adConfig.preRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.preRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adConfig.preRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.preRoll.adPosition The position into which the ad will be inserted (preRoll)
 * @apiSuccess (Response Fields Example 1) {Object} adConfig.midRoll A single VAST adConfig for the midRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adConfig.midRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adConfig.midRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.midRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adConfig.midRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.midRoll.adPosition The position into which the ad will be inserted (midRoll)
 * @apiSuccess (Response Fields Example 1) {Object} adConfig.postRoll A single VAST adConfig for the postRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adConfig.postRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adConfig.postRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.postRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adConfig.postRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adConfig.postRoll.adPosition The position into which the ad will be inserted (postRoll)
 * @apiSuccess (Response Fields Example 1) {Number} preRollAdCount The number of single VAST ads to be requested for the preRoll position
 * @apiSuccess (Response Fields Example 1) {Number} midRollAdCount The number of single VAST ads to be requested for the midRoll position
 * @apiSuccess (Response Fields Example 1) {Number} postRollAdCount The number of single VAST ads to be requested for the posRoll position
 *
 * @apiSuccess (Response Fields Example 2) {String} id The application Id
 * @apiSuccess (Response Fields Example 2) {String} name The application's name
 * @apiSuccess (Response Fields Example 2) {String} domainId The application's parent domainId
 * @apiSuccess (Response Fields Example 2) {Object} adConfig An object set of ads configured to the application
 * @apiSuccess (Response Fields Example 2) {Object} adConfig.ad An adConfig where a single request will return a full, multiple ad load
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.id The adConfigId
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.name The adConfig’s name
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adServerId The adServerId which will be requested for the multiple ad load
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adPosition The multiple adServer configuration type (`dfp` or `smartxml`)
 * @apiSuccess (Response Fields Example 2) {Number} preRollAdCount Leave at zero (the adServer will determine number of ads returned for preRoll position)
 * @apiSuccess (Response Fields Example 2) {Number} midRollAdCount Leave at zero (the adServer will determine number of ads returned for midRoll position)
 * @apiSuccess (Response Fields Example 2) {Number} postRollAdCount Leave at zero (the adServer will determine number of ads returned for postRoll position)
 *
 *
 * @apiSuccessExample {json} Examples 1 and 2
 *    HTTP/1.1 200 OK
 *    // Example 1
 *    {
 *        "id": "2baf3c54-2baf-3c54-be91-147ffc57ebbe",
 *        "name": "ExampleApplication01",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "adConfig": {
 *            "preRoll": {
 *                "id": "657d722b-a031-4422-87cc-6ae27329edf2",
 *                "name": "ExampleVASTPreRollConfig",
 *                "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "adServerName": "ExampleVASTAdServer",
 *                "adPosition": "preroll"
 *            },
 *                  "postRoll": {
 *                "id": "a0314422-a031-4422-87cc-6ae27329edf2",
 *                "name": "ExampleVASTPostRollConfig",
 *                "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "adServerName": "ExampleVASTAdServer",
 *                "adPosition": "postroll"
 *            }
 *        },
 *        "preRollAdCount": 1,
 *        "midRollAdCount": 0,
 *        "postRollAdCount": 1
 *    }
 *    // Example 2
 *    {
 *        "id": "a5ca87ef-a5ca-87ef-928c-70794563a8a1",
 *        "name": "ExampleApplication02",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "adConfig": {
 *            "ad": {
 *                "id": "a96a8715-5b80-468f-9cf0-683e52f5768b",
 *                "name": "ExamplePodAdConfig",
 *                "adServerId": "4f7ceb38-5093-437b-883b-ba96c413c4d7",
 *                "adServerName": "ExamplePodAdServer",
 *                "adPosition": "dfp"
 *            }
 *        },
 *        "preRollAdCount": 0,
 *        "midRollAdCount": 0,
 *        "postRollAdCount": 0
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// create application

/**
 * @api {post} /domains/:domainId/applications Create Application
 * @apiName Create Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates an new application in the domain.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String} name Name of the new application
 * @apiParam (Request Body Fields) {Number} [preRollAdCount] Number of single VAST ads to be requested for the preRoll position (required only if using single VAST adConfig)
 * @apiParam (Request Body Fields) {Number} [midRollAdCount] Number of single VAST ads to be requested for the midRoll position (required only if using single VAST adConfig)
 * @apiParam (Request Body Fields) {Number} [postRollAdCount] Number of single VAST ads to be requested for the postRoll position (required only if using single VAST adConfig)
 *
 * @apiParamExample {json} Create Application Request Body Example:
 *    {
 *        "name":"New_Application",
 *        "preRollAdCount":0,
 *        "midRollAdCount":0,
 *        "postRollAdCount":0
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application Id
 * @apiSuccess (Response Fields) {String} name The application's name
 * @apiSuccess (Response Fields) {String} domainId The application's parent domainId
 * @apiSuccess (Response Fields) {Object} adConfig Will remain null until adConfig has been added (see methods below)
 * @apiSuccess (Response Fields) {Number} preRollAdCoung The number of single VAST ads to be requested for the preRoll position
 * @apiSuccess (Response Fields) {Number} midRollAdCoung The number of single VAST ads to be requested for the midRoll position
 * @apiSuccess (Response Fields) {Number} postRollAdCoung The number of single VAST ads to be requested for the postRoll position
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "2baf3c54-7761-4a31-be91-147ffc57ebbe",
 *        "name": "ExampleApplication03",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "adConfig": null,
 *        "preRollAdCount": 0,
 *        "midRollAdCount": 0,
 *        "postRollAdCount": 0
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// update application

/**
 * @api {post} /domains/:domainId/applications/:applicationId Update Application
 * @apiName Update Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the name or number of ads requested in the VAST pre/mid/postRoll slots.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 * @apiParam (Request Body Fields) {String} name Name of the new application
 * @apiParam (Request Body Fields) {Number} [preRollAdCount] Number of single VAST ads to be requested for the preRoll position (required only if using single VAST adConfig)
 * @apiParam (Request Body Fields) {Number} [midRollAdCount] Number of single VAST ads to be requested for the midRoll position (required only if using single VAST adConfig)
 * @apiParam (Request Body Fields) {Number} [postRollAdCount] Number of single VAST ads to be requested for the postRoll position (required only if using single VAST adConfig)
 *
 * @apiParamExample {json} Create Application Request Body Example:
 *    {
 *        "name":"New_Application",
 *        "preRollAdCount":1,
 *        "midRollAdCount":0,
 *        "postRollAdCount":1
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application Id
 * @apiSuccess (Response Fields) {String} name The application's name
 * @apiSuccess (Response Fields) {String} domainId The application's parent domainId
 * @apiSuccess (Response Fields) {Object} adConfig Will remain null until adConfig has been added (see methods below)
 * @apiSuccess (Response Fields) {Number} preRollAdCoung The number of single VAST ads to be requested for the preRoll position
 * @apiSuccess (Response Fields) {Number} midRollAdCoung The number of single VAST ads to be requested for the midRoll position
 * @apiSuccess (Response Fields) {Number} postRollAdCoung The number of single VAST ads to be requested for the postRoll position
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "2baf3c54-7761-4a31-be91-147ffc57ebbe",
 *        "name": "ExampleApplication03",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "adConfig": null,
 *        "preRollAdCount": 1,
 *        "midRollAdCount": 0,
 *        "postRollAdCount": 1
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// delete application

/**
 * @api {delete} /domains/:domainId/applications/:applicationId Delete Application
 * @apiName Delete Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes an application from the domain. This method will delete all of the application’s adConfigs, but will not delete any related adServer(s). See below for a method to delete adServers.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 *
 * @apiParamExample {Url} Delete Application Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {String} id The application Id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0f7465b-6357-469f-98cc-3f9d8cb7987f",
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// Get All Application Ad Configurations

/**
 * @api {get} /domains/:domainId/applications/:applicationId/adConfig Get All Application Ad Configurations
 * @apiName Get All Application Ad Configurations
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all adConfigs assigned to a single Application. Below are two examples:
 * 1.Single VAST ad request(s) will be made for each configured adPosition (preRoll, midRoll, and/or postRoll).
 * 2.Multiple (ad) configuration, enabling an ad decisioning server to specify all ad breaks in a single response (Freewheel SmartXML, DFP Ad Rules).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 *
 * @apiParamExample {Url} Get Application Ad Configuration Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications/adConfig
 *
 * @apiSuccess (Response Fields Example 1) {Object} preRoll A single VAST adConfig for the preRoll slot
 * @apiSuccess (Response Fields Example 1) {String} preRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} preRoll.name The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} preRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} preRoll.adserverName The preRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields Example 1) {String} preRoll.adPosition The position into which the ad will be inserted (preRoll)
 * @apiSuccess (Response Fields Example 1) {Object} midRoll A single VAST adConfig for the midRoll slot
 * @apiSuccess (Response Fields Example 1) {String} midRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} midRoll.name The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adPosition The position into which the ad will be inserted (midRoll)
 * @apiSuccess (Response Fields Example 1) {Object} midRoll A single VAST adConfig for the midRoll slot
 * @apiSuccess (Response Fields Example 1) {String} midRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} midRoll.name The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} midRoll.adPosition The position into which the ad will be inserted (midRoll)
 *
 * @apiSuccess (Response Fields Example 2) {Object} ad An adConfig where a single request will return a full, multiple ad load
 * @apiSuccess (Response Fields Example 2) {String} ad.id The adConfigId
 * @apiSuccess (Response Fields Example 2) {String} ad.name The adConfigId
 * @apiSuccess (Response Fields Example 2) {String} ad.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 2) {String} ad.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 2) {String} ad.adPosition The multiple adServer configuration type
(`dfp` or `smartxml`)
 *
 *
 * @apiSuccessExample {json} Examples 1 and 2
 *    HTTP/1.1 200 OK
 *    // Example 1
 *    {
 *        "preRoll": {
 *            "id": "657d722b-a031-4422-87cc-6ae27329edf2",
 *            "name": "ExampleVASTPreRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *            "adServerName": "ExampleVASTAdServer",
 *            "adPosition": "preroll"
 *        },
 *        "midRoll": {
 *            "id": "6ae27329-a031-4422-87cc-6ae27329edf2",
 *            "name": "ExampleVASTMidRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *            "adServerName": "ExampleVASTAdServer",
 *            "adPosition": "midroll"
 *        },
 *        "postRoll": {
 *            "id": "a0314422-a031-4422-87cc-6ae27329edf2",
 *            "name": "ExampleVASTPostRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *            "adServerName": "ExampleVASTAdServer",
 *            "adPosition": "postroll"
 *        }
 *    }
 *    HTTP/1.1 200 OK
 *    // Example 2
 *    {
 *        "ad": {
 *            "id": "a96a8715-5b80-468f-9cf0-683e52f5768b",
 *            "name": "ExampleSmartXMLAdConfig",
 *            "adServerId": "5093883b-5093-437b-883b-ba96c413c4d7",
 *            "adServerName": "ExampleSmartXMLAdServer",
 *            "adPosition": "smartxml"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// Add or Replace Application Ad Configuration

/**
 * @api {post} /domains/:domainId/applications/:applicationId/adConfig Add or Replace Application Ad Configuration
 * @apiName Add or Replace Application Ad Configuration
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Add or replace the adConfig assigned to the specified application. Below are two examples:
 * 1. Single VAST ad request(s) will be made for each configured adPosition (preRoll, midRoll, and/or postRoll).
 * 2. Multiple (ad) configuration, enabling an ad decisioning server to specify all ad breaks in a single response (Freewheel SmartXML, DFP Ad Rules).

 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 * @apiParam (Request Body Fields Example 1) {Object} [preRoll] A single VAST adConfig for the preRoll slot
 * @apiParam (Request Body Fields Example 1) {String} preRoll.name The new/updated adConfig name
 * @apiParam (Request Body Fields Example 1) {String} preRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiParam (Request Body Fields Example 1) {Object} [midRoll] A single VAST adConfig for the midRoll slot
 * @apiParam (Request Body Fields Example 1) {String} midRoll.name The adConfig’s name
 * @apiParam (Request Body Fields Example 1) {String} midRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiParam (Request Body Fields Example 1) {Object} [postRoll] A single VAST adConfig for the postRoll slot
 * @apiParam (Request Body Fields Example 1) {String} postRoll.name The adConfig’s name
 * @apiParam (Request Body Fields Example 1) {String} postRoll.adServerId The adServerId which will be requested for a single VAST ad
 *
 * @apiParam (Request Body Fields Example 2) {Object} ad An adConfig where a single request will return a full, multiple ad load
 * @apiParam (Request Body Fields Example 2) {String} ad.name The new/updated adConfig’s name
 * @apiParam (Request Body Fields Example 2) {String} ad.adServerId The adServerId which will be requested for the multiple ad load
 * @apiParam (Request Body Fields Example 2) {String="smartxml","dfp"} ad.adPosition The multiple adServer configuration type. Syntax must be `dfp` or `smartxml`
 *
 * @apiParamExample {json} Request Body Example 1
 *    {
 *        "preRoll": {
 *            "name": "ExampleNewVASTPreRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d"
 *        },
 *        "midRoll": {
 *            "name": "ExampleNewVASTMidRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d"
 *        },
 *        "postRoll": {
 *            "name": "ExampleNewVASTPostRollConfig",
 *            "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d"
 *        }
 *    }
 *
 * @apiParamExample {json} Request Body Example 2
 *    {
 *        "ad": {
 *            "name": "ExampleSmartXMLAdConfig",
 *            "adServerId": "5093883b-5093-437b-883b-ba96c413c4d7",
 *            "adPosition": "smartxml"
 *        }
 *    }
 *
 * @apiSuccess (Response Fields Example 1) {String} id The application Id
 * @apiSuccess (Response Fields Example 1) {String} name The application's name
 * @apiSuccess (Response Fields Example 1) {String} domainId The application’s parent domainId
 * @apiSuccess (Response Fields Example 1) {Object} adConfig An object set of ads configured to the application
 * @apiSuccess (Response Fields Example 1) {Object} adconfig.preRoll A single VAST adConfig for the preRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adconfig.preRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adconfig.preRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.preRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adconfig.preRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.preRoll.adPosition The position into which the ad will be inserted (preRoll)
 * @apiSuccess (Response Fields Example 1) {Object} adconfig.midRoll A single VAST adConfig for the midRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adconfig.midRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adconfig.midRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.midRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adconfig.midRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.midRoll.adPosition The position into which the ad will be inserted (midRoll)
 * @apiSuccess (Response Fields Example 1) {Object} adconfig.postRoll A single VAST adConfig for the postRoll slot
 * @apiSuccess (Response Fields Example 1) {String} adconfig.postRoll.id The adConfigId
 * @apiSuccess (Response Fields Example 1) {String} adconfig.postRoll.name The adConfig’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.postRoll.adServerId The adServerId which will be requested for a single VAST ad
 * @apiSuccess (Response Fields Example 1) {String} adconfig.postRoll.adserverName The adServer’s name
 * @apiSuccess (Response Fields Example 1) {String} adconfig.postRoll.adPosition The position into which the ad will be inserted (postRoll)
 * @apiSuccess (Response Fields Example 1) {String} preRollAdCount The number of single VAST ads to be requested for the preRoll position
 * @apiSuccess (Response Fields Example 1) {String} midRollAdCount The number of single VAST ads to be requested for the miodRoll position
 * @apiSuccess (Response Fields Example 1) {String} postRollAdCount The number of single VAST ads to be requested for the postRoll position
 * @apiSuccess (Response Fields Example 2) {String} id The application Id
 * @apiSuccess (Response Fields Example 2) {String} name The application's name
 * @apiSuccess (Response Fields Example 2) {String} domainId The application's parent domainId
 * @apiSuccess (Response Fields Example 2) {Object} adConfig An object set of ads configured to the application
 * @apiSuccess (Response Fields Example 2) {Object} adConfig.ad An adConfig where a single request will return a full, multiple ad load
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.id The adConfigId
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.name The adConfig's name
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adServerId The adServerId which will be requested for the multiple ad load
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adServerName The adServer’s name
 * @apiSuccess (Response Fields Example 2) {String} adConfig.ad.adPosition The multiple adServer configuration type (`dfp` or `smartxml`)
 * @apiSuccess (Response Fields Example 2) {String} preRollAdCount Leave at zero (the adServer will determine number of ads returned for preRoll position)
 * @apiSuccess (Response Fields Example 2) {String}  midollAdCount Leave at zero (the adServer will determine number of ads returned for midRoll position)
 * @apiSuccess (Response Fields Example 2) {String} postRollAdCount Leave at zero (the adServer will determine number of ads returned for postRoll position)
 *
 * @apiSuccessExample {json} Example 1
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "2baf3c54-2baf-3c54-be91-147ffc57ebbe",
 *        "name": "ExampleApplication01",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "adConfig": {
 *            "preRoll": {
 *                "id": "657d722b-a031-4422-87cc-6ae27329edf2",
 *                "name": "ExampleNewVASTPreRollConfig",
 *                "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "adServerName": "ExampleVASTAdServer",
 *                "adPosition": "preroll"
 *            },
 *            "midRoll": {
 *                "id": "6ae27329-a031-4422-87cc-6ae27329edf2",
 *                "name": "ExampleNewVASTMidRollConfig",
 *                "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "adServerName": "ExampleVASTAdServer",
 *                "adPosition": "midroll"
 *            },
 *            "postRoll": {
 *                "id": "a0314422-a031-4422-87cc-6ae27329edf2",
 *                "name": "ExampleNewVASTPostRollConfig",
 *                "adServerId": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "adServerName": "ExampleVASTAdServer",
 *                "adPosition": "postroll"
 *            }
 *        },
 *        "preRollAdCount": 1,
 *        "midRollAdCount": 2,
 *        "postRollAdCount": 1
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// Delete Application Ad Configurations

/**
 * @api {delete} /domains/:domainId/applications/:applicationId/adConfig Delete Application Ad Configurations
 * @apiName Delete Application Ad Configurations
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes all ad configurations from the specified application.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} applicationId The application Id
 *
 * @apiParamExample {Url} Delete Ad Configurations Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications/adConfig
 *
 * @apiSuccess (Response Fields) {String[]} id An array of adConfigId(s) which have been deleted
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": [
 *            "6a38cbc1-7257-4a9b-99fa-121d4f971768"
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */
