// create profile

/**
 * @api {post} /accounts/:account_id/profiles Create Ingest Profile
 * @apiName Create Ingest Profile
 * @apiGroup Profile
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a custom ingest profile for the account. Note that you can also do this through [Brightcove Studio](https://studio.brightcove.com/products/videocloud/admin/ingestprofiles)
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {String} name profile name (must be unique within the account)
 * @apiParam (Request Body Fields) {Number} account_id Video Cloud account ID.
 * @apiParam (Request Body Fields) {String} [description] description of the profile
 * @apiParam (Request Body Fields) {Object[]} renditions array of rendition maps
 * @apiParam (Request Body Fields) {String="preserve","stretch","crop","pad"} [renditions.aspect_mode="preserve"] how to handle mismatch between source and rendition aspect ratio
 * @apiParam (Request Body Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiParam (Request Body Fields) {Number=1,2} [renditions.audio_channels] number of audio channels
 * @apiParam (Request Body Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiParam (Request Body Fields) {Boolean} [renditions.constant_bitrate=false] whether to use constant bitrate for encoding
 * @apiParam (Request Body Fields) {Number} [renditions.crf] 1-51, not used by default. Overrides `quality`
 * @apiParam (Request Body Fields) {Number} [renditions.decoder_bitrate_cap] In kbps, the max bitrate fed to the decoder
 * @apiParam (Request Body Fields) {String} [renditions.encryption_method] encryption_method to use, e.g. `aes-128`
 * @apiParam (Request Body Fields) {Number} [renditions.encryption_key_rotation_period=10] use a different key for each set of segments, rotating to a new key after this many segments
 * @apiParam (Request Body Fields) {Number} [renditions.fixed_keyframe_interval] Forces a keyframe every X frames, but still allows additional keyframes
 * @apiParam (Request Body Fields) {Number} [renditions.forced_keyframe_rate] Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiParam (Request Body Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiParam (Request Body Fields) {Number} [renditions.frame_rate="(same as source)"] frame rate in frames per second
 * @apiParam (Request Body Fields) {Number} [renditions.h264_bframes=0] number of bframes for h.264
 * @apiParam (Request Body Fields) {Number} [renditions.h264_level="(calculated)"] h.264 profile level
 * @apiParam (Request Body Fields) {String="baseline","main","high"} [renditions.h264_profile="baseline"] h.264 profile
 * @apiParam (Request Body Fields) {Number} [renditions.h264_reference_frames=3] number of h.264 reference frames to use
 * @apiParam (Request Body Fields) {Boolean} [renditions.hls_optimized_ts] Time segments optimized for HLS
 * @apiParam (Request Body Fields) {Number} [renditions.keyframe_interval] Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiParam (Request Body Fields) {Number} [renditions.keyframe_rate] Maximum number of keyframes per second
 * @apiParam (Request Body Fields) {String="poster","thumbnail"} [renditions.label] Image type for image renditions; __required__ for image renditions
 * @apiParam (Request Body Fields) {Boolean} [renditions.live_stream] Whether this will be for live streaming video
 * @apiParam (Request Body Fields) {Number} [renditions.live_sliding_window_duration] Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiParam (Request Body Fields) {Number} [renditions.max_video_bitrate] Maximum video bitrate (h.264 only)
 * @apiParam (Request Body Fields) {Number} [renditions.max_frame_rate] Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiParam (Request Body Fields) {String="video","audio","image"} [renditions.media_type="video"] the media type of the rendition
 * @apiParam (Request Body Fields) {Boolean} [renditions.one_pass=false] force one-pass encoding
 * @apiParam (Request Body Fields) {String="zip","tar"} [renditions.package_format] Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiParam (Request Body Fields) {String} [renditions.reference_id] A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiParam (Request Body Fields) {Boolean} [renditions.skip_video] Set to `true` to skip video encoding for audio-only renditions
 * @apiParam (Request Body Fields) {Number=1-5} [renditions.speed=3] a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiParam (Request Body Fields) {String} [renditions.streaming_delivery_format] Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiParam (Request Body Fields) {String} [renditions.streaming_delivery_profile="live"] Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiParam (Request Body Fields) {String} [renditions.type] transmuxing type for HLS; typical value is `segmented`
 * @apiParam (Request Body Fields) {Boolean} [renditions.upscale] whether to upsize the frames if the source frame size is smaller than the target
 * @apiParam (Request Body Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiParam (Request Body Fields) {String} renditions.video_codec target video codec
 * @apiParam (Request Body Fields) {Number} renditions.height target frame height in pixels
 * @apiParam (Request Body Fields) {Number} renditions.width target frame width in pixels
 * @apiParam (Request Body Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiParam (Request Body Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiParam (Request Body Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiParam (Request Body Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiParam (Request Body Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiParam (Request Body Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 *
 * @apiParamExample {json} Create Video Example:
 *    {
 *      "account_id": "57838016001",
 *      "name": "Protected",
 *      "description": "This will produce 1 HLS rendition and 2 image renditions.",
 *      "renditions": [
 *        {
 *          "media_type": "video",
 *          "reference_id": "ts1",
 *          "format": "ts",
 *          "type": "segmented",
 *          "audio_codec": "aac",
 *          "audio_bitrate": 96,
 *          "video_codec": "h264",
 *          "keyframe_rate": 0.5,
 *          "max_frame_rate": 30,
 *          "width": 1280,
 *          "height": 720,
 *          "h264_profile": "main"
 *        },
 *        {
 *          "media_type": "image",
 *          "format": "png",
 *          "label": "poster",
 *          "width": 960,
 *          "height": 540
 *        },
 *        {
 *          "media_type": "image",
 *          "format": "png",
 *          "label": "thumbnail",
 *          "width": 160,
 *          "height": 90
 *        }
 *      ],
 *      "digital_master": {
 *            "rendition": "passthrough",
 *            "distribute": true
 *        },
 *      "packages": []
 *    }
 *
 * @apiSuccess (Response Fields) {String} id profile id
 * @apiSuccess (Response Fields) {String} name profile name
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account ID.
 * @apiSuccess (Response Fields) {String} description description of the profile
 * @apiSuccess (Response Fields) {Object[]} renditions array of rendition maps
 * @apiSuccess (Response Fields) {String} renditions.aspect_mode how to handle mismatch between source and rendition aspect ratio
 * @apiSuccess (Response Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiSuccess (Response Fields) {Number} renditions.audio_channels number of audio channels
 * @apiSuccess (Response Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiSuccess (Response Fields) {Boolean} renditions.constant_bitrate whether to use constant bitrate for encoding
 * @apiSuccess (Response Fields) {Number} renditions.crf 1-51, not used by default. Overrides `quality`
 * @apiSuccess (Response Fields) {Number} renditions.decoder_bitrate_cap In kbps, the max bitrate fed to the decoder
 * @apiSuccess (Response Fields) {String} renditions.encryption_method encryption_method to use, e.g. `aes-128`
 * @apiSuccess (Response Fields) {Number} renditions.encryption_key_rotation_period use a different key for each set of segments, rotating to a new key after this many segments
 * @apiSuccess (Response Fields) {Number} renditions.fixed_keyframe_interval Forces a keyframe every X frames, but still allows additional keyframes
 * @apiSuccess (Response Fields) {Number} renditions.forced_keyframe_rate Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiSuccess (Response Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiSuccess (Response Fields) {Number} renditions.frame_rate frame rate in frames per second
 * @apiSuccess (Response Fields) {Number} renditions.h264_bframes number of bframes for h.264
 * @apiSuccess (Response Fields) {Number} renditions.h264_level h.264 profile level
 * @apiSuccess (Response Fields) {String} renditions.h264_profile h.264 profile
 * @apiSuccess (Response Fields) {Number} renditions.h264_reference_frames number of h.264 reference frames to use
 * @apiSuccess (Response Fields) {Boolean} renditions.hls_optimized_ts Time segments optimized for HLS
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_interval Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_rate Maximum number of keyframes per second
 * @apiSuccess (Response Fields) {String} renditions.label Image type for image renditions; __required__ for image renditions
 * @apiSuccess (Response Fields) {Boolean} renditions.live_stream Whether this will be for live streaming video
 * @apiSuccess (Response Fields) {Number} renditions.live_sliding_window_duration Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiSuccess (Response Fields) {Number} renditions.max_video_bitrate Maximum video bitrate (h.264 only)
 * @apiSuccess (Response Fields) {Number} renditions.max_frame_rate Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiSuccess (Response Fields) {String} renditions.media_type the media type of the rendition
 * @apiSuccess (Response Fields) {Boolean} renditions.one_pass force one-pass encoding
 * @apiSuccess (Response Fields) {String} renditions.package_format Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiSuccess (Response Fields) {String} renditions.reference_id A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiSuccess (Response Fields) {Boolean} renditions.skip_video Set to `true` to skip video encoding for audio-only renditions
 * @apiSuccess (Response Fields) {Number} renditions.speed a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_format Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_profile Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiSuccess (Response Fields) {String} renditions.type transmuxing type for HLS; typical value is `segmented`
 * @apiSuccess (Response Fields) {Boolean} renditions.upscale whether to upsize the frames if the source frame size is smaller than the target
 * @apiSuccess (Response Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiSuccess (Response Fields) {String} renditions.video_codec target video codec
 * @apiSuccess (Response Fields) {Number} renditions.height target frame height in pixels
 * @apiSuccess (Response Fields) {Number} renditions.width target frame width in pixels
 * @apiSuccess (Response Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiSuccess (Response Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiSuccess (Response Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiSuccess (Response Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiSuccess (Response Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiSuccess (Response Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "account_id": 57838016001,
 *        "brightcove_standard": false,
 *        "date_created": 1443700501852,
 *        "date_last_modified": 1443700501852,
 *        "description": "This will produce 1 HLS rendition and 2 image renditions.",
 *        "digital_master": {
 *            "distribute": true,
 *            "rendition": "passthrough"
 *        },
 *        "id": "560d1f15e4b05e8c5d7fa5c4",
 *        "keep_renditions": true,
 *        "name": "Protected",
 *        "packages": [],
 *        "renditions": [
 *            {
 *                "audio_bitrate": 96,
 *                "audio_codec": "aac",
 *                "format": "ts",
 *                "h264_profile": "main",
 *                "height": 720,
 *                "id": "560d1f15e4b05e8c5d7fa5c1",
 *                "keyframe_rate": 0.5,
 *                "max_frame_rate": 30.0,
 *                "media_type": "video",
 *                "reference_id": "ts1",
 *                "type": "segmented",
 *                "video_codec": "h264",
 *                "width": 1280
 *            },
 *            {
 *                "format": "png",
 *                "height": 540,
 *                "id": "560d1f15e4b05e8c5d7fa5c2",
 *                "label": "poster",
 *                "media_type": "image",
 *                "width": 960
 *            },
 *            {
 *                "format": "png",
 *                "height": 90,
 *                "id": "560d1f15e4b05e8c5d7fa5c3",
 *                "label": "thumbnail",
 *                "media_type": "image",
 *                "width": 160
 *            }
 *        ],
 *        "version": 1443700501853
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *            "error_code": "REFERENCE_ID_IN_USE",
 *            "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 *
 */

// get profiles

/**
 * @api {get} /accounts/:account_id/profiles Get All Ingest Profiles
 * @apiName Get All Ingest Profiles
 * @apiGroup Profile
 * @apiVersion 1.0.0
 *
 * @apiDescription Get an array of all the profiles valid for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 *
 * @apiParamExample {Url} Get Profiles Example:
 *    https://ingestion.api.brightcove.com/v1/accounts/57838016001/profiles
 *
 * @apiSuccess (Response Fields) {String} id profile id
 * @apiSuccess (Response Fields) {String} name profile name
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account ID.
 * @apiSuccess (Response Fields) {String} description description of the profile
 * @apiSuccess (Response Fields) {Object[]} renditions array of rendition maps
 * @apiSuccess (Response Fields) {String} renditions.aspect_mode how to handle mismatch between source and rendition aspect ratio
 * @apiSuccess (Response Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiSuccess (Response Fields) {Number} renditions.audio_channels number of audio channels
 * @apiSuccess (Response Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiSuccess (Response Fields) {Boolean} renditions.constant_bitrate whether to use constant bitrate for encoding
 * @apiSuccess (Response Fields) {Number} renditions.crf 1-51, not used by default. Overrides `quality`
 * @apiSuccess (Response Fields) {Number} renditions.decoder_bitrate_cap In kbps, the max bitrate fed to the decoder
 * @apiSuccess (Response Fields) {String} renditions.encryption_method encryption_method to use, e.g. `aes-128`
 * @apiSuccess (Response Fields) {Number} renditions.encryption_key_rotation_period use a different key for each set of segments, rotating to a new key after this many segments
 * @apiSuccess (Response Fields) {Number} renditions.fixed_keyframe_interval Forces a keyframe every X frames, but still allows additional keyframes
 * @apiSuccess (Response Fields) {Number} renditions.forced_keyframe_rate Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiSuccess (Response Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiSuccess (Response Fields) {Number} renditions.frame_rate frame rate in frames per second
 * @apiSuccess (Response Fields) {Number} renditions.h264_bframes number of bframes for h.264
 * @apiSuccess (Response Fields) {Number} renditions.h264_level h.264 profile level
 * @apiSuccess (Response Fields) {String} renditions.h264_profile h.264 profile
 * @apiSuccess (Response Fields) {Number} renditions.h264_reference_frames number of h.264 reference frames to use
 * @apiSuccess (Response Fields) {Boolean} renditions.hls_optimized_ts Time segments optimized for HLS
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_interval Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_rate Maximum number of keyframes per second
 * @apiSuccess (Response Fields) {String} renditions.label Image type for image renditions; __required__ for image renditions
 * @apiSuccess (Response Fields) {Boolean} renditions.live_stream Whether this will be for live streaming video
 * @apiSuccess (Response Fields) {Number} renditions.live_sliding_window_duration Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiSuccess (Response Fields) {Number} renditions.max_video_bitrate Maximum video bitrate (h.264 only)
 * @apiSuccess (Response Fields) {Number} renditions.max_frame_rate Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiSuccess (Response Fields) {String} renditions.media_type the media type of the rendition
 * @apiSuccess (Response Fields) {Boolean} renditions.one_pass force one-pass encoding
 * @apiSuccess (Response Fields) {String} renditions.package_format Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiSuccess (Response Fields) {String} renditions.reference_id A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiSuccess (Response Fields) {Boolean} renditions.skip_video Set to `true` to skip video encoding for audio-only renditions
 * @apiSuccess (Response Fields) {Number} renditions.speed a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_format Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_profile Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiSuccess (Response Fields) {String} renditions.type transmuxing type for HLS; typical value is `segmented`
 * @apiSuccess (Response Fields) {Boolean} renditions.upscale whether to upsize the frames if the source frame size is smaller than the target
 * @apiSuccess (Response Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiSuccess (Response Fields) {String} renditions.video_codec target video codec
 * @apiSuccess (Response Fields) {Number} renditions.height target frame height in pixels
 * @apiSuccess (Response Fields) {Number} renditions.width target frame width in pixels
 * @apiSuccess (Response Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiSuccess (Response Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiSuccess (Response Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiSuccess (Response Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiSuccess (Response Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiSuccess (Response Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "id": "510fd4e6e4b0c9164cbe9b60",
 *            "version": 1423840467728,
 *            "name": "single-rendition",
 *            "account_id": -1,
 *            "brightcove_standard": false,
 *            "keep_renditions": true,
 *            "date_created": 1359992038155,
 *            "date_last_modified": 1423840467726,
 *            "renditions": [
 *              {
 *                "media_type": "video",
 *                "id": "54de14d3e4b0f66e5c937eb3",
 *                "format": "mp4",
 *                "audio_codec": "aac",
 *                "audio_bitrate": 128,
 *                "video_codec": "h264",
 *                "speed": 3,
 *                "video_bitrate": 600,
 *                "keyframe_rate": 0.5,
 *                "max_frame_rate": 30,
 *                "width": 480,
 *                "height": 360,
 *                "h264_profile": "baseline"
 *              },
 *              {
 *                "media_type": "image",
 *                "id": "54d02903e4b0c948249cb2a7",
 *                "format": "png",
 *                "label": "poster",
 *                "width": 480,
 *                "height": 360
 *              },
 *              {
 *                "media_type": "image",
 *                "id": "54d02903e4b0c948249cb2a8",
 *                "format": "png",
 *                "label": "thumbnail",
 *                "width": 160,
 *                "height": 90
 *              }
 *            ],
 *            "packages": []
 *          }
 *    ]
 *
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 401 NOT_AUTHORIZED
 *     [
 *         {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *         }
 *     ]
 *
 *
 */

// get profile by id

/**
 * @api {get} /accounts/:account_id/profiles/:profile_id Get Ingest Profile by ID
 * @apiName Get_Ingest_Profile_by_ID
 * @apiGroup Profile
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a single profile map by its ID
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} profile_id Video Cloud account ID.
 *
 *
 * @apiParamExample {Url} Get Profiles Example:
 *    https://ingestion.api.brightcove.com/v1/accounts/57838016001/profiles/527d210ae4b0024db7acb05c
 *
 * @apiSuccess (Response Fields) {String} id profile id
 * @apiSuccess (Response Fields) {String} name profile name
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account ID.
 * @apiSuccess (Response Fields) {String} description description of the profile
 * @apiSuccess (Response Fields) {Object[]} renditions array of rendition maps
 * @apiSuccess (Response Fields) {String} renditions.aspect_mode how to handle mismatch between source and rendition aspect ratio
 * @apiSuccess (Response Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiSuccess (Response Fields) {Number} renditions.audio_channels number of audio channels
 * @apiSuccess (Response Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiSuccess (Response Fields) {Boolean} renditions.constant_bitrate whether to use constant bitrate for encoding
 * @apiSuccess (Response Fields) {Number} renditions.crf 1-51, not used by default. Overrides `quality`
 * @apiSuccess (Response Fields) {Number} renditions.decoder_bitrate_cap In kbps, the max bitrate fed to the decoder
 * @apiSuccess (Response Fields) {String} renditions.encryption_method encryption_method to use, e.g. `aes-128`
 * @apiSuccess (Response Fields) {Number} renditions.encryption_key_rotation_period use a different key for each set of segments, rotating to a new key after this many segments
 * @apiSuccess (Response Fields) {Number} renditions.fixed_keyframe_interval Forces a keyframe every X frames, but still allows additional keyframes
 * @apiSuccess (Response Fields) {Number} renditions.forced_keyframe_rate Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiSuccess (Response Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiSuccess (Response Fields) {Number} renditions.frame_rate frame rate in frames per second
 * @apiSuccess (Response Fields) {Number} renditions.h264_bframes number of bframes for h.264
 * @apiSuccess (Response Fields) {Number} renditions.h264_level h.264 profile level
 * @apiSuccess (Response Fields) {String} renditions.h264_profile h.264 profile
 * @apiSuccess (Response Fields) {Number} renditions.h264_reference_frames number of h.264 reference frames to use
 * @apiSuccess (Response Fields) {Boolean} renditions.hls_optimized_ts Time segments optimized for HLS
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_interval Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_rate Maximum number of keyframes per second
 * @apiSuccess (Response Fields) {String} renditions.label Image type for image renditions; __required__ for image renditions
 * @apiSuccess (Response Fields) {Boolean} renditions.live_stream Whether this will be for live streaming video
 * @apiSuccess (Response Fields) {Number} renditions.live_sliding_window_duration Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiSuccess (Response Fields) {Number} renditions.max_video_bitrate Maximum video bitrate (h.264 only)
 * @apiSuccess (Response Fields) {Number} renditions.max_frame_rate Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiSuccess (Response Fields) {String} renditions.media_type the media type of the rendition
 * @apiSuccess (Response Fields) {Boolean} renditions.one_pass force one-pass encoding
 * @apiSuccess (Response Fields) {String} renditions.package_format Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiSuccess (Response Fields) {String} renditions.reference_id A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiSuccess (Response Fields) {Boolean} renditions.skip_video Set to `true` to skip video encoding for audio-only renditions
 * @apiSuccess (Response Fields) {Number} renditions.speed a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_format Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_profile Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiSuccess (Response Fields) {String} renditions.type transmuxing type for HLS; typical value is `segmented`
 * @apiSuccess (Response Fields) {Boolean} renditions.upscale whether to upsize the frames if the source frame size is smaller than the target
 * @apiSuccess (Response Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiSuccess (Response Fields) {String} renditions.video_codec target video codec
 * @apiSuccess (Response Fields) {Number} renditions.height target frame height in pixels
 * @apiSuccess (Response Fields) {Number} renditions.width target frame width in pixels
 * @apiSuccess (Response Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiSuccess (Response Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiSuccess (Response Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiSuccess (Response Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiSuccess (Response Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiSuccess (Response Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "510fd4e6e4b0c9164cbe9b60",
 *      "version": 1423840467728,
 *      "name": "single-rendition",
 *      "account_id": -1,
 *      "brightcove_standard": false,
 *      "keep_renditions": true,
 *      "date_created": 1359992038155,
 *      "date_last_modified": 1423840467726,
 *      "renditions": [
 *        {
 *          "media_type": "video",
 *          "id": "54de14d3e4b0f66e5c937eb3",
 *          "format": "mp4",
 *          "audio_codec": "aac",
 *          "audio_bitrate": 128,
 *          "video_codec": "h264",
 *          "speed": 3,
 *          "video_bitrate": 600,
 *          "keyframe_rate": 0.5,
 *          "max_frame_rate": 30,
 *          "width": 480,
 *          "height": 360,
 *          "h264_profile": "baseline"
 *        },
 *        {
 *          "media_type": "image",
 *          "id": "54d02903e4b0c948249cb2a7",
 *          "format": "png",
 *          "label": "poster",
 *          "width": 480,
 *          "height": 360
 *        },
 *        {
 *          "media_type": "image",
 *          "id": "54d02903e4b0c948249cb2a8",
 *          "format": "png",
 *          "label": "thumbnail",
 *          "width": 160,
 *          "height": 90
 *        }
 *      ],
 *      "packages": []
 *    }
 *
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 401 NOT_AUTHORIZED
 *     [
 *         {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *         }
 *     ]
 *
 *
 */

// update profile

/**
 * @api {put} /accounts/:account_id/profiles Update Ingest Profile
 * @apiName Update Ingest Profile
 * @apiGroup Profile
 * @apiVersion 1.0.0
 *
 * @apiDescription Update an existing ingest profile - the existing profile will be deactivated, and replaced by the one specified in the request body
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} profile_id the profile ID.
 *
 * @apiParam (Request Body Fields) {String} name profile name (must be unique within the account)
 * @apiParam (Request Body Fields) {Number} account_id Video Cloud account ID.
 * @apiParam (Request Body Fields) {String} [description] description of the profile
 * @apiParam (Request Body Fields) {Object[]} renditions array of rendition maps
 * @apiParam (Request Body Fields) {String="preserve","stretch","crop","pad"} [renditions.aspect_mode="preserve"] how to handle mismatch between source and rendition aspect ratio
 * @apiParam (Request Body Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiParam (Request Body Fields) {Number=1,2} [renditions.audio_channels] number of audio channels
 * @apiParam (Request Body Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiParam (Request Body Fields) {Boolean} [renditions.constant_bitrate=false] whether to use constant bitrate for encoding
 * @apiParam (Request Body Fields) {Number} [renditions.crf] 1-51, not used by default. Overrides `quality`
 * @apiParam (Request Body Fields) {Number} [renditions.decoder_bitrate_cap] In kbps, the max bitrate fed to the decoder
 * @apiParam (Request Body Fields) {String} [renditions.encryption_method] encryption_method to use, e.g. `aes-128`
 * @apiParam (Request Body Fields) {Number} [renditions.encryption_key_rotation_period=10] use a different key for each set of segments, rotating to a new key after this many segments
 * @apiParam (Request Body Fields) {Number} [renditions.fixed_keyframe_interval] Forces a keyframe every X frames, but still allows additional keyframes
 * @apiParam (Request Body Fields) {Number} [renditions.forced_keyframe_rate] Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiParam (Request Body Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiParam (Request Body Fields) {Number} [renditions.frame_rate="(same as source)"] frame rate in frames per second
 * @apiParam (Request Body Fields) {Number} [renditions.h264_bframes=0] number of bframes for h.264
 * @apiParam (Request Body Fields) {Number} [renditions.h264_level="(calculated)"] h.264 profile level
 * @apiParam (Request Body Fields) {String="baseline","main","high"} [renditions.h264_profile="baseline"] h.264 profile
 * @apiParam (Request Body Fields) {Number} [renditions.h264_reference_frames=3] number of h.264 reference frames to use
 * @apiParam (Request Body Fields) {Boolean} [renditions.hls_optimized_ts] Time segments optimized for HLS
 * @apiParam (Request Body Fields) {Number} [renditions.keyframe_interval] Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiParam (Request Body Fields) {Number} [renditions.keyframe_rate] Maximum number of keyframes per second
 * @apiParam (Request Body Fields) {String="poster","thumbnail"} [renditions.label] Image type for image renditions; __required__ for image renditions
 * @apiParam (Request Body Fields) {Boolean} [renditions.live_stream] Whether this will be for live streaming video
 * @apiParam (Request Body Fields) {Number} [renditions.live_sliding_window_duration] Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiParam (Request Body Fields) {Number} [renditions.max_video_bitrate] Maximum video bitrate (h.264 only)
 * @apiParam (Request Body Fields) {Number} [renditions.max_frame_rate] Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiParam (Request Body Fields) {String="video","audio","image"} [renditions.media_type="video"] the media type of the rendition
 * @apiParam (Request Body Fields) {Boolean} [renditions.one_pass=false] force one-pass encoding
 * @apiParam (Request Body Fields) {String="zip","tar"} [renditions.package_format] Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiParam (Request Body Fields) {String} [renditions.reference_id] A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiParam (Request Body Fields) {Boolean} [renditions.skip_video] Set to `true` to skip video encoding for audio-only renditions
 * @apiParam (Request Body Fields) {Number=1-5} [renditions.speed=3] a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiParam (Request Body Fields) {String} [renditions.streaming_delivery_format] Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiParam (Request Body Fields) {String} [renditions.streaming_delivery_profile="live"] Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiParam (Request Body Fields) {String} [renditions.type] transmuxing type for HLS; typical value is `segmented`
 * @apiParam (Request Body Fields) {Boolean} [renditions.upscale] whether to upsize the frames if the source frame size is smaller than the target
 * @apiParam (Request Body Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiParam (Request Body Fields) {String} renditions.video_codec target video codec
 * @apiParam (Request Body Fields) {Number} renditions.height target frame height in pixels
 * @apiParam (Request Body Fields) {Number} renditions.width target frame width in pixels
 * @apiParam (Request Body Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiParam (Request Body Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiParam (Request Body Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiParam (Request Body Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiParam (Request Body Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiParam (Request Body Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiParam (Request Body Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 *
 * @apiParamExample {json} Create Video Example:
 *    {
 *      "account_id": "57838016001",
 *      "name": "Protected",
 *      "description": "This will produce 1 HLS rendition and 2 image renditions.",
 *      "renditions": [
 *        {
 *          "media_type": "video",
 *          "reference_id": "ts1",
 *          "format": "ts",
 *          "type": "segmented",
 *          "audio_codec": "aac",
 *          "audio_bitrate": 96,
 *          "video_codec": "h264",
 *          "keyframe_rate": 0.5,
 *          "max_frame_rate": 30,
 *          "width": 1280,
 *          "height": 720,
 *          "h264_profile": "main"
 *        },
 *        {
 *          "media_type": "image",
 *          "format": "png",
 *          "label": "poster",
 *          "width": 960,
 *          "height": 540
 *        },
 *        {
 *          "media_type": "image",
 *          "format": "png",
 *          "label": "thumbnail",
 *          "width": 160,
 *          "height": 90
 *        }
 *      ],
 *      "digital_master": {
 *            "rendition": "passthrough",
 *            "distribute": true
 *        },
 *      "packages": []
 *    }
 *
 * @apiSuccess (Response Fields) {String} id profile id
 * @apiSuccess (Response Fields) {String} name profile name
 * @apiSuccess (Response Fields) {Number} date_created when the profile was created (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} date_last_modified when the profile was last modified (epoch time in milliseconds)
 * @apiSuccess (Response Fields) {Number} account_id Video Cloud account ID.
 * @apiSuccess (Response Fields) {String} description description of the profile
 * @apiSuccess (Response Fields) {Object[]} renditions array of rendition maps
 * @apiSuccess (Response Fields) {String} renditions.aspect_mode how to handle mismatch between source and rendition aspect ratio
 * @apiSuccess (Response Fields) {Number} renditions.audio_bitrate audio bitrate in kbps
 * @apiSuccess (Response Fields) {Number} renditions.audio_channels number of audio channels
 * @apiSuccess (Response Fields) {String} renditions.audio_codec audio codec, e.g. `aac`
 * @apiSuccess (Response Fields) {Boolean} renditions.constant_bitrate whether to use constant bitrate for encoding
 * @apiSuccess (Response Fields) {Number} renditions.crf 1-51, not used by default. Overrides `quality`
 * @apiSuccess (Response Fields) {Number} renditions.decoder_bitrate_cap In kbps, the max bitrate fed to the decoder
 * @apiSuccess (Response Fields) {String} renditions.encryption_method encryption_method to use, e.g. `aes-128`
 * @apiSuccess (Response Fields) {Number} renditions.encryption_key_rotation_period use a different key for each set of segments, rotating to a new key after this many segments
 * @apiSuccess (Response Fields) {Number} renditions.fixed_keyframe_interval Forces a keyframe every X frames, but still allows additional keyframes
 * @apiSuccess (Response Fields) {Number} renditions.forced_keyframe_rate Force the keyframe rate, h264 only, ignored if forced_keyframe_interval is used
 * @apiSuccess (Response Fields) {String} renditions.format video format, e.g. `mp4`, `ts` (for HLS), flv, `m4f` for video, `png` or `jpg` for images
 * @apiSuccess (Response Fields) {Number} renditions.frame_rate frame rate in frames per second
 * @apiSuccess (Response Fields) {Number} renditions.h264_bframes number of bframes for h.264
 * @apiSuccess (Response Fields) {Number} renditions.h264_level h.264 profile level
 * @apiSuccess (Response Fields) {String} renditions.h264_profile h.264 profile
 * @apiSuccess (Response Fields) {Number} renditions.h264_reference_frames number of h.264 reference frames to use
 * @apiSuccess (Response Fields) {Boolean} renditions.hls_optimized_ts Time segments optimized for HLS
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_interval Maximum number of frames between keyframes (default is 250, and overrides keyframe_rate)
 * @apiSuccess (Response Fields) {Number} renditions.keyframe_rate Maximum number of keyframes per second
 * @apiSuccess (Response Fields) {String} renditions.label Image type for image renditions; __required__ for image renditions
 * @apiSuccess (Response Fields) {Boolean} renditions.live_stream Whether this will be for live streaming video
 * @apiSuccess (Response Fields) {Number} renditions.live_sliding_window_duration Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiSuccess (Response Fields) {Number} renditions.max_video_bitrate Maximum video bitrate (h.264 only)
 * @apiSuccess (Response Fields) {Number} renditions.max_frame_rate Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiSuccess (Response Fields) {String} renditions.media_type the media type of the rendition
 * @apiSuccess (Response Fields) {Boolean} renditions.one_pass force one-pass encoding
 * @apiSuccess (Response Fields) {String} renditions.package_format Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiSuccess (Response Fields) {String} renditions.reference_id A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiSuccess (Response Fields) {Boolean} renditions.skip_video Set to `true` to skip video encoding for audio-only renditions
 * @apiSuccess (Response Fields) {Number} renditions.speed a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_format Sets the format/protocol for an output that will be delivered using a specific streaming configuration, including necessary manifests, directory
 * @apiSuccess (Response Fields) {String} renditions.streaming_delivery_profile Sets the profile of the streaming delivery format, ensuring options are selected for compatibility with the profile
 * @apiSuccess (Response Fields) {String} renditions.type transmuxing type for HLS; typical value is `segmented`
 * @apiSuccess (Response Fields) {Boolean} renditions.upscale whether to upsize the frames if the source frame size is smaller than the target
 * @apiSuccess (Response Fields) {Number} renditions.video_bitrate target video bitrate in kbps
 * @apiSuccess (Response Fields) {String} renditions.video_codec target video codec
 * @apiSuccess (Response Fields) {Number} renditions.height target frame height in pixels
 * @apiSuccess (Response Fields) {Number} renditions.width target frame width in pixels
 * @apiSuccess (Response Fields) {Object[]} renditions.watermarks array of watermark maps
 * @apiSuccess (Response Fields) {String} renditions.watermarks.url URL for the watermark image
 * @apiSuccess (Response Fields) {String} renditions.watermarks.width width in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.height height in pixels or percent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.x distance from left edge to center of image as pixels or precent of frame width; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {String} renditions.watermarks.y distance from top edge to center if image as pixels or percent of frame height; e.g. `20` or `10%`
 * @apiSuccess (Response Fields) {Object[]} packages array of package maps for DRM (see [Content Security](http://docs.brightcove.com/en/video-cloud/ingest-profiles-api/guides/drm.html))
 * @apiSuccess (Response Fields) {String[]} packages.drm for MPEG-DASH, array of DRM types to apply, e.g. `["widevine", "playready"]`
 * @apiSuccess (Response Fields) {String} packages.package_type for MPEG-DASH, the package type is `dash`; for other formats, the package type is the DRM type, e.g. `widevine`
 * @apiSuccess (Response Fields) {Mixed} packages.renditions for MPEG-DASH, the renditions will be set to the `reference_id` for a single rendition; for other formats, `renditions` is set equal to an array of rendition `reference_id`'s
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "account_id": 57838016001,
 *        "brightcove_standard": false,
 *        "date_created": 1443700501852,
 *        "date_last_modified": 1443700501852,
 *        "description": "This will produce 1 HLS rendition and 2 image renditions.",
 *        "digital_master": {
 *            "distribute": true,
 *            "rendition": "passthrough"
 *        },
 *        "id": "560d1f15e4b05e8c5d7fa5c4",
 *        "keep_renditions": true,
 *        "name": "Protected",
 *        "packages": [],
 *        "renditions": [
 *            {
 *                "audio_bitrate": 96,
 *                "audio_codec": "aac",
 *                "format": "ts",
 *                "h264_profile": "main",
 *                "height": 720,
 *                "id": "560d1f15e4b05e8c5d7fa5c1",
 *                "keyframe_rate": 0.5,
 *                "max_frame_rate": 30.0,
 *                "media_type": "video",
 *                "reference_id": "ts1",
 *                "type": "segmented",
 *                "video_codec": "h264",
 *                "width": 1280
 *            },
 *            {
 *                "format": "png",
 *                "height": 540,
 *                "id": "560d1f15e4b05e8c5d7fa5c2",
 *                "label": "poster",
 *                "media_type": "image",
 *                "width": 960
 *            },
 *            {
 *                "format": "png",
 *                "height": 90,
 *                "id": "560d1f15e4b05e8c5d7fa5c3",
 *                "label": "thumbnail",
 *                "media_type": "image",
 *                "width": 160
 *            }
 *        ],
 *        "version": 1443700501853
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *            "error_code": "REFERENCE_ID_IN_USE",
 *            "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 *
 */

// delete profile

/**
 * @api {delete} /accounts/:account_id/profiles/:profile_id Delete Ingest Profile
 * @apiName Delete Ingest Profile
 * @apiGroup Profile
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete an ingest profile
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} profile_id Video Cloud account ID.
 *
 *
 * @apiParamExample {Url} Get Profiles Example:
 *    https://ingestion.api.brightcove.com/v1/accounts/57838016001/profiles/527d210ae4b0024db7acb05c
 *
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 NO CONTENT
 *    {
 *      "id": "510fd4e6e4b0c9164cbe9b60",
 *      "version": 1423840467728,
 *      "name": "single-rendition",
 *      "account_id": -1,
 *      "brightcove_standard": false,
 *      "keep_renditions": true,
 *      "date_created": 1359992038155,
 *      "date_last_modified": 1423840467726,
 *      "renditions": [
 *        {
 *          "media_type": "video",
 *          "id": "54de14d3e4b0f66e5c937eb3",
 *          "format": "mp4",
 *          "audio_codec": "aac",
 *          "audio_bitrate": 128,
 *          "video_codec": "h264",
 *          "speed": 3,
 *          "video_bitrate": 600,
 *          "keyframe_rate": 0.5,
 *          "max_frame_rate": 30,
 *          "width": 480,
 *          "height": 360,
 *          "h264_profile": "baseline"
 *        },
 *        {
 *          "media_type": "image",
 *          "id": "54d02903e4b0c948249cb2a7",
 *          "format": "png",
 *          "label": "poster",
 *          "width": 480,
 *          "height": 360
 *        },
 *        {
 *          "media_type": "image",
 *          "id": "54d02903e4b0c948249cb2a8",
 *          "format": "png",
 *          "label": "thumbnail",
 *          "width": 160,
 *          "height": 90
 *        }
 *      ],
 *      "packages": []
 *    }
 *
 * @apiError (Error 4xx) {json} NOT_AUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 401 NOT_AUTHORIZED
 *     [
 *         {
 *            "error_code": "NOT_AUTHORIZED",
 *            "message": "Credentials are required to access this resource."
 *         }
 *     ]
 *
 *
 */

