// get applications

/**
 * @api {get} /domains/:domain_id/applications Get Applications
 * @apiName Get Applications
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all applications within a domain. This method fetches 20 applications per page, returns the totalResult to indicate the total number of media items and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of results
 * @apiSuccess (Response Fields) {String} results.id The application id
 * @apiSuccess (Response Fields) {String} results.name The application name
 * @apiSuccess (Response Fields) {String} results.domain_id The domain id
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
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "7aa9fcfe-ea9d-449c-80b6-fd5e7b7a4b72",
 *                "name": "Player- Single and Multi Ads",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "fbfe16ab-0d11-4ca1-b944-1480970c4bf9",
 *                "name": "Player- Multi Ads",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
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

// get application

/**
 * @api {get} /domains/:domain_id/applications/:application_id Get Application
 * @apiName Get Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the application including the ad configurations. The response will include individual ad slots "pre-roll", "mid-roll", and/or "post-roll" for direct VAST configurations and a single "ad" server configurations that have ad break information determined by the ad decisioning server (e.g. Freewheel SmartXML, DFP ad rules). **Note** that the `adConfig` returned in the response can be of type single or multi.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preroll The preroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.id The preroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.name The preroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserver_id The preroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserverName The preroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adPosition The preroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midroll The midroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.id The midroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.name The midroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserver_id The midroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserverName The midroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adPosition The midroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postroll The postroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.id The postroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.name The postroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserver_id The postroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserverName The postroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adPosition The postroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.ad The ad configuration ad object (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.id The ad configuration ad id (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.name The ad configuration ad name (multi ad config)
 * @apiSuccess (Response Fields) {String} adConfig.ad.adserver_id The ad configuration ad ad server id (multi ad config)
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
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "preroll"
 *        },
 *        "midRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Mid",
 *            "adserver_id": "1111-2222-33333-4444-aaaabbbbccccddd",
 *            "adServerName": "Test Ad Server",
 *            "adPosition": "midroll"
 *        },
 *        "postRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Post",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postroll"
 *        }
 *    }
 *    // multi adconfig example
 *    "adConfig": {
 *        "ad": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "DFP",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "dfp"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// update application

/**
 * @api {post} /domains/:domain_id/applications/:application_id Update Application
 * @apiName Update Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the standard settings of the application
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 * @apiParam (Request Body Fields) {String} name The application name
 * @apiParam (Request Body Fields) {Number} [preRollAdCount] The preroll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [midRollAdCount] The midroll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in each slot. By default  this value is set to 0, but is required when using direct VAST tags.
 * @apiParam (Request Body Fields) {Number} [postRollAdCount] The postroll ad count. Only used for direct VAST campaigns. Its value will set the number of ads to be returned in the slot. By default  this value is set to 0, but is required when using direct VAST tags.
 *
 * @apiParamExample {json} Ingest Request Body Example:
 *    {
 *        "name":"New_Application",
 *        "preRollAdCount":1,
 *        "midRollAdCount":2,
 *        "postRollAdCount":3
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application id
 * @apiSuccess (Response Fields) {String} name The application name
 * @apiSuccess (Response Fields) {String} domain_id The domain id
 * @apiSuccess (Response Fields) {Number} preRollAdCoung The preroll ad count
 * @apiSuccess (Response Fields) {Number} midRollAdCoung The midroll ad count
 * @apiSuccess (Response Fields) {Number} postRollAdCoung The postroll ad count
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "a0f7465b-6357-469f-98cc-3f9d8cb7987f",
 *      "name": "Newest_Application",
 *      "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
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
 * @api {delete} /domains/:domain_id/applications/:application_id Delete Application
 * @apiName Delete Application
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the application from the indicated domain_id.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 *
 * @apiParamExample {Url} Ingest Request Body Example:
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
 * @api {get} /domains/:domain_id/applications/:application_id/adconfig Get Application Ad Configuration
 * @apiName Get Application Ad Configuration
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the ad configuration of the application
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preroll The preroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.id The preroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.name The preroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserver_id The preroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserverName The preroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adPosition The preroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midroll The midroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.id The midroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.name The midroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserver_id The midroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserverName The midroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adPosition The midroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postroll The postroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.id The postroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.name The postroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserver_id The postroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserverName The postroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adPosition The postroll ad configuration ad position (single ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    "adConfig": {
 *        "preRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "prenewUpdated",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "preroll"
 *        },
 *        "midRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Mid",
 *            "adserver_id": "1111-2222-33333-4444-aaaabbbbccccddd",
 *            "adServerName": "Test Ad Server",
 *            "adPosition": "midroll"
 *        },
 *        "postRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Post",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postroll"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// add ad configuration

/**
 * @api {post} /domains/:domain_id/applications/:application_id/adconfig Add Application Ad Configuration
 * @apiName Add Application Ad Configuration
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds or Replaces the currently configured adconfigs. The input adconfig can be individual slots "pre-roll", "mid-roll", and/or "post-roll" for direct VAST campaigns OR a single "ad" campaign to indicate the ad decisioning server will determine the ads breaks (e.g. Freewheel SmartXML, DFP ad rules).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 * @apiParam (Request Body Fields) {Object} [preroll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} preroll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} preroll.adserver_id The ad server id
 * @apiParam (Request Body Fields) {Object} [midroll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} midroll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} midroll.adserver_id The ad server id
 * @apiParam (Request Body Fields) {Object} [postroll] The ad slot intended to be updated or replaced. This should only be used with direct VAST campaigns
 * @apiParam (Request Body Fields) {String} postroll.name The name for the ad event
 * @apiParam (Request Body Fields) {String} postroll.adserver_id The ad server id
 * @apiParam (Request Body Fields) {Object} [ad] Only used for Freewheel SmartXML or DFP ad rules where ad slots are defined by the ad decisioning server. Can not be used with defined prerolls, midrolls, and/or postrolls
 * @apiParam (Request Body Fields) {String} ad.adPosition The ad position
 * @apiParam (Request Body Fields) {String} ad.adserver_id The ad server id
 *
 * @apiParamExample {json} Add adconfir Request Body Example:
 *    // Sample input for direct VAST
 *    {
 *        "preRoll": {
 *            "name": "preRollUpdated",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d"
 *        },
 *        "postRoll": {
 *            "name": "postRollUpdated",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d"
 *        }
 *    }
 *    // Sample input for smartxml or dfp
 *    {
 *        "ad": {
 *            "name": "postRollUpdated",
 *            “adPosition”: “smartxml”,
 *            "adserver_id": "72b453a5-37b5-5fa1-6deb-2958363ade2"
 *        }
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The application id
 * @apiSuccess (Response Fields) {String} name The application name
 * @apiSuccess (Response Fields) {String} domain_id The domain id
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preroll The preroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.id The preroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.name The preroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserver_id The preroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserverName The preroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adPosition The preroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midroll The midroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.id The midroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.name The midroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserver_id The midroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserverName The midroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adPosition The midroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postroll The postroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.id The postroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.name The postroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserver_id The postroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserverName The postroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adPosition The postroll ad configuration ad position (single ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "7aa9fcfe-ea9d-449c-80b6-fd5e7b7a4b72",
 *        "name": "Player- Single and Multi Ads",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *        "adConfig": {
 *            "postRoll": {
 *            "id": "b04116aa-5656-45e3-adc3-c2eda4c6127e",
 *            "name": "prenewUpdated",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postroll"
 *            }
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// delete ad configurations

/**
 * @api {delete} /domains/:domain_id/applications/:application_id/adconfig Delete Application Ad Configurations
 * @apiName Delete Application Ad Configurations
 * @apiGroup Applications
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes all of the ad configurations from the indicated application_id.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} application_id The application id
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/applications
 *
 * @apiSuccess (Response Fields) {Object} adConfig The ad configuration object
 * @apiSuccess (Response Fields) {Object} adConfig.preroll The preroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.id The preroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.name The preroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserver_id The preroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adserverName The preroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.preroll.adPosition The preroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.midroll The midroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.id The midroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.name The midroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserver_id The midroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adserverName The midroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.midroll.adPosition The midroll ad configuration ad position (single ad config)
 * @apiSuccess (Response Fields) {Object} adConfig.postroll The postroll ad configuration object (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.id The postroll ad configuration id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.name The postroll ad configuration name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserver_id The postroll ad configuration ad server id (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adserverName The postroll ad configuration ad server name (single ad config)
 * @apiSuccess (Response Fields) {String} adConfig.postroll.adPosition The postroll ad configuration ad position (single ad config)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    "adConfig": {
 *        "preRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "prenewUpdated",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "preroll"
 *        },
 *        "midRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Mid",
 *            "adserver_id": "1111-2222-33333-4444-aaaabbbbccccddd",
 *            "adServerName": "Test Ad Server",
 *            "adPosition": "midroll"
 *        },
 *        "postRoll": {
 *            "id": "5840b954-5094-4e13-b49a-319115342011",
 *            "name": "Post",
 *            "adserver_id": "34b353d8-f7d5-4fa1-9dea-49183236df8d",
 *            "adServerName": "Fireworks waterfall",
 *            "adPosition": "postroll"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

