// get leads

/**
 * @api {get} /accounts/:account_id/leads Get Leads
 * @apiName Get Leads
 * @apiGroup Leads
 * @apiVersion 1.0.0
 *
 * @apiDescription Get leads for an account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id a Video Cloud account ID
 * @apiParam (URL Parameters) {Number{1..100}} [limit=25] number of items to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiParam (URL Parameters) {String="video_id","external_id","player_id","page_url","created_at","email_address","first_name","last_name","business_phone","country","company_name","industry"} [sort="created_at"] field to sort results by
 * @apiParam (URL Parameters) {String} [fields="video_id","external_id","player_id","page_url","created_at","email_address","first_name","last_name","business_phone","country","company_name","industry"] fields to return for items (one or more as a comma-delimited list &mdash; by default, all fields are returned)
 * @apiParam (URL Parameters) {String="field==value"} [where] one or more field==value pairs to filter the results; fields supported are "video_id", "external_id", "player_id", "page_url", "created_at", "email_address", "first_name", "last_name", "business_phone", "country", "company_name", "industry"
 * @apiParam (URL Parameters) {mixed} [from] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`) or a relative date in d (days), h (hours), m (minutes), s (seconds) (such as -2d or -6h)
 * @apiParam (URL Parameters) {mixed} [to] End time for the period covered by the report &mdash; `now` or epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`) or a relative date in d (days), h (hours), m (minutes), s (seconds) (such as 2d or 6h)
 *
 * @apiParamExample {Url} Leads Report Example:
 *     https://audience.api.brightcove.com/v1/accounts/1486906377/leads?limit=10&fields=first_name&sort=last_name&where=video_id==1234567890&from=-30d&to=now
 *
 * @apiSuccess (Response Fields) {Number} count the total number of items
 * @apiSuccess (Response Fields) {Number} limit the limit for items in this request
 * @apiSuccess (Response Fields) {Number} offset the offset for items in this request
 * @apiSuccess (Response Fields) {Object[]} result array of result items
 * @apiSuccess (Response Fields) {String} result.created_at the date created
 * @apiSuccess (Response Fields) {String} result.email_address the lead's email address
 * @apiSuccess (Response Fields) {String} result.first_name the lead's first name
 * @apiSuccess (Response Fields) {String} result.last_name the lead's last name
 * @apiSuccess (Response Fields) {String} result.business_phone the lead's phone number
 * @apiSuccess (Response Fields) {String} result.country the lead's country
 * @apiSuccess (Response Fields) {String} result.company_name the lead's company name
 * @apiSuccess (Response Fields) {String} result.industry the lead's industry
 * @apiSuccess (Response Fields) {String} result.page_url the url for the Brightcove player
 * @apiSuccess (Response Fields) {String} result.player_id the ID for the Brightcove player
 * @apiSuccess (Response Fields) {String} result.video_id the Video Cloud video id
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "count": 2,
 *        "limit": 25,
 *        "offset": 0,
 *        "result": [
 *            {
 *                "created_at": "2016-06-30T12:57:11.283Z",
 *                "email_address": "bbailey@brightcove.com",
 *                "first_name": "Bob",
 *                "last_name": "Bailey",
 *                "page_url": "http://players.brightcove.net/1486906377/Hk4TBqzL_default/index.html?videoId=4997275041001",
 *                "player_id": "Hk4TBqzL",
 *                "video_id": "4997275041001"
 *            },
 *            {
 *                "created_at": "2016-06-30T12:57:33.301Z",
 *                "email_address": "rcrooks@brightcove.com",
 *                "first_name": "Robert",
 *                "last_name": "Crooks",
 *                "page_url": "http://players.brightcove.net/1486906377/Hk4TBqzL_default/index.html?videoId=4997275041001",
 *                "player_id": "Hk4TBqzL",
 *                "video_id": "4997275041001"
 *            }
 *        ]
 *    }
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
