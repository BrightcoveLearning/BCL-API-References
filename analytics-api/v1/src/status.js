// get status

/**
 * @api {get} /data/status Get Available Date Range
 * @apiName Get Available Date Range
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the date range for which data is available for any Analytics API report. All parameters are available, but there is no point in adding any except `account`, `dimensions`, and `from`.
 * __Note that date range for this request must fall within the available date range for the dimensions requested &mdash; the simplest thing to do is to use `from=alltime`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 * @apiHeader {String} Accept-Encoding Accept-Encoding: gzip (optional)
 *
 * @apiParam (URL Parameters) {Number} account_ids one or more Video Cloud account IDs separated by commas
 * @apiParam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiParam (URL Parameters) {String} [sort=video_view] field to sort results by (for video dimension reports, valid sort fields include the video metadata fields `video.name`, `video.tags`, `video.reference_id` and `video.custom_fields` - see ([Fields and Sort](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#fieldsAndSorting)))
 * @apiParam (URL Parameters) {String} [fields=video_view] fields to return for items; see [Dimensions and Fields](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#metrics) for the available fields for each dimension
 * @apiParam (URL Parameters) {String="account","city","country","region","date","date-time","device_os","device_type","player","referrer_domain","destination_domain","search_terms","source_type","video"} dimensions one or more dimensions to report on; see [Multiple Dimensions](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#reportDimensions) for which combined dimensions are supported
 * @apiParam (URL Parameters) {String="dimension==value"} [where] one or more dimension==value pairs to filter the results; see [Where Filters](http://docs.brightcove.com/en/video-cloud/analytics-api/getting-started/api-overview.html#filterValues) for details
 * @apiParam (URL Parameters) {mixed} [from="(30 days before now)"] Start time for the period covered by the report &mdash; `alltime` or epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiParam (URL Parameters) {mixed} [to="now"] End time for the period covered by the report &mdash; 'now` or epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiParam (URL Parameters) {String="json","csv","xlsx"]} [format="json"] format to return the results in
 * @apiParam (URL Parameters) {Boolean} [reconciled] if true, only reconciled data is returned; if false, only realtime data is returned; if not present, both reconciled and realtime data are returned
 *
 * @apiParamExample {Url} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/data?accounts=20318290001&dimensions=account,device_os,country
 *
 * @apiSuccess (Response Fields) {DateString} reconciled_from the earliest date that you can use for `from`
 * @apiSuccess (Response Fields) {DateString} reconciled_to the latest date that you can use for `to`
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "reconciled_from": "2015-10-19",
 *        "reconciled_to": "2015-11-04"
 *    }
 *
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
 *    HTTP/1.1 400 BAD_REQUEST
 *    [
 *        {
 *            "error_code": "TIME_RANGE_UNAVAILABLE",
 *            "message": "data is not available for the requested dimensions during the requested time period",
 *            "request_id": "4f13a9e1-2e0b-4fef-a040-d67846493bd6"
 *        }
 *    ]
 *
 *
 */

