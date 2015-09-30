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
 * @apiParam (Request Body Fields) {String} name video title
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
 * @apiParam (Request Body Fields) {String} [renditions.label="poster","thumbnail"] Image type for image renditions; __required__ for image renditions
 * @apiParam (Request Body Fields) {Boolean} [renditions.live_stream] Whether this will be for live streaming video
 * @apiParam (Request Body Fields) {Number} [renditions.live_sliding_window_duration] Duration of stream to keep available for LiveDVR delivery (in seconds)
 * @apiParam (Request Body Fields) {Number} [renditions.max_video_bitrate] Maximum video bitrate (h.264 only)
 * @apiParam (Request Body Fields) {Number} [renditions.max_frame_rate] Limits the frame rate rather than sets it, use as an alternative to frame rate
 * @apiParam (Request Body Fields) {String="video","audio","image"} [renditions.media_type="video"] the media type of the rendition
 * @apiParam (Request Body Fields) {Boolean} [renditions.one_pass=false] force one-pass encoding
 * @apiParam (Request Body Fields) {String="zip","tar"} [renditions.package_format] Creates a zip or tar file containing all the media files of an output, and uploads this single package rather than all the individual files
 * @apiParam (Request Body Fields) {String} [renditions.reference_id] A reference id for the rendition that is unique within the account - required for DRM packaging
 * @apiParam (Request Body Fields) {Boolean} [renditions.skip_video] Set to `true` to skip video encoding for audio-only renditions
 * @apiParam (Request Body Fields) {Number} [renditions.speed=3] a target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features
 *
 *
 * @apiParamExample {json} Create Video Example:
 *     {
 *         "name": "Moose Herd",
 *         "description": "Herd of moose grazing",
 *         "reference_id": "moose_2015_09_17",
 *         "tags": [
 *             "nature",
 *             "animals"
 *         ],
 *         "custom_fields": {
 *             "topic": "wildlife",
 *             "subtopic": "mammals"
 *         }
 *     }
 *
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete
 * @apiSuccess (Response Fields) {DateString} created_at when the video was created
 * @apiSuccess (Response Fields) {Object} custom_fields={} map of fieldname-value pairs
 * @apiSuccess (Response Fields) {Object} cue_points array of cue point maps
 * @apiSuccess (Response Fields) {String} cue_points.name cue point name
 * @apiSuccess (Response Fields) {String} cue_points.type=AD cue point type
 * @apiSuccess (Response Fields) {Number} cue_points.time time of the cue point in seconds; example: 10.527
 * @apiSuccess (Response Fields) {String} cue_points.metadata=null optional metadata string (128 single-byte characters maximum)
 * @apiSuccess (Response Fields) {Boolean} cue_points.force-stop=false whether video is force-stopped at the cue point
 * @apiSuccess (Response Fields) {String} description video short description
 * @apiSuccess (Response Fields) {Number} duration video duration in milliseconds
 * @apiSuccess (Response Fields) {String} digital_master_id asset id of the digital master
 * @apiSuccess (Response Fields) {String} Economics whether video is AD_ENABLED (used by the Smart Player, not by the Brightcove Player)
 * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
 * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
 * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for thie video
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {String} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {String} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {String} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {String} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {String} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
 * @apiSuccess (Response Fields) {DateString} starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {DateString} ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
 * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
 * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
 * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
 * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {String} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 201 Created
 *    {
 *        "account_id": "57838016001",
 *        "complete": false,
 *        "created_at": "2015-09-18T15:59:23.756Z",
 *        "cue_points": [],
 *        "custom_fields": {},
 *        "description": "Herd of moose grazing",
 *        "digital_master_id": null,
 *        "duration": null,
 *        "economics": "AD_SUPPORTED",
 *        "folder_id": null,
 *        "geo": null,
 *        "id": "4494811891001",
 *        "images": {},
 *        "link": null,
 *        "long_description": null,
 *        "name": "Moose Herd",
 *        "reference_id": "moose_2015_09_17",
 *        "schedule": null,
 *        "sharing": null,
 *        "state": "ACTIVE",
 *        "tags": [
 *            "animals",
 *            "nature"
 *        ],
 *        "text_tracks": [],
 *        "updated_at": "2015-09-18T15:59:23.764Z"
 *    } *
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

