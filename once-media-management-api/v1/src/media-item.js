// Get All MediaItems In Catalog

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems Get All MediaItems In Catalog
 * @apiName Get All MediaItems In Catalog
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all media items within a catalog. This method fetches 20 media items per page, returns the totalResult to indicate the total number of media items and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId TThe id for the digital media catalog for your domain
 * @apiParam (URL Parameters) {Number(1-100)} [pageSize=20] The number of items to return for the request
 * @apiParam (URL Parameters) {Number} [page=0] The set of items (based on `pageSize`) to return
 * @apiParam (URL Parameters) {String} [title] Filter to media items that have title substring. E.g. title=foo could return media items with title "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String} [foreignKey] Filter to media items that have foreign key substring. E.g. foreignKey=foo could return media items with foreign key "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="name","createdate","updatedate"} [sortField="updatedate"] Filter to applications that have name substring. E.g. name=foo could return applications named "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="acs","desc"} [sortDirection="desc"] Sort ascending or descending.
 *
 * @apiParamExample {Url} Get Media Items Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of mediaItems in result set
 * @apiSuccess (Response Fields) {String} results.id Each mediaItem’s Id
 * @apiSuccess (Response Fields) {String} results.catalogId Each mediaItem’s parent catalogId
 * @apiSuccess (Response Fields) {String} results.domainId Each mediaItem’s parent domainId
 * @apiSuccess (Response Fields) {Boolean} results.isAd (Internal use only)
 * @apiSuccess (Response Fields) {String} results.foreignKey Each mediaItem’s foreignKey
 * @apiSuccess (Response Fields) {String} results.title Each mediaItem’s title
 * @apiSuccess (Response Fields) {Number} results.draftVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} results.publishedVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Url} URL to GET the previous mediaItem result set (if necessary)
 * @apiSuccess (Response Fields) {Url} URL to GET the next mediaItem result set (if necessary
 * @apiSuccess (Response Fields) {Number} The total number of mediaItems in the catalog
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "results": [
 *            {
 *                "id": "784c2091-5b28-4092-b135-5135b02adbfb",
 *                "catalogId": "4321abcd-4321-dcba-fe65-567890fedcba",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *                "isAd": false,
 *                "foreignKey": "mediaItemExample01",
 *                "title": "mediaItemExample01",
 *                "draftVersion": 0,
 *                "publishedVersion": 0
 *            },
 *            {
 *                "id": "895effcb-4e08-4874-8b84-bb6a9dc9a2de",
 *                "catalogId": "4321abcd-4321-dcba-fe65-567890fedcba",
 *                "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *                "isAd": false,
 *                "foreignKey": "mediaItemExample02",
 *                "title": "mediaItemExaple02",
 *                "draftVersion": 0,
 *                "publishedVersion": 0
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

// Get MediaItem Details

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId Get MediaItem Details
 * @apiName Get MediaItem Details
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves details of a specified mediaItem.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The id for the digital media catalog for your domain
 * @apiParam (Path Parameters) {String} mediaitemId The id for the  media item
 *
 * @apiParamExample {Url} Get Media Item Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems/efe70c1f-ebd2-4c5e-856a-a54a8e97415f
 *
 * @apiSuccess (Response Fields) {String} id The mediaItemId
 * @apiSuccess (Response Fields) {String} catalogId The mediaItem’s parent catalogId
 * @apiSuccess (Response Fields) {String} domainId The mediaItem’s parent domainId
 * @apiSuccess (Response Fields) {String} foreignKey The mediaItem’s foreignKey
 * @apiSuccess (Response Fields) {String} title The mediaItem’s title
 * @apiSuccess (Response Fields) {Number} draftVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} publishedVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} description Text description of the video
 * @apiSuccess (Response Fields) {String[]} keywords Array of video keywords
 * @apiSuccess (Response Fields) {Object[]} Array of cue point objects
 * @apiSuccess (Response Fields) {String} cuePoints.unit Unit of time
 * @apiSuccess (Response Fields) {String} cuePoints.valueIn Time of cue point
 * @apiSuccess (Response Fields) {Object[]} publicationRules Array of Publication Rules
 * @apiSuccess (Response Fields) {Number} publicationRules.startDate Epoch time (in seconds) when publication rule becomes effective
 * @apiSuccess (Response Fields) {Number} publicationRules.endDate Epoch time (in seconds) when publication rule expires
 * @apiSuccess (Response Fields) {Object[]} publicationRules.clientFilters Array of client-based filters
 * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost),
 * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered,
 * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith),
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted,
 * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters,
 * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered,
 * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
 * @apiSuccess (Response Fields) {Object[]} metadata Array of Extended Metadata key-value pairs
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "fd2572c7-8d27-4813-af58-81b287f4e2e9",
 *        "catalogId": "4321abcd-4321-dcba-fe65-567890fedcba",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "foreignKey": "mediaItemExample01",
 *        "title": "mediaItemExample01",
 *        "draftVersion": 0,
 *        "publishedVersion": 0,
 *        "description": "An example mediaItem for documentation",
 *        "keywords": [
 *            "Example",
 *            "Test"
 *        ],
 *        "cuePoints": [
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 10
 *            },
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 25
 *            }
 *        ],
 *        "publicationRules": [
 *            {
 *                "startDate": 1436384287,
 *                "endDate": 1752003487,
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
 *                        "countryCode": "FI",
 *                        "isDenied": true
 *                    }
 *                ]
 *            }
 *        ],
 *        "metadata": {
 *            "JobId": "JobIdValue",
 *            "AdvertisingId": "AdvertisingIdValue",
 *            "OtherKey": "OtherValue"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// update media item

/**
 * @api {post} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId Update Media Item
 * @apiName Update Media Item
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the media item metadata for the indicated mediaitemId. **WARNING**: Values defined **OR** omitted on update will overwrite any existing values unless otherwise specified, **including** publication rules! Please be aware of this when making mediaItem updates. If you wish to do an additive/inline change, please make an ingest request and omit the source file URL.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} id The media item id (this value cannot be changed)
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The id for the digital media catalog for your domain
 * @apiParam (Path Parameters) {String} mediaitemId The id for the media item
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
 * @apiParamExample {json} Update Media Item Request Body Example:
 *    {
 *        "id": "efe70c1f-ebd2-4c5e-856a-a54a8e97415f",
 *        "catalogId": "991d5ec7-8eb2-41c9-850c-e5c3411bebd9",
 *        "domainId": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *        "foreignKey": "Updated-fk",
 *        "title": "28-feb-02",
 *        "keywords": [ ],
 *        "cuePoints": [
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 10
 *            },
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 25
 *            }
 *        ],
 *        "publicationRules": [
 *            "6169df7e-d023-4daf-90ff-21e290f16162"
 *        ],
 *        "metadata": {
 *            "JobID": "someJobId",
 *            "PassThruMetadata": "hello world",
 *            "foo": "bar",
 *            "hello": "world"
 *        }
 *    }
 *
 * @apiSuccess (Response Fields) {String} catalogId The id for the catalog
 * @apiSuccess (Response Fields) {String} name The name for the domain
 * @apiSuccess (Response Fields) {String} domainId The domain id
 * @apiSuccess (Response Fields) {Boolean} isAd Whether the media item is an ad
 * @apiSuccess (Response Fields) {String} foreignKey The media item foreign key
 * @apiSuccess (Response Fields) {String} title The media item title
 * @apiSuccess (Response Fields) {Number} draftVersion The media item draft version
 * @apiSuccess (Response Fields) {Number} publishedVersion The media item published version
 * @apiSuccess (Response Fields) {String[]} keywords Array of keywords for the media item
 * @apiSuccess (Response Fields) {Object[]} cuePoints Array of cue point objects
 * @apiSuccess (Response Fields) {String} cuePoints.unit unit of the `time` value for the cue point
 * @apiSuccess (Response Fields) {String} cuePoints.valueIn time of the cue point in seconds
 * @apiSuccess (Response Fields) {Object[]} publicationRules Array of publication rule objects
 * @apiSuccess (Response Fields) {Number} publicationRules.startDate Date when publication rule becomes effective (epoch time in seconds)
 * @apiSuccess (Response Fields) {Number} publicationRules.endDate Date when publication rule expires (epoch time in seconds)
 * @apiSuccess (Response Fields) {Object[]} publicationRules.clientFilters Array of client filter objects
 * @apiSuccess (Response Fields) {String} publicationRules.clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} publicationRules.clientFilters.value The value name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} publicationRules.clientFilters.filterType The type of filtering used to compare the value
 * @apiSuccess (Response Fields) {Boolean} publicationRules.clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiSuccess (Response Fields) {Object[]} publicationRules.clientFilters.countryRules An array of Country Rules for the asset
 * @apiSuccess (Response Fields) {String} publicationRules.clientFilters.countryRules.countryCode The Country Code for the Country Rule (ISO 639 2-letter code, such as "CA")
 * @apiSuccess (Response Fields) {Boolean} publicationRules.clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiSuccess (Response Fields) {Object[]} timedText An array of Timed Text items for the asset
 * @apiSuccess (Response Fields) {Object} timedText.media Container for the source URL of the timed text file being ingested
 * @apiSuccess (Response Fields) {Url} timedText.media.sourceURL The URL string to the source asset
 * @apiSuccess (Response Fields) {String} timedText.timedTextType The type to categorize the timed text item
 * @apiSuccess (Response Fields) {String[]} timedText.languages An array of languages contained in the timed text asset (ISO-639 language codes)
 * @apiSuccess (Response Fields) {String[]} timedText.alternateId The optional id to associate with the timed text item, used as a descriptor or to create uniqueness
 * @apiSuccess (Response Fields) {Object} metadata A map of key value pairs for Extended Metadata
 * @apiSuccess (Response Fields) {String} metadata.key The key of an Extended Metadata key value pair
 * @apiSuccess (Response Fields) {Object[]} notifications An array of Notifications to be fired during ingest
 * @apiSuccess (Response Fields) {Url} notifications.target The HTTP endpoint or sns target for your notification
 * @apiSuccess (Response Fields) {Url} notifications.notificationType The type of notification to be associated with, defaults to publish
 * @apiSuccess (Response Fields) {String} notifications.notificationType The HTTP verb to use when sending an HTTP notification, defaults to POST
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "9ad78fdb-5f6b-4999-916e-e5461139daf3",
 *        "catalogId": "23ef978e-d5ca-434a-b8b4-d4c2185f018e",
 *        "domainId": "4236fac6-f0df-4f9a-b9c7-159cfb257618",
 *        "foreignKey": "Cascada",
 *        "title": "Cascada",
 *        "draftVersion": 0,
 *        "publishedVersion": 0,
 *        "keywords": [],
 *        "cuePoints": [
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 362
 *            },
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 721
 *            }
 *        ],
 *        "publicationRules": [
 *            {
 *                "startDate": 1417472170,
 *                "endDate": 1733091370,
 *                "clientFilters": [],
 *                "countryRules": []
 *            }
 *        ],
 *        "metadata": {
 *            "JobID": "someJobId",
 *            "PassThruMetadata": "hello world",
 *            "foo": "bar",
 *            "hello": "world"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// delete media item

/**
 * @api {delete} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId Get Media Item
 * @apiName Get Media Item
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the media item.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The id for the digital media catalog for your domain
 * @apiParam (Path Parameters) {String} mediaitemId The id for the  media item
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems/efe70c1f-ebd2-4c5e-856a-a54a8e97415f
 *
 * @apiSuccess (Response Fields) {String} delete value will contain the media item id the message "scheduled for deletion"
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "delete": "MediaItem: 1eb36535-1105-440e-a722-381c9dcf504d scheduled for deletion"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} UNAUTHORIZED 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} UNAUTHORIZED 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */
