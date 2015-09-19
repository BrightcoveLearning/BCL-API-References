// get videos

/**
 * @api {get} /accounts/:account_id/videos Get Videos
 * @apiName Get Videos
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
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

// get video count

/**
 * @api {get} /accounts/:account_id/counts/videos Get Video Count
 * @apiName Get Video Count
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {String} [q] search string - see[search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "count": 2678
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
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
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a new video object in the account.
 * _Note: this does not ingest a video file - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion_
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {String} name video title
 * @apiParam (Request Body Fields) {String} [description] video short description
 * @apiParam (Request Body Fields) {String} [long_description] video long description
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
 * @apiParam (Request Body Fields) {String[]} [tags="[]"] array of tags
 * @apiParam (Request Body Fields) {Object} [custom_fields={}] map of fieldname-value pairs
 * @apiParam (Request Body Fields) {Object} [geo={}] map of geo-filtering properties
 * @apiParam (Request Body Fields) {String[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes](https://www.iso.org/obp/ui/)
 * @apiParam (Request Body Fields) {Boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
 * @apiParam (Request Body Fields) {Boolean} [geo.restricted=false] whether geo-restriction is enabled for thie video
 * @apiParam (Request Body Fields) {Object} [schedule={}] map of scheduling properties
 * @apiParam (Request Body Fields) {DateString} [starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {DateString} [ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
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

// get video by id

 /**
 * @api {get} /accounts/:account_id/videos/:video_id Get Video by ID or Reference ID
 * @apiName Get Video by ID or Reference ID
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a video object
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`)
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

// get sources

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/sources Get Video Sources
 * @apiName Get Video Sources
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an array of sources (renditions) for a video
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "app_name": "rtmp://cp101675.edgefcs.net/ondemand",
 *            "asset_id": "4492154718001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 454000,
 *            "height": 270,
 *            "size": 8897044,
 *            "stream_name": "mp4:22/1752604059001/201509/3164/175260405 *    9001_4492154718001_4492075574001.mp4?__nn__=1545806547001& *    slist=22/1752604059001/201509/3164/&auth=daEagcrdndDbFd3bE *    bVaNafbiaNbScbdvbN-bv_vXq-bWG- *    ECEp_HGn_DHwy_KmK&aifp=rtmpeuds17",
 *            "uploaded_at": "2015-09-17T16:09:25.136Z",
 *            "width": 480
 *        },
 *        {
 *            "asset_id": "4492154718001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 454000,
 *            "height": 270,
 *            "size": 8897044,
 *            "src": "http://brightcove04.brightcove.com/22/175260405900 *    1/201509/3164/1752604059001_4492154718001_4492075574001. *    mp4?pubId=1752604059001&videoId=4492075574001",
 *            "uploaded_at": "2015-09-17T16:09:25.136Z",
 *            "width": 480
 *        },
 *        {
 *            "app_name": "rtmp://cp101675.edgefcs.net/ondemand",
 *            "asset_id": "4492154738001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 907000,
 *            "height": 360,
 *            "size": 17723314,
 *            "stream_name": "mp4:22/1752604059001/201509/3164/175260405 *    9001_4492154738001_4492075574001.mp4?__nn__=1545806547001& *    slist=22/1752604059001/201509/3164/&auth=daEagcrdndDbFd3bE *    bVaNafbiaNbScbdvbN-bv_vXq-bWG- *    ECEp_HGn_DHwy_KmK&aifp=rtmpeuds17",
 *            "uploaded_at": "2015-09-17T16:09:30.719Z",
 *            "width": 640
 *        },
 *        {
 *            "asset_id": "4492154738001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 907000,
 *            "height": 360,
 *            "size": 17723314,
 *            "src": "http://brightcove04.brightcove.com/22/175260405900 *    1/201509/3164/1752604059001_4492154738001_4492075574001. *    mp4?pubId=1752604059001&videoId=4492075574001",
 *            "uploaded_at": "2015-09-17T16:09:30.719Z",
 *            "width": 640
 *        },
 *        {
 *            "app_name": "rtmp://cp101675.edgefcs.net/ondemand",
 *            "asset_id": "4492154767001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 1717000,
 *            "height": 360,
 *            "size": 33469559,
 *            "stream_name": "mp4:22/1752604059001/201509/3164/175260405 *    9001_4492154767001_4492075574001.mp4?__nn__=1545806547001& *    slist=22/1752604059001/201509/3164/&auth=daEagcrdndDbFd3bE *    bVaNafbiaNbScbdvbN-bv_vXq-bWG- *    ECEp_HGn_DHwy_KmK&aifp=rtmpeuds17",
 *            "uploaded_at": "2015-09-17T16:09:41.433Z",
 *            "width": 640
 *        },
 *        {
 *            "asset_id": "4492154767001",
 *            "codec": "H264",
 *            "container": "MP4",
 *            "duration": 155573,
 *            "encoding_rate": 1717000,
 *            "height": 360,
 *            "size": 33469559,
 *            "src": "http://brightcove04.brightcove.com/22/175260405900 *    1/201509/3164/1752604059001_4492154767001_4492075574001. *    mp4?pubId=1752604059001&videoId=4492075574001",
 *            "uploaded_at": "2015-09-17T16:09:41.433Z",
 *            "width": 640
 *        },
 *        {
 *            "codec": "H264",
 *            "container": "M2TS",
 *            "src": "http://c.brightcove.com/services/mobile/streaming/ *    index/master. *    m3u8?videoId=4492075574001&pubId=1752604059001",
 *            "type": "application/x-mpegURL"
 *        },
 *        {
 *            "codec": "H264",
 *            "container": "M2TS",
 *            "src": "https://secure.brightcove.com/services/mobile/ *    streaming/index/master.m3u8?videoId=4492075574001&pubId=17 *    52604059001&secure=true",
 *            "type": "application/x-mpegURL"
 *        }
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

// get images

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/images Get Video Images
 * @apiName Get Video Images
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the images for a video
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "poster": {
 *            "asset_id": "4492153571001",
 *            "sources": [
 *                {
 *                    "src": "https://bcsecure01-a.akamaihd.net/6/175260 *    4059001/201509/3164/1752604059001_4492153571001_44 *    92075574001-vs. *    jpg?pubId=1752604059001&videoId=4492075574001"
 *                }
 *            ],
 *            "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/ *    201509/3164/1752604059001_4492153571001_4492075574001-vs. *    jpg?pubId=1752604059001&videoId=4492075574001"
 *        },
 *        "thumbnail": {
 *            "asset_id": "4492154714001",
 *            "sources": [
 *                {
 *                    "src": "https://bcsecure01-a.akamaihd.net/6/175260 *    4059001/201509/3164/1752604059001_4492154714001_44 *    92075574001-th. *    jpg?pubId=1752604059001&videoId=4492075574001"
 *                }
 *            ],
 *            "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/ *    201509/3164/1752604059001_4492154714001_4492075574001-th. *    jpg?pubId=1752604059001&videoId=4492075574001"
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

// get digital master

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/digital_master Get Digital Master
 * @apiName Get Digital Master
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the stored digital master for a video, if any
 * for the account
 *
 * @apiHeader cms-api.js} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "account_id": "1752604059001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "current_filename": "1752604059001_4492154733001_4492075574001 *    .mp4",
 *        "drm": null,
 *        "encoding_rate": 10130000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4492154733001",
 *        "name": "sea_marvels.mp4",
 *        "preview_thumbnail_asset_id": "",
 *        "progressive_download": true,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "",
 *        "sharded_directory": "",
 *        "size": 398423279,
 *        "type": "DIGITAL_MASTER",
 *        "updated_at": "2015-09-17T16:09:53.122Z",
 *        "uploaded_at": "2015-09-17T16:09:29.867Z",
 *        "version": 1,
 *        "video_codec": "H264",
 *        "video_container": "MP4",
 *        "video_duration": 155500
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

// get digital master

 /**
 * @api {get} /accounts/:account_id/videos/:video_id/references Get Playlists for Video
 * @apiName Get Playlists for Video
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets an array of Manual (EXPLICIT) playlists that contain a video object
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`).
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
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

// update video

/**
 * @api {patch} /accounts/:account_id/videos/:video_id Update Video
 * @apiName Update Video
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a video's metadata
 * _note that this API does not ingest any media files - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion_
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID.
 *
 * @apiParam (Request Body Fields) {String} name video title
 * @apiParam (Request Body Fields) {String} [description] video short description
 * @apiParam (Request Body Fields) {String} [long_description] video long description
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
 * @apiParam (Request Body Fields) {String[]} [tags="[]"] array of tags
 * @apiParam (Request Body Fields) {Object} [custom_fields={}] map of fieldname-value pairs
 * @apiParam (Request Body Fields) {Object[]} [cue_points="[]"] array of cue point maps
 * @apiParam (Request Body Fields) {String} [cue_points.name] cue point name
 * @apiParam (Request Body Fields) {String="AD","CODE"} [cue_points.type=AD] cue point type
 * @apiParam (Request Body Fields) {Number} cue_points.time time of the cue point in seconds; example: 10.527
 * @apiParam (Request Body Fields) {String} [cue_points.metadata=null] optional metadata string (128 single-byte characters maximum)
 * @apiParam (Request Body Fields) {Boolean} [cue_points.force-stop=false] whether video is force-stopped at the cue point
 * @apiParam (Request Body Fields) {Object} [geo={}] map of geo-filtering properties
 * @apiParam (Request Body Fields) {String[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes](https://www.iso.org/obp/ui/)
 * @apiParam (Request Body Fields) {Boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
 * @apiParam (Request Body Fields) {Boolean} [geo.restricted=false] whether geo-restriction is enabled for thie video
 * @apiParam (Request Body Fields) {Object} [link={}] map of scheduling properties
 * @apiParam (Request Body Fields) {String} [link.text] text for the link
 * @apiParam (Request Body Fields) {String} [link.url] URL for the link
 * @apiParam (Request Body Fields) {Object} [schedule={}] map of scheduling properties
 * @apiParam (Request Body Fields) {DateString} [starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {DateString} [ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {Object[]} [text_tracks="[]"] array of text track maps
 * @apiParam (Request Body Fields) {String} text_tracks.src="" URL for the .vtt file
 * @apiParam (Request Body Fields) {String="captions","chapters","subtitles","metadata"} [text_tracks.kind=""] kind of text track
 * @apiParam (Request Body Fields) {String} text_tracks.srclang="" 2-letter language code, such as "en" or "ko"
 * @apiParam (Request Body Fields) {String} [text_tracks.mime_type=""] mime-type for the track
 * @apiParam (Request Body Fields) {String} [text_tracks.label=""] label for the track
 * @apiParam (Request Body Fields) {Boolean} [text_tracks.default=false] whether this is the default track
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
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

// delete video

 /**
 * @api {delete} /accounts/:account_id/videos/:video_id Delete Video by ID or Reference ID
 * @apiName Delete Video by ID or Reference ID
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes a video
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID (or `ref:reference_id`)
 *
 * @apiSuccessExample {json} Success Response:
 *     HHTTP/1.1 204 No Content
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

// get playlists

/**
 * @api {get} /accounts/:account_id/playlists Get Playlists
 * @apiName Get Playlists
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of playlist objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details. Only _search by tags_ is available for playlists.
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2015-08-31T15:57:34.885Z",
 *            "description": null,
 *            "favorite": true,
 *            "id": "4452341376001",
 *            "name": "OutLearn Demo Playlist",
 *            "reference_id": null,
 *            "type": "EXPLICIT",
 *            "updated_at": "2015-08-31T15:57:52.437Z",
 *            "video_ids": [
 *                "4454723119001",
 *                "4454629913001",
 *                "4454629914001",
 *                "4454620115001",
 *                "4454620114001",
 *                "4454620113001",
 *                "4454620112001"
 *            ]
 *        },
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2012-12-10T19:58:26.710Z",
 *            "description": null,
 *            "favorite": false,
 *            "id": "2025881886001",
 *            "limit": 30,
 *            "name": "node7707 Playlist",
 *            "reference_id": null,
 *            "search": "+tags:\"node7704\"",
 *            "type": "ACTIVATED_NEWEST_TO_OLDEST",
 *            "updated_at": "2012-12-10T19:58:26.738Z"
 *        }
 *    ] *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
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

// get video count

/**
 * @api {get} /accounts/:account_id/counts/videos Get Video Count
 * @apiName Get Video Count
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {String} [q] search string - see[search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "count": 2678
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
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

