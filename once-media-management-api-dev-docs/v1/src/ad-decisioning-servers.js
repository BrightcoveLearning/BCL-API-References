// Get All Ad Decisioning Servers

/**
 * @api {get} /domains/:domainId/adServers Get All Ad Decisioning Servers
 * @apiName Get All Ad Decisioning Servers
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all ad decisioning servers configured in the domain. This method returns 20 results by default, totalResults indicates the total number of applications in the domain, previous and/or next page request URLs will be included within the response if necessary. URL Parameters may be appended to modify result sets.
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
 * @apiParamExample {Url} Get Ad Decisioning Servers Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of adServers in result set
 * @apiSuccess (Response Fields) {String} results.id Each adServerId
 * @apiSuccess (Response Fields) {String} results.name Each adServer’s name
 * @apiSuccess (Response Fields) {Url} results.baseURL Each adServer’s base URL
 * @apiSuccess (Response Fields) {String} results.domainId Each adServer’s parent domainId
 * @apiSuccess (Response Fields) {Url} prev URL to GET the previous adServer result set (if necessary)
 * @apiSuccess (Response Fields) {Url} next URL to GET the next adServer result set (if necessary)
 * @apiSuccess (Response Fields) {Number} totalResults The total number of adServer in the domain
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "4f7ceb38-5093-437b-883b-ba96c413c4d7",
 *                "name": "ExamplePodAdServer",
 *                "baseUrl": "http://adpod.adprovider.com/adpath/ads?sz=640x480&impl=s&gdfp_req=1&env=vp&output=xml_vast2&{{ph01}}&{{ph02}}&unviewed_position_start=1&ad_rule=1&nofb=1&ss_req=1",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            },
 *            {
 *                "id": "799c9ffa-78cc-4fc5-81ca-39297734ef2d",
 *                "name": "ExampleVASTAdServer",
 *                "baseUrl": "http://ads.vastadserver.com/path/ads?dur=15",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            }
 *        ],
 *        "prev": null,
 *        "next": null,
 *        "totalResults": 2
 }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

 // Get Ad Decisioning Server Details

 /**
  * @api {get} /domains/:domainId/adServers/:adserverId Get Ad Decisioning Server Details
  * @apiName Get Ad Decisioning Server Details
  * @apiGroup Ad_Decisioning_Servers
  * @apiVersion 1.0.0
  *
  * @apiDescription Retrieves details of a specified adServer.
  *
  * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
  *
  * @apiParam (Path Parameters) {String} domainId The domain Id
  * @apiParam (Path Parameters) {String} adserverId The adServerId
  *
  * @apiParamExample {Url} Get Ad Decisioning Server Example:
  *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers/4df36e4c-f418-403d-b17e-60c99dbe65b4
  *
  * @apiSuccess (Response Fields) {String} id The adServerId
  * @apiSuccess (Response Fields) {String} name The adServer’s name
  * @apiSuccess (Response Fields) {Url} baseURL  The adServer’s base URL
  * @apiSuccess (Response Fields) {String} domainId The adServer’s parent domainId
  * @apiSuccess (Response Fields) {Object} variables An object set of query string key/value pairs which will be inserted/appended to the base URL at request time
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "id": "4f7ceb38-5093-437b-883b-ba96c413c4d7",
  *        "name": "ExamplePodAdServer",
  *        "baseUrl": "http://adpod.adprovider.com/adpath/ads?sz=640x480&impl=s&gdfp_req=1&env=vp&output=xml_vast2&{{ph01}}&{{ph02}}&unviewed_position_start=1&ad_rule=1&nofb=1&ss_req=1",
  *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
  *        "variables": {
  *            "{{ph01}} vid": "{{mediaitem.foreignkey}}",
  *            "{{ph02}} ip": "{{ipaddress}}",
  *            "UMADPARAM": "UMADPARAMiu",
  *            "UMPTPARAM": "UMPTPARAMcust_params",
  *            "cachebuster": "{{randomnumber32}}",
  *            "url": "{{referringURL}}",
  *        }
  *    }
  *
  * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
  * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
  * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
  *
  */

// create ad decisioning servers

/**
 * @api {post} /domains/:domainId/adServers Create Ad Decisioning Server
 * @apiName Create Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Create an adServer, defining the base URL and query string variables that will be fired to your ad provider for a single VAST ad or DFP/SmartXML ad playlist response. Please see our guide for [Converting an ad tag for the Once Media Management API](//docs.brightcove.com/en/once/guides/converting-ad-tag-once-media-management-api.html).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String} name The new adServer’s name
 * @apiParam (Request Body Fields) {String} baseURL The new adServer’s base URL
 * @apiParam (Request Body Fields) {Object} variables An object set of query string key/value pairs to be inserted/appended to the base URL at request time. **If your base URL requires no variables, include an empty variables object ("variables": {})**
 *
 * @apiParamExample {json} Create Ad Decisioning Server Request Body Example:
 *    {
 *    	"name": "Documentation adServer Example",
 *    	"baseUrl": "http://adserver.adprovider.com/adpath/ads?sz=640x480&impl=s&env=vp&output=xml_vast2&{{ph01}}&{{ph02}}&unviewed_position_start=1&ad_rule=1&nofb=1&ss_req=1",
 *    	"variables": {
 *    		"url": "{{referringURL}}",
 *    		"cachebuster": "{{randomnumber32}}",
 *    		"{{ph01}} vid": "{{mediaitem.foreignkey}}",
 *    		"{{ph02}} ip": "{{ipaddress}}",
 *    		"UMADPARAM": "UMADPARAMiu",
 *    		"UMPTPARAM": "UMPTPARAMcust_params"
 *    	}
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The adServerId
 * @apiSuccess (Response Fields) {String} name The adServer’s name
 * @apiSuccess (Response Fields) {Url} baseURL  The adServer’s base URL
 * @apiSuccess (Response Fields) {String} domainId Each adServer’s parent domainId
 * @apiSuccess (Response Fields) {Object} variables An object set of query string key/value pairs to be inserted/appended to the base URL at request time. Response variable order may not match your original input, this is expected and will not affect ad tag performance.
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "40c11e99-8878-4f17-81c8-ca7d16d9ebbe",
 *        "name": "New-ad-server-updated-name",
 *        "baseUrl": "test.com",
 *        "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *        "variables": {
 *            "key1": "value1",
 *            "someKey": "someValue"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// update ad decisioning server

/**
 * @api {post} /domains/:domainId/adServers/:adserverId Update Ad Decisioning Server
 * @apiName Update Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the specified adServer’s name, base URL, and/or variables. NOTE: This change will affect any application adConfigs utilizing the updated adServer. If you need an updated adServer configuration without changing existing applications or ad configurations, create a new adServer and then create or modify applications and their adConfigs to use the new adServer.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String} name The new adServer’s name
 * @apiParam (Request Body Fields) {String} baseURL The new adServer’s base URL
 * @apiParam (Request Body Fields) {Object} variables An object set of query string key/value pairs to be inserted/appended to the base URL at request time. **If your base URL requires no variables, include an empty variables object ("variables": {})**
 *
 * @apiParamExample {json} Create Ad Decisioning Server Request Body Example:
 *    {
 *    	"name": "Documentation adServer Example",
 *    	"baseUrl": "http://adserver.adprovider.com/adpath/ads?sz=640x480&impl=s&env=vp&output=xml_vast2&{{ph01}}&{{ph02}}&unviewed_position_start=1&ad_rule=1&nofb=1&ss_req=1",
 *    	"variables": {
 *    		"url": "{{referringURL}}",
 *    		"cachebuster": "{{randomnumber32}}",
 *    		"{{ph01}} vid": "{{mediaitem.foreignkey}}",
 *    		"{{ph02}} ip": "{{ipaddress}}",
 *    		"UMADPARAM": "UMADPARAMiu",
 *    		"UMPTPARAM": "UMPTPARAMcust_params"
 *    	}
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The adServerId
 * @apiSuccess (Response Fields) {String} name The adServer’s name
 * @apiSuccess (Response Fields) {Url} baseURL  The adServer’s base URL
 * @apiSuccess (Response Fields) {String} domainId Each adServer’s parent domainId
 * @apiSuccess (Response Fields) {Object} variables An object set of query string key/value pairs to be inserted/appended to the base URL at request time. Response variable order may not match your original input, this is expected and will not affect ad tag performance.
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "40c11e99-8878-4f17-81c8-ca7d16d9ebbe",
 *        "name": "New-ad-server-updated-name",
 *        "baseUrl": "test.com",
 *        "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *        "variables": {
 *            "key1": "value1",
 *            "someKey": "someValue"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */


// delete ad decisioning server

/**
 * @api {delete} /domains/:domainId/adServers/:adserverId Delete Ad Decisioning Server
 * @apiName Delete Ad Decisioning Server
 * @apiGroup Ad_Decisioning_Servers
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the specified ad decisioning server. NOTE: This change will remove any application adConfigs utilizing the deleted adServer.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} adserverId The adServerId
 *
 * @apiParamExample {Url} Delete Ad Decisioning Server Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/adServers/4df36e4c-f418-403d-b17e-60c99dbe65b4
 *
 * @apiSuccess (Response Fields) {String} id The adServerId which has been deleted
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4df36e4c-f418-403d-b17e-60c99dbe65b4",
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */
