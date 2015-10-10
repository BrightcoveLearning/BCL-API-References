// get catalog list

/**
 * @api {get} /domains/:domain_id/catalogs/catalogs Get Catalog List
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
 *     https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of catalog items
 * @apiSuccess (Response Fields) {String} results.id The id for the domain
 * @apiSuccess (Response Fields) {String} results.name The name for the domain
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
 *                "id": "9482da98-4ad2-490d-983b-42c17fe06b81",
 *                "name": "1-2-8",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            },
 *            {
 *                "id": "1cd8a599-13b6-45e4-8a94-7bad7a5c457e",
 *                "name": "New catalog",
 *                "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a"
 *            }
 *        ],
 *        "prev": null,
 *        "next": "https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs?page=2",
 *        "totalResults": 27
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 *
 */

// create catalog

/**
 * @api {post} /domains/:domain_id/catalogs Create Catalog
 * @apiName Create Catalog
 * @apiGroup Catalog
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
 * @api {put} /domains/:domain_id/catalogs Update Catalog Name
 * @apiName Update Catalog Name
 * @apiGroup Catalog
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
 * @api {get} /domains/:domain_id/catalogs/:catalog_id Get Catalog Information
 * @apiName Get Catalog Information
 * @apiGroup Catalog
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
 * @api {get} /domains/:domain_id/catalogs/:catalog_id/renditions Get Catalog Renditions
 * @apiName Get Catalog Renditions
 * @apiGroup Catalog
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

// get catalog rendition setting

/**
 * @api {get} /domains/:domain_id/catalogs/:catalog_id/renditions/:rendition_id Get Catalog Rendition Settings
 * @apiName Get Catalog Rendition Settings
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of the transcode renditions available to the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 * @apiParam (Path Parameters) {String} rendition_id The rendition id
 *
 * @apiParamExample {Url} Get Catalog Rendition Request Example:
 *    https://api.unicornmedia.com/media-management-api/domain/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The id for the rendition
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


// replace catalog renditions

/**
 * @api {put} /domains/:domain_id/catalogs/:catalog_id/renditions/:rendition_id Replace Catalog Renditions
 * @apiName Replace Catalog Renditions
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Replaces the currently configured catalog transcode renditions with the set defined in the request body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 * @apiParam (Path Parameters) {String} rendition_id The rendition id
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


// add rendition to catalog

/**
 * @api {post} /domains/:domain_id/catalogs/:catalog_id/renditions/:rendition_id Add Catalog Rendition
 * @apiName Add Catalog Rendition
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds the selected rendition as indicated by the rendition_id to the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 * @apiParam (Path Parameters) {String} rendition_id The rendition id
 * @apiParam (Request Body Fields) {String} id a rendition id to add
 *
 * @apiParamExample {json} Replace Catalog Rendition Request Body Example:
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


// delete catalog rendition

/**
 * @api {delete} /domains/:domain_id/catalogs/:catalog_id/renditions/:rendition_id Delete Catalog Rendition
 * @apiName Delete Catalog Rendition
 * @apiGroup Catalog
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes rendition as indicated by the rendition_id from the catalog.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The catalog id
 * @apiParam (Path Parameters) {String} rendition_id The rendition id to delete
 *
 * @apiParamExample {Url} Replace Catalog Rendition Request Body Example:
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */


