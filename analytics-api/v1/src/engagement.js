// get engagement report by account

/**
 * @api {get} /engagement/accounts/:account_id Get Account Engagement
 * @apiName Get Account Engagement
 * @apiGroup Engagement
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
 * @apiParam (Path Parameters) {Number} account_id a Video Cloud account ID
 * @apiparam (URL Parameters) {String} [from="(30 days before now)"] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiparam (URL Parameters) {String} [to="now"] End time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/engagement/account/20318290001
 *
 * @apiSuccess (Response Fields) {Object} timeline detailed engagement data
 * @apiSuccess (Response Fields) {String} timeline.type type of data in the `values` array
 * @apiSuccess (Response Fields) {Number[]} timeline.values array of average views in each 100th part of video duration
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 {
                "timeline": {
                    "type": "percentile",
                    "values": [100, 100, 94, 88, 76, 78, - ]
                }
            }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
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