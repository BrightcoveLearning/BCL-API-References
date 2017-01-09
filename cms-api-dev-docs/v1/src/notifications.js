/**
 * @apiDefine notificationGroup Notifications
 * Notification operations allow you to add subscriptions to video change events, as well as get all subscriptions and get or delete a specific subscription.
 */

// get Notification Subscriptions

/**
 * @api {get} /accounts/:account_id/subscriptions Get Subscriptions List
 * @apiName Get Subscriptions List
 * @apiGroup notificationGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a list of all notification subscriptions for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParamExample {url} Get Notifications Example:
 *     https://cms.api.brightcove.com/v1/accounts/0098768765/subscriptions
 *
 * @apiSuccess (Response Fields) {String} endpoint the notifications endpoint
 * @apiSuccess (Response Fields) {String[]} events array of events subscribed to
 * @apiSuccess (Response Fields) {String} id system id for the subscription
 * @apiSuccess (Response Fields) {String} service_account the Video Cloud account id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200
 *    [
 *        {
 *            "endpoint": "http://solutions.brightcove.com/bcls/di-api/cms-callbacks.php",
 *            "events": [
 *                "video-change"
 *            ],
 *            "id": "a0847083-79f4-4315-8a2c-403465a3d9bc",
 *            "service_account": "57838016001"
 *        }
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// Create Notification Subscriptions

/**
 * @api {post} /accounts/:account_id/subscriptions Create Subscription
 * @apiName Create Subscription
 * @apiGroup notificationGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Establishes up to 10 endpoints that video changes should be sent to. Any change in video metadata will trigger a video change event and a notification &mdash; changes to assets used by the video will <strong>not</strong> trigger change events.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {String} endpoint a URL that can handle HTTP POST requests
 * @apiParam (Request Body Fields) {String[]} events array of events subscribed to &mdash; currently only the `video-change` event is available
 *
 * @apiParamExample {json} Get Notifications Example:
 *    {
 *        "endpoint":"http://solutions.brightcove.com/bcls/di-api/cms-callbacks.php",
 *        "events":["video-change"]
 *    }
 *
 * @apiSuccess (Response Fields) {String} endpoint the notifications endpoint
 * @apiSuccess (Response Fields) {String[]} events array of events subscribed to
 * @apiSuccess (Response Fields) {String} id system id for the subscription
 * @apiSuccess (Response Fields) {String} service_account the Video Cloud account id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "endpoint": "http://solutions.brightcove.com/bcls/di-api/cms-callbacks.php",
 *        "events": [
 *            "video-change"
 *        ],
 *        "id": "a0847083-79f4-4315-8a2c-403465a3d9bc",
 *        "service_account": "57838016001"
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} Unprocessable_Entity 422: 1) You already have a subscription for the video-change event that delivers to that address; 2) the endpoint or events field is missing from the request; 3) you already have 10 subscriptions to this event
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get subscription
//
/**
 * @api {get} /accounts/:account_id/subscriptions/:subscription_id Get Subscription
 * @apiName Get Subscription
 * @apiGroup notificationGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a notification subscription for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} subscription_id the subscription ID.
 *
 * @apiParamExample {url} Get Notifications Example:
 *     https://cms.api.brightcove.com/v1/accounts/0098768765/subscriptions/3019328472390
 *
 * @apiSuccess (Response Fields) {String} endpoint the notifications endpoint
 * @apiSuccess (Response Fields) {String[]} events array of events subscribed to
 * @apiSuccess (Response Fields) {String} id system id for the subscription
 * @apiSuccess (Response Fields) {String} service_account the Video Cloud account id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200
 *    {
 *        "endpoint": "http://solutions.brightcove.com/bcls/di-api/cms-callbacks.php",
 *        "events": [
 *            "video-change"
 *        ],
 *        "id": "a0847083-79f4-4315-8a2c-403465a3d9bc",
 *        "service_account": "57838016001"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// delete subscription
//
/**
 * @api {delete} /accounts/:account_id/subscriptions/:subscription_id Delete Subscription
 * @apiName Delete Subscription
 * @apiGroup notificationGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete a notification subscription for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} subscription_id the subscription ID.
 *
 * @apiParamExample {url} Get Notifications Example:
 *     https://cms.api.brightcove.com/v1/accounts/0098768765/subscriptions/24019234871230487
 * *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 NO content
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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
