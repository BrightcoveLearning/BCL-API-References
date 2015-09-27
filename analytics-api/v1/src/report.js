// get report

/**
 * @api {get} /data Get Analytics Report
 * @apiName Get Analytics Report
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiDescription Get an analytics report on one or more dimensions
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (URL Parameters) {Number} account_ids one or more Video Cloud account IDs separated by commas
 * @apiparam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {String} [sort=video_view] field to sort results by
 * @apiparam (URL Parameters) {String="account","city","country","region","date","date-time","device_os","device_type","player","referrer_domain","destination_domain","search_terms","source_type","video"} dimensions one or more dimensions to report on; see [Multiple Dimensions](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#reportDimensions) for which combined dimensions are supported
 * @apiparam (URL Parameters) {String="dimension==value"} [where] one or more dimension==value pairs to filter the results; see [Where Filters](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#filterValues) for details
 * @apiparam (URL Parameters) {String} [from="(30 days before now)"] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/data?accounts=57838016001&dimensions=video&where=video==4442677263001&from=2015-08-01&to=2015-08-31&fields=video_view,video_impression,video
 *
 * @apiSuccess (Response Fields) {String} key_string the policy key string
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
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
 *
 */

