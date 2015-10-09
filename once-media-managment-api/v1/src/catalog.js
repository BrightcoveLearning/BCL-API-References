// get catalog list

/**
 * @api {get} /:domain_id/catalogs/catalogs Get Catalog List
 * @apiName Get Catalog List
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a list of catalogs for the domain
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id TThe id for the digital media catalog for your domain
 *
 * @apiParamExample {Url} Get Catalog List Example:
 *
 * @apiSuccess (Response Fields) {String} requestId The id for request
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "requestId": "2796350e-2125-4f04-b33a-59488aaa76c7"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 * @apiError (Error 4xx) {json} Validation Errors 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 400 Error Response
 *    HTTP/1.1 400 Validation Errors
 *    {
 *        "requestId": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *        "error": "Validation Errors",
 *        "fieldErrors": {
 *            "publicationRule": [
 *                "Publication rule with end date 0.0 is in the past.",
 *                "Publication rule end date: 0.0 preceeds 1412025402"
 *            ]
 *        }
 *    }
 *
 *
 */

// create catalog

/**
 * @api {post} /domain/:domain_id/catalogs Create Catalog
 * @apiName Create Catalog
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of the transcode renditions available to the domain
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Request Body Fields) {String} name Name for the catalog
 * @apiParam (Request Body Fields) {Object[]} [renditions] A collection of `rendition_ids` to be defined. If excluded, the catalog will acquire the defaulted domain renditions
 * @apiParam (Request Body Fields) {String} renditions.id id of the rendition to include &mdash; Only declared if you intent to define a subset of the renditions from the domain
 *
 * @apiParamExample {json} Create Catalog Request Body Example:
 *    {
 *        "name":"New-Test-Catalog",
 *        "renditions": [
 *            {
 *                "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7"
 *            },
 *            {
 *                "id": "ac2e7f0b-a345-11e4-bfdb-005056837bc7"
 *            }
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the catalog
 * @apiSuccess (Response Fields) {String} name The name for the catalog
 * @apiSuccess (Response Fields) {Boolean} domain_id The domain id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "59dec118-562b-4bc6-b39f-66d2920a913a",
 *        "name": "New-Test-Catalog",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// update catalog name

/**
 * @api {put} /domain/:domain_id/catalogs Update Catalog Name
 * @apiName Update Catalog Name
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the catalog name in the indicated catalogID by setting its catalog_id with the updated name in the request body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Request Body Fields) {String} name New name for the catalog
 * @apiParam (Request Body Fields) {String} id The catalog id
 *
 * @apiParamExample {json} Update Catalog Request Body Example:
 *    {
 *        "id": "59dec118-562b-4bc6-b39f-66d2920a913a",
 *        "name": "New-Catalog-Name",
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the catalog
 * @apiSuccess (Response Fields) {String} name The name for the catalog
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "59dec118-562b-4bc6-b39f-66d2920a913a",
 *        "name": "New-Catalog-Name",
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// get catalog Information

/**
 * @api {get} /domain/:domain_id/catalogs/:catalog_id Get Catalog Information
 * @apiName Get Catalog Information
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 *
 * @apiParamExample {Url} Get Catalog Request Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac
 *
 * @apiSuccess (Response Fields) {String} id The id for the catalog
 * @apiSuccess (Response Fields) {String} name The name for the catalog
 * @apiSuccess (Response Fields) {Boolean} domain_id The domain id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "62191781-a933-49d6-831f-83bdf51a26ac",
 *        "name": "New Catalog",
 *        "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


// get catalog renditions

/**
 * @api {get} /domain/:domain_id/catalogs/:catalog_id Get Catalog Renditions
 * @apiName Get Catalog Renditions
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of the transcode renditions available to the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 *
 * @apiParamExample {Url} Get Catalog Request Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of rendition objects
 * @apiSuccess (Response Fields) {String} results.id The id for the rendition
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


