/**
 * @apiDefine videoGroup Video
 * The video operations allow you to create, retrieve, update, and delete video objects in Video Cloud. (You cannot ingest any assets with the CMS API &mdash;
 * to add actual asset files, including videos, use the [Dynamic Ingest API](//docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html).) You
 * can also search for videos, get a count of all your videos or of search results, get the sources, images, and digital master for a video, get the playlists
 * the video belongs to, and remove it from all playlists. There is also a GET request to return all custom fields for the account.
 */

// get videos

/**
 * @api {get} /accounts/:account_id/videos Get Videos
 * @apiName Get Videos
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (URL Parameters) {Number} [limit=20] number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiParam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiParam (URL Parameters) {String="name", "reference_id", "created_at", "published_at", "updated_at", "schedule_starts_at", "schedule_ends_at", "state", "plays_total", "plays_trailing_week"} [sort="-updated_at"] field to sort results by; if absent and there is a search string, results are sorted by relevance &mdash; note that `plays_total` and `plays_trailing_week` are **not** included in the response - note: to sort in descending order, preface the sort field name with a minus (-) sign
 *
 * @apiParamExample {Url} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete &mdash; __Note: when you create a new video, the complete property is automatically set to `false`. As soon as one rendition exists for the video, the complete property will be automatically set to `true`__
 * @apiSuccess (Response Fields) {DateString} created_at when the video was created
 * @apiSuccess (Response Fields) {String} ad_keys string representing the ad key/value pairs assigned to the video. Key/value pairs are formatted as key=value and are separated by ampersands. For example: `"adKeys": "category=sports&live=true"`
 * @apiSuccess (Response Fields) {String} clip_source_video_id The ID of the source video that was clipped to produce this video or `null` if this video is not a clip of another video
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
 * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {String} folder_id id for the folder the video belongs to
 * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
 * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
 * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
 * @apiSuccess (Response Fields) {Boolean} has_digital_master=false whether video has an archived master than can be used for retranscoding
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {Url} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} original_filename the original file name for the uploaded video
 * @apiSuccess (Response Fields) {String} projection used for 360 videos
 * @apiSuccess (Response Fields) {DateString} published_at start date-time of first activation in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
 * @apiSuccess (Response Fields) {DateString} schedule.starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {DateString} schedule.ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
 * @apiSuccess (Response Fields) {Object} sharing map of sharing properties (applicable only to multiple accounts)
 * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
 * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
 * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
 * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *              "account_id": "1752604059001",
 *              "complete": true,
 *              "created_at": "2015-09-17T16:08:37.108Z",
 *              "cue_points": [],
 *              "custom_fields": {},
 *              "description": null,
 *              "digital_master_id": "4492154733001",
 *              "duration": 155573,
 *              "economics": "AD_SUPPORTED",
 *              "folder_id": null,
 *              "geo": null,
 *              "id": "4492075574001",
 *              "images": {
 *                  "poster": {
 *                      "asset_id": "4492153571001",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                  },
 *                  "thumbnail": {
 *                      "asset_id": "4492154714001",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                  }
 *              },
 *              "link": null,
 *              "long_description": null,
 *              "name": "sea_marvels.mp4",
 *              "reference_id": null,
 *              "schedule": null,
 *              "sharing": null,
 *              "state": "ACTIVE",
 *              "tags": [],
 *              "text_tracks": [
 *                  {
 *                      "asset_id": "0cbd3425-8e94-46e6-9a10-a0d4491d4893",
 *                      "default": true,
 *                      "id": "c9001cee-d7f9-4b67-955c-9764cfc3d1f4",
 *                      "kind": "captions",
 *                      "label": null,
 *                      "mime_type": "text/vtt",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001",
 *                      "srclang": "en"
 *                  }
 *              ],
 *              "updated_at": "2015-09-17T17:41:20.782Z"
 *          }
 *     ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: Resource not found
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 400 Error Response
 *     HTTP/1.1 400 INVALID_SORT
 *     [
 *         {
 *             "error_code": "INVALID_SORT",
 *             "message": "attempted to sort by invalid property: 'foo'"
 *         }
 *     ]
 *
 *
 */

// get video count

/**
 * @api {get} /accounts/:account_id/counts/videos Get Video Count
 * @apiName Get Video Count
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets count of videos for the account or a search
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
  * @apiParam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiParam (URL Parameters) {String="name", "reference_id", "created_at", "published_at", "updated_at", "schedule_starts_at", "schedule_ends_at", "state", "plays_total", "plays_trailing_week"} [sort="-updated_at"] field to sort results by; if absent and there is a search string, results are sorted by relevance &mdash; note that `plays_total` and `plays_trailing_week` are **not** included in the response
 *
 * @apiParamExample {Url} Search Count Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/counts/videos?q=tags:nature,name:nature
 *
 * @apiSuccess (Response Fields) {Number} count the count of videos found
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "count": 2678
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 400 Error Response
 *     HTTP/1.1 400 INVALID_SORT
 *     [
 *         {
 *             "error_code": "INVALID_SORT",
 *             "message": "attempted to sort by invalid property: 'foo'"
 *         }
 *     ]
 *
 *
 *
 */

// get video by id

 /**
 * @api {get} /accounts/:account_id/videos/:video_id Get Video by ID or Reference ID
 * @apiName Get Video by ID or Reference ID
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a video object
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or multiple ids separated by commas) (or `ref:reference_id` - only one reference id)
  *
 * @apiParamExample {Url} Get Video Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4492075574001
 *     // or
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/ref:my_reference_id
 *
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete &mdash; __Note: when you create a new video, the complete property is automatically set to `false`. As soon as one rendition exists for the video, the complete property will be automatically set to `true`__
 * @apiSuccess (Response Fields) {String} ad_keys string representing the ad key/value pairs assigned to the video. Key/value pairs are formatted as key=value and are separated by ampersands. For example: `"adKeys": "category=sports&live=true"`
 * @apiSuccess (Response Fields) {String} clip_source_video_id The ID of the source video that was clipped to produce this video or `null` if this video is not a clip of another video
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
 * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
 * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
 * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
 * @apiSuccess (Response Fields) {Boolean} has_digital_master=false whether video has an archived master than can be used for retranscoding
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {Url} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} original_filename the original file name for the uploaded video
 * @apiSuccess (Response Fields) {String} projection used for 360 videos
 * @apiSuccess (Response Fields) {DateString} published_at start date-time of first activation in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
 * @apiSuccess (Response Fields) {DateString} schedule.starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {DateString} schedule.ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
 * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
 * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
 * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
 * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "account_id": "1752604059001",
 *         "complete": true,
 *         "created_at": "2015-09-17T16:08:37.108Z",
 *         "cue_points": [],
 *         "custom_fields": {},
 *         "description": null,
 *         "digital_master_id": "4492154733001",
 *         "duration": 155573,
 *         "economics": "AD_SUPPORTED",
 *         "folder_id": null,
 *         "geo": null,
 *         "id": "4492075574001",
 *         "images": {
 *             "poster": {
 *                 "asset_id": "4492153571001",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *             },
 *             "thumbnail": {
 *                 "asset_id": "4492154714001",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *             }
 *         },
 *         "link": null,
 *         "long_description": null,
 *         "name": "sea_marvels.mp4",
 *         "reference_id": null,
 *         "schedule": null,
 *         "sharing": null,
 *         "state": "ACTIVE",
 *         "tags": [],
 *         "text_tracks": [
 *             {
 *                 "asset_id": "0cbd3425-8e94-46e6-9a10-a0d4491d4893",
 *                 "default": true,
 *                 "id": "c9001cee-d7f9-4b67-955c-9764cfc3d1f4",
 *                 "kind": "captions",
 *                 "label": null,
 *                 "mime_type": "text/vtt",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001",
 *                 "srclang": "en"
 *             }
 *         ],
 *         "updated_at": "2015-09-17T17:41:20.782Z"
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get sources

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/sources Get Video Sources
 * @apiName Get Video Sources
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an array of sources (renditions) for a video
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiParamExample {Url} Get Video Sources Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/3931368155001/sources
 *
 * @apiSuccess (Response Field) {String} app_name address for RTMP stream
 * @apiSuccess (Response Field) {String} asset_id system id for the rendition
 * @apiSuccess (Response Field) {String} codec the video codec for the rendition
 * @apiSuccess (Response Field) {String} container the video container for the rendition
 * @apiSuccess (Response Field) {Number} duration duration in milliseconds
 * @apiSuccess (Response Field) {Number} encoding_rate encoding rate in kbps
 * @apiSuccess (Response Field) {Number} height frame height in pixels
 * @apiSuccess (Response Field) {Boolean} remote whether the source is a remote asset
 * @apiSuccess (Response Field) {Number} size file size in bytes
 * @apiSuccess (Response Field) {Url} src URL for HTTP rendition
 * @apiSuccess (Response Field) {String} steam_name the stream name on the CDN
 * @apiSuccess (Response Field) {String} type the type for segmented streams
 * @apiSuccess (Response Field) {DateString} uploaded_at date/time when the video was uploaded
 * @apiSuccess (Response Field) {Number} width frame width in pixels
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand",
 *            "asset_id": "4541302443001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 983000,
 *            "height": 360,
 *            "remote": false,
 *            "size": 3887659,
 *            "stream_name": "mp4:57838016001/57838016001_4541302443001_4541288158001.mp4&1445288400000&3121d01e3ac4b1edb4f23509a627321b",
 *            "uploaded_at": "2015-10-08T02:03:43.621Z",
 *            "width": 640
 *        },
 *        {
 *            "asset_id": "4541302443001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 983000,
 *            "height": 360,
 *            "remote": false,
 *            "size": 3887659,
 *            "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302443001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:43.621Z",
 *            "width": 640
 *        },
 *        {
 *            "asset_id": "4541302443001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 983000,
 *            "height": 360,
 *            "remote": false,
 *            "size": 3887659,
 *            "src": "https://brightcove.hs.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302443001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:43.621Z",
 *            "width": 640
 *        },
 *        {
 *            "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand",
 *            "asset_id": "4541302445001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 510000,
 *            "height": 270,
 *            "remote": false,
 *            "size": 2023584,
 *            "stream_name": "mp4:57838016001/57838016001_4541302445001_4541288158001.mp4&1445288400000&3121d01e3ac4b1edb4f23509a627321b",
 *            "uploaded_at": "2015-10-08T02:03:44.173Z",
 *            "width": 480
 *        },
 *        {
 *            "asset_id": "4541302445001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 510000,
 *            "height": 270,
 *            "remote": false,
 *            "size": 2023584,
 *            "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302445001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:44.173Z",
 *            "width": 480
 *        },
 *        {
 *            "asset_id": "4541302445001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 510000,
 *            "height": 270,
 *            "remote": false,
 *            "size": 2023584,
 *            "src": "https://brightcove.hs.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302445001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:44.173Z",
 *            "width": 480
 *        },
 *        {
 *            "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand",
 *            "asset_id": "4541302453001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 1802000,
 *            "height": 540,
 *            "remote": false,
 *            "size": 7107391,
 *            "stream_name": "mp4:57838016001/57838016001_4541302453001_4541288158001.mp4&1445288400000&3121d01e3ac4b1edb4f23509a627321b",
 *            "uploaded_at": "2015-10-08T02:03:48.358Z",
 *            "width": 960
 *        },
 *        {
 *            "asset_id": "4541302453001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 1802000,
 *            "height": 540,
 *            "remote": false,
 *            "size": 7107391,
 *            "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302453001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:48.358Z",
 *            "width": 960
 *        },
 *        {
 *            "asset_id": "4541302453001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 31487,
 *            "encoding_rate": 1802000,
 *            "height": 540,
 *            "remote": false,
 *            "size": 7107391,
 *            "src": "https://brightcove.hs.llnwd.net/e1/uds/pd/57838016001/57838016001_4541302453001_4541288158001.mp4?pubId=57838016001&videoId=4541288158001",
 *            "uploaded_at": "2015-10-08T02:03:48.358Z",
 *            "width": 960
 *        },
 *        {
 *            "codec": "H264",
 *            "container": "M2TS",
 *            "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4541288158001&pubId=57838016001",
 *            "type": "application/x-mpegURL"
 *        },
 *        {
 *            "codec": "H264",
 *            "container": "M2TS",
 *            "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4541288158001&pubId=57838016001&secure=true",
 *            "type": "application/x-mpegURL"
 *        }
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get images

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/images Get Video Images
 * @apiName Get Video Images
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the images for a video
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiParamExample {Url} Get Video Images Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/3931368155001/images
 *
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "poster": {
 *            "asset_id": "4564811454001",
 *            "remote": false,
 *            "sources": [
 *                {
 *                    "height": 540,
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201510/826/57838016001_4564811454001_3931368155001-vs.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "width": 960
 *                },
 *                {
 *                    "height": 540,
 *                    "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201510/826/57838016001_4564811454001_3931368155001-vs.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "width": 960
 *                }
 *            ],
 *            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201510/826/57838016001_4564811454001_3931368155001-vs.jpg?pubId=57838016001&videoId=3931368155001"
 *        },
 *        "thumbnail": {
 *            "asset_id": "4564811464001",
 *            "remote": false,
 *            "sources": [
 *                {
 *                    "height": 90,
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201510/826/57838016001_4564811464001_3931368155001-th.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "width": 160
 *                },
 *                {
 *                    "height": 90,
 *                    "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201510/826/57838016001_4564811464001_3931368155001-th.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "width": 160
 *                }
 *            ],
 *            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201510/826/57838016001_4564811464001_3931368155001-th.jpg?pubId=57838016001&videoId=3931368155001"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get digital master info

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/digital_master Get Digital Master Info
 * @apiName Get Digital Master Info
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the stored digital master for a video, if any
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiParamExample {Url} Get Video Digital MasterExample:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/3931368155001/digital_master
 *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {Boolean} audio_only whether this assest has an audio track only
 * @apiSuccess (Response Field) {String} cdn_origin_id id on the origin CDN if any
 * @apiSuccess (Response Field) {Boolean} complete whether processing is complete &mdash; __Note: when you create a new video, the complete property is automatically set to `false`. As soon as one rendition exists for the video, the complete property will be automatically set to `true`__
 * @apiSuccess (Response Field) {String} controller_type video controller type
 * @apiSuccess (Response Field) {String} current_filename the file name
 * @apiSuccess (Response Field) {Object} drm DRM licensing information
 * @apiSuccess (Response Field) {Number} encoding_rate encoding rate in kbps
 * @apiSuccess (Response Field) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Field) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Field) {Object} hds HDS information
 * @apiSuccess (Response Field) {Object} hls HLS information
 * @apiSuccess (Response Field) {String} id the video id
 * @apiSuccess (Response Field) {String} name the video title
 * @apiSuccess (Response Field) {String} preview_thumbnail_asset_id thumbnail asset id
 * @apiSuccess (Response Field) {Boolean} progressive_download whether available via progressive download
 * @apiSuccess (Response Field) {String} reference_id reference id
 * @apiSuccess (Response Field) {String} remote_stream_name for remote stream types
 * @apiSuccess (Response Field) {String} remote_url for HTTP types
 * @apiSuccess (Response Field) {String} sharded_directory
 * @apiSuccess (Response Field) {Number} size in bytes
 * @apiSuccess (Response Field) {String} type asset type
 * @apiSuccess (Response Field) {DateString} update_at date/time last modified
 * @apiSuccess (Response Field) {DateString} uploaded_at date/time added
 * @apiSuccess (Response Field) {Number} version
 * @apiSuccess (Response Field) {String} video_codec the video codec
 * @apiSuccess (Response Field) {String} video_container the video container
 * @apiSuccess (Response Field) {Number} video_duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response video has digital master:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "57838016001_4554429917001_3931368155001.mp4",
 *        "drm": null,
 *        "encoding_rate": 25370000,
 *        "frame_height": 1080,
 *        "frame_width": 1920,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4554429917001",
 *        "name": "greathornedowl.mp4",
 *        "preview_thumbnail_asset_id": "",
 *        "progressive_download": true,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "",
 *        "sharded_directory": "",
 *        "size": 130609265,
 *        "type": "DIGITAL_MASTER",
 *        "updated_at": "2015-10-13T08:15:09.055Z",
 *        "uploaded_at": "2015-10-13T08:15:02.151Z",
 *        "version": 1,
 *        "video_codec": "H264",
 *        "video_container": "MP4",
 *        "video_duration": 41174
 *    }
 *
 * @apiSuccessExample {String} Success Response no digital master
 *     HTTP/1.1 204 No Content
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get playlist references

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/references Get Playlists for Video
 * @apiName Get Playlists for Video
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an array of Manual (EXPLICIT) playlists that contain a video object
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiParamExample {Url} Get Video References Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4492075574001/references
 *
 * @apiSuccess (Response Field) {String[]} playlists array of EXPLICIT playlist ids that contain the video
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "playlists": [
 *            "4452341376001",
 *            "7894341376001"
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// remove video from playlists

 /**
 * @api {delete} /accounts/:account_id/videos/:video_id/references Remove Video from all Playlists
 * @apiName Remove Video from all Playlists
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Removes the video from all EXPLICIT playlists
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiParamExample {Url} Get Video References Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4492075574001/references
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

 // create video

 /**
  * @api {post} /accounts/:account_id/videos Create Video
  * @apiName Create Video
  * @apiGroup videoGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Create a new video object in the account.
  * _Note: this does not ingest a video file - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion_
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  *
  * @apiParam (Request Body Fields) {String{1..255}} name video title
  * @apiParam (Request Body Fields) {String{0..250}} [description] video short description
  * @apiParam (Request Body Fields) {String="AD_SUPPORTED","FREE"} [economics="AD_SUPPORTED"] whether the video supports ads (used by the Smart Player, but not by the Brightcove Player)
  * @apiParam (Request Body Fields) {String{0..5000}} [long_description] video long description
  * @apiParam (Request Body Fields) {String{..150}} [reference_id] video reference-id (must be unique within the account)
  * @apiParam (Request Body Fields) {String="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
  * @apiParam (Request Body Fields) {String[]} [tags="[]"] array of tags
  * @apiParam (Request Body Fields) {Object} [custom_fields={}] map of fieldname-value pairs; values have a maximum length of 1024 single-byte characters
  * @apiParam (Request Body Fields) {Object} [geo={}] map of geo-filtering properties
  * @apiParam (Request Body Fields) {String[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes __in lower-case__](https://www.iso.org/obp/ui/)
  * @apiParam (Request Body Fields) {Boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
  * @apiParam (Request Body Fields) {Boolean} [geo.restricted=false] whether geo-restriction is enabled for this video
  * @apiParam (Request Body Fields) {Object} [schedule={}] map of scheduling properties
  * @apiParam (Request Body Fields) {DateString} [schedule.starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
  * @apiParam (Request Body Fields) {DateString} [schedule.ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
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
  * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete &mdash; __Note: when you create a new video, the complete property is automatically set to `false`. As soon as one rendition exists for the video, the complete property will be automatically set to `true`__
  * @apiSuccess (Response Fields) {String} ad_keys string representing the ad key/value pairs assigned to the video. Key/value pairs are formatted as key=value and are separated by ampersands. For example: `"adKeys": "category=sports&live=true"`
  * @apiSuccess (Response Fields) {String} clip_source_video_id The ID of the source video that was clipped to produce this video or `null` if this video is not a clip of another video
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
  * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
  * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
  * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
  * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
  * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
  * @apiSuccess (Response Fields) {Boolean} has_digital_master=false whether video has an archived master than can be used for retranscoding
  * @apiSuccess (Response Fields) {Object} images map of image maps
  * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
  * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
  * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
  * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
  * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
  * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
  * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
  * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
  * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
  * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
  * @apiSuccess (Response Fields) {Object} link map of scheduling properties
  * @apiSuccess (Response Fields) {String} link.text text for the link
  * @apiSuccess (Response Fields) {Url} link.url URL for the link
  * @apiSuccess (Response Fields) {String} long_description video long description
  * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
  * @apiSuccess (Response Fields) {String} original_filename the original file name for the uploaded video
  * @apiSuccess (Response Fields) {String} projection used for 360 videos
  * @apiSuccess (Response Fields) {DateString} published_at start date-time of first activation in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
  * @apiSuccess (Response Fields) {DateString} schedule.starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
  * @apiSuccess (Response Fields) {DateString} schedule.ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
  * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
  * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
  * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
  * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
  * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
  * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
  * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
  * @apiSuccess (Response Fields) {String[]} tags array of tags
  * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
  * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
  * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
  * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
  * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
  * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
  * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
  * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
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
  *    }
  *
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
  * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
  * @apiError (Error 4xx) {json} ILLEGAL_FIELD 422: Spelling error or use of non-existent field
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
  *
  * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
  *     HTTP/1.1 404 RESOURCE_NOT_FOUND
  *     [
  *         {
  *             "error_code": "RESOURCE_NOT_FOUND"
  *         }
  *     ]
  *
  * @apiErrorExample {json} 409 CONFLICT
  *     HTTP/1.1 409 CONFLICT
  *     [
  *         {
  *             "error_code": "REFERENCE_ID_IN_USE",
  *             "message": "Reference id moose_2015_09_17 is already in use."
  *         }
  *     ]
  *
  * @apiErrorExample 400 Bad Request
  *    HTTP/1.1 400 Bad Request
  *    {
  *        "error_code": "BAD_VALUE",
  *        "message": "Unable to process JSON"
  *    }
  *
  * @apiErrorExample 422 ILLEGAL_FIELD
  *    HTTP/1.1 422 Unprocessable Entity
  *    [
  *        {
  *            "error_code": "VALIDATION_ERROR",
  *            "message": "foo: ILLEGAL_FIELD"
  *        }
  *    ]
  *
  */

// update video

/**
 * @api {patch} /accounts/:account_id/videos/:video_id Update Video
 * @apiName Update Video
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a video's metadata
 * _note that this API does not ingest any media files - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion_. Also note that replacing WebVTT text tracks is a two-step operation - see [Add WebVTT Captions](http://docs.brightcove.com/en/video-cloud/cms-api/guides/webvtt.html#replaceTracks) for details.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID.
 *
 * @apiParam (Request Body Fields) {String{1..255}} [name] video title
 * @apiParam (Request Body Fields) {String{..250}} [description] video short description
 * @apiParam (Request Body Fields) {String="AD_supported", "FREE"} [economics="AD_SUPPORTED"] video short description
 * @apiSuccess (Request Body Fields) {String{..1800}} [ad_keys=null] string representing the ad key/value pairs assigned to the video. Key/value pairs are formatted as key=value and are separated by ampersands.
 * @apiParam (Request Body Fields) {Boolean} [drm_disabled] if DRM is enabled for the account, setting this field to `true` will prevent this video from being DRM-protected (this field is only available for accounts enabled for [Dynamic Delivery](//docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di-dynamic-delivery.html) and DRM)
 * @apiParam (Request Body Fields) {String{..5000}} [long_description] video long description
 * @apiSuccess (Request Boduy Fields) {Boolean} [offline_enabled=false] whether video is enabled for offline viewing
 * @apiParam (Request Body Fields) {String="equirectangular"} [projection=null] Used for 360 video
 * @apiParam (Request Body Fields) {String{..150}} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
 * @apiParam (Request Body Fields) {String="AD_SUPPORTED","FREE"} [economics="AD_SUPPORTED"] whether the video supports ads (used by the Smart Player, but not by the Brightcove Player)
 * @apiParam (Request Body Fields) {String[]} [tags="[]"] array of tags
 * @apiParam (Request Body Fields) {Object} [custom_fields={}] map of fieldname-value pairs; values have a maximum length of 1024 single-byte characters
 * @apiParam (Request Body Fields) {Object[]} [cue_points="[]"] array of cue point maps
 * @apiParam (Request Body Fields) {String} [cue_points.name] cue point name
 * @apiParam (Request Body Fields) {String="AD","CODE"} [cue_points.type=AD] cue point type
 * @apiParam (Request Body Fields) {Number} cue_points.time time of the cue point in seconds; example: 10.527
 * @apiParam (Request Body Fields) {String} [cue_points.metadata=null] optional metadata string (128 single-byte characters maximum)
 * @apiParam (Request Body Fields) {Boolean} [cue_points.force-stop=false] whether video is force-stopped at the cue point
 * @apiParam (Request Body Fields) {Object} [geo={}] map of geo-filtering properties
 * @apiParam (Request Body Fields) {String[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes __in lower-case__](https://www.iso.org/obp/ui/)
 * @apiParam (Request Body Fields) {Boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
 * @apiParam (Request Body Fields) {Boolean} [geo.restricted=false] whether geo-restriction is enabled for this video
 * @apiParam (Request Body Fields) {Object} [link={}] map of scheduling properties
 * @apiParam (Request Body Fields) {String{..255}} [link.text] text for the link
 * @apiParam (Request Body Fields) {Url{..250}} [link.url] URL for the link
 * @apiParam (Request Body Fields) {DateString} published_at ISO-8601 date-time string indicating when the video was published
 * @apiParam (Request Body Fields) {Object} [schedule={}] map of scheduling properties
 * @apiParam (Request Body Fields) {DateString} [schedule.starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {DateString} [schedule.ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {Object[]} [text_tracks="[]"] array of text track maps &mdash; **NOTE** text_tracks are **not** settable for ingested text_tracks, but **are** settable otherwise, and can be used to add text tracks to ingested or remote asset videos
 * @apiParam (Request Body Fields) {Url} text_tracks.src="" URL for the .vtt file
 * @apiParam (Request Body Fields) {String="captions","chapters","subtitles","metadata"} [text_tracks.kind=""] kind of text track
 * @apiParam (Request Body Fields) {String} text_tracks.srclang="" 2-letter language code, such as "en" or "ko"
 * @apiParam (Request Body Fields) {String} [text_tracks.mime_type=""] mime-type for the track
 * @apiParam (Request Body Fields) {String} [text_tracks.label=""] label for the track
 * @apiParam (Request Body Fields) {Boolean} [text_tracks.default=false] whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
 * @apiParamExample {json} Update Video Example:
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
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete &mdash; __Note: when you create a new video, the complete property is automatically set to `false`. As soon as one rendition exists for the video, the complete property will be automatically set to `true`__
 * @apiSuccess (Response Fields) {String} ad_keys string representing the ad key/value pairs assigned to the video. Key/value pairs are formatted as key=value and are separated by ampersands. For example: `"adKeys": "category=sports&live=true"`
 * @apiSuccess (Response Fields) {String} clip_source_video_id The ID of the source video that was clipped to produce this video or `null` if this video is not a clip of another video
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
 * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
 * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
 * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
 * @apiSuccess (Response Fields) {Boolean} has_digital_master=false whether video has an archived master than can be used for retranscoding
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {Url} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} original_filename the original file name for the uploaded video
 * @apiSuccess (Response Fields) {String} projection used for 360 videos
 * @apiSuccess (Response Fields) {DateString} published_at start date-time of first activation in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
 * @apiSuccess (Response Fields) {DateString} schedule.starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {DateString} schedule.ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
 * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
 * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
 * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
 * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
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
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 422: Spelling error or use of non-existent field
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 *
 */

// delete video

 /**
 * @api {delete} /accounts/:account_id/videos/:video_id Delete Video
 * @apiName Delete Video
 * @apiGroup videoGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes a video
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`)
 *
 * @apiParamExample {Url} Get Video References Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4492075574001
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 204 No Content **returned if video is deleted or not found**
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} REFERENCES_EXIST 409: The video is in one or more manual playlists
 * @apiError (Error 4xx) {json} PRE_CONDITION_FAILED 412: usually this means the caller provided an ETag that didn't match the version of the video
 * @apiError (Error 5xx) {json} INTERNAL_ERROR 500: Error in the backend
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

 // get custom fields

 /**
  * @api {get} /accounts/:account_id/video_fields Get Custom Fields
  * @apiName Get Custom Fields
  * @apiGroup videoGroup
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a list of custom fields for the account
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  *
  * @apiParamExample {Url} Get Custom Fields Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/video_fields
  *
  * @apiSuccess (Response Fields) {Object[]} custom_fields array of custom field maps
  * @apiSuccess (Response Fields) {String} custom_fields.description description (instruction for user)
  * @apiSuccess (Response Fields) {String} custom_fields.display_name display name
  * @apiSuccess (Response Fields) {String[]} custom_fields.enum_values array of string values for select type fields
  * @apiSuccess (Response Fields) {String} custom_fields.id data name for the field (used to access it in searches, etc.)
  * @apiSuccess (Response Fields) {Boolean} custom_fields.required whether field must have a value before video can be active
  * @apiSuccess (Response Fields) {String} custom_fields.type custom field type (enum or string)
  * @apiSuccess (Response Fields) {String} max_custom_fields maximum number of custom fields for the account
  * @apiSuccess (Response Fields) {Object[]} standard_fields array of standard field maps
  * @apiSuccess (Response Fields) {String} standard_fields.description description (instruction for user)
  * @apiSuccess (Response Fields) {String} standard_fields.id data name for the field (used to access it in searches, etc.)
  * @apiSuccess (Response Fields) {Boolean} standard_fields.required whether field must have a value before video can be active
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *    "custom_fields": [
  *        {
  *            "description": "Add a topic",
  *            "display_name": "Subject",
  *            "enum_values": [
  *                "Reptiles",
  *                "Mammals",
  *                "Other",
  *                "wildlife",
  *                "Fish",
  *                "Birds",
  *                "Insects"
  *            ],
  *            "id": "subject",
  *            "required": false,
  *            "type": "enum"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Uploader UserID",
  *            "id": "uploader-userid",
  *            "required": false,
  *            "type": "string"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Rating",
  *            "id": "rating",
  *            "required": false,
  *            "type": "string"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Duration",
  *            "id": "duration",
  *            "required": false,
  *            "type": "string"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Associatedtopics",
  *            "id": "associated-topics",
  *            "required": false,
  *            "type": "string"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Custom Theme Path",
  *            "enum_values": [
  *                "http://files.brightcove.com/BCL_customLabelTheme2.css",
  *                "http://files.brightcove.com/BCL_customLabelTheme.css"
  *            ],
  *            "id": "customthemepath",
  *            "required": false,
  *            "type": "enum"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Text Color",
  *            "enum_values": [
  *                "#4C4D4F",
  *                "#CF0050",
  *                "#F4901E",
  *                "#619FA8"
  *            ],
  *            "id": "textcolor",
  *            "required": false,
  *            "type": "enum"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Captions File URL",
  *            "id": "dfxppath",
  *            "required": false,
  *            "type": "string"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Purpose",
  *            "enum_values": [
  *                "Training",
  *                "Demo",
  *                "Sample",
  *                "Solution"
  *            ],
  *            "id": "purpose",
  *            "required": false,
  *            "type": "enum"
  *        },
  *        {
  *            "description": null,
  *            "display_name": "Downloadable",
  *            "enum_values": [
  *                "yes",
  *                "no"
  *            ],
  *            "id": "downloadable",
  *            "required": false,
  *            "type": "enum"
  *        }
  *    ],
  *    "max_custom_fields": 10,
  *    "standard_fields": [
  *        {
  *            "description": null,
  *            "id": "description",
  *            "required": false
  *        },
  *        {
  *            "description": null,
  *            "id": "tags",
  *            "required": false
  *        }
  *    ]
  *
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 403: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
  * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
  * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
  *
  * @apiErrorExample {json} 401 UNAUTHORIZED
  *     HTTP/1.1 401 UNAUTHORIZED
  *     [
  *         {
  *             "error_code": "UNAUTHORIZED",
  *             "message": "Permission denied."
  *         }
  *     ]
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
  *
  */
