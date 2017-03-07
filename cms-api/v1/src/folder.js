/**
 * @apiDefine folderGroup Folders
 * Folder operations allow you to create, retrieve, update, and delete folders, as well as add videos to or remove them from a folder.
 */

// get folders

/**
 * @api {get} /accounts/:account_id/folders Get Folders
 * @apiName Get Folders
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets list of folders for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (URL Parameters) {Number} [limit=20] number of folders to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of folders to skip in the response
 *
 * @apiParamExample {Url} Get Folders Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:09:51.375Z",
 *            "id": "560039dfe4b0471bef470c47",
 *            "name": "birds",
 *            "updated_at": "2015-09-21T17:11:23.839Z",
 *            "video_count": 17
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:09:57.260Z",
 *            "id": "560039e5e4b0e69e4b01cacd",
 *            "name": "fish",
 *            "updated_at": "2015-09-21T17:12:08.955Z",
 *            "video_count": 12
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:10:09.422Z",
 *            "id": "560039f1e4b0e69e4b01cad3",
 *            "name": "water",
 *            "updated_at": "2015-09-21T17:12:09.037Z",
 *            "video_count": 26
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
 */

// get folder information

/**
 * @api {get} /accounts/:account_id/folders/:folder_id Get Folder Information
 * @apiName Get FolderInformation
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets information about a folder
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} folder_id Video Cloud folder ID.
 *
 * @apiParamExample {Url} Get Folder Information Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders/560039dfe4b0471bef470c47
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "created_at": "2015-09-21T17:09:51.375Z",
 *        "id": "560039dfe4b0471bef470c47",
 *        "name": "birds",
 *        "updated_at": "2015-09-21T17:11:23.839Z",
 *        "video_count": 17
 *    }
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
 */

// get videos in folder

/**
 * @api {get} /accounts/:account_id/folders/:folder_id/videos Get Videos in Folder
 * @apiName Get Videos in Folder
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets list of video objects in a folder
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} folder_id the folder ID.
 * @apiParam (URL Parameters) {Number} [limit=20] number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 *
 * @apiParamExample {Url} Get Videos in Folder Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders/560039dfe4b0471bef470c47/videos
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
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
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
 * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "id": "3931368155001",
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2014-12-09T06:07:11.877Z",
 *            "cue_points": [
 *                {
 *                    "id": "3981500051001",
 *                    "name": "cue3",
 *                    "type": "CODE",
 *                    "time": 17.319,
 *                    "metadata": "Mother-child interaction",
 *                    "force_stop": false
 *                },
 *                {
 *                    "id": "3981500052001",
 *                    "name": "Pre-roll",
 *                    "type": "AD",
 *                    "time": 0,
 *                    "metadata": null,
 *                    "force_stop": false
 *                },
 *                {
 *                    "id": "3981500053001",
 *                    "name": "cue2",
 *                    "type": "CODE",
 *                    "time": 10.527,
 *                    "metadata": "Owl turns face to us",
 *                    "force_stop": false
 *                },
 *                {
 *                    "id": "3981500055001",
 *                    "name": "Post-roll",
 *                    "type": "AD",
 *                    "time": 41.237,
 *                    "metadata": null,
 *                    "force_stop": false
 *                },
 *                {
 *                    "id": "3981500054001",
 *                    "name": "cue1",
 *                    "type": "CODE",
 *                    "time": 4.418,
 *                    "metadata": "owl turns away",
 *                    "force_stop": false
 *                }
 *            ],
 *            "custom_fields": {
 *                "associated-topics": "Air, Nature",
 *                "subject": "Birds"
 *            },
 *            "description": "Mother and child owls...",
 *            "digital_master_id": "4508192940001",
 *            "duration": 41237,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": "560039dfe4b0471bef470c47",
 *            "geo": null,
 *            "images": {
 *                "thumbnail": {
 *                    "asset_id": "4508192962001",
 *                    "remote": false,
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201509/826/57838016001_4508192962001_3931368155001-th.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201509/826/57838016001_4508192962001_3931368155001-th.jpg?pubId=57838016001&videoId=3931368155001"
 *                        }
 *                    ]
 *                },
 *                "poster": {
 *                    "asset_id": "4508192954001",
 *                    "remote": false,
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201509/826/57838016001_4508192954001_3931368155001-vs.jpg?pubId=57838016001&videoId=3931368155001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201509/826/57838016001_4508192954001_3931368155001-vs.jpg?pubId=57838016001&videoId=3931368155001"
 *                        }
 *                    ]
 *                }
 *            },
 *            "link": {
 *                "text": "Brightcove Developer Documentation",
 *                "url": "http://docs.brightcove.com"
 *            },
 *            "long_description": "A large owl with perky ears that look like horns",
 *            "name": "Great Horned Owl",
 *            "reference_id": "greathornedowl.mp4_1418105221982",
 *            "schedule": {
 *                "ends_at": "2017-01-01T05:00:00.000Z",
 *                "starts_at": "2015-01-13T05:00:00.000Z"
 *            },
 *            "sharing": {
 *                "by_external_acct": false,
 *                "by_id": null,
 *                "source_id": null,
 *                "to_external_acct": true,
 *                "by_reference": false
 *            },
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "nature",
 *                "foo",
 *                "air",
 *                "bar"
 *            ],
 *            "text_tracks": [
 *
 *            ],
 *            "updated_at": "2015-09-25T07:19:15.473Z"
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
 */

// create folder

/**
 * @api {post} /accounts/:account_id/folders Create Folder
 * @apiName Create Folder
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a new folder for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Request Body Fields) {String} name name of the folder (must be unique in the account)
 *
 * @apiParamExample {json} Create Folder Example:
 *     {
 *         "name": "mammals"
 *     }
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "account_id": "57838016001",
 *        "created_at": "2015-09-22T12:52:43.406Z",
 *        "id": "56014f1be4b056563efe284e",
 *        "name": "mammals",
 *        "updated_at": "2015-09-22T12:52:43.406Z",
 *        "video_count": 0
 *    }
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
 */

// update folder

/**
 * @api {patch} /accounts/:account_id/folders/:folder_id Update Folder Name
 * @apiName Update Folder Name
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the folder name
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {String} folder_id the folder ID
 * @apiParam (Request Body Fields) {String} name name of the folder (must be unique in the account)
 *
 * @apiParamExample {json} Update Folder Example:
 *     {
 *         "name": "quadrupeds"
 *     }
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "created_at": "2015-09-21T17:09:51.375Z",
 *        "id": "560039dfe4b0471bef470c47",
 *        "name": "quadrupeds",
 *        "updated_at": "2015-09-22T19:42:24.497Z",
 *        "video_count": 25
 *    }
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
 */

// add video to folder

/**
 * @api {put} /accounts/:account_id/folders/:folder_id/videos/:video_id Add Video to Folder
 * @apiName Add Video to Folder
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Add a video to a folder
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {String} folder_id the folder ID
 * @apiParam (Request Body Fields) {String} name name of the folder (must be unique in the account)
 *
 * @apiParamExample {json} Update Folder Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders/560039dfe4b0471bef470c47/videos/4442677263001
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 No Content
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
 */

// remove video from folder

/**
 * @api {delete} /accounts/:account_id/folders/:folder_id/videos/:video_id Remove Video from Folder
 * @apiName Remove Video from Folder
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Remove a video from a folder
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {String} folder_id the folder ID
 * @apiParam (Request Body Fields) {String} name name of the folder (must be unique in the account)
 *
 * @apiParamExample {json} Update Folder Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders/560039dfe4b0471bef470c47/videos/4442677263001
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 No Content
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
 */

// delete folder

/**
 * @api {delete} /accounts/:account_id/folders/:folder_id Delete Folder
 * @apiName Delete Folder
 * @apiGroup folderGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete a folder
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {String} folder_id the folder ID
 * @apiParam (Request Body Fields) {String} name name of the folder (must be unique in the account)
 *
 * @apiParamExample {json} Update Folder Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders/560039dfe4b0471bef470c47
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} created_at date/time folder created
 * @apiSuccess (Response Fields) {DateString} updated_at date/time folder last modified
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} video_count number of videos in the folder
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 No Content
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
 */
