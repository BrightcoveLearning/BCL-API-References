// get domain

/**
 * @api {get} /domains/:domainId Get Domain
 * @apiName Get Domain
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the domain.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Domain Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7
 *
 * @apiSuccess (Response Fields) {String} id The domain id
 * @apiSuccess (Response Fields) {String} name The domain name
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *        "name": "BrightcoveOnce"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get domain renditions

/**
 * @api {get} /domains/:domainId/renditions Get Domain Renditions
 * @apiName Get Domain Renditions
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of the transcode renditions available to the domain
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Domain Renditions Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/renditions
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get rendition setting

/**
 * @api {get} /domains/:domainId/renditions/:renditionId Get Rendition Settings
 * @apiName Get Rendition Settings
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the settings of the selected transcode rendition indicated by the renditionId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} renditionId The id for the rendition
 *
 * @apiParamExample {Url} Get Rendition Settings Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */
