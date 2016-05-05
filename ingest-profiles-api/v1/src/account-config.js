// get default profile

/**
 * @api {get} /accounts/:account_id/configuration Get Default Profile
 * @apiName Get Default Profile
 * @apiGroup Account Configuration
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the default ingest profile for the account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 *
 * @apiParamExample {json} Get Default Profile Example:
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
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Credentials are required to access this resource
 * @apiError (Error 4xx) {html} NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 404 NOT_FOUND
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 *
 * @apiErrorExample {html} 404 Error Response
 *    HTTP/1.1 404 NOT_FOUND
 *    <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
*    <title>Error 404 NOT_FOUND</title> </head>
*    <body><h2>HTTP ERROR 404</h2> <p>Problem accessing /v1/accounts/57838016001/configurtion. Reason: <pre> NOT_FOUND</pre></p>
*    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </body> </html>
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
 * @apiParamExample {json} Set Default Profile Example:
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
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Credentials are required to access this resource.
 * @apiError (Error 4xx) {html} NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {html} BAD_REQUEST 400: The JSON was not valid
 * @apiError (Error 4xx) {json} CONFLICT 409: Account configuration already exists for 57838016001; please delete the configuration first, or update it instead.
 *
 * @apiErrorExample {json} 401 Error Response
 *    HTTP/1.1 401 NOT_AUTHORIZED
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 * @apiErrorExample {html} 404 Error Response
 *    HTTP/1.1 404 NOT_FOUND
 *    <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
*    <title>Error 404 NOT_FOUND</title> </head>
*    <body><h2>HTTP ERROR 404</h2> <p>Problem accessing /v1/accounts/57838016001/configurtion. Reason: <pre> NOT_FOUND</pre></p>
*    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </body> </html>
* @apiErrorExample {html} 400 BAD_REQUEST
*     HTTP/1.1 400 BAD_REQUEST
*     <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
*     <title>Error 400 Unexpected character ('d' (code 100)): was expecting a colon to separate field name and value</title> </head>
*     <body><h2>HTTP ERROR 400</h2> <p>Problem accessing /v1/accounts/57838016001/configuration. Reason: <pre> Unexpected character ('d' (code 100)): was expecting a colon to separate field name and value</pre></p>
*     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </body> </html>
*
* @apiErrorExample {json} 409 CONFLICT
*    HTTP/1.1 409 CONFLICT
*    [
*        {
*            "code": "CONFLICT",
*            "message": "Account configuration already exists for 57838016001; please delete the configuration first, or update it instead."
*        }
*    ]
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
 * @apiParamExample {json} Update Default Profile Example:
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
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Credentials are required to access this resource.
 * @apiError (Error 4xx) {html} NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {html} BAD_REQUEST 400: The JSON was not valid
 * @apiError (Error 4xx) {json} CONFLICT 409: Account configuration already exists for 57838016001; please delete the configuration first, or update it instead.
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 404 NOT_FOUND
 *    [
 *        {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *        }
 *    ]
 * @apiErrorExample {html} 404 Error Response
 *    HTTP/1.1 404 NOT_FOUND
 *    <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
*    <title>Error 404 NOT_FOUND</title> </head>
*    <body><h2>HTTP ERROR 404</h2> <p>Problem accessing /v1/accounts/57838016001/configurtion. Reason: <pre> NOT_FOUND</pre></p>
*    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </body> </html>
* @apiErrorExample {html} 400 BAD_REQUEST
*     HTTP/1.1 400 BAD_REQUEST
*     <html> <head> <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
*     <title>Error 400 Unexpected character ('d' (code 100)): was expecting a colon to separate field name and value</title> </head>
*     <body><h2>HTTP ERROR 400</h2> <p>Problem accessing /v1/accounts/57838016001/configuration. Reason: <pre> Unexpected character ('d' (code 100)): was expecting a colon to separate field name and value</pre></p>
*     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </body> </html>
*
* @apiErrorExample {json} 409 CONFLICT
*    HTTP/1.1 409 CONFLICT
*    [
*        {
*            "code": "CONFLICT",
*            "message": "Account configuration already exists for 57838016001; please delete the configuration first, or update it instead."
*        }
*    ]
 *
 */
