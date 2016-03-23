// get domain

/**
 * @api {get} /domains/:domainId Get Domain Details
 * @apiName Get Domain Details
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves domain name and domainId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Domain Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7
 *
 * @apiSuccess (Response Fields) {String} id The domainId
 * @apiSuccess (Response Fields) {String} name The domain name
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "name": "ExampleDomain"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// get domain renditions

/**
 * @api {get} /domains/:domainId/renditions Get All Domain Renditions
 * @apiName Get All Domain Renditions
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all [Transcoding Renditions](//docs.brightcove.com/en/once/guides/once-vod-2-0.html#renditions) available in your domain (note, new videos will be assigned renditions based on the configured [Catalog Renditions]()).
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Domain Renditions Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/renditions
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of rendition objects
 * @apiSuccess (Response Fields) {String} results.id Each renditionId
 * @apiSuccess (Response Fields) {String} results.name Each rendition name
 * @apiSuccess (Response Fields) {Boolean} results.default If true, will be assigned to new catalogs by default
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "ac2e7f0b-a345-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 1200 ZC 640x360 1104.96 29.97 B31",
 *                "default": true
 *            },
 *            {
 *                "id": "5ff484d6-a33d-11e4-bfdb-005056837bc7",
 *                "name": "OV2 Once 4400 ZC 1280x720 4144.256 29.97 H40",
 *                "default": true
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

// get rendition setting

/**
 * @api {get} /domains/:domainId/renditions/:renditionId Get Domain Rendition Details
 * @apiName Get Domain Rendition Details
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves video and audio encoding settings for the specified renditionId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} renditionId The id for the rendition
 *
 * @apiParamExample {Url} Get Rendition Settings Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/renditions/076ea1a2-a35b-11e4-bfdb-005056837bc7
 *
 * @apiSuccess (Response Fields) {String} id The renditionId
 * @apiSuccess (Response Fields) {String} name The rendition name
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */


// Get All Domain Publication Rules

/**
 * @api {get} /domains/{domainId}/publicationRules Get All Domain Publication Rules
 * @apiName Get All Domain Publication Rules
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all publicationRuleIds configured on the Domain level. Please review the [Content Restriction](//docs.brightcove.com/en/once/guides/once-vod-2-0.html#contentRestriction) section of our Once VOD 2.0 Guide for details on what Publication Rules can do and how they are inherited.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Domain Publication Rules Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/publicationRules
 *
 * @apiSuccess (Response Fields) {String[]} id A comma-separated array of publicationRuleIds configured at the Domain level (will be inherited by new catalogs)
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "602de576-68c3-403a-87f6-56108c6b1d1c"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */

// Get Domain Publication Rule Details

/**
 * @api {get} /domains/{domainId}/publicationRules/:publicationRuleId Get Domain Publication Rule Details
 * @apiName Get Domain Publication Rule Details
 * @apiGroup Domain
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves all publicationRuleIds configured on the Domain level. Please review the [Content Restriction](//docs.brightcove.com/en/once/guides/once-vod-2-0.html#contentRestriction) section of our Once VOD 2.0 Guide for details on what Publication Rules can do and how they are inherited.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} publicationRuleId The publicationRuleId
 *
 * @apiParamExample {Url} Get Domain Publication Rule Example:
 *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/publicationRules/796350e-2125-4f04-b33a-59488aaa76
 *
 * @apiSuccess (Response Fields) {String} channel (internal use only)
 * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
 * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
 * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters
 * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost)
 * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "channel": "5fba5bb0-5fba-5bb0-06ed-8768600306ed",
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
 *        "id": "602de576-68c3-403a-87f6-56108c6b1d1c",
 *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 */
