// make ingest request

/**
 * @api {post} /:domain_id/catalogs/:catalog_id Make Ingest Request
 * @apiName Make Ingest Request
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id TThe id for the digital media catalog for your domain
 * @apiParam (Request Body Fields) {String} title The title of the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String} foreignKey The unique identifier for the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String} description A description of the asset
 * @apiParam (Request Body Fields) {String[]} [keywords] Array of keyword strings associated with the video
 * @apiParam (Request Body Fields) {Object} metadata A map of key value pairs for Extended Metadata
 * @apiParam (Request Body Fields) {String} metadata.key The key of an Extended Metadata key value pair (see the example below for key/value pairs)
 * @apiParam (Request Body Fields) {Object} media Container for the source URL of the asset being ingested
 * @apiParam (Request Body Fields) {String} media.sourceURL The URL string to the source asset
 * @apiParam (Request Body Fields) {Object[]} [publicationRules] An array of Publication Rules for the asset
 * @apiParam (Request Body Fields) {String} publicationRules.channel The Channel Guid for the Publication Rule
 * @apiParam (Request Body Fields) {Number} publicationRules.startDate The start date for the Publication Rule (epoch time in seconds)
 * @apiParam (Request Body Fields) {Number} publicationRules.endDate The end date for the Publication Rule (epoch time in seconds)
 * @apiParam (Request Body Fields) {Object[]} publicationRules.clientFilters An array of Client Filters for the Publication Rule
 *
 * @apiParamExample {json} Ingest Request Body Example:
 *    {
 *        "title": "Wildlife 07",
 *        "foreignKey": "wildlife07",
 *        "keywords": [
 *            "mammals",
 *            "wildlife"
 *        ],
 *        "description": "An overview of wildlife in northern Africa",
 *        "metadata": {
 *            "continent": "Africa",
 *            "region": "North",
 *            "PassThruMetadata": "Wildlife 07",
 *            "JobID": "8946-4bd4-b97c-a2b5dbc635c5"
 *        },
 *        "media": {
 *            "sourceURL": "http://demo.umedia.com/Lance/videos/Wildlife.wmv"
 *        },
 *        "publicationRules": [
 *            {
 *                "channel": "a8cf98a9-8946-4bd4-b97c-a2b5dbc635c5",
 *                "startDate": 1412025402,
 *                "endDate": 1601414189,
 *                "clientFilters": [
 *                    {
 *                        "variableName": "IpAddress",
 *                        "value": "127.0.0.1",
 *                        "filterType": "Equals",
 *                        "isDenied": true
 *                    }
 *                ],
 *                "countryRules": [
 *                    {
 *                        "countryCode": "UK",
 *                        "isDenied": true
 *                    }
 *                ]
 *            }
 *        ],
 *        "cuePoints": [
 *            {
 *                "valueIn": 10,
 *                "unit": "Seconds"
 *            },
 *            {
 *                "valueIn": 25,
 *                "unit": "Seconds"
 *            }
 *        ],
 *        "timedText": [
 *            {
 *                "media": {
 *                    "sourceURL": "http://umrss.com/jesseneedsspace/katy.xml"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "en"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "https://s3.amazonaws.com/unicornjessetest/caption.srt"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "fr"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "https://s3.amazonaws.com/unicornjessetest/caption.dfxp"
 *                },
 *                "timedTextType": "CAPTION",
 *                "languages": [
 *                    "en"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "https://s3.amazonaws.com/unicornjessetest/multi.xml"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "en",
 *                    "fr"
 *                ],
 *                "alternateId": "Bazinga"
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} key_string the policy key string
 * @apiSuccess (Response Fields) {Object[]} policies array of policy maps
 * @apiSuccess (Response Fields) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
 * @apiSuccess (Response Fields) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
 * @apiSuccess (Response Fields) {String} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "key-string": "BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk",
 *        "policies": [
 *            {
 *                "effect": "deny",
 *                "pattern": {
 *                    "!=": [
 *                        "[request.params.account-id],
 *                        "57838016001"
 *                    ]
 *                }
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

