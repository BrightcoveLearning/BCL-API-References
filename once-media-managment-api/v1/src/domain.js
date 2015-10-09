// get domain

/**
 * @api {get} /domain/:domain_id Get Domain
 * @apiName Get Domain
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all catalogs within the domain. This method fetches 20 catalogs per page, returns the totalResult to indicate the total number of catalogs and provides previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *     https://api.unicornmedia.com/media-management-api/2796350e-2125-4f04-b33a-59488aaa76c7/catalogs
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
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *     https://api.unicornmedia.com/media-management-api/2796350e-2125-4f04-b33a-59488aaa76c7/renditions
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of rendition objects
 * @apiSuccess (Response Fields) {String} results.id The id for the rendition
 * @apiSuccess (Response Fields) {String} results.name The name for the domain
 * @apiSuccess (Response Fields) {Boolean} results.default Whether this is one of the default Once renditions
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "076ea1a2-a35b-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 1200 ZC 640x360 1104.96 29.97 B31",
 *                "default": true
 *            },
 *            {
 *                "id": "468fb310-a585-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 4400 ZC 1280x720 4144.256 29.97 H40",
 *                "default": true
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// get rendition setting

/**
 * @api {get} /domain/:domain_id/renditions/:rendition_id Get Rendition Settings
 * @apiName Get Rendition Settings
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of the transcode renditions available to the domain
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} rendition_id The id for the rendition
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *     https://api.unicornmedia.com/media-management-api/2796350e-2125-4f04-b33a-59488aaa76c7/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The id for the rendition
 * @apiSuccess (Response Fields) {String} name The name for the domain
 * @apiSuccess (Response Fields) {Number} width The frame width in pixels
 * @apiSuccess (Response Fields) {Number} height The frame height in pixels
 * @apiSuccess (Response Fields) {Number} videoBitRate The video bitrate in kbps
 * @apiSuccess (Response Fields) {Number} audioBitRate The audio bitrate in kbps
 * @apiSuccess (Response Fields) {Number} codecsValue The video and audio codecs
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

