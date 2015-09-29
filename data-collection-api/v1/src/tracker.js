// get send event to data collector

/**
 * @api {get} /tracker Send Event
 * @apiName Send Event
 * @apiGroup Events
 * @apiVersion 1.0.0
 *
 * @apiDescription Send event information to the dta
 *
 * @apiparam (URL Parameters) {String} account account id
 * @apiparam (URL Parameters) {String="videocloud"} domain always equal to `videocloud`
 * @apiparam (URL Parameters) {String="player_load","video_impression","video_view","video_engagement"} event the event type
 * @apiparam (URL Parameters) {String} [video] the video id
 * @apiparam (URL Parameters) {String} [video_name] the video name
 * @apiparam (URL Parameters) {Number} [time] the timestamp for the event in epoch time (milliseconds)
 * @apiparam (URL Parameters) {Number} [video_duration] the duration of the video in seconds
 * @apiparam (URL Parameters) {String} [range] the range of the video video viewed for `video_engagement` events in the format `StartSecond..EndSecond`
 * @apiparam (URL Parameters) {Number} [video_seconds_viewed] count of watched seconds since the last update for `video_engagement` events
 * @apiparam (URL Parameters) {String} [destination] URI that originated the event
 * @apiparam (URL Parameters) {String} [source] URI that sent the end-user to the `destination` URI
 * @apiparam (URL Parameters) {String="direct","mobile","tablet","tv","desktop","other"} [device_type] Override to specify the type of the device that originated the event in cases where the User Agent is unreliable (ignored unless both device os and device type are included or if the value submitted is not in the list of values shown here. **Not typically included**)
 * @apiparam (URL Parameters) {String="direct","android","bada","ios","linux","mac","tv","os_x","rim","sybian","windows","other"} [device_os] Override to specify the OS of the device that originated the event in cases where the User Agent is unreliable (ignored unless both device os and device type are included or if the value submitted is not in the list of values shown here. **Not typically included**)
 * @apiparam (URL Parameters) {String} [country] ISO-3166 (alpha 2) region code (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiparam (URL Parameters) {String} [country_name] Human readable country name (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiparam (URL Parameters) {String} [region] Human readable country name (override in case the system can not detect geographic information from the IP address) **Not typically included**
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/alltime/accounts/20318290001/videos/2660272749001
 *
 * @apiSuccess (Response Fields) {Number} alltime_video_views all-time video views
 *
 * @apiSuccessExample {image/png} Success Response:
 *    HTTP/1.1 200 OK
 *
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_REQUEST 400: The message fields of the response contains information about what caused the error such as `invalid value for sort parameter`
 * @apiError (Error 4xx) {json} UNSUPPORTED_FIELD_COMBINATION_ERROR 400: The message fields of the response contains information about what invalid fields were specifed
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: This error occurs when the api request is made with an HTTP method other than GET
 * @apiError (Error 5xx) {json} SERVER_ERROR 500: Issue in Brightcove system; try again later
 * @apiError (Error 5xx) {json} PROCESSING 500: The analytics API may send back this message if it encounters a long running query. Once the query has finished it will be stored in the server’s cache for up to 5 minutes. Therefore we suggest querying the API 4 minutes after receiving this error
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *    [
 *        {
 *            "error_code": "NOT_FOUND",
 *            "message": "Requested resource does not exist",
 *            "request_id": "df35af83-ac9b-44b0-b172-a80a11bd0bfa"
 *        }
 *    ]
 *
 */

