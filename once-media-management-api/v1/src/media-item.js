// Get All MediaItems In Catalog

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems Get All MediaItems In Catalog
 * @apiName Get All MediaItems In Catalog
 * @apiGroup MediaItem
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all media items within a catalog. This method fetches 20 media items per page, returns the totalResult to indicate the total number of media items and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId TThe catalog Id
 * @apiParam (URL Parameters) {Number(1-100)} [pageSize=20] The number of items to return for the request
 * @apiParam (URL Parameters) {Number} [page=0] The set of items (based on `pageSize`) to return
 * @apiParam (URL Parameters) {String {..255}} [title] Filter to media items that have title substring. E.g. title=foo could return media items with title "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String {..255}} [foreignKey] Filter to media items that have foreign key substring. E.g. foreignKey=foo could return media items with foreign key "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="name","createdate","updatedate"} [sortField="updatedate"] Filter to applications that have name substring. E.g. name=foo could return applications named "foo", "foobar", "foorific"
 * @apiParam (URL Parameters) {String="asc","desc"} [sortDirection="desc"] Sort ascending or descending.
 *
 * @apiParamExample {Url} Get Media Items Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of mediaItems in result set
 * @apiSuccess (Response Fields) {String} results.id Each mediaItem’s Id
 * @apiSuccess (Response Fields) {String} results.catalogId Each mediaItem’s parent catalog Id
 * @apiSuccess (Response Fields) {String} results.domainId Each mediaItem’s parent domain Id
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
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 *
 */

// Get MediaItem Details

/**
 * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId Get MediaItem Details
 * @apiName Get MediaItem Details
 * @apiGroup MediaItem
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves details of a specified mediaItem.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog Id
 * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
 *
 * @apiParamExample {Url} Get Media Item Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems/efe70c1f-ebd2-4c5e-856a-a54a8e97415f
 *
 * @apiSuccess (Response Fields) {String} id The mediaItem Id
 * @apiSuccess (Response Fields) {String} catalogId The mediaItem’s parent catalog Id
 * @apiSuccess (Response Fields) {String} domainId The mediaItem’s parent domain Id
 * @apiSuccess (Response Fields) {String} foreignKey The mediaItem’s foreignKey
 * @apiSuccess (Response Fields) {String} title The mediaItem’s title
 * @apiSuccess (Response Fields) {Number} draftVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} publishedVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} description Text description of the video
 * @apiSuccess (Response Fields) {String[]} keywords Array of video keywords
 * @apiSuccess (Response Fields) {Object[]} Array of cue point objects
 * @apiSuccess (Response Fields) {String} cuePoints.unit Unit of time (currently only seconds are supported)

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
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// Update MediaItem

/**
 * @api {post} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId Update MediaItem
 * @apiName Update MediaItem
 * @apiGroup MediaItem
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the mediaItem to reflect the request body. NOTE: All mediaItem fields must be present in your request, not just those you wish to update. Existing fields with missing values in the update request will be overwritten with null values.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} id The mediaItem Id (this value cannot be changed)
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog Id
 *
 * @apiParam (Request Body Fields) {String} id The mediaItem Id
 * @apiParam (Request Body Fields) {String} catalogId The catalog Id
 * @apiParam (Request Body Fields) {String} domainId The domain Id
 * @apiParam (Request Body Fields) {String {..255}} [foreignKey] The unique identifier for the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String {..255}} [title] The title of the asset (max length: 255 characters)
 * @apiParam (Request Body Fields) {String} [description] Text description of the video
 * @apiParam (Request Body Fields) {String[]} [keywords] Array of video keywords
 * @apiParam (Request Body Fields) {Object[]} [cuePoints] An array of Cue Points objects
 * @apiParam (Request Body Fields) {Number} cuePoints.valueIn Unit of time
 * @apiParam (Request Body Fields) {String="Seconds"} cuePoints.unit Time of cue point
 * @apiParam (Request Body Fields) {Object[]} [publicationRules] An array of Publication Rules
 * @apiParam (Request Body Fields) {Number} publicationRules.startDate Epoch time (in seconds) when publication rule becomes effective
 * @apiParam (Request Body Fields) {Number} publicationRules.endDate Epoch time (in seconds) when publication rule expires
 * @apiParam (Request Body Fields) {Object[]} [publicationRules.clientFilters] Array of client-based filters
 * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} publicationRules.clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiParam (Request Body Fields) {String} publicationRules.clientFilters.value A string against which requests will be filtered
 * @apiParam (Request Body Fields) {String="Equals","NotEquals","In","NotIn","Contains","NotContains","StartsWith","NotStartsWith","EndsWith","NotEndsWith"} publicationRules.clientFilters.filterType The method of filtering against the value string
 * @apiParam (Request Body Fields) {Boolean} publicationRules.clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
 * @apiParam (Request Body Fields) {Object[]} [publicationRules.countryRules] Array of country-based filters
 * @apiParam (Request Body Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
 * @apiParam (Request Body Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
 * @apiParam (Request Body Fields) {Object} [metadata] A map of key value pairs for Extended Metadata
 *
 * @apiParamExample {json} Update Media Item Request Body Example:
 *    {
 *        "id": "fd2572c7-8d27-4813-af58-81b287f4e2e9",
 *        "catalogId": "4321abcd-4321-dcba-fe65-567890fedcba",
 *        "domainId": "1234abcd-1234-abcd-56ef-098765fedcba",
 *        "foreignKey": "mediaItemExample01",
 *        "title": "mediaItemExample001",
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
 * @apiSuccess (Response Fields) {String} id The mediaItem Id
 * @apiSuccess (Response Fields) {String} catalogId The mediaItem’s parent catalog Id
 * @apiSuccess (Response Fields) {String} domainId The mediaItem’s parent domain Id
 * @apiSuccess (Response Fields) {String} foreignKey The mediaItem’s foreignKey
 * @apiSuccess (Response Fields) {String} title The mediaItem’s title
 * @apiSuccess (Response Fields) {Number} draftVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} publishedVersion The iteration of that specific mediaItem (will increment if a new version of the video is ingested)
 * @apiSuccess (Response Fields) {Number} description Text description of the video
 * @apiSuccess (Response Fields) {String[]} keywords Array of video keywords
 * @apiSuccess (Response Fields) {Object[]} Array of cue point objects
 * @apiSuccess (Response Fields) {String} cuePoints.unit Unit of time (currently only seconds are supported)

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
 *        "title": "mediaItemExample001",
 *        "draftVersion": 0,
 *        "publishedVersion": 0,
 *        "description": "An example mediaItem for documentation",
 *        "keywords": [
 *            "Different",
 *            "Words"
 *        ],
 *        "cuePoints": [
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 30
 *            },
 *            {
 *                "unit": "Seconds",
 *                "valueIn": 12
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
 *                        "countryCode": "UK",
 *                        "isDenied": true
 *                    }
 *                ]
 *            }
 *        ],
 *        "metadata": {
 *            "OtherKey": "OtherValue",
 *            "AdvertisingId": "AdvertisingIdValue",
 *            "JobId": "JobIdValue"
 *        }
 *    }
 *    *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

// delete media item

/**
 * @api {delete} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId Delete Media Item
 * @apiName Delete Media Item
 * @apiGroup MediaItem
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the media item.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain Id
 * @apiParam (Path Parameters) {String} catalogId The catalog Id
 * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id (you can substitute `foreignKey` for `mediaItemId`)
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems/efe70c1f-ebd2-4c5e-856a-a54a8e97415f
 *
 * @apiSuccess (Response Fields) {String} delete Value will contain The mediaItem Id the message "scheduled for deletion"
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "delete": "MediaItem: 1eb36535-1105-440e-a722-381c9dcf504d scheduled for deletion"
 *    }
 *
 * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
 * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
 * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
 *
 *
 */

 // Get All MediaItem Publication Rules

 /**
  * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/publicationRules Get All MediaItem Publication Rules
  * @apiName Get All MediaItem Publication Rules
  * @apiGroup MediaItem
  * @apiVersion 1.0.0
  *
  * @apiDescription Retrieves all publicationRuleIds assigned to a mediaItem.  Please review the [Content Restriction](/docs.brightcove.com/en/once/guides/once-vod-2-0.html#contentRestriction) section of our Once VOD 2.0 Guide for details on what Publication Rules can do and how they are inherited.
  *
  * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
  *
  * @apiParam (Path Parameters) {String} domainId The domain Id
  * @apiParam (Path Parameters) {String} catalogId The catalog Id
  * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
  *
  * @apiParamExample {Url} Get Media Item Publication Rules Example:
  *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
  *
  * @apiSuccess (Response Fields) {String[]} publicationRuleIds A comma-separated array of publicationRuleIds assigned to the mediaItem
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    [
  *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5"
  *    ]
  *
  * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
  * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
  * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
  *
  *
  */

  // Get MediaItem Publication Rule Details

  /**
   * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/publicationRules/:publicationRuleId Get MediaItem Publication Rule Details
   * @apiName Get MediaItem Publication Rule Details
   * @apiGroup MediaItem
   * @apiVersion 1.0.0
   *
   * @apiDescription Retrieves configuration of a mediaItem-level publication rule.
   *
   * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
   *
   * @apiParam (Path Parameters) {String} domainId The domain Id
   * @apiParam (Path Parameters) {String} catalogId The catalog Id
   * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
   * @apiParam (Path Parameters) {String} publicationRuleId The publicationRule Id
   *
   * @apiParamExample {Url} Get Media Item Publication Rule Example:
   *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
   *
   * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
   * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
   * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters
   * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost)
   * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered
   * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith)
   * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
   * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters
   * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
   * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
   * @apiSuccess (Response Fields) {String} id The publicationRule Id
   * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domain Id
   * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalog Id
   * @apiSuccess (Response Fields) {String} mediaItem The publication rule’s parent mediaItem Id
   *
   * @apiSuccessExample {json} Success Response:
   *    HTTP/1.1 200 OK
   *   {
   *       "startDate": 1440720000,
   *       "endDate": 1914105600,
   *       "clientFilters": [
   *           {
   *               "variableName": "IpAddress",
   *               "value": "127.0.0.1",
   *               "filterType": "Equals",
   *               "isDenied": true
   *           }
   *       ],
   *       "countryRules": [
   *           {
   *               "countryCode": "FI",
   *               "isDenied": true
   *           }
   *       ]
   *       "id": "e4f3e3de-e580-42a7-9960-f43faccfbee5",
   *       "domain": "1234abcd-1234-abcd-56ef-098765fedcba",
   *       "catalog": "4321abcd-4321-dcba-fe65-567890fedcba",
   *       "mediaitem": "09daf3a0-5efe-4048-a761-351137a23c6f"
   *   }
   *
   *
   * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
   * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
   * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
   *
   *
   */

   // Create MediaItem Publication Rule

   /**
    * @api {post} /domains/:domainId/catalog/:catalogId/mediaItems/:mediaItemId/publicationRules Create MediaItem Publication Rule
    * @apiName Create MediaItem Publication Rule
    * @apiGroup MediaItem
    * @apiVersion 1.0.0
    *
    * @apiDescription Create a mediaItem publication rule.
    *
    * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
    *
    * @apiParam (Path Parameters) {String} domainId The domain Id
    * @apiParam (Path Parameters) {String} catalogId The catalog Id
    * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
    * @apiParam (Request Body Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
    * @apiParam (Request Body Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
    * @apiParam (Request Body Fields) {Object[]} [clientFilters] Array of client-based filters
    * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} clientFilters.variableName The type of client variable being filtered
    * @apiParam (Request Body Fields) {String} clientFilters.value A string against which requests will be filtered
    * @apiParam (Request Body Fields) {String="Equals", "NotEquals", "In", "NotIn", "Contains", "NotContains", "StartsWith", "NotStartsWith", "EndsWith", "NotEndsWith"} clientFilters.filterType The method of filtering against the value string
    * @apiParam (Request Body Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiParam (Request Body Fields) {Object[]} [countryRules] Array of country-based filters
    * @apiParam (Request Body Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
    * @apiParam (Request Body Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    *
    * @apiParamExample {json} Create Media Item Publication Rule Request Body Example:
    *    {
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
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
    *        ]
    *    }
    *
    * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective,
    * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires,
    * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters,
    * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost),
    * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered,
    * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith),
    * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters,
    * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered,
    * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {String} id The publicationRule Id
    * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domain Id
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalog Id
    * @apiSuccess (Response Fields) {String} mediaItem The publication rule’s parent mediaItem Id
    *
    * @apiSuccessExample {json} Success Response:
    *    HTTP/1.1 200 OK
    *    {
    *        "channel": "5fba5bb0-5fba-5bb0-06ed-8768600306ed",
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
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
    *        "id": "e4f3e3de-e580-42a7-9960-f43faccfbee5",
    *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba",
    *        "catalog": "4321abcd-4321-dcba-fe65-567890fedcba",
    *        "mediaitem": "09daf3a0-5efe-4048-a761-351137a23c6f"
    *    }
    *
    * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
    * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
    * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
    *
    *
    */

   // Update MediaItem Publication Rule

   /**
    * @api {put} /domains/:domainId/catalog/:catalogId/mediaItems/:mediaItemId/publicationRules/:publicationRuleId Update MediaItem Publication Rule
    * @apiName Update MediaItem Publication Rule
    * @apiGroup MediaItem
    * @apiVersion 1.0.0
    *
    * @apiDescription Update a mediaItem publication rule.
    *
    * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
    *
    * @apiParam (Path Parameters) {String} domainId The domain Id
    * @apiParam (Path Parameters) {String} catalogId The catalog Id
    * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
    * @apiParam (Path Parameters) {String} publicationRuleId The publicationRule Id
    * @apiParam (Request Body Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective
    * @apiParam (Request Body Fields) {Number} endDate Epoch time (in seconds) when publication rule expires
    * @apiParam (Request Body Fields) {Object[]} [clientFilters] Array of client-based filters
    * @apiParam (Request Body Fields) {String="IpAddress","UserAgent","ReferringHost"} clientFilters.variableName The type of client variable being filtered
    * @apiParam (Request Body Fields) {String} clientFilters.value A string against which requests will be filtered
    * @apiParam (Request Body Fields) {String="Equals", "NotEquals", "In", "NotIn", "Contains", "NotContains", "StartsWith", "NotStartsWith", "EndsWith", "NotEndsWith"} clientFilters.filterType The method of filtering against the value string
    * @apiParam (Request Body Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiParam (Request Body Fields) {Object[]} [countryRules] Array of country-based filters
    * @apiParam (Request Body Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered
    * @apiParam (Request Body Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    *
    * @apiParamExample {json} Update Media Item Publication Rule Request Body Example:
    *    {
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
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
    *        ]
    *    }
    *
    * @apiSuccess (Response Fields) {Number} startDate Epoch time (in seconds) when publication rule becomes effective,
    * @apiSuccess (Response Fields) {Number} endDate Epoch time (in seconds) when publication rule expires,
    * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client-based filters,
    * @apiSuccess (Response Fields) {String} clientFilters.variableName The type of client variable being filtered: (IpAddress, UserAgent, ReferringHost),
    * @apiSuccess (Response Fields) {String} clientFilters.value A string against which requests will be filtered,
    * @apiSuccess (Response Fields) {String} clientFilters.filterType The method of filtering against the value string: (Equals, NotEquals, In, NotIn, Contains, NotContains, StartsWith, NotStartsWith, EndsWith, NotEndsWith),
    * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {Object[]} countryRules Array of country-based filters,
    * @apiSuccess (Response Fields) {String} countryRules.countryCode [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code being filtered,
    * @apiSuccess (Response Fields) {Boolean} countryRules.isDenied True: All other values will be permitted; False: Only this value will be permitted
    * @apiSuccess (Response Fields) {String} id The publicationRule Id
    * @apiSuccess (Response Fields) {String} domain The publication rule’s parent domain Id
    * @apiSuccess (Response Fields) {String} catalog The publication rule’s parent catalog Id
    * @apiSuccess (Response Fields) {String} mediaItem The publication rule’s parent mediaItem Id
    *
    * @apiSuccessExample {json} Success Response:
    *    HTTP/1.1 200 OK
    *    {
    *        "channel": "5fba5bb0-5fba-5bb0-06ed-8768600306ed",
    *        "startDate": 1436384287,
    *        "endDate": 1952003487,
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
    *        "id": "e4f3e3de-e580-42a7-9960-f43faccfbee5",
    *        "domain": "1234abcd-1234-abcd-56ef-098765fedcba",
    *        "catalog": "4321abcd-4321-dcba-fe65-567890fedcba",
    *        "mediaitem": "09daf3a0-5efe-4048-a761-351137a23c6f"
    *    }
    *
    * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
    * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
    * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
    *
    *
    */

    // Delete MediaItem Publication Rule

    /**
     * @api {delete} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/publicationRules/:publicationRuleId Delete MediaItem Publication Rule
     * @apiName Delete MediaItem Publication Rule
     * @apiGroup MediaItem
     * @apiVersion 1.0.0
     *
     * @apiDescription Deletes the specified mediaItem publication rule.
     *
     * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
     *
     * @apiParam (Path Parameters) {String} domainId The domain Id
     * @apiParam (Path Parameters) {String} catalogId The catalog Id
     * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
     * @apiParam (Path Parameters) {String} publicationRuleId The publicationRule Id
     *
     * @apiParamExample {Url} Delete Media Item Publication Rule Example:
     *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/publicationRules
     *
     * @apiSuccess (Response Fields) {String} id the publication rule id
     *
     * @apiSuccessExample {json} Success Response:
     *    HTTP/1.1 200 OK
     *    {
     *        "id": "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5"
     *    }
     *
     * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
     * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
     * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
     *
     *
     */


    // Delete MediaItem

    /**
     * @api {delete} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId Delete MediaItem
     * @apiName Delete MediaItem
     * @apiGroup MediaItem
     * @apiVersion 1.0.0
     *
     * @apiDescription Deletes the specified mediaItem.
     *
     * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
     *
     * @apiParam (Path Parameters) {String} domainId The domain Id
     * @apiParam (Path Parameters) {String} catalogId The catalog Id
     * @apiParam (Path Parameters) {String} mediaItemId The mediaItem Id
     *
     * @apiParamExample {Url} Delete Media Item Publication Rule Example:
     *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a
     *
     * @apiSuccess (Response Fields) {String} id The mediaItem Id that was deleted
     *
     * @apiSuccessExample {json} Success Response:
     *    HTTP/1.1 200 OK
     *    {
     *        "id": "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5"
     *    }
     *
     * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
     * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
     * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
     *
     *
     */

     // get media item timedText assets

     /**
      * @api {get} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/timedText Get Media Item Timed Text Asset
      * @apiName Get Media Item Timed Text Asset
      * @apiGroup MediaItem
      * @apiVersion 1.0.0
      *
      * @apiDescription Retrieves the timed text asset for captions and subtitles for a specified media item.
      *
      * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
      *
      * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
      * @apiParam (Path Parameters) {String} catalogId The id for the catalog that the media item belongs to
      * @apiParam (Path Parameters) {String} mediaItemId The id for the media item
      *
      * @apiParamExample {Url} Get Media Item Timed Text Example:
      *     https://api.unicornmedia.com/media-management-api/domains/2796350e-2125-4f04-b33a-59488aaa76c7/catalogs/4321abcd-4321-dcba-fe65-567890fedcba/mediaItems/09daf3a0-5efe-4048-a761-351137a23c6f/timedText
      *
      * @apiSuccess (Response Fields) {Object[]} results Array of timedText objects
      * @apiSuccess (Response Fields) {String} results.id Each timedText Id
      * @apiSuccess (Response Fields) {String[]} results.languages An array of ISO 639-1 two-letter language codes for the captions or subtitles - for example: `["en", "fr"]`
      * @apiSuccess (Response Fields) {String} results.timedTextType The type  of the timed text: `CAPTION` or `SUBTITLE`, or `EMBEDDED`
      *
      * @apiSuccessExample {json} Success Response:
      *    HTTP/1.1 200 OK
      *    {
      *        "results": [{
      *            "id": "6e376b50-e8e5-46fe-922c-17199e5950cd",
      *            "languages": ["kr"],
      *            "timedTextType": "SUBTITLE"
      *        }, {
      *            "id": "a44eb311-b1a6-4d0c-ba92-d54841c51126",
      *            "languages": ["en"],
      *            "timedTextType": "CAPTION"
      *        }, {
      *            "id": "c3255f78-e2e7-4a3c-bb78-240756ea9f9a",
      *            "languages": ["fr"],
      *            "timedTextType": "SUBTITLE"
      *        }]
      *    }
      *
      * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
      * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
      * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
      *
      *
      */

     // create media item timedText assets

     /**
      * @api {post} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/timedText Create Media Item Timed Text Asset
      * @apiName Create Media Item Timed Text Asset
      * @apiGroup MediaItem
      * @apiVersion 1.0.0
      *
      * @apiDescription Creates a timed text asset for captions and subtitles for a specified media item.
      *
      * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
      *
      * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
      * @apiParam (Path Parameters) {String} catalogId The id for the catalog that the media item belongs to
      * @apiParam (Path Parameters) {String} mediaItemId The id for the media item
      *
      * @apiParam (Request Body Fields) {String} domain The domain id
      * @apiParam (Request Body Fields) {String} catalog The catalog id
      * @apiParam (Request Body Fields) {String} mediaItem The mediaItem id
      * @apiParam (Request Body Fields) {Object} timedText The timed text object
      * @apiParam (Request Body Fields) {Object} timedText.media Object detailing the timed text media asset
      * @apiParam (Request Body Fields) {String} timedText.media.sourceURL Location of the timed text media asset
      * @apiParam (Request Body Fields) {String="CAPTION","SUBTITLE","EMBEDDED"} timedText.timedTextType The type for the timed text
      * @apiParam (Request Body Fields) {String[]} timedText.languages An array of ISO 639-1 two-letter language codes for the captions or subtitles - for example: `["en", "fr"]`
      *
      * @apiParamExample {json} Create Timed Text Example:
      *    {
      *        "domain":"869a60ba-25da-4458-a558-50664e7a969d",
      *        "catalog":"5daddac0-b74e-43c4-a560-f5d690893857",
      *        "mediaItem":"045da231-a9ae-4444-a46b-6a865be222aa",
      *        "timedText": {
      *            "media": {
      *                "sourceURL": "https://s3-us-west-2.amazonaws.com/tjones-test-resources/timedText/longCaptionLines.srt"
      *            },
      *            "timedTextType": "SUBTITLE",
      *            "languages": ["en"]
      *        }
      *    }
      *
      * @apiSuccess (Response Fields) {String} requestId The job id for the request
      *
      * @apiSuccessExample {json} Success Response:
      *    HTTP/1.1 200 OK
      *    {
      *        "requestId": "0e574fc1-f3ea-4825-af7e-fd09055f0524"
      *    }
      *
      * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
      * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
      * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
      *
      *
      */

     // update media item timedText assets

     /**
      * @api {post} /domains/:domainId/catalogs/:catalogId/mediaItems/:mediaItemId/timedText/:timedTextId Update Media Item Timed Text Asset
      * @apiName Update Update Item Timed Text Asset
      * @apiGroup MediaItem
      * @apiVersion 1.0.0
      *
      * @apiDescription Updates a timed text asset for captions and subtitles for a specified media item.
      *
      * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
      *
      * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
      * @apiParam (Path Parameters) {String} catalogId The id for the catalog that the media item belongs to
      * @apiParam (Path Parameters) {String} mediaItemId The id for the media item
      * @apiParam (Path Parameters) {String} timedTextId The id for the timed text asset
      *
      * @apiParam (Request Body Fields) {String} domain The domain id
      * @apiParam (Request Body Fields) {String} catalog The catalog id
      * @apiParam (Request Body Fields) {String} mediaItem The mediaItem id
      * @apiParam (Request Body Fields) {Object} timedText The timed text object
      * @apiParam (Request Body Fields) {Object} timedText.media Object detailing the timed text media asset
      * @apiParam (Request Body Fields) {String} timedText.media.sourceURL Location of the timed text media asset
      * @apiParam (Request Body Fields) {String="CAPTION","SUBTITLE","EMBEDDED"} timedText.timedTextType The type for the timed text
      * @apiParam (Request Body Fields) {String[]} timedText.languages An array of ISO 639-1 two-letter language codes for the captions or subtitles - for example: `["en", "fr"]`
      *
      * @apiParamExample {json} Update Timed Text Example:
      *    {
      *        "domain":"869a60ba-25da-4458-a558-50664e7a969d",
      *        "catalog":"5daddac0-b74e-43c4-a560-f5d690893857",
      *        "mediaItem":"045da231-a9ae-4444-a46b-6a865be222aa",
      *        "timedText": {
      *            "media": {
      *                "sourceURL": "https://s3-us-west-2.amazonaws.com/tjones-test-resources/timedText/longCaptionLines.srt"
      *            },
      *            "timedTextType": "SUBTITLE",
      *            "languages": ["en"]
      *        }
      *    }
      *
      * @apiSuccess (Response Fields) {String} requestId The job id for the request
      *
      * @apiSuccessExample {json} Success Response:
      *    HTTP/1.1 200 OK
      *    {
      *        "requestId": "0e574fc1-f3ea-4825-af7e-fd09055f0524"
      *    }
      *
      * @apiError (Error 4xx) {json} Bad Request - json - 400: Bad Request &mdash; Incorrect or invalid request body
      * @apiError (Error 4xx) {json} Forbidden 403: Forbidden &mdash; Missing or incorrect API Key
      * @apiError (Error 4xx) {json} Not Found 404: Not Found &mdash; Incorrect or invalid URL path
      *
      *
      */
