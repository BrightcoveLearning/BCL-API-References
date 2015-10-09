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

