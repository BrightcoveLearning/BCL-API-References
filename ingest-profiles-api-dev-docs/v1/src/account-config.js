// get default profile

/**
 * @api {get} /accounts/:account_id/configuration Get Default Profile
 * @apiName Get Default Profile
 * @apiGroup Account Configuration
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the ingest profile as the default for the account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 *
 * @apiParamExample {json} Create Video Example:
 *     https://ingestion.api.brightcove.com/v1/accounts/57838016001/configuration
 *
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} id configuration id
 * @apiSuccess (Response Fields) {String} default_profile_id profile name for video-on-demand
 * @apiSuccess (Response Fields) {String} default_live_profile_id default profile name for live streams
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} max_profile_count maximum number of custom profiles for the account
 * @apiSuccess (Response Fields) {Number} max_rendition_count maximum number of renditions per profile
 * @apiSuccess (Response Fields) {Number} version system-managed version number
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": 57838016001,
 *        "date_created": 1442409154636,
 *        "date_last_modified": 1442409154636,
 *        "default_live_profile_id": "Live - Standard",
 *        "default_profile_id": "screencast-1280",
 *        "id": "55525f84e4b08e946aa03281",
 *        "max_profile_count": 10,
 *        "max_rendition_count": 20,
 *        "version": 1442409154636
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 *
 *
 */

// set default profile

/**
 * @api {post} /accounts/:account_id/configuration Set Default Profile
 * @apiName Set Default Profile
 * @apiGroup Account Configuration
 * @apiVersion 1.0.0
 *
 * @apiDescription Sets an ingest profile as the default for the account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {Number} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {String} default_profile_id The id or name of the profile you want to set as the default
 * @apiParam (Request Body Fields) {String} [default_live_profile_id] The id or name of the live profile you want to set as the default
 *
 * @apiParamExample {json} Create Video Example:
 *     {
 *         "account_id": 57838016001,
 *         "default_profile_id": "high-resolution"
 *     }
 *
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} id configuration id
 * @apiSuccess (Response Fields) {String} default_profile_id profile name for video-on-demand
 * @apiSuccess (Response Fields) {String} default_live_profile_id default profile name for live streams
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} max_profile_count maximum number of custom profiles for the account
 * @apiSuccess (Response Fields) {Number} max_rendition_count maximum number of renditions per profile
 * @apiSuccess (Response Fields) {Number} version system-managed version number
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": 57838016001,
 *        "date_created": 1443727850896,
 *        "date_last_modified": 1443727850896,
 *        "default_live_profile_id": "Live - Standard",
 *        "default_profile_id": "high-resolution",
 *        "id": "55525f84e4b08e946aa03281",
 *        "max_profile_count": 10,
 *        "max_rendition_count": 20,
 *        "version": 1443727850896
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 *
 *
 */

// update default profile

/**
 * @api {put} /accounts/:account_id/configuration Update Default Profile
 * @apiName Update Default Profile
 * @apiGroup Account Configuration
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates the default ingest profile for the account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {Number} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {String} id the configuration id (if you don't have it, make a GET request to get it)
 * @apiParam (Request Body Fields) {String} default_profile_id The id or name of the profile you want to set as the default
 * @apiParam (Request Body Fields) {String} [default_live_profile_id] The id or name of the live profile you want to set as the default
 *
 * @apiParamExample {json} Create Video Example:
 *     {
 *         "account_id": 57838016001,
 *         "default_profile_id": "high-resolution"
 *     }
 *
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} id configuration id
 * @apiSuccess (Response Fields) {String} default_profile_id profile name for video-on-demand
 * @apiSuccess (Response Fields) {String} default_live_profile_id default profile name for live streams
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} max_profile_count maximum number of custom profiles for the account
 * @apiSuccess (Response Fields) {Number} max_rendition_count maximum number of renditions per profile
 * @apiSuccess (Response Fields) {Number} version system-managed version number
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": 57838016001,
 *        "date_created": 1443727850896,
 *        "date_last_modified": 1443727850896,
 *        "default_live_profile_id": "Live - Standard",
 *        "default_profile_id": "high-resolution",
 *        "id": "55525f84e4b08e946aa03281",
 *        "max_profile_count": 10,
 *        "max_rendition_count": 20,
 *        "version": 1443727850896
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 *
 *
 */

