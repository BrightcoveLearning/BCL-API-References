// get ad decisioning servers

/**
 * @api {get} /domains/:domain_id/adServers Get Ad Decisioning Servers
 * @apiName Get Ad Decisioning Servers
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of ad decisioning servers configured for the domain_id. This method fetches 20 ad servers per page, returns the totalResult to indicate the total number of ad servers and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Get Ad Decisioning Servers Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of results
 * @apiSuccess (Response Fields) {String} results.id The ad decisioning server id
 * @apiSuccess (Response Fields) {String} results.name The ad decisioning server name
 * @apiSuccess (Response Fields) {Url} results.baseURL  server
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
 *                "id": "4df36e4c-f418-403d-b17e-60c99dbe65b4",
 *                "name": "Newest Ad Server",
 *                "baseUrl": "test.com",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "06790067-e7fa-4e90-8d65-6ed4d77b41b7",
 *                "name": "New Ad Provider",
 *                "baseUrl": "test.com",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            }
 *        ],
 *        "prev": null,
 *        "next": null,
 *        "totalResults": 6
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// create ad decisioning servers

/**
 * @api {post} /domains/:domain_id/adServers Get Ad Decisioning Servers
 * @apiName Get Ad Decisioning Servers
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new ad decisioning server in the indicated domain by providing an user-defined name and the URL of the server.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Request Body Fields) {String} name A human-readable name for the ad decisioning server
 * @apiParam (Request Body Fields) {String} baseURL The HTTP request URL of the ad decisioning server
 * @apiParam (Request Body Fields) {Object} [variables] Key-value pair mappings for the ad server URL that can utilize page level parameters passed on the query string(see Parameters section) or Dynamic Ad Parameters (see Dynamic Ad Params section). Double curly bracket syntax in the "key" will not be used and defines a placeholder for the insertion of the key-value pair within the baseUrl. See the example below
 *
 * @apiParamExample {json} Create Ad Decisioning Server Request Body Example:
 *    {
 *        "name" : "New-ad-server",
 *        "baseUrl": "www.google.com"
 *        "variables": {
 *        "{{placeholder1}} key1": "value1",
 *            "{{ph2}} key2": "value2",
 *            "UMADPARAM key3": "value3",
 *            "key4": "value4"
 *            }
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The ad decisioning server id
 * @apiSuccess (Response Fields) {String} name The ad decisioning server name
 * @apiSuccess (Response Fields) {Url} baseURL  server
 * @apiSuccess (Response Fields) {String} domain_id The domain id
 * @apiSuccess (Response Fields) {Object} variables map of key/value pairs
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "40c11e99-8878-4f17-81c8-ca7d16d9ebbe",
 *        "name": "New-ad-server-updated-name",
 *        "baseUrl": "www.test.com",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *        "variables": {
 *            "key1": "value1",
 *            "someKey": "someValue"
 *            }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// get ad decisioning server

/**
 * @api {get} /domains/:domain_id/adServers/:adserver_id Get Ad Decisioning Server
 * @apiName Get Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information for the indicated adserver_id.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} adserver_id The ad decisioning server id
 *
 * @apiParamExample {Url} Get Ad Decisioning Server Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers/4df36e4c-f418-403d-b17e-60c99dbe65b4
 *
 * @apiSuccess (Response Fields) {String} id The ad decisioning server id
 * @apiSuccess (Response Fields) {String} name The ad decisioning server name
 * @apiSuccess (Response Fields) {Url} baseURL  server
 * @apiSuccess (Response Fields) {String} domain_id The domain id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4df36e4c-f418-403d-b17e-60c99dbe65b4",
 *        "name": "Newest Ad Server",
 *        "baseUrl": "test.com",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */

// update ad decisioning server

/**
 * @api {post} /domains/:domain_id/adServers/:adserver_id Update Ad Decisioning Server
 * @apiName Update Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the name of the ad decisioning server indicated by the adserver_id.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} adserver_id The ad decisioning server id
 * @apiParam (Request Body Fields) {String} name A human-readable name for the ad decisioning server
 * @apiParam (Request Body Fields) {String} baseURL The HTTP request URL of the ad decisioning server
 * @apiParam (Request Body Fields) {Object} [variables] Key-value pair mappings for the ad server URL that can utilize page level parameters passed on the query string(see Parameters section) or Dynamic Ad Parameters (see Dynamic Ad Params section). Double curly bracket syntax in the "key" will not be used and defines a placeholder for the insertion of the key-value pair within the baseUrl. See the example below
 *
 * @apiParamExample {json} Create Ad Decisioning Server Request Body Example:
 *    {
 *        "name" : "New-ad-server",
 *        "baseUrl": "www.google.com"
 *        "variables": {
 *        "{{placeholder1}} key1": "value1",
 *            "{{ph2}} key2": "value2",
 *            "UMADPARAM key3": "value3",
 *            "key4": "value4"
 *            }
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The ad decisioning server id
 * @apiSuccess (Response Fields) {String} name The ad decisioning server name
 * @apiSuccess (Response Fields) {Url} baseURL  server
 * @apiSuccess (Response Fields) {String} domain_id The domain id
 * @apiSuccess (Response Fields) {Object} variables map of key/value pairs
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "40c11e99-8878-4f17-81c8-ca7d16d9ebbe",
 *        "name": "New-ad-server-updated-name",
 *        "baseUrl": "www.test.com",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *        "variables": {
 *            "key1": "value1",
 *            "someKey": "someValue"
 *            }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */


// delete ad decisioning server

/**
 * @api {delete} /domains/:domain_id/adServers/:adserver_id Delete Ad Decisioning Server
 * @apiName Delete Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes an ad decisioning server in the indicated by the adserver_id.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} adserver_id The ad decisioning server id
 *
 * @apiParamExample {Url} Create Ad Decisioning Server Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers/4df36e4c-f418-403d-b17e-60c99dbe65b4
 *
 * @apiSuccess (Response Fields) {String} id The ad decisioning server id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4df36e4c-f418-403d-b17e-60c99dbe65b4",
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 */


