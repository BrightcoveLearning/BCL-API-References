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
 * @apiParam (Request Body Fields) {String} [long_description] video long description
 * @apiParam (Request Body Fields) {String} [long_description] video long description
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

// ingest media asset

 /**
 * @api {post} /accounts/:account_id/videos/:video_id/ingest-requests Ingest Media Asset
 * @apiName Ingest Media Asset
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Uploads a video, images, and/or text track (WebVTT files) and adds them to your media library
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID; if this is a new video ingest, the ID will be the one returned by the _Create Video_ request
 * @apiParam (Request Body Fields) {Object} [master] the video master to be ingested
 * @apiParam (Request Body Fields) {String} [master.url] URL for the video source; required except for re-transcoding where a digital master has been archived, or you are adding images or text tracks to an existing video
 * @apiParam (Request Body Fields) {String} [profile] ingest profile to use for transcoding; if absent, account default profile will be used
 * @apiParam (Request Body Fields) {Object[]} [text_tracks] array of text_track maps
 * @apiParam (Request Body Fields) {String} text_tracks.url URL for a WebVTT file
 * @apiParam (Request Body Fields) {String} text_tracks.srclang ISO 639 2-letter (alpha-2) language code for the text tracks
 * @apiParam (Request Body Fields) {String="captions","subtitles","descriptions","chapters","metadata"} [text_tracks.kind="captions"] how the vtt file is meant to be used
 * @apiParam (Request Body Fields) {String} [text_tracks.label] user-readable title
 * @apiParam (Request Body Fields) {Boolean} [text_tracks.default] sets the default language for captions/subtitles
 * @apiParam (Request Body Fields) {Object} [poster] the video master to be ingested
 * @apiParam (Request Body Fields) {String} poster.url URL for the video poster image
 * @apiParam (Request Body Fields) {String} [poster.height] pixel height of the image
 * @apiParam (Request Body Fields) {String} [poster.width] pixel width of the image
 * @apiParam (Request Body Fields) {Object} [thumbnail] the video master to be ingested
 * @apiParam (Request Body Fields) {String} thumbnail.url URL for the video thumbnail image
 * @apiParam (Request Body Fields) {String} [thumbnail.height] pixel height of the image
 * @apiParam (Request Body Fields) {String} [thumbnail.width] pixel width of the image
 * @apiParam (Request Body Fields) {Boolean} [capture-images] whether poster and thumbnail should be captured during transcoding; defaults to `true` if the the profile has image renditions, `false` if it does not
 * @apiParam (Request Body Fields) {String[]} [callbacks] array of URLs that [notifications](http://docs.brightcove.com/en/video-cloud/media-management/guides/notifications.html) should be sent to
 *
 * @apiParamExample {json} Ingest Request Example:
 *    {
 *      "master": {"
 *          url": "http://host/master.mp4"
 *      },
 *      "profile": "high-resolution",
 *      "capture-images": "false",
 *      "poster": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-poster.png"
 *            "width": "640",
 *            "height": "360"
 *        },
 *        "thumbnail": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-thumbnail.png"
 *            "width": "160",
 *            "height": "90"
 *        },
 *        "capture-images": false,
 *        "text_tracks": [
 *            {
 *                "url": "http://learning-services-media.brightcove.com/captions/for_video/Water-in-Motion.vtt",
 *                "srclang": "en",
 *                "kind": "captions",
 *                "label": "EN",
 *                "default": true
 *            }
 *        ],
 *        "callbacks": [
 *            "http://solutions.brightcove.com/bcls/di-api/di-callbacks.php"
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id job id for the request
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *       "id":"c6926dcf-0978-4085-8afc-e578ccfbf742"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} PROFILE 400: Unable to find profile by name
 * @apiError (Error 4xx) {json} NOT_SUBMITTED 400: Unable to submit job, please try again later
 * @apiError (Error 4xx) {json} NO_SUCH_VIDEO 400: Unable to find the referenced video
 * @apiError (Error 4xx) {json} BAD_ACCOUNT 400: Account ID was missing or invalid
 * @apiError (Error 4xx) {json} NO_SOURCE 400: Unable to find a source to use
 * @apiError (Error 4xx) {json} CDN_CREDENTIALS 400: Unable to fetch CDN credentials
 * @apiError (Error 4xx) {json} BAD_CALLBACKS 400: Callbacks were not in expected format
 * @apiError (Error 5xx) {json} INTERNAL_ERROR 500: Internal error, please try again later
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */
