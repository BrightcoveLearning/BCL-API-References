// Create a Standard Live Job

/**
 * @api {post} /v1/jobs Create a Live Job
 * @apiName Create a Standard Live Job
 * @apiGroup Live_Jobs
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a live stream
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
 *
 * @apiParam (Request Body Fields) {Boolean} live_stream Indicates that the job is a live streaming job.
 * @apiParam (Request Body Fields) {Boolean} [ad_insertion=false] Setting this parameter to true will enable server side ad insertion (SSAI) on the job. Note* Your ad server must be configured by your account team. Current support includes, DFP, Freewheel, or any VAST 2.0/3.0 ad tags. Default is false. Currently no outputs can be specified with a SSAI enabled stream.
 * @apiParam (Request Body Fields) {String="Us-west-2", "ap-southeast-2", "ap-northeast-1"} region You can specify an Amazon AWS region to use for encoding a job and we will process the job on servers in the region specified. It’s recommended to use the region closest to your encoder.
 * @apiParam (Request Body Fields) {Number{0-1800}} [reconnect_time=30] The time, in seconds, to wait for a stream to reconnect to the encoder. Default is set to 30 seconds.
 * @apiParam (Request Body Fields) {Number{0-93600}} [event_length] The minimum time, in seconds, to keep a live stream available. At any point within the specified event_length you may reconnect to your stream. The event_length setting goes into effect as soon as streaming begins.
 * @apiParam (Request Body Fields) {Number{0-7200}} [live_sliding_window_duration=100] The time, in seconds, to keep in the live DVR manifest. If the stream duration is longer than the window duration, segment references will be removed first in first out. Default is 100 seconds.
 * @apiParam (Request Body Fields) {Number{1-5}} [max_hls_protocol_version=3] Sets the maximum HLS protocol version to use. Special features will be used as available. Default is 3.
 * @apiParam (Request Body Fields) {mixed[]} [notifications] Array of notification destination objects or strings.  A notification will be sent to the destination when selected event occurs. You can use a simple string with a url: "http://log:pass@httpbin.org/post", or you can use an object.
 * @apiParam (Request Body Fields) {String} notifications.url Destination for the notification.
 * @apiParam (Request Body Fields) {String} [notifications.credentials] Credentials for the destination, if required.
 * @apiParam (Request Body Fields) {String="first_segment_uploaded", "output_finished", "state_changed"} [notifications.event="state_changed"] Event type to send notifications for.  It is recommended to set events on the job and not individual rendition outputs since renditions will finish simultaneously.
 * @apiParam (Request Body Fields) {Object[]} [add_cdns] Array of additional CDN providers to be used for manifest generation. For each CDN provided, the manifest will be prepended accordingly
 * @apiParam (Request Body Fields) {String} add_cdns.label A lable to identify the CDN.
 * @apiParam (Request Body Fields) {String} add_cdns.prepend TODO
 * @apiParam (Request Body Fields) {String="HTTP", "HTTPS"} add_cdns.protocol Protocol to use in sending the stream to the CDN.
 * @apiParam (Request Body Fields) {Object[]} outputs Array of output specifications for VOD assets to be created from the live stream.
 * @apiParam (Request Body Fields) {String} outputs.label Label for the VOD asset.
 * @apiParam (Request Body Fields) {Boolean} outputs.live_stream For jobs, setting live_stream to true indicates the output is a live rendition. If live_stream is false, or is not set, the output will be treated as a VOD output.
 * @apiParam (Request Body Fields) {Number{0-172800}} [outputs.duration] Clipping API option 1. Duration (in seconds) to clip back from Live. Note: Clipping API only requires one of the three options for specifying duration or time.
 * @apiParam (Request Body Fields) {Number{0-2147483647}} [outputs.stream_start_time] Clipping API option 2. An offset, in seconds, from the start of the live stream to mark the beginning of the clip. Note: Clipping API only requires one of the three options for specifying duration or time.
 * @apiParam (Request Body Fields) {Number{stream_start_time-stream_start_time+172800}} [outputs.stream_end_time] Clipping API option 2. An offset, in seconds, from the start of the live stream to mark the end of the clip. Note: Clipping API only requires one of the three options for specifying duration or time.
 * @apiParam (Request Body Fields) {Number{current_time..}} [outputs.start_time] Clipping API option 2. An offset, in seconds, from the start of the live stream to mark the end of the clip. Note: Clipping API only requires one of the three options for specifying duration or time.
 *
 * @apiParamExample {json} Standard Live Stream Example:
 *    {
 *        "live_stream": true,
 *        "region": "us-west-2",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration": 30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream Custom Origin Example:
 *    {
 *        "live_stream": true,
 *        "region": "us-west-2",
 *        "reconnect_time": 30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6,
 *                "keyframe_interval": 60
 *            },
 *            {
 *                "type":"playlist",
 *                "url":"s3://YOUR_BUCKET/custom/playlist.m3u8",
 *                "credentials":"YOUR_CREDENTIALS"
 *                "streams": [{"source": "hls480p"},{"source": "hls720p"}]
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream Transmuxed Rendition Example:
 *     // When using a transmuxed rendition within a multi-bitrate HLS output,
 *     // the segment_size and keyframe_interval should be avoided on any of the outputs
 *     // to ensure segments and keyframes follow the input GOP structure.
 *     //If not, the system will return an error in the job creation request.
 *    {
 *        "live_stream": true,
 *        "region": "us-west-2",
 *        "reconnect_time": 20,
 *        "outputs": [
 *            {
 *                "label": "hls1080p transmux",
 *                "live_stream": true,
 *                "copy_video": true,
 *                "copy_audio": true,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "label": "hls480p",
 *                "live_stream": true,
 *                "width": 640,
 *                "height": 360,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 819,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "url":"s3://YOUR_BUCKET/live/20160403004644_test.mp4",
 *                "credentials": "YOUR_CREDENTIALS"
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream with VOD Example:
 *    {
 *        "live_stream": true,
 *        "region": "us-west-2",
 *        "reconnect_time": 20,
 *        "live_sliding_window_duration":30,
 *        "outputs": [
 *            {
 *                "label": "hls720p",
 *                "live_stream": true,
 *                "width": 960,
 *                "height": 540,
 *                "video_codec": "h264",
 *                "h264_profile": "main",
 *                "video_bitrate": 1843,
 *                "segment_seconds": 6
 *            },
 *            {
 *                "url":"s3://YOUR_BUCKET/live/20160403004644_test.mp4",
 *                "credentials": "YOUR_CREDENTIALS"
 *            }
 *        ]
 *    }
 *
 * @apiParamExample {json} Live Stream with VOD and Notifications Example:
 *    {
 *        "live_stream": true,
 *        "region": "us-west-2",
 *        "reconnect_time": 20,
 *        "notifications": [
 *            “http://httpbin.org/post?liveStateChange",
 *            {
 *                "url": "http://httpbin.org/post?liveStarted",
 *                "event": "first_segment_uploaded"
 *            },
 *            {
 *                "url": "http://httpbin.org/post?liveFinished",
 *                "event": "output_finished"
 *            }],
 *        "outputs": [
 *        {
 *            "label": "hls720p",
 *            "live_stream": true,
 *            "height": 720,
 *            "video_bitrate": 2000,
 *            "segment_seconds": 6,
 *            "video_codec": "h264",
 *            "h264_profile": "high",
 *            "segment_seconds": 6
 *        },
 *        {
 *            "label": "hls360p",
 *            "live_stream": true,
 *            "height": 360,
 *            "video_bitrate": 650,
 *            "segment_seconds": 6
 *        },
 *        {
 *            "url":"s3://YOUR_BUCKET/path/filename.mp4",
 *            "credentials": "YOUR_CREDENTIALS”,
 *            "notifications":    [{
 *                "url": "http://httpbin.org/post?vodStateChange"
 *            },
 *            {
 *                "url": "http://httpbin.org/post?vodFinished",
 *                "event": "output_finished"
 *            }]
 *        }]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id Id for the stream.
 * @apiSuccess (Response Fields) {Object[]} outputs Details on each output rendition of the Live job.
 * @apiSuccess (Response Fields) {String} outputs.id The unique id for the rendition.
 * @apiSuccess (Response Fields) {String} outputs.playback_url Media HLS manifest for the specified rendition (non-SSAI).
 * @apiSuccess (Response Fields) {String} outputs.playback_url_dvr Media HLS manifest with a configurable DVR window. Default 100 seconds (non-SSAI).
 * @apiSuccess (Response Fields) {String} outputs.playback_url_vod Media HLS manifest of the Live stream for the last 24 hours. (non-SSAI).
 * @apiSuccess (Response Fields) {Boolean} live_stream Indicates that the job is a live streaming job.
 * @apiSuccess (Response Fields) {Boolean} [ad_insertion=false] Setting this parameter to true will enable server side ad insertion (SSAI) on the job. Note* Your ad server must be configured by your account team. Current support includes, DFP, Freewheel, or any VAST 2.0/3.0 ad tags. Default is false. Currently no outputs can be specified with a SSAI enabled stream.
 * @apiSuccess (Response Fields) {String="Us-west-2", "ap-southeast-2", "ap-northeast-1"} region You can specify an Amazon AWS region to use for encoding a job and we will process the job on servers in the region specified. It’s recommended to use the region closest to your encoder.
 * @apiSuccess (Response Fields) {Number{0-1800}} [reconnect_time=30] The time, in seconds, to wait for a stream to reconnect to the encoder. Default is set to 30 seconds.
 * @apiSuccess (Response Fields) {Number{0-93600}} [event_length] The minimum time, in seconds, to keep a live stream available. At any point within the specified event_length you may reconnect to your stream. The event_length setting goes into effect as soon as streaming begins.
 * @apiSuccess (Response Fields) {Number{0-7200}} [live_sliding_window_duration=100] The time, in seconds, to keep in the live DVR manifest. If the stream duration is longer than the window duration, segment references will be removed first in first out. Default is 100 seconds.
 * @apiSuccess (Response Fields) {Number{1-5}} [max_hls_protocol_version=3] Sets the maximum HLS protocol version to use. Special features will be used as available. Default is 3.
 * @apiSuccess (Response Fields) {mixed[]} [notifications] Array of notification destination objects or strings.  A notification will be sent to the destination when selected event occurs. You can use a simple string with a url: "http://log:pass@httpbin.org/post", or you can use an object.
 * @apiSuccess (Response Fields) {String} notifications.url Destination for the notification.
 * @apiSuccess (Response Fields) {String} [notifications.credentials] Credentials for the destination, if required.
 * @apiSuccess (Response Fields) {String="first_segment_uploaded", "output_finished", "state_changed"} [notifications.event="state_changed"] Event type to send notifications for.  It’s recommended to set events on the job and not individual rendition outputs since renditions will finish simultaneously.
 * @apiSuccess (Response Fields) {Object[]} [add_cdns] Array of additional CDN providers to be used for manifest generation. For each CDN provided, the manifest will be prepended accordingly
 * @apiSuccess (Response Fields) {String} add_cdns.label A lable to identify the CDN.
 * @apiSuccess (Response Fields) {String} add_cdns.prepend TODO
 * @apiSuccess (Response Fields) {String="HTTP", "HTTPS"} add_cdns.protocol Protocol to use in sending the stream to the CDN.
 *
 * @apiSuccessExample {json} Success Response Standard Live Stream:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "edb92295e0f744f088f473ac047538c3",
 *      "outputs": [
 *        {
 *          "id": "0-edb92295e0f744f088f473ac047538c3",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_0/chunklist_vod.m3u8",
 *          "label": "hls720p"
 *        },
 *        {
 *          "id": "1-edb92295e0f744f088f473ac047538c3",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_dvr.m3u8",
 *          "playback_url_vod": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/profile_1/chunklist_vod.m3u8",
 *          "label": "hls480p"
 *        },
 *        {
 *          "id": "2-edb92295e0f744f088f473ac047538c3",
 *          "playlist_type": "defaultS3",
 *          "type": "playlist",
 *          "filename": "playlist.m3u8",
 *          "dvr_filename": "playlist_dvr.m3u8",
 *          "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
 *          "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8"
 *        }
 *      ],
 *      "stream_url": "rtmp://ep4-usw2.bcovlive.io:1935/edb92295e0f744f088f473ac047538c3",
 *      "stream_name": "alive",
 *      "encryption": {},
 *      "playback_url": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist.m3u8",
 *      "playback_url_dvr": "http://playback.bcovlive.io/edb92295e0f744f088f473ac047538c3/us-west-2/playlist_dvr.m3u8"
 *    } *
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
 *    [
 *        {
 *            "error_code": "NOT_FOUND",
 *            "message": "Requested resource does not exist",
 *            "request_id": "df35af83-ac9b-44b0-b172-a80a11bd0bfa"
 *        }
 *    ]
 *
 *
 */
