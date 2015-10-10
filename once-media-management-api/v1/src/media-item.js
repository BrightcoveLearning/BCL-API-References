// get media item collection

/**
 * @api {get} /domains/:domain_id/catalogs/:catalog_id/mediaItems Get Media Item Collection
 * @apiName Get Media Item Collection
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of all media items within a catalog. This method fetches 20 media items per page, returns the totalResult to indicate the total number of media items and provides the previous or next page requests within the body.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id TThe id for the digital media catalog for your domain
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems
 *
 * @apiSuccess (Response Fields) {Object[]} results Array of catalog items
 * @apiSuccess (Response Fields) {String} results.catalog_id The id for the catalog
 * @apiSuccess (Response Fields) {String} results.name The name for the domain
 * @apiSuccess (Response Fields) {String} results.domain_id The domain id
 * @apiSuccess (Response Fields) {Boolean} results.isAd Whether the media item is an ad
 * @apiSuccess (Response Fields) {String} results.foreignKey The media item foreign key
 * @apiSuccess (Response Fields) {String} results.title The media item title
 * @apiSuccess (Response Fields) {Number} results.draftVersion The media item draft version
 * @apiSuccess (Response Fields) {Number} results.publishedVersion The media item published version
 * @apiSuccess (Response Fields) {Url} prev URL to get the previous result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Url} next URL to get the next result set (`null` if there is none)
 * @apiSuccess (Response Fields) {Number} total number of results
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "results": [
 *        {
 *          "id": "efe70c1f-ebd2-4c5e-856a-a54a8e97415f",
 *          "catalog_id": "991d5ec7-8eb2-41c9-850c-e5c3411bebd9",
 *          "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *          "isAd": false,
 *          "foreignKey": "28-feb-02-updated",
 *          "title": "28-feb-02",
 *          "draftVersion": 1,
 *          "publishedVersion": 1
 *        },
 *        {
 *          "id": "bd0e9dd6-45a2-4f55-95d7-c6ca887a3c9c",
 *          "catalog_id": "991d5ec7-8eb2-41c9-850c-e5c3411bebd9",
 *          "domain_id": "4eca7ac5-3954-416d-bb23-e65aa511b85a",
 *          "isAd": false,
 *          "foreignKey": "28-feb-01",
 *          "title": "28-feb-01",
 *          "draftVersion": 0,
 *          "publishedVersion": 1
 *        }
 *      ],
 *      "prev": null,
 *      "next": "https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/991d5ec7-8eb2-41c9-850c-e5c3411bebd9/mediaItems?page=2",
 *      "totalResults": 28
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 *
 */

// get media item

/**
 * @api {get} /domains/:domain_id/catalogs/:catalog_id/mediaItems/:mediaitem_id Get Media Item
 * @apiName Get Media Item
 * @apiGroup Media_Item
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the essential information of the media item.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalog_id TThe id for the digital media catalog for your domain
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/4eca7ac5-3954-416d-bb23-e65aa511b85a/mediaItems/efe70c1f-ebd2-4c5e-856a-a54a8e97415f
 *
 * @apiSuccess (Response Fields) {String} catalog_id The id for the catalog
 * @apiSuccess (Response Fields) {String} name The name for the domain
 * @apiSuccess (Response Fields) {String} domain_id The domain id
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
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "9ad78fdb-5f6b-4999-916e-e5461139daf3",
 *        "catalog_id": "23ef978e-d5ca-434a-b8b4-d4c2185f018e",
 *        "domain_id": "4236fac6-f0df-4f9a-b9c7-159cfb257618",
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 *
 */

