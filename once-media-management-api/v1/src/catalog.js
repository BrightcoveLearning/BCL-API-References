// Get All Catalogs

/**
 * @api {get} /domains/:domainId/catalogs Get All Catalogs
 * @apiName Get All Catalogs
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all catalogs in a domain. This method returns 20 results by default, totalResults indicates the total number of catalogs, previous and/or next page request URLs will be included within the response if necessary. URL Parameters may be appended to modify result sets.
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
 * @apiParamExample {Url} Get Catalog List Example:
 *     https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of catalogs in result set
 * @apiSuccess (Response Fields) {String} results.id Each catalogId
 * @apiSuccess (Response Fields) {String} results.name Each catalog’s name
 * @apiSuccess (Response Fields) {String} results.domainId Each catalog’s parent domainId
 * @apiSuccess (Response Fields) {Url} prev URL to get the previous result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Url} next URL to get the next result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Number} total number of results
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "4321abcd-4321-dcba-fe65-567890fedcba",
 *                "name": "ExampleCatalog01",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            },
 *            {
 *                "id": "4422abcd-4321-dcba-fe65-567890fedcba",
 *                "name": "ExampleCatalog02",
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
 *
 *
 */

// Get Catalog Details

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId Get Catalog Details
 * @apiName Get Catalog Details
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves details of a specified catalog
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 *
 * @apiParamExample {Url} Get Catalog Request Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac
 *
 * @apiSuccess (Response Fields) {String} id The catalog Id
 * @apiSuccess (Response Fields) {String} name The catalog name
 * @apiSuccess (Response Fields) {Boolean} domainId The catalog’s parent domainId
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4321abcd-4321-dcba-fe65-567890fedcba",
 *        "name": "ExampleCatalog01",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// create catalog

/**
 * @api {post} /domains/:domainId/catalogs Create Catalog
 * @apiName Create Catalog
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new catalog within the parent domainId. You may specify renditions when creating the catalog, otherwise it will be assigned all domain renditions marked as default. The new catalog will also inherit any domain publication rules.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String} name The new catalog name
 * @apiParam (Request Body Fields) {Object[]} [renditions] An array of renditions to be assigned to the catalog. If omitted, catalog will be assigned default domain renditions.
 * @apiParam (Request Body Fields) {String} renditions.id Each renditionId to be assigned to the catalog
 *
 * @apiParamExample {json} Create Catalog Request Body Example:
 *    {
 *        "name":"ExampleCatalog03",
 *        "renditions": [
 *            {
 *                "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *            },
 *            {
 *                "id": "1234abcd-1234-abcd-56ef-098765fedcba"
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The new catalogId
 * @apiSuccess (Response Fields) {String} name The new catalog name
 * @apiSuccess (Response Fields) {Boolean} domainId The new catalog’s parent domainId
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "f8933df8-dfa3-4d69-9f27-0420897e24aa",
 *        "name": "ExampleCatalog03",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// update catalog name

/**
 * @api {put} /domains/:domainId/catalogs Update Catalog Name
 * @apiName Update Catalog Name
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Assign a new name to the specified catalogId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String} id The catalog Id to be updated
 * @apiParam (Request Body Fields) {String} name The new catalog name
 *
 * @apiParamExample {json} Update Catalog Request Body Example:
 *    {
 *        "id": "The new catalog name",
 *        "name": "ExampleCatalog001"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The update catalogId
 * @apiSuccess (Response Fields) {String} name The updated catalog name
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4321abcd-4321-dcba-fe65-567890fedcba",
 *        "name": "ExampleCatalog001",
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


// Get All Catalog Renditions

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/renditions Get All Catalog Renditions
 * @apiName Get All Catalog Renditions
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves the rendition set assigned to the specified catalog. NOTE: All videos ingested to this catalog will have these renditions assigned.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 *
 * @apiParamExample {Url} Get Catalog Renditions Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of renditions assigned to catalog
 * @apiSuccess (Response Fields) {String} results.id The renditionId
 * @apiSuccess (Response Fields) {String} results.name The rendition name
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 1200 ZC 640x360 1104.96 29.97 B31"
 *            },
 *            {
 *                "id": "225bd8bb-a577-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 2000 ZC 960x540 1872.128 29.97 M31"
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// Get Catalog Rendition Details

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/renditions/:renditionId Get Catalog Rendition Details
 * @apiName Get Catalog Rendition Details
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the settings of the selected transcode rendition indicated by the renditionId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} renditionId The rendition id
 *
 * @apiParamExample {Url} Get Catalog Rendition Settings Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The renditionId
 * @apiSuccess (Response Fields) {String} name The rendition name
 * @apiSuccess (Response Fields) {Number} width The frame width for the rendition in pixels
 * @apiSuccess (Response Fields) {Number} height The frame height for the rendition in pixels
 * @apiSuccess (Response Fields) {Number} videoBitRate The video bitrate in kbps
 * @apiSuccess (Response Fields) {Number} audioBitRate The audio bitrate in kbps
 * @apiSuccess (Response Fields) {String} codecsValue The video and audio codecs
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7",
 *        "name": "OV2 Once 1200 ZC 640x360 1104.96 29.97 B31",
 *        "width": 640,
 *        "height": 360,
 *        "videoBitRate": 1104,
 *        "audioBitRate": 96,
 *        "codecsValue": "mp4a.40.2,avc1.42001f"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


// Replace All Catalog Renditions

/**
 * @api {put} /domains/:domainId/catalogs/:catalogId/renditions/:renditionId Replace All Catalog Renditions
 * @apiName Replace All Catalog Renditions
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Replace (overwrite) the specified catalog’s current rendition set, using an updated array in the request body. NOTE: This method will not add the specified rendition(s) to, nor will it remove renditions from, existing mediaitems in the specified catalog. Please contact Support if you also need renditions assigned to or removed from previously-ingested mediaItems in the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} renditionId The rendition id
 * @apiParam (Request Body Fields) {String} id a renditionId
 *
 * @apiParamExample {json} Replace Catalog Rendition Request Body Example:
 *    [
 *      {
 *        "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7"
 *      },
 *      {
 *        "id": "225bd8bb-a577-11e4-bfdb-005056837bc7"
 *      }
 *    ]
 *
 * @apiSuccess (Response Fields) {String} Each renditionId to be assigned to catalog
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *        "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7"
 *      },
 *      {
 *        "id": "225bd8bb-a577-11e4-bfdb-005056837bc7"
 *      }
 *    ]
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


// add rendition to catalog

/**
 * @api {post} /domains/:domainId/catalogs/:catalogId/renditions/ Add Catalog Rendition
 * @apiName Add Catalog Rendition
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Add the specified new rendition to a catalog’s rendition set. New mediaItems ingested to the catalog will be assigned the specified rendition. NOTE: This method will not add the specified rendition to existing mediaItems in the catalog. Please contact Support if you also need new renditions assigned to previously-ingested mediaItems.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Request Body Fields) {String} id a rendition id to add
 *
 * @apiParamExample {json} Add Catalog Rendition Request Body Example:
 *    {
 *      "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The new renditionId to be added to the catalog
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


// delete catalog rendition

/**
 * @api {delete} /domains/:domainId/catalogs/:catalogId/renditions/:renditionId Delete Catalog Rendition
 * @apiName Delete Catalog Rendition
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete the specified rendition from a catalog’s rendition set. New mediaItems ingested to the catalog will no longer be assigned the specified rendition. NOTE: This method will not remove the specified rendition from existing mediaItems in the catalog. Please contact Support if you also need the specified rendition removed from previously-ingested mediaItems.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} renditionId The rendition id to remove from the catalog set
 *
 * @apiParamExample {Url} Delete Catalog Rendition Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalog/62191781-a933-49d6-831f-83bdf51a26ac/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The renditionId removed from the catalog rendition set
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


 // Get All Catalog Publication Rules

 /**
  * @api {get} /domains/:domainId/catalogs/:catalogId/publicationRules Get All Catalog Publication Rules
  * @apiName Get All Catalog Publication Rules
  * @apiGroup Catalog
  * @apiVersion 1.0.0
  *
  * @apiDescription Retrieves all publicationRuleIds assigned to a Catalog. Please review the [Content Restriction](/docs.brightcove.com/en/once/guides/once-vod-2-0.html#contentRestriction) section of our Once VOD 2.0 Guide for details on what Publication Rules can do and how they are inherited.
  *
  * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
  *
  * @apiParam (Path Parameters) {String} domainId The domain Id
  * @apiParam (Path Parameters) {String} catalogId The catalog id
  *
  * @apiParamExample {Url} Get Catalog Publication Rules Example:
  *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
  *
  * @apiSuccess (Response Fields) {String[]} publicationRuleIds A comma-separated array of publicationRuleIds assigned to the catalog (will be inherited by mediaItems ingested to the catalog)
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    [
  *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
  *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
  *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
  *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
  *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
  *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
  *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
  *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
  *    ]
  *
  * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
  * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
  * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
  *
  *
  */

  // Get Catalog Publication Rule Details

  /**
   * @api {get} /domains/:domainId/catalogs/:catalogId/publicationRules/:publicationRuleId Get Catalog Publication Rule Details
   * @apiName Get Catalog Publication Rule Details
   * @apiGroup Catalog
   * @apiVersion 1.0.0
   *
   * @apiDescription Retrieves configuration of a catalog-level publication rule.
   *
   * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
   *
   * @apiParam (Path Parameters) {String} domainId The domain Id
   * @apiParam (Path Parameters) {String} catalogId The catalog id
   * @apiParam (Path Parameters) {String} publicationRuleId The publication rule id
   *
   * @apiParamExample {Url} Get Catalog Publication RulesExample:
   *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
   *
   * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
   * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
   * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters
   * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost)
   * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered
   * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith)
   * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
   * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters
   * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
   * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
   * @apiSuccess (Response Fields) {String} id The publicationRule Id
   * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domainId
   * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalogId
   *
   * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *    {
   *        "startDate": 1436384287,
   *        "endDate": 1752003487,
   *        "clientFilters": [
   *            {
   *                "variableName": "IpAddress",
   *                "value": "127.0.0.1",
   *                "filterType": "Equals",
   *                "isDenied": true
   *            }
   *        ],
   *        "countryRules": [
   *            {
   *                "countryCode": "FI",
   *                "isDenied": true
   *            }
   *        ],
   *        "id": "7454cab9-9491-43bb-84f4-b208487ca1fb",
   *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba",
   *        "catalog": "4321abcd-4321-dcba-fe65-567890fedcba"
   *    }
   *
   * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
   * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
   * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
   *
   *
   */

   // Create Catalog Publication Rule

   /**
    * @api {post} /domains/:domainId/catalog/:catalogId/publicationRules Create Catalog Publication Rule
    * @apiName Create Catalog Publication Rule
    * @apiGroup Catalog
    * @apiVersion 1.0.0
    *
    * @apiDescription Create a catalog publication rule. NOTE: A new catalog publication rule created by this method will only be applied to new mediaItems ingested to the catalog, but will not be applied to existing mediaItems within. Please see below for a method to create or update publication rules assigned to individual mediaItems.
    *
    * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
    *
    * @apiParam (Path Parameters) {String} domainId The domain Id
    * @apiParam (Path Parameters) {String} catalogId The catalog id
    * @apiParam (Request Body Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
    * @apiParam (Request Body Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
    * @apiParam (Request Body Fields) {Object[]} [clientFilters] Array of client-based filters
    * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} clientFilters.variableName The type of client variable being filtered
    * @apiParam (Request Body Fields) {String} clientFilters.value A string against which requests will be filtered
    * @apiParam (Request Body Fields) {String="Equals", "NotEquals", "In", "NotIn", "Contains", "NotContains", "StartsWith", "NotStartsWith", "EndsWith", "NotEndsWith"} clientFilters.filterType The method of filtering against the value string
    * @apiParam (Request Body Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiParam (Request Body Fields) {Object[]} [countryRules] Array of country-based filters
    * @apiParam (Request Body Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
    * @apiParam (Request Body Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    *
    * @apiParamExample {json} Create Catalog Publication Rule Request Body Example:
    *    {
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
    *        "clientFilters": [
    *            {
    *                "variableName": "IpAddress",
    *                "value": "127.0.0.1",
    *                "filterType": "Equals",
    *                "isDenied": true
    *            }
    *        ],
    *        "countryRules": [
    *            {
    *                "countryCode": "FI",
    *                "isDenied": true
    *            }
    *        ]
    *    }
    *
    * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective,
    * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires,
    * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters,
    * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost),
    * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered,
    * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith),
    * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters,
    * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered,
    * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {String} id The publicationRule Id
    * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domainId
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalogId
    *
    * @apiSuccessExample {json} Success Response:
    *    HTTP/1.1 200 OK
    *    {
    *        "channel": "5fba5bb0-5fba-5bb0-06ed-8768600306ed",
    *        "startDate": 1436384287
    *        "endDate": 1952003487
    *        "clientFilters": [
    *            {
    *                "variableName": "IpAddress"
    *                "value": "127.0.0.1"
    *                "filterType": "Equals"
    *                "isDenied": true
    *            }
    *        ]
    *        "countryRules": [
    *            {
    *                "countryCode": "FI"
    *                "isDenied": true
    *            }
    *        ]
    *        "id": "7454cab9-9491-43bb-84f4-b208487ca1fb"
    *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba"
    *        "catalog": "4321abcd-4321-dcba-fe65-567890fedcba"
    *    }
    *
    *
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalogId
    *
    * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
    * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
    * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
    *
    *
    */


   // Update Catalog Publication Rule

   /**
    * @api {put} /domains/:domainId/catalog/:catalogId/publicationRules/:publicationRuleId Update Catalog Publication Rule
    * @apiName Update Catalog Publication Rule
    * @apiGroup Catalog
    * @apiVersion 1.0.0
    *
    * @apiDescription Update a catalog publication rule. NOTE: Updates made by this method will only be applied to new mediaItems ingested to the catalog, but will not update publication rules of existing mediaItems within. Please see below for a method to update publication rules assigned to individual mediaItems.
    *
    * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
    *
    * @apiParam (Path Parameters) {String} domainId The domain Id
    * @apiParam (Path Parameters) {String} catalogId The catalog id
    * @apiParam (Path Parameters) {String} publicationRuleId The publicationRule Id
    * @apiParam (Request Body Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
    * @apiParam (Request Body Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
    * @apiParam (Request Body Fields) {Object[]} [clientFilters] Array of client-based filters
    * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} clientFilters.variableName The type of client variable being filtered
    * @apiParam (Request Body Fields) {String} clientFilters.value A string against which requests will be filtered
    * @apiParam (Request Body Fields) {String="Equals", "NotEquals", "In", "NotIn", "Contains", "NotContains", "StartsWith", "NotStartsWith", "EndsWith", "NotEndsWith"} clientFilters.filterType The method of filtering against the value string
    * @apiParam (Request Body Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiParam (Request Body Fields) {Object[]} [countryRules] Array of country-based filters
    * @apiParam (Request Body Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
    * @apiParam (Request Body Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    *
    * @apiParamExample {json} Create Catalog Publication Rule Request Body Example:
    *    {
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
    *        "clientFilters": [
    *            {
    *                "variableName": "IpAddress",
    *                "value": "127.0.0.1",
    *                "filterType": "Equals",
    *                "isDenied": true
    *            }
    *        ],
    *        "countryRules": [
    *            {
    *                "countryCode": "FI",
    *                "isDenied": true
    *            }
    *        ]
    *    }
    *
    * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective,
    * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires,
    * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters,
    * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost),
    * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered,
    * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith),
    * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters,
    * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered,
    * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {String} id The publicationRule Id
    * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domainId
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalogId
    *
    * @apiSuccessExample {json} Success Response:
    *    HTTP/1.1 200 OK
    *    {
    *        "channel": "5fba5bb0-5fba-5bb0-06ed-8768600306ed",
    *        "startDate": 1436384287
    *        "endDate": 1952003487
    *        "clientFilters": [
    *            {
    *                "variableName": "IpAddress"
    *                "value": "127.0.0.1"
    *                "filterType": "Equals"
    *                "isDenied": true
    *            }
    *        ]
    *        "countryRules": [
    *            {
    *                "countryCode": "FI"
    *                "isDenied": true
    *            }
    *        ]
    *        "id": "7454cab9-9491-43bb-84f4-b208487ca1fb"
    *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba"
    *        "catalog": "4321abcd-4321-dcba-fe65-567890fedcba"
    *    }
    *
    *
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalogId
    *
    * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
    * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
    * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
    *
    *
    */

    // Delete Catalog Publication Rule

/**
 * @api {delete} /domains/:domainId/catalogs/{catalogId}/publicationRules/{publicationRuleId} Delete Catalog Publication Rule
 * @apiName Delete Catalog Publication Rule
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the specified catalog publication rule. NOTE: Deleting a catalog publication rule will prevent it from being applied to new mediaItems ingested to the catalog, but will not delete publication rules of existing mediaItems within. Please see below for the method to delete publication rules assigned to mediaItems.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog Id
 * @apiParam (Path Parameters) {String} publicationRuleId The publicationRule Id
 *
 * @apiParamExample {Url} Delete Domain Publication Rule Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/publicationRules/796350e-2125-4f04-b33a-59488aaa76
 *
 * @apiSuccess (Response Fields) {String} id id of the publication rule that was deleted
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *    "id": "8c9cdb48-90ac-450f-bc5d-0bb2cbe3a206"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */
