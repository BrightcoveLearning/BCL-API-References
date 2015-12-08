// get applications

/**
 * @api {get} /domains/:domainId/applications Get All Applications
 * @apiName Get All Applications
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all applications within a domain. This method fetches 20 applications per page, returns the totalResult to indicate the total number of media items and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Applications Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of results
 * @apiSuccess (Response Fields) {String} results.id The application id
 * @apiSuccess (Response Fields) {String} results.name The application name
 * @apiSuccess (Response Fields) {String} results.domainId The domain id
 * @apiSuccess (Response Fields) {Url} prev URL to get the previous result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Url} next URL to get the next result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Number} total number of results
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "79e36ed1-4f2d-4f03-9b49-23d19d34e971",
 *                "name": "New Player Template",
 *                "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "7aa9fcfe-ea9d-449c-80b6-fd5e7b7a4b72",
 *                "name": "Player- Single and Multi Ads",
 *                "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "fbfe16ab-0d11-4ca1-b944-1480970c4bf9",
 *                "name": "Player- Multi Ads",
 *                "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            }
 *        ],
 *        "prev": null,
 *        "next": null,
 *        "totalResults": 5
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// get application details

/**
 * @api {get} /domains/:domainId/applications/:applicationId Get Application Details
 * @apiName Get Application Details
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the application including the ad configurations. The response will include individual ad slots "pre-roll", "mid-roll", and/or "post-roll" for direct VAST configurations and a single "ad" server configurations that have ad break information determined by the ad decisioning server (e.g. Freewheel SmartXML, DFP ad rules). **Note** that the `adConfig` returned in the response can be of type single or multi.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 *
 * @apiParamExample {Url} Get Application Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preRoll The preRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.id The preRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.name The preRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverId The preRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverName The preRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adPosition The preRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midRoll The midRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.id The midRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.name The midRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverId The midRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverName The midRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adPosition The midRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postRoll The postRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.id The postRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.name The postRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverId The postRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverName The postRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adPosition The postRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.ad The ad configuration ad object (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.id The ad configuration ad id (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.name The ad configuration ad name (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.adserverId The ad configuration ad ad server id (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.adserverName The ad configuration ad ad server name (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.adPosition The ad configuration ad ad position (multi ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    // single ad config
 *    "adConfig": {
 *        "preRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "prenewUpdated",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "preRoll"
 *        },
 *        "midRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Mid",
 *            "adserverId": "1111-2222-33333-4444-aaaabbbbccccddd",
 *            "adServerName": "Test Ad Server",
 *            "adPosition": "midRoll"
 *        },
 *        "postRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Post",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postRoll"
 *        }
 *    }
 *    // multi adConfig example
 *    "adConfig": {
 *        "ad": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "DFP",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "dfp"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// create application

/**
 * @api {post} /domains/:domainId/applications/ Create Application
 * @apiName Create Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the standard settings of the application
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Request Body Fields) {String} name The application name
 * @apiParam (Request Body Fields) {Number} [preRollAdCount] The preRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [midRollAdCount] The midRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in each slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [postRollAdCount] The postRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 *
 * @apiParamExample {json} Update Application Request Body Example:
 *    {
 *        "name":"New_Application",
 *        "preRollAdCount":1,
 *        "midRollAdCount":2,
 *        "postRollAdCount":3
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application id
 * @apiSuccess (Response Fields) {String} name The application name
 * @apiSuccess (Response Fields) {String} domainId The domain id
 * @apiSuccess (Response Fields) {Number} preRollAdCoung The preRoll ad count
 * @apiSuccess (Response Fields) {Number} midRollAdCoung The midRoll ad count
 * @apiSuccess (Response Fields) {Number} postRollAdCoung The postRoll ad count
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0f7465b-6357-469f-98cc-3f9d8cb7987f",
 *      "name": "New_Application",
 *      "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *      "preRollAdCount": 1,
 *      "midRollAdCount": 2,
 *      "postRollAdCount": 3
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// update application

/**
 * @api {post} /domains/:domainId/applications/:applicationId Update Application
 * @apiName Update Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the standard settings of the application
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 * @apiParam (Request Body Fields) {String} name The application name
 * @apiParam (Request Body Fields) {Number} [preRollAdCount] The preRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [midRollAdCount] The midRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in each slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [postRollAdCount] The postRoll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 *
 * @apiParamExample {json} Update Application Request Body Example:
 *    {
 *        "name":"New_Application",
 *        "preRollAdCount":1,
 *        "midRollAdCount":2,
 *        "postRollAdCount":3
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application id
 * @apiSuccess (Response Fields) {String} name The application name
 * @apiSuccess (Response Fields) {String} domainId The domain id
 * @apiSuccess (Response Fields) {Number} preRollAdCoung The preRoll ad count
 * @apiSuccess (Response Fields) {Number} midRollAdCoung The midRoll ad count
 * @apiSuccess (Response Fields) {Number} postRollAdCoung The postRoll ad count
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0f7465b-6357-469f-98cc-3f9d8cb7987f",
 *      "name": "Newest_Application",
 *      "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *      "preRollAdCount": 1,
 *      "midRollAdCount": 2,
 *      "postRollAdCount": 3
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// delete application

/**
 * @api {delete} /domains/:domainId/applications/:applicationId Delete Application
 * @apiName Delete Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the application from the indicated domainId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 *
 * @apiParamExample {Url} Delete Application Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {String} id The application id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0f7465b-6357-469f-98cc-3f9d8cb7987f",
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// get ad configuration

/**
 * @api {get} /domains/:domainId/applications/:applicationId/adConfig Get Application Ad Configuration
 * @apiName Get Application Ad Configuration
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the ad configuration of the application
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 *
 * @apiParamExample {Url} Get Application Ad Configuration Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications/adConfig
 *
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preRoll The preRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.id The preRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.name The preRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverId The preRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverName The preRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adPosition The preRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midRoll The midRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.id The midRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.name The midRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverId The midRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverName The midRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adPosition The midRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postRoll The postRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.id The postRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.name The postRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverId The postRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverName The postRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adPosition The postRoll ad configuration ad position (single ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    "adConfig": {
 *        "preRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "prenewUpdated",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "preRoll"
 *        },
 *        "midRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Mid",
 *            "adserverId": "1111-2222-33333-4444-aaaabbbbccccddd",
 *            "adServerName": "Test Ad Server",
 *            "adPosition": "midRoll"
 *        },
 *        "postRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Post",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postRoll"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// add ad configuration

/**
 * @api {post} /domains/:domainId/applications/:applicationId/adConfig Add Application Ad Configuration
 * @apiName Add Application Ad Configuration
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds or replaces the currently configured adConfigs. The input adConfig can be individual slots "pre-roll", "mid-roll", and/or "post-roll" for direct VAST campaigns OR a single "ad" campaign to indicate the ad decisioning server will determine the ads breaks (e.g. Freewheel SmartXML, DFP ad rules).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 * @apiParam (Request Body Fields) {Object} [preRoll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} preRoll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} preRoll.adserverId The ad server id
 * @apiParam (Request Body Fields) {Object} [midRoll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} midRoll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} midRoll.adserverId The ad server id
 * @apiParam (Request Body Fields) {Object} [postRoll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} postRoll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} postRoll.adserverId The ad server id
 * @apiParam (Request Body Fields) {Object} [ad] Only used for Freewheel SmartXML or DFP ad rules where ad slots are defined by the ad decisioning server. Can not be used with defined preRolls, midRolls, and/or postRolls
 * @apiParam (Request Body Fields) {String="smartxml","dfp"} ad.adPosition The ad position
 * @apiParam (Request Body Fields) {String} ad.adserverId The ad server id
 *
 * @apiParamExample {json} Add Ad Configuration Request Body Example:
 *    // Sample input for direct VAST
 *    {
 *        "preRoll": {
 *            "name": "preRollUpdated",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d"
 *        },
 *        "postRoll": {
 *            "name": "postRollUpdated",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d"
 *        }
 *    }
 *    // Sample input for smartxml or dfp
 *    {
 *        "ad": {
 *            "name": "Example adConfig Name",
 *            "adPosition": "smartxml",
 *            "adserverId": "72b453a5-37b5-5fa1-6deb-2958363ade2"
 *        }
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application id
 * @apiSuccess (Response Fields) {String} name The application name
 * @apiSuccess (Response Fields) {String} domainId The domain id
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preRoll The preRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.id The preRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.name The preRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverId The preRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adserverName The preRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preRoll.adPosition The preRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midRoll The midRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.id The midRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.name The midRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverId The midRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adserverName The midRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midRoll.adPosition The midRoll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postRoll The postRoll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.id The postRoll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.name The postRoll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverId The postRoll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adserverName The postRoll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postRoll.adPosition The postRoll ad configuration ad position (single ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "7aa9fcfe-ea9d-449c-80b6-fd5e7b7a4b72",
 *        "name": "Player- Single and Multi Ads",
 *        "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *        "adConfig": {
 *            "postRoll": {
 *            "id": "b04116aa-5656-45e3-adc3-c2eda4c6127e",
 *            "name": "prenewUpdated",
 *            "adserverId": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postRoll"
 *            }
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// delete ad configurations

/**
 * @api {delete} /domains/:domainId/applications/:applicationId/adConfig Delete Application Ad Configurations
 * @apiName Delete Application Ad Configurations
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes all of the ad configurations from the indicated applicationId .
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} applicationId The application id
 *
 * @apiParamExample {Url} Delete Ad Configurations Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications/adConfig
 *
 * @apiSuccess (Response Fields) {String[]} id Array of adConfig ids
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": [
 *            "6a38cbc1-7257-4a9b-99fa-121d4f971768",
 *            "9989ad10-62a6-4f82-828d-d63ed464a33e",
 *            "c244fd41-7188-41a4-ba5f-2f6edd6a67fa"
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */
