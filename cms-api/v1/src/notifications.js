// Create Notification Subscriptions

/**
 * @api {get} /accounts/:account_id/subscriptions Create Notification Subscriptions
 * @apiName Create Notification Subscriptions
 * @apiGroup Notifications
 * @apiVersion 1.0.0
 *
 * @apiDescription Establishes up to 10 endpoints that video change notications should be sent to. Any change in video metadata will trigger a video change event and a notification &mdash; changes to assets used by the video will <strong>not</strong> trigger change events.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParamExample {json} Get Notifications Example:
 *    {
 *        "endpoint":"http://solutions.brightcove.com/bcls/di-api/cms-callbacks.php",
 *        "events":["video-change"]
 *    }
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
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
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} Unprocessable Entity 422: You already have a subscription for the video-change event that delivers to that address
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
 */

