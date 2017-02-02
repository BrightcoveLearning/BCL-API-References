// make ingest request

/**
 * @api {post} /:domain_id/catalogs/:catalog_id Make Ingest Request
 * @apiName Make Ingest Request
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id The id for the digital media catalog for your domain
 * @apiParam (Request Body Fields) {String} [title] The title of the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String} foreignKey The unique identifier for the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String} [description] A description of the asset
 * @apiParam (Request Body Fields) {String[]} [keywords] Array of keyword strings associated with the video
 * @apiParam (Request Body Fields) {Object} [metadata] A map of key value pairs for Extended Metadata
 * @apiParam (Request Body Fields) {String} metadata.key The key of an Extended Metadata key value pair (see the example below for key/value pairs)
 * @apiParam (Request Body Fields) {Object} media Container for the source URL of the asset being ingested
 * @apiParam (Request Body Fields) {Url} media.sourceURL The URL string to the source asset
 * @apiParam (Request Body Fields) {Object[]} [publicationRules] An array of Publication Rules for the asset
 * @apiParam (Request Body Fields) {String} publicationRules.channel The Channel Guid for the Publication Rule
 * @apiParam (Request Body Fields) {Number} publicationRules.startDate The start date for the Publication Rule (epoch time in seconds)
 * @apiParam (Request Body Fields) {Number} publicationRules.endDate The end date for the Publication Rule (epoch time in seconds)
 * @apiParam (Request Body Fields) {Object[]} [publicationRules.clientFilters] An array of Client Filters for the Publication Rule
 * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} publicationRules.clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiParam (Request Body Fields) {String} publicationRules.clientFilters.value The value name that the Client Filter will key off of
 * @apiParam (Request Body Fields) {String="Equals","NotEquals","In","NotIn","Contains","NotContains","StartsWith","NotStartsWith","EndsWith","NotEndsWith"} publicationRules.clientFilters.filterType The type of filtering used to compare the value
 * @apiParam (Request Body Fields) {Boolean} publicationRules.clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiParam (Request Body Fields) {Object[]} [publicationRules.countryRules] An array of Country Rules for the asset
 * @apiParam (Request Body Fields) {String} publicationRules.countryRules.countryCode The Country Code for the Country Rule (ISO 639 2-letter code, such as "CA")
 * @apiParam (Request Body Fields) {Boolean} publicationRules.countryRules.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiParam (Request Body Fields) {Object[]} [cuePoints] An array of Cue Points for the asset
 * @apiParam (Request Body Fields) {Number} cuePoints.valueIn The time in which the Cue Point will be inserted (integer)
 * @apiParam (Request Body Fields) {String="Seconds"} cuePoints.unit The type of unit the time value
 * @apiParam (Request Body Fields) {Object[]} [timedText] An array of Timed Text items for the asset
 * @apiParam (Request Body Fields) {Object} timedText.media Container for the source URL of the timed text file being ingested
 * @apiParam (Request Body Fields) {Url} timedText.media.sourceURL The URL string to the source asset
 * @apiParam (Request Body Fields) {String="Subtitle","Caption","Embedded"} timedText.timedTextType The type to categorize the timed text item
 * @apiParam (Request Body Fields) {String[]} timedText.languages An array of languages contained in the timed text asset (ISO-639 language codes)
 * @apiParam (Request Body Fields) {String} [timedText.alternateId] The optional id to associate with the timed text item, used as a descriptor or to create uniqueness
 * @apiParam (Request Body Fields) {Object[]} [notifications] An array of Notifications to be fired during ingest
 * @apiParam (Request Body Fields) {Url} notifications.target The HTTP endpoint or sns target for your notification
 * @apiParam (Request Body Fields) {String="publish","transcode","ingest","update","error","any"} [notifications.notificationType] The type of notification to be associated with, defaults to publish
 * @apiParam (Request Body Fields) {String="POST","PUT","GET"} [notifications.notificationType="POST"] The HTTP verb to use when sending an HTTP notification, defaults to POST
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
 *                    "sourceURL": "http://fileserver.tld/Subtitles/filenameEN.xml"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "en"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "hhttp://fileserver.tld/Subtitles/filenameFR.srt"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "fr"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "http://fileserver.tld/Subtitles/filenameEN.dfxp"
 *                },
 *                "timedTextType": "CAPTION",
 *                "languages": [
 *                    "en"
 *                ]
 *            },
 *            {
 *                "media": {
 *                    "sourceURL": "http://fileserver.tld/Subtitles/filenamemulti.xml"
 *                },
 *                "timedTextType": "SUBTITLE",
 *                "languages": [
 *                    "en",
 *                    "fr"
 *                ],
 *                "alternateId": "Bazinga"
 *            }
 *        ],
 *        "notifications" : [
 *            {
 *              "target" : "http://fileserver.tld/notification-spy/record/Publish"
 *            },
 *            {
 *              "target" : "http://fileserver.tld//notification-spy/record/Error",
 *              "notificationType" : "error"
 *            }
 *        ]
 *    }
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
