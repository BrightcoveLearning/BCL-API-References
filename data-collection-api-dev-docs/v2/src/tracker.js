// get send event to data collector

/**
 * @api {get} /tracker Send Event
 * @apiName Send Event
 * @apiGroup Events
 * @apiVersion 1.0.0
 *
 * @apiDescription Send event information to the data collector for Brightcove Analytics
 *
 * @apiParam (URL Parameters: All Requests) {String} account account id
 * @apiParam (URL Parameters: All Requests) {String="videocloud"} domain always equal to `videocloud`
 * @apiParam (URL Parameters: All Requests) {String="android","bada","ios","linux","mac","tv","os_x","rim","sybian","windows","other"} [device_os] Override to specify the OS of the device that originated the event in cases where the User Agent is unreliable (ignored unless both device os and device type are included or if the value submitted is not in the list of values shown here. **Not typically included**)
 * @apiParam (URL Parameters: All Requests) {String} [device_os_version] The version of os being used by the device. When not specified, this will be calculated by parsing the user agent string for the tracking request
 * @apiParam (URL Parameters: All Requests) {String="direct","mobile","tablet","tv","desktop","other"} [device_type] Override to specify the type of the device that originated the event in cases where the User Agent is unreliable (ignored unless both device os and device type are included or if the value submitted is not in the list of values shown here. **Not typically included**)
 * @apiParam (URL Parameters: All Requests) {String="player_load","catalog_request","catalog_response","play_request","ad_mode_begin","ad_mode_complete","video_impression","video_view","video_engagement","error"} event the event type
 * @apiParam (URL Parameters: All Requests) {String} [destination] URI that originated the event
 * @apiParam (URL Parameters: All Requests) {String} [source] URI that sent the end-user to the `destination` URI
 * @apiParam (URL Parameters: All Requests) {Number} [time] the timestamp for the event in epoch time (milliseconds)
 * @apiParam (URL Parameters: All Requests) {String} [country] ISO-3166 (alpha 2) region cISO-3166 (alpha 2) region code (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiParam (URL Parameters: All Requests) {String} [country_name] Human readable country name (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiParam (URL Parameters: All Requests) {String} [region] ISO-3166 (alpha 2) region code (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiParam (URL Parameters: All Requests) {String} [region_name] Human readable region name (override in case the system can not detect geographic information from the IP address) **Not typically included**
 * @apiParam (URL Parameters: All Requests) {String} [city] City name **Not typically included**
 * @apiParam (URL Parameters: All Requests) {String} [user] A unique user identifier - if not provided or blank, Video Cloud uses the fallback method of using the `Source IP address + the User-Agent` String as the unique identifier; __Note that Brightcove uses this information only to calculate unique users. The user data itself cannot retrieved via the API or Analytics module__
 * @apiParam (URL Parameters: `catalog_request` Events) {String} [catalog_url] The destination url associated with the catalog_request event
 * @apiParam (URL Parameters: `catalog_response` Events) {String} [catalog_url] The destination url associated with the catalog_request event that initiated this response
 * @apiParam (URL Parameters: `catalog_response` Events) {Number} [response_time_ms] The time, in milliseconds, between the catalog_request event and the catalog_response event
 * @apiParam (URL Parameters: `error` Events) {Number} [error_code] A platform specific error code associated with the event
 * @apiParam (URL Parameters: `video_impression` Events) {String} [video] the video id
 * @apiParam (URL Parameters: `video_impression` Events) {String} [video_name] the video name
 * @apiParam (URL Parameters: `video_view` Events) {String} [video] the video id
 * @apiParam (URL Parameters: `video_view` Events) {String} [video_name] the video name
 * @apiParam (URL Parameters: `video_view` Events) {String} [start_time_ms] The time, in milliseconds, between initiation of playback and the first frame of the video being rendered. This can be different depending on the experience, for instance, if there are no pre-roll ads configured, this measurement is the time between the `play_request` and `video_view` events. If there is a preroll ad, the time between `ad_mode_begin` and `ad_mode_complete` should not be included
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [video] the video id
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [video_name] the video name
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [range] the range of the video video viewed for `video_engagement` events in the format `StartSecond..EndSecond` - range can be left out of an engagement event to show that during the period covered by the event, there was no viewing activity. (for example, when there is only re-buffering activity)
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rendition_url] The url to the most recently selected rendition. For example, for an HLS stream this would be the url to the most recently selected variant
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rendition_indicated_bps] The indicated bitrate, in bits per second, of the most recently selected rendition
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rendition_mime_type] The mime type of the most recently selected rendition
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rendition_height] The encoded height of the video rendition in pixels
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rendition_width] The encoded width of the video rendition in pixels
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rebuffering_seconds] The number of seconds the user spent waiting for video to playback due to un-requested delay during the engagement period
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [rebuffering_count] The number of times playback stopped due to re-buffering during the represented engagement period delay during the engagement period
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [forward_buffer_seconds] The number of seconds of video currently residing in the forward buffer
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [measured_bps] The ratio of the number of bits included in the most recently downloaded segment to the time spend downloading that segment, in bits per second
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [player_width] The current pixel width of the player at the end of the engagement range
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [player_height] The current pixel height of the player at the end of the engagement range
 * @apiParam (URL Parameters: `video_engagement` Events) {String} [dropped_frames] dropped_frames
 * @apiParam (URL Parameters: `video_engagement` Events) {Number} [video_duration] the duration of the video in seconds
 * @apiParam (URL Parameters: `video_engagement` Events) {Number} [video_seconds_viewed] count of watched seconds since the last update for `video_engagement` events
 *
 * @apiParamExample {Url} player_load event Example:
 *     https://analytics.api.brightcove.com/v1/alltime/accounts/20318290001/videos/2660272749001
 *    http://metrics.brightcove.com/tracker
     ?event=player_load&destination=http%3A-%2F%2Fsupport.brightcove.com%2F
     &source=http%3A-%2F%2Fwww.google.com
     %2Furl%3Fsa%3D-t%26rct%3Dj%26q%3D%26esrc%3Ds%26source
     %3Dweb-%26cd%3D1%26ved%3D0CDYQFjAA%26url
     %3Dhttp%253A-%252F%252Fsupport.brightcove.com%252F%26ei%3DoEYWUtCgEIXq9ATzn-oCgCQ
     %26usg%3DAFQjCNEtLodOdxWZSGdJ-pL7WJaEeUJVlnw%26bvm%3Dbv.51156542%2Cd.dmg
     &domain=videocloud&account=1749339200&time=1377191644796
 * @apiSuccessExample {image/png} Success Response:
 *    HTTP/1.1 200 OK
 *
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_REQUEST 400: The message fields of the response contains information about what caused the error such as `invalid value for sort parameter`
 * @apiError (Error 4xx) {json} UNSUPPORTED_FIELD_COMBINATION_ERROR 400: The message fields of the response contains information about what invalid fields were specifed
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: This error occurs when the api request is made with an HTTP method other than GET
 * @apiError (Error 5xx) {json} SERVER_ERROR 500: Issue in Brightcove system; try again later
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
