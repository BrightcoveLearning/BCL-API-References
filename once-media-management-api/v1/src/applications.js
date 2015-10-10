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

