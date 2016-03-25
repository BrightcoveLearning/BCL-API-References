// get domain publication rules

/**
 * @api {get} domains/:domainId/publicationRules Get Domain Publication Rules
 * @apiName Get Domain Publication Rules
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of domain publicationruleIds.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 *
 * @apiParamExample {Url} Get Publication Rules Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/publicationRules
 *
 * @apiSuccess (Response Fields) {String[]} [publicationRuleIds] The ids for the domain publication rules
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// create domain publication rules

/**
 * @api {post} domains/:domainId/publicationRules Create Domain Publication Rule
 * @apiName Create Domain Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new domain publication rule within the indicated domainId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
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
 *
 * @apiParamExample {json} Create Publication Rule Body Example:
 *    {
 *        "startDate": 1412538800,
 *        "endDate": 1838635000,
 *        "clientFilters": [
 *            {
 *                "variableName": "UserAgent",
 *                "value": "chrome",
 *                "filterType": "Contains",
 *                "isDenied": true
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "IN",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the new domain publication rule
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get domain publication rule

/**
 * @api {get} domains/:domainId/publicationRules/:publicationruleId Get Domain Publication Rule
 * @apiName Get Domain Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the domain publication rule settings of the indicated publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
 *
 * @apiParamExample {Url} Get Domain Publication Rule Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/publicationRules
 *
 * @apiSuccess (Response Fields) {String} id the publication rule id
 * @apiSuccess (Response Fields) {Number} startDate Date when publication rule becomes effective (epoch time in seconds)
 * @apiSuccess (Response Fields) {Number} endDate Date when publication rule expires (epoch time in seconds)
 * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client filter objects
 * @apiSuccess (Response Fields) {String} clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.value The value name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.filterType The type of filtering used to compare the value
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiSuccess (Response Fields) {Object[]} clientFilters.countryRules An array of Country Rules for the asset
 * @apiSuccess (Response Fields) {String} clientFilters.countryRules.countryCode The Country Code for the Country Rule (ISO 639 2-letter code, such as "CA")
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "startDate": 1425776400,
 *        "endDate": 1741465620,
 *        "clientFilters": [
 *            {
 *                "variableName": "IpAddress",
 *                "value": "127.0.0.1",
 *                "filterType": "Equals",
 *                "isDenied": false
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "US",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// delete domain publication rule

/**
 * @api {delete} domains/:domainId/publicationRules/:publicationruleId Delete Domain Publication Rule
 * @apiName Delete Domain Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the publication rule for the domain as indicated by the publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
 *
 * @apiParamExample {Url} Delete Domain Publication Rule Example:
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get catalog publication rules

/**
 * @api {get} domains/:domainId/catalogs/:catalogId/publicationRules Get Catalog Publication Rules
 * @apiName Get Catalog Publication Rules
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of catalog publicationruleIds.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 *
 * @apiParamExample {Url} Get Catalog Publication Rules Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
 *
 * @apiSuccess (Response Fields) {String[]} [publicationRuleIds] The ids for the domain publication rules
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// create catalog publication rules

/**
 * @api {post} domains/:domainId/catalog/:catalogId/publicationRules Create Catalog Publication Rule
 * @apiName Create Catalog Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new catalog publication rule within the indicated catalogId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
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
 *
 * @apiParamExample {json} Create Catalog Publication Rule Request Body Example:
 *    {
 *        "startDate": 1412538800,
 *        "endDate": 1838635000,
 *        "clientFilters": [
 *            {
 *                "variableName": "UserAgent",
 *                "value": "chrome",
 *                "filterType": "Contains",
 *                "isDenied": true
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "IN",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the new domain publication rule
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// Get Catalog Publication Rule Details

/**
 * @api {get} domains/:domainId/catalogs/:catalogId/publicationRules/:publicationruleId Get Catalog Publication Rule Details
 * @apiName Get Catalog Publication Rule Details
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the catalog publication rule settings of the indicated publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
 *
 * @apiParamExample {Url} Get Catalog Publication RulesExample:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
 *
 * @apiSuccess (Response Fields) {String} id the publication rule id
 * @apiSuccess (Response Fields) {Number} startDate Date when publication rule becomes effective (epoch time in seconds)
 * @apiSuccess (Response Fields) {Number} endDate Date when publication rule expires (epoch time in seconds)
 * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client filter objects
 * @apiSuccess (Response Fields) {String} clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.value The value name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.filterType The type of filtering used to compare the value
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiSuccess (Response Fields) {Object[]} clientFilters.countryRules An array of Country Rules for the asset
 * @apiSuccess (Response Fields) {String} clientFilters.countryRules.countryCode The Country Code for the Country Rule (ISO 639 2-letter code, such as "CA")
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "startDate": 1425776400,
 *        "endDate": 1741465620,
 *        "clientFilters": [
 *            {
 *                "variableName": "IpAddress",
 *                "value": "127.0.0.1",
 *                "filterType": "Equals",
 *                "isDenied": false
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "US",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// delete catalog publication rule

/**
 * @api {delete} domains/:domainId/catalogs/:catalogId/publicationRules/:publicationruleId Delete Catalog Publication Rule
 * @apiName Delete Catalog Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the catalog publication rule settings of the indicated publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
 *
 * @apiParamExample {Url} Delete Publication Rule Example:
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get media item publication rules

/**
 * @api {get} domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId/publicationRules Get Media Item Publication Rules
 * @apiName Get Media Item Publication Rules
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns a collection of media item publicationruleIds.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} mediaitemId The media item id
 *
 * @apiParamExample {Url} Get Media Item Publication Rules Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
 *
 * @apiSuccess (Response Fields) {String[]} [publicationRuleIds] The ids for the domain publication rules
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// Create MediaItem Publication Rule

/**
 * @api {post} domains/:domainId/catalog/:catalogId/mediaItems/:mediaitemId/publicationRules Create MediaItem Publication Rule
 * @apiName Create MediaItem Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new media item publication rule within the indicated catalogId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} mediaitemId The media item id
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
 *
 * @apiParamExample {json} Create Media Item Publication Rule Request Body Example:
 *    {
 *        "startDate": 1412538800,
 *        "endDate": 1838635000,
 *        "clientFilters": [
 *            {
 *                "variableName": "UserAgent",
 *                "value": "chrome",
 *                "filterType": "Contains",
 *                "isDenied": true
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "IN",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id The id for the new domain publication rule
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// get media item publication rule

/**
 * @api {get} domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId/publicationRules/:publicationruleId Get Media Item Publication Rule
 * @apiName Get Media Item Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns the media item publication rule settings of the indicated publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} mediaitemId The media item id
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
 *
 * @apiParamExample {Url} Get Media Item Publication Rule Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/catalogs/62191781-a933-49d6-831f-83bdf51a26ac/publicationRules
 *
 * @apiSuccess (Response Fields) {String} id the publication rule id
 * @apiSuccess (Response Fields) {Number} startDate Date when publication rule becomes effective (epoch time in seconds)
 * @apiSuccess (Response Fields) {Number} endDate Date when publication rule expires (epoch time in seconds)
 * @apiSuccess (Response Fields) {Object[]} clientFilters Array of client filter objects
 * @apiSuccess (Response Fields) {String} clientFilters.variableName The variable name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.value The value name that the Client Filter will key off of
 * @apiSuccess (Response Fields) {String} clientFilters.filterType The type of filtering used to compare the value
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 * @apiSuccess (Response Fields) {Object[]} clientFilters.countryRules An array of Country Rules for the asset
 * @apiSuccess (Response Fields) {String} clientFilters.countryRules.countryCode The Country Code for the Country Rule (ISO 639 2-letter code, such as "CA")
 * @apiSuccess (Response Fields) {Boolean} clientFilters.isDenied Denotes whether a successful comparison of the Client Filter is denied or allowed
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "startDate": 1425776400,
 *        "endDate": 1741465620,
 *        "clientFilters": [
 *            {
 *                "variableName": "IpAddress",
 *                "value": "127.0.0.1",
 *                "filterType": "Equals",
 *                "isDenied": false
 *            }
 *        ],
 *        "countryRules": [
 *            {
 *                "countryCode": "US",
 *                "isDenied": false
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */

// delete media item publication rule

/**
 * @api {delete} domains/:domainId/catalogs/:catalogId/mediaItems/:mediaitemId/publicationRules/:publicationruleId Delete Media Item Publication Rule
 * @apiName Delete Media Item Publication Rule
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes the media item publication rule settings of the indicated publicationruleId.
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domainId The domain id for your Once account
 * @apiParam (Path Parameters) {String} catalogId The catalog id
 * @apiParam (Path Parameters) {String} mediaitemId The media item id
 * @apiParam (Path Parameters) {String} publicationruleId The publication rule id
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 *
 *
 */
