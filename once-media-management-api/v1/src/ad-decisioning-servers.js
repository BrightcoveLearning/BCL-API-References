// get ad decisioning servers

/**
 * @api {get} /domains/:domain_id/adServers Get Ad Decisioning Servers
 * @apiName Get Ad Decisioning Servers
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Ingest Request Body Example:
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
 * @api {get} /domains/:domain_id/adServers Get Ad Decisioning Servers
 * @apiName Get Ad Decisioning Servers
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Ingest Request Body Example:
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

