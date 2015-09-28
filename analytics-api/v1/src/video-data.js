// get alltime video views

/**
 * @api {get} /alltime/accounts/:account_id/videos/:video_id Get Alltime Video Views
 * @apiName Get Alltime Video Views
 * @apiGroup Video Data
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a summary report of engagement for the account. Note:
 * 1. Engagement reports are only available for periods within the past 32 days. Requests outside that range will return an error
 * 2. The only parameters supported for Engagement reports are `from` and `to`
 * 3. Engagement reports are available for single accounts only - reports on multiple accounts will not work
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 * @apiHeader {String} Accept-Encoding Accept-Encoding: gzip (optional)
 *
 * @apiParam (Path Parameters) {String} account_id a Video Cloud account ID
 * @apiParam (Path Parameters) {String} video_id a Video Cloud video ID
 * @apiparam (URL Parameters) {String} [from="(30 days before now)"] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiparam (URL Parameters) {String} [to="now"] End time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/alltime/accounts/20318290001/videos/2660272749001
 *
 * @apiSuccess (Response Fields) {Number} alltime_video_views all-time video views
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "alltime_video_views": 7690
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_REQUEST 400: The message fields of the response contains information about what caused the error such as `invalid value for sort parameter`
 * @apiError (Error 4xx) {json} UNSUPPORTED_FIELD_COMBINATION_ERROR 400: The message fields of the response contains information about what invalid fields were specifed
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: This error occurs when the api request is made with an HTTP method other than GET
 * @apiError (Error 5xx) {json} SERVER_ERROR 500: Issue in Brightcove system; try again later
 * @apiError (Error 5xx) {json} PROCESSING 500: The analytics API may send back this message if it encounters a long running query. Once the query has finished it will be stored in the server’s cache for up to 5 minutes. Therefore we suggest querying the API 4 minutes after receiving this error
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

