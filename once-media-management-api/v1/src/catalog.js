// get catalog list

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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 *
 * @apiParamExample {Url} Get Catalog Request Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac
 *
 * @apiSuccess (Response Fields) {String} id The catalogId
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Request Body Fields) {String} id The catalogId to be updated
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiDescription Replaces the currently configured catalog transcode renditions with the set defined in the request body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} renditionId The rendition id
 * @apiParam (Request Body Fields) {String} id a rendition id
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
 * @apiSuccess (Response Fields) {String} id The id for a new rendition
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiDescription Adds the selected rendition as indicated by the renditionId to the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Request Body Fields) {String} id a rendition id to add
 *
 * @apiParamExample {json} Add Catalog Rendition Request Body Example:
 *    {
 *      "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the added rendition
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
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
 * @apiDescription Deletes rendition as indicated by the renditionId from the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} renditionId The rendition id to delete
 *
 * @apiParamExample {Url} Delete Catalog Rendition Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalog/62191781-a933-49d6-831f-83bdf51a26ac/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The id of the deleted rendition
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */
