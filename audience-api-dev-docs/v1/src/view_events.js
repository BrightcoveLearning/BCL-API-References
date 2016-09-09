// get view_events

/**
 * @api {get} /accounts/:account_id/view_events Get View Events
 * @apiName Get View Events
 * @apiGroup View Events
 * @apiVersion 1.0.0
 *
 * @apiDescription Get view events for an account - note that only view events that have been _processed_ will appear in the response
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id a Video Cloud account ID
 * @apiParam (URL Parameters) {Number{1..100}} [limit=25] number of items to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiParam (URL Parameters) {String="video_id","video_name","tracking_id","external_id","player_id","page_url","watched","time_watched","created_at","updated_at","is_synced"} [sort="created_at"] field to sort results by
 * @apiParam (URL Parameters) {String} [fields="video_id","video_name","tracking_id","external_id","player_id","page_url","watched","time_watched","created_at","updated_at","is_synced"] fields to return for items (one or more as a comma-delimited list &mdash; by default, all fields are returned)
 * @apiParam (URL Parameters) {String="field==value"} [where] one or more field==value pairs to filter the results; fields supported are "video_id", "video_name", "tracking_id", "external_id", "player_id", "page_url", "watched", "time_watched", "created_at", "updated_at", "is_synced"
 * @apiParam (URL Parameters) {mixed} [from] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`) or a relative date in d (days), h (hours), m (minutes), s (seconds) (such as -2d or -6h)
 * @apiParam (URL Parameters) {mixed} [to] End time for the period covered by the report &mdash; `now` or epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`) or a relative date in d (days), h (hours), m (minutes), s (seconds) (such as 2d or 6h)
 *
 * @apiParamExample {Url} View Events Report Example:
 *     https://audience.api.brightcove.com/v1/accounts/1486906377/view_events?limit=10&fields=first_name&sort=video_name&where=video_id==1234567890&from=-30d&to=now
 *
 * @apiSuccess (Response Fields) {Number} count the total number of items
 * @apiSuccess (Response Fields) {Number} limit the limit for items in this request
 * @apiSuccess (Response Fields) {Number} offset the offset for items in this request
 * @apiSuccess (Response Fields) {Object[]} result array of result items
 * @apiSuccess (Response Fields) {String} result.created_at the date created
 * @apiSuccess (Response Fields) {String} result.page_url the url for the Brightcove player
 * @apiSuccess (Response Fields) {String} result.player_id the ID for the Brightcove player
 * @apiSuccess (Response Fields) {String} result.video_id the Video Cloud video id
 * @apiSuccess (Response Fields) {String} result.video_name the Video Cloud video name
 * @apiSuccess (Response Fields) {Number} result.watched the percentage of the video watched
 * @apiSuccess (Response Fields) {Number} result.time_watched the seconds of the video watched
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "count": 27,
 *        "limit": 25,
 *        "offset": 0,
 *        "result": [
 *            {
 *                "created_at": "2016-04-25T18:30:21.651Z",
 *                "page_url": "http://players.brightcove.net/1486906377/V1s6NOwRx_default/index.html?videoId=4842718056001",
 *                "player_id": "V1s6NOwRx",
 *                "time_watched": 2,
 *                "updated_at": "2016-04-25T18:30:21.651Z",
 *                "video_id": "4842718056001",
 *                "video_name": "Horses Heading to the Track",
 *                "watched": 19
 *            },
 *            {
 *                "created_at": "2016-04-25T18:31:55.071Z",
 *                "page_url": "http://players.brightcove.net/1486906377/BkgFuzyhg_default/index.html?videoId=4842718056001",
 *                "player_id": "BkgFuzyhg",
 *                "time_watched": 15,
 *                "updated_at": "2016-04-25T18:32:00.879Z",
 *                "video_id": "4842718056001",
 *                "video_name": "Horses Heading to the Track",
 *                "watched": 99
 *            }, ...
 *        }
 *    ]
 *
 *
 * @apiError (Error 4xx) {json} BAD_REQUEST_ERROR 400: Query parameters are invalid
 * @apiError (Error 4xx) {json} UNAUTHORIZED_ERROR 401: The access token is either absent, has expired, or is invalid
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The URL does not exist
 * @apiError (Error 4xx) {json} REQUEST_THROTTLED_ERROR 429: The user has exceeded the rate limiting policy
 * @apiError (Error 5xx) {json} INTERNAL_ERROR 500: An internal error has occurred
 * @apiError (Error 5xx) {json} GATEWAY_TIMEOUT_ERROR 504: The server timed out while fulfilling your request

 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "UNAUTHORIZED_ERROR",
 *            "message": "Permission denied"
 *        }
 *    ]
 *
 *
 */
